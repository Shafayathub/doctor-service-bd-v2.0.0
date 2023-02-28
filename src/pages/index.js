import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import banner1 from '../images/banner/banner1.jpg';
import banner2 from '../images/banner/banner2.jpg';
import banner3 from '../images/banner/banner3.jpg';
import Doctors from './components/Doctors';
import Diagnostics from './components/Diagnostics';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Doctor Service BD</title>
        <meta
          name="description"
          content="Doctor Service BD. We are committed to serve you with better Health Care. Welcome to
              you our Doctor Service BD website to take the services and serial
              of all expert and experienced doctors in Rajshahi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* -------------- */}
        <meta
          name="google-site-verification"
          content="7z3ewncoGPwkXYRsNxDvkUAWKeTCaJ_TXFOvux_mp2k"
        />
      </Head>

      <main className="px-5">
        {/* Banner */}
        <Carousel autoPlay infiniteLoop>
          <div>
            <Image
              width={1920}
              height={1080}
              src={banner1}
              alt="Doctor Service BD"
            />
            {/* <p className="legend">Doctors</p> */}
          </div>
          <div>
            <Image
              width={1920}
              height={1080}
              src={banner2}
              alt="Doctor Service BD"
            />
            {/* <p className="legend">Diagnostics</p> */}
          </div>
          <div>
            <Image
              width={1920}
              height={1080}
              src={banner3}
              alt="Doctor Service BD"
            />
            {/* <p className="legend">Ambulance</p> */}
          </div>
        </Carousel>
        <hr />
        <Doctors></Doctors>
        <hr />
        <Diagnostics></Diagnostics>
      </main>
    </>
  );
}
