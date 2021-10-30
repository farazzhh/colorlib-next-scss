import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.css";
import Nav from '../components/Nav/Nav';
function MyApp({ Component, pageProps }) {
  return (
       <>
      <Nav />
      <Component {...pageProps} />
      </>
  );
}

export default MyApp
