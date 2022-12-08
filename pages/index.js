import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}

export default Home;
