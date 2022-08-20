import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Myself from "../components/Myself";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frano ~ Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Myself />
      <Skills />
    </div>
  )
}