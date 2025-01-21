type MockUser = {
  id: number;
  name: string;
};

export default async function mockUsers() {
  const response = await fetch("https://mockapi.io/users");
  const users = await response.json();
  return (
    <div className="grid grid-cols-4 gap-4 py-10">
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
