"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="flex justify-center items-center p-4">
      <Link
        className={pathName == "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}
        href="/"
      >
        Home
      </Link>
      <Link
        className={
          pathName == "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"
        }
        href="/about"
      >
        About
      </Link>
      <Link
        className={
          pathName == "/product/1" ? "font-bold mr-4" : "text-blue-500 mr-4"
        }
        href="/product/1"
      >
        Product 1
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
