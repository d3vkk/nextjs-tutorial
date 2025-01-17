import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <Link className="mr-4 text-blue-500" href="/">
        Home
      </Link>
      <Link className="mr-4 text-blue-500" href="/about">
        About
      </Link>
      <Link className="mr-4 text-blue-500" href="/products/1">
        Product 1
      </Link>
    </nav>
  );
};
