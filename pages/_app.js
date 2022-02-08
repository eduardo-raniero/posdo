import Head from "next/head";

//COMPONENTS
import Menu from '../components/menu/menu';
import Footer from '../components/footer/footer';

//CSS
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Playfair+Display:wght@700&display=swap'
          rel="stylesheet"
        />
      </Head>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
    )
}

export default MyApp
