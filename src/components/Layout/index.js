import React from 'react';

import Head from 'next/head';
import NavbarCustom from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mapa Dealer — Automação de processos comerciais</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta
          name="title"
          content="Mapa Dealer — Automação de processos comerciais"
        />
        <meta
          name="description"
          content="Software de automação comercial e de processos"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mapadealer.com/" />
        <meta
          property="og:title"
          content="Mapa Dealer — Automação de processos comerciais"
        />
        <meta
          property="og:description"
          content="Software de automação comercial e de processos"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dyxbrraat/image/upload/v1620931145/mapa/img35_kp75dv.png"
        />
        <link
          rel="shortcut icon"
          href="static/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="static/images/favicon.ico"
          type="image/x-icon"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavbarCustom />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
