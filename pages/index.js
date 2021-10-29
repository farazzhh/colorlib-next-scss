import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav/Nav";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Share-Colorlib</title>
        <meta name="description" content="Sample by Farazzhh" />
      </Head>

      <body>
        {/* <!-- nav --> */}
       <Nav/>
      </body>
    </div>
  );
}
