"use client";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data } = useSession();

  return (
    <div>
      hi {data?.user?.name}
    </div>
  );
}
