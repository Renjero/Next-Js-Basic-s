"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
};

export default  function FilterUser({ users }: { users: User[] }) {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUser = users.filter((User) => {
    return User.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json();
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredUser.map((user: User) => {
          return( <li key = {user.id}>{user.name}</li>
          )
        })}
      </ul>
    </>
  );
}
