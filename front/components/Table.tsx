import React from "react";

type UserProb = {
  user: any;
};

type UsersProb = {
  users: any;
};

const TableData = ({ user }: UserProb) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Apple MacBook Pro 17"
      </th>
      <td className="px-6 py-4">{user.username}</td>
      <td className="px-6 py-4">Laptop</td>
      <td className="px-6 py-4">$2999</td>
    </tr>
  );
};

const Table = ({ users }: UsersProb) => {
  return (
    <>
      <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: { id: React.Key | null | undefined }) => (
                <TableData user={user} key={user.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
