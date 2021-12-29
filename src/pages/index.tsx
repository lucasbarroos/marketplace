import React, { useEffect, useState } from 'react';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import Hero from '../components/Hero';

export const getServerSideProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/products');
  const products = await response.json();
  return { props: { products } };
};

function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [productsFetched, setProductsFetched] = useState([]);
  const { products } = props;
  useEffect(() => {
    if (products) {
      setProductsFetched(products);
      console.log(productsFetched);
    }
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
}

export default Home;
