//COMPONENTS
import Menu from '../components/menu/menu';
import Footer from '../components/footer/footer';

//CSS
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </>
    )
}

export default MyApp
