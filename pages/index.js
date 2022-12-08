import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}

export default Home;
