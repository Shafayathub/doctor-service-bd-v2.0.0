import React, { useEffect, useState } from 'react';
import Doctor from '../components/Doctor';

const Medicine = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://server.doctorservicebd.com/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const medicineDoctor = doctors.filter((doctor) =>
    doctor.speciality.toLowerCase().includes('medicine')
  );
  return (
    <section className="min-h-screen p-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {medicineDoctor.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </div>
    </section>
  );
};

export default Medicine;
