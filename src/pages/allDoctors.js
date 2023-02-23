import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Doctor from './components/Doctor';

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch('https://server.doctorservicebd.com/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const handleSelect = (e) => {
    e.preventDefault();
    console.log(e.target.selected.value);
    router.push(`/Doctors/${e.target.selected.value}`);
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
          <div className="pr-10">
            <form
              onSubmit={handleSelect}
              className="form-control input-group mx-5">
              <select
                name="selected"
                className="select select-primary w-full max-w-xs">
                <option disabled selected>
                  Select Speciality and submit
                </option>
                <option>Medicine</option>
                <option>Gynecology</option>
                <option>Anesthesiology</option>
                <option>Dental</option>
              </select>
              <button className="form-control mt-2 btn btn-outline btn-primary w-full max-w-xs">
                submit
              </button>
            </form>
          </div>
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
