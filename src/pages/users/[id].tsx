import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../components/Layout"
import { UserProps } from "../components/User"
import prisma from '../../../lib/prisma';


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const user = await prisma.users.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      role: {
        select: { name: true },
      },
    },
  });
  return {
    props: user,
  };
};

const User: React.FC<UserProps> = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.role?.name || "Unknown role"}</p>
        <ReactMarkdown source={props.content} />
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default User
