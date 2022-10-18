import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Myself from "../components/Myself";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LanguageProvider from "../context/LanguageContext";

export default function Home() {
  return (
    <div>
      <LanguageProvider>
        <Head>
          <title>{`Portfolio - Franco D'Angelo - Full-Stack Developer`}</title>
          <meta name="description" content={`I'm a Full Stack Developer looking for new challenges & experiences to keep learning and improving`} />
          <link rel="icon" href="/logo.ico" />
        </Head>
        <Navbar />
        <Header />
        <Myself />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </LanguageProvider>
    </div>
  )
}