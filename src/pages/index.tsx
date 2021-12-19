import React from "react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Layout from "./components/Layout"
import Post, { PostProps } from "./components/Post"
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
  feed: PostProps[]
}

const Home: React.FC<Props> = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className="page">
        <h1>Users Registered</h1>
        <main>
          {props.users.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Home