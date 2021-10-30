import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Share-Colorlib</title>
        <meta name="description" content="Sample by Farazzhh" />
      </Head>

      <main>
        <Header />
        <About />
      </main>
    </div>
  );
}
