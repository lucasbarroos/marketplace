import React from "react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Layout from "./components/Layout"
import User, { UserProps } from "./components/User"
import prisma from '../../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.users.findMany({
    where: { active: true },
    include: {
      role: {
        select: { name: true },
      },
    },
  });
  return { props: { users } };
};

type Props = {
  feed: UserProps[]
}

const Home: React.FC<Props> = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className="page">
        <h1>Users Registered</h1>
        <main>
          {props.users.map((user) => (
            <div key={user.id} className="user">
              <User user={user} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .user {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .user:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .user + .user {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Home
