/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import '../global/styles.css';

function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
};

export default App;
