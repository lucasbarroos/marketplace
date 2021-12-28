import React, { useEffect, useState } from 'react';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import User, { UserProps } from './components/User';

export const getServerSideProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/users');
  const users = await response.json();
  return { props: { users } };
};

type Props = {
  users: UserProps[]
}

const Home: React.FC<Props> = function (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(props.users);
  }, []);

  return (
    <div>
      <div className="page">
        <h1>Users Registered</h1>
        <main>
          {users.map((user) => (
            <div key={user.id} className="user">
              <User user={user} />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;
