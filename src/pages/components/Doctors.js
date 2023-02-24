import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import { motion } from 'framer-motion';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://server.doctorservicebd.com/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data.slice(0, 6)));
  }, []);
  return (
    <section>
      <h2 className="text-center font-semibold text-2xl my-2 text-primary">
        Doctors - Doctor Service BD
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {doctors.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </div>
      <div className="flex justify-center m-2">
        <Link href={'/allDoctors'}>
          <motion.button whileHover={{ scale: 1.2 }} className="btn btn-link">
            See All
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Doctors;
