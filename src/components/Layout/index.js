import React from 'react';

import Head from 'next/head';
import NavbarCustom from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mapa Dealer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@4.2.6/dist/css/swiper.min.css"
          crossOrigin="anonymous"
        />
      </Head>
      <NavbarCustom />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
