import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Doctor from './components/Doctor';
import DoctorCatagory from './components/shared/DoctorCatagory';

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  // const router = useRouter();
  useEffect(() => {
    fetch('http://localhost:5000/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <>
      <Head>
        <title>Doctors | Doctor Service BD</title>
        <meta
          name="description"
          content="Doctor Service BD. We are committed to serve you with better Health Care. Welcome to
              you our Doctor Service BD website to take the services and serial
              of all expert and experienced doctors in Rajshahi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-base-100 p-5">
        <h2 className="text-center font-semibold text-2xl lg:text-3xl text-primary">
          Doctors - Doctor Service BD
        </h2>
        <DoctorCatagory></DoctorCatagory>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
          ))}
        </div>
      </main>
    </>
  );
};

export default AllDoctors;
