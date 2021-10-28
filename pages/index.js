import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { FaFacebookF as FIcon } from "react-icons/fa";
import { BsTwitter as TIcon } from "react-icons/bs";
import { FaLinkedinIn as LIcon } from "react-icons/fa";
export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Share-Colorlib</title>
        <meta name="description" content="Sample by Farazzhh" />
      </Head>

      <body>
        {/* <!-- nav --> */}
        <nav className="nav">
          <div className="container">
            {/* <!-- left - logo wrapper --> */}
            <div className="nav__logo-wrapper">
              <Image
                src="/assets/images/logo.svg"
                width="100px"
                height="100px"
                alt="logo-image"
              />
              <h1>Share Company</h1>
            </div>
            {/* <!-- right - items --> */}
            <div className="nav__menu">
              {/* <!-- menu items - larg screen --> */}
              <div className="nav__menu_list">
                <ul>
                  <li>Home</li>
                  <li>Spaces</li>
                  <li>About</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* <!-- menu items - mobile --> */}
              <div className="nav__menu_list_mobile"></div>

              {/* <!-- Social Icons --> */}
              <div className="nav__menu_social">
                <FIcon />
                <TIcon />
                <LIcon />
              </div>
            </div>
          </div>
        </nav>
      </body>
    </div>
  );
}
