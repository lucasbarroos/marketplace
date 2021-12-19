import React from "react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
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
    <div>
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
    </div>
  )
}

export default Home
