import Head from 'next/head';
import React from 'react';
import CommingSoon from './components/shared/CommingSoon';

const physioTherapy = () => {
  return (
    <>
      <Head>
        <title>Physio Therapy | Doctor Service BD</title>
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
      </main>
    </>
  );
};

export default physioTherapy;
