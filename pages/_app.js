//COMPONENTS
import Menu from '../components/menu/menu';

//CSS
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
