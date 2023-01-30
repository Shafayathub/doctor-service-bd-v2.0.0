import '@/styles/globals.css';
import Footer from './components/Footer';
import Nav from './components/nav';

export default function App({ Component, pageProps }) {
  return (
    <section className="max-w-[1440px] mx-auto">
      <Nav></Nav>
      <Component {...pageProps} />
      <Footer></Footer>
    </section>
  );
}
