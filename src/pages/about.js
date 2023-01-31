import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../images/doctorServiceBD.png';

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={img}
            alt="Doctor Service BD"
            className="md:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Doctor Service BD</h1>
            <p className="py-6">
              We are committed to serve you with better Health Care. Welcome to
              you our Doctor Service BD website to take the services and serial
              of all expert and experienced doctors in Rajshahi. <br />
              Whats-App: +8801723-025514
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
