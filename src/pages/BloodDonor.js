import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import blood from '../images/Blood-donation.gif';
import CommingSoon from './components/shared/CommingSoon';

const BloodDonor = () => {
  return (
    <>
      <Head>
        <title>Blood Donor | Doctor Service BD</title>
        <meta
          name="description"
          content="Doctor Service BD. We are committed to serve you with better Health Care. Welcome to
              you our Doctor Service BD website to take the services and serial
              of all expert and experienced doctors in Rajshahi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CommingSoon></CommingSoon>
        <div className="flex justify-center items-center min-h-screen">
          <Image src={blood} alt="Blood Donor | Doctor Service BD"></Image>
        </div>
      </main>
    </>
  );
};

export default BloodDonor;
