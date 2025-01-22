import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

type MockUser = {
  id: number;
  name: string;
};

export default async function mockUsers() {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log(authObj);
  console.log(userObj);

  const response = await fetch("https://mockapi.io/users");
  const users = await response.json();

  async function addUser(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const response = await fetch("https://mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const newUser = await response.json();
    console.log(newUser);

    // refresh page
    revalidatePath("/mock-users");
  }

  return (
    <div className="grid grid-cols-4 gap-4 py-10">
      <form className="mb-4" action={addUser}>
        <input className="border p-2 mr-2" type="text" name="name" required />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add user
        </button>
      </form>
      {users.map((user: MockUser) => (
        <div
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}
