import Menu from '../components/menu';

function GlobalStyle(){
  return(
    <style>
      {`
        * {
          color: #ccc;
          margin: 0 auto;
        }

        body {
          background-color: #022640;
        }

        button {
          outline: none;
          border: none;
          cursor: pointer;
          transition: 0.25s;
        }
      `}
    </style>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
