"use client";

import UsersTable from "@/components/UsersTable";
import useUsers from "@/hooks/useUsers";

export default function Home() {
  const { users } = useUsers();
  return (
    <main>
      <UsersTable users={users} />
    </main>
  );
}
