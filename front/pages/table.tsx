import React, { useEffect, useState } from "react";
import Table from "../components/Table";

const table = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ]);
  return (
    <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
      <Table users={users} />
    </div>
  );
};

export default table;
