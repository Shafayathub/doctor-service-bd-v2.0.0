import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Doctor from '../components/Doctor';
import DoctorCatagory from '../components/shared/DoctorCatagory';

const Gynecology = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://server.doctorservicebd.com/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const gynecologyDoctor = doctors.filter((doctor) =>
    doctor.speciality.toLowerCase().includes('gynecology')
  );
  return (
    <>
      <Head>
        <title>Gynecology | Doctor | Doctor Service BD</title>
        <meta
          name="description"
          content="Doctor Service BD. We are committed to serve you with better Health Care. Welcome to
              you our Doctor Service BD website to take the services and serial
              of all expert and experienced doctors in Rajshahi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen p-5">
        <DoctorCatagory></DoctorCatagory>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {gynecologyDoctor.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
          ))}
        </div>
      </main>
    </>
  );
};

export default Gynecology;
