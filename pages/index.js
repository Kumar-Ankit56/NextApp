import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skill from "../components/Skill";
import Project from "../components/Project";
function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default Home;
