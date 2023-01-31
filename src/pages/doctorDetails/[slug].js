import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
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
  const {
    name,
    img,
    speciality,
    degree,
    hospital,
    chamber,
    visiting,
    appointment,
    about,
  } = doctor;
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            width={1440}
            height={1080}
            src={img}
            alt={name}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="text-sm">{speciality}</p>
            <p className="text-sm">{degree}</p>
            <p className="text-sm">{hospital}</p>
            <p className="text-sm">Chamber: {chamber}</p>
            <p className="text-sm">Visitinghour: {visiting}</p>
            <p className="py-6">{about}</p>
            <Link href={`tel:${appointment}`} className="btn">
              Call For Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slug;
