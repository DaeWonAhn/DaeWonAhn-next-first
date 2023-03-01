import React from "react";
import CreateUser from "../components/CreateUser";
import { useEffect, useState, useRef, useMemo } from "react";
import UserList from "../components/UserList";

const form = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    active: false,
  });
  const { username, email } = inputs;
  const onChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const countActiveUsers = (users: any) => {
    return users.filter((user: any) => user.active).length;
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: true,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const onRemove = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onChangeToggle = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const nextId = useRef(4);
  const onCreate = () => {
    /*
    방법 01
    const user = {
        id: nextId.current,
        ...inputs,
    };
    setUsers([...users, user]);


    방법 02
    
    */
    const user = {
      id: nextId.current,
      ...inputs,
    };

    console.log("user: ", user);

    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
      active: false,
    });
    nextId.current += 1;
  };

  // CreateUser 컴포넌트쪽 input이 바뀌어도 countActiveUsers가 실행 됌
  // 그래서 useMemo 사용해서 users값이 변할 때만 실행되게끔 처리
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <main className="py-5">
        <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
          <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
          ></CreateUser>
          <br />
          <br />
          <br />
          <UserList
            users={users}
            onRemove={onRemove}
            onChangeToggle={onChangeToggle}
          />
          <br />

          <div className="flex flex-wrap -mx-3 mb-6">
            <p>활성 사용자수 : {count}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default form;
