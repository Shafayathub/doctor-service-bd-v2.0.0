import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Doctor from './components/Doctor';

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    fetch('https://server.doctorservicebd.com/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, [query]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    const search = doctors.filter((doctor) =>
      doctor.speciality.toLowerCase().includes(query)
    );
    setDoctors(search);
  };
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
        <h2 className="text-center font-semibold text-3xl text-primary">
          Doctors
        </h2>
        <div className="flex justify-center items-center m-3">
          <form className="form-control w-full max-w-xs">
            <div onChange={handleSubmit} className="input-group mx-5">
              <input
                type="text"
                placeholder="medicine, nuro, gyno..."
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
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
