import React, { useEffect, useState } from 'react';
import Doctor from '../components/Doctor';

const Dental = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://server.doctorservicebd.com/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const dentalDoctor = doctors.filter((doctor) =>
    doctor.speciality.toLowerCase().includes('dental')
  );
  return (
    <section className="min-h-screen p-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {dentalDoctor.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </div>
    </section>
  );
};

export default Dental;
