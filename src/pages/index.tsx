import Head from "next/head";

import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Form from "../components/Form";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Head>
        <title>SpaceY</title>
      </Head>
      <Header />
      <Banner />
      <About />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
