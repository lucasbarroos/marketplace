import React from "react";
import Router from "next/router";

export type UserProps = {
  id: number;
  name: string;
  email: string;
  role: {
    name: string;
  };
};

const User: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div onClick={() => Router.push("/users/[id]", `/users/${user.id}`)}>
      <h2>{user.name}</h2>
      <small>Email: {user.email}</small>
    </div>
  );
};

export default User;
