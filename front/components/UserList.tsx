import React from "react";

type UserProb = {
  user: any;
  onRemove: (arg0: any) => void;
  onChangeToggle: (arg0: any) => void;
};

type UsersProb = {
  users: any;
  onRemove: (arg0: any) => void;
  onChangeToggle: (arg0: any) => void;
};

const User = ({ user, onRemove, onChangeToggle }: UserProb) => {
  const { username, email, id, active } = user;

  return (
    <>
      <div className="grid place-content-left">
        <b
          style={{ color: active ? "green" : "red", cursor: "pointer" }}
          onClick={() => onChangeToggle(id)}
        >
          {username}
        </b>
        <span>({email})</span>
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => onRemove(id)}
      >
        삭제
      </button>
    </>
  );
};

const UserList = ({ users, onRemove, onChangeToggle }: UsersProb) => {
  return (
    <>
      {users.map((user: { id: React.Key | null | undefined }) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onChangeToggle={onChangeToggle}
        />
      ))}
    </>
  );
};

export default UserList;
