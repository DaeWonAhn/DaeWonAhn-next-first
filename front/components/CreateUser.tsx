import React from "react";

type CreateUserProps = {
  username: string;
  email: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCreate: () => void;
};

function CreateUser({ username, email, onChange, onCreate }: CreateUserProps) {
  // 컴포넌트 구현
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
