"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [listUser, setListUser] = useState([]);

  const getListUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);

    const data = await response.json();
    setListUser(data);
    console.log(data);
  };

  useEffect(() => {
    getListUsers();
  }, []);

  return (
    <div>
      {listUser.map((user: any) => (
        <div key={user.id}>
          <p>
            {user.id} - {user.name} - {user.username}
          </p>
        </div>
      ))}
    </div>
  );
}
