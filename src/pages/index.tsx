import React, { useEffect, useState } from 'react';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/users');
  const users = await response.json();
  return { props: { users } };
};

function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [usersFetched, setUsersFetched] = useState([]);
  const { users } = props;
  useEffect(() => {
    if (users) {
      setUsersFetched(users);
    }
  }, []);

  return (
    <div>
      <h1>Products Registered</h1>
      {usersFetched.map((user) => (user.name))}
    </div>
  );
}

export default Home;
