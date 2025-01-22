"use client";

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  console.log("Counter component");
  const [count, setCount] = useState(0);

  // if user logs out
  // if (!isLoaded || !userId) return null;

  // if user logs out while component is mounted
  if (!isLoaded || !isSignedIn) return null;

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};
