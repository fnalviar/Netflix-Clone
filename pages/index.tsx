import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <main>

      </main>
    </div>
  );
};

export default Home;
