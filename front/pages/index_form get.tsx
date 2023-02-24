import styles from "@/styles/Home.module.css";
import { Stack, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

// **********************************
// 부모 자식 컴포넌트 구성
// form data get, submmit

import React from "react";
import CreateUser from "../components/CreateUser";

const index = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const users = [
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
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
    </>
  );
};

export default index;
