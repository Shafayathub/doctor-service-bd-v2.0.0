import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import AppointmentForm from '../components/AppointmentForm';
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [doctor, setDoctor] = useState([]);
  const url = `http://localhost:5000/doctorDetails/${slug}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, [url]);
  const { name, img, speciality, degree, hospital, chamber, visiting, about } =
    doctor;
  return (
    <>
      <section className="hero bg-base-100 shadow-xl">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            width={1440}
            height={1080}
            src={img}
            alt={name}
            className="md:max-w-xs rounded-lg shadow-2xl"
          />
          <div>
            <div className="p-5 border rounded-lg shadow-lg">
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="text-sm mt-2">{speciality}</p>
              <p className="text-sm">{degree}</p>
              <p className="text-sm">{hospital}</p>
              <p className="text-sm">Chamber: {chamber}</p>
              <p className="text-sm">Visitinghour: {visiting}</p>
            </div>
            <p className="my-2 p-5 border rounded-lg shadow-xl">{about}</p>
            <Link href={'tel:+8801723025514'} className="btn">
              Call For Appointment
            </Link>
          </div>
        </div>
      </section>
      <div>
        <AppointmentForm></AppointmentForm>
      </div>
    </>
  );
};

export default Slug;
