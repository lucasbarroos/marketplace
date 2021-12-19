import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type UserProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const User: React.FC<{ user: UserProps }> = ({ user }) => {
  const authorName = user.author ? user.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/users/[id]", `/users/${user.id}`)}>
      <h2>{user.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown source={user.content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default User;
