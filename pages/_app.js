import Header from '../components/Header';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container my-10'>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp
