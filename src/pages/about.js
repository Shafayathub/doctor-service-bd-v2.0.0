import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../images/doctorServiceBD.png';

const About = () => {
  return (
    <>
      <Head>
        <title>About us | Doctor Service BD</title>
        <meta
          name="description"
          content="Doctor Service BD. We are committed to serve you with better Health Care. Welcome to
              you our Doctor Service BD website to take the services and serial
              of all expert and experienced doctors in Rajshahi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={img}
            alt="Doctor Service BD"
            className="md:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-primary-focus">
              Doctor Service BD
            </h1>
            <p className="py-6">
              We are committed to serve you with better Health Care. Welcome to
              you our Doctor Service BD website to take the services and serial
              of all expert and experienced doctors in Rajshahi. <br />
              <span className="text-secondary-focus text-xl">Whats-App:</span>
              +8801723-025514
            </p>
            <Link href="tel:+8801723-025514" className="btn">
              Call Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
