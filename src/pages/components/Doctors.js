import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data.slice(0, 3)));
  }, []);
  return (
    <section>
      <h2 className="text-center font-semibold text-2xl my-2">Doctors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {doctors.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </div>
      <div className="flex justify-center m-2">
        <Link href={'/allDoctors'}>
          <button className="btn btn-wide">See All</button>
        </Link>
      </div>
    </section>
  );
};

export default Doctors;
