import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainPageScroll from "../Components/MainPageScroll/";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Logan Thomas</title>
        <meta name="description" content="Generated by Logan Thomas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainPageScroll />
      </main>

      {/* <footer className={styles.footer}> */}
      {/* <a
          href="http://loganthomas.ca"
          target="_blank"
          rel="noopener noreferrer"
        > */}
      {/* Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
      {/* </a>
      </footer> */}
    </div>
  );
};

export default Home;
