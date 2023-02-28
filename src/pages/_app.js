import '@/styles/globals.css';
import Script from 'next/script';

import Footer from './components/Footer';
import Nav from './components/nav';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-S010KNEKCC"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S010KNEKCC');
        `}
      </Script>
      <main className="max-w-[1440px] mx-auto">
        <Nav></Nav>
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    </>
  );
}
