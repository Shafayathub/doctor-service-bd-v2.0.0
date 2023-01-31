import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Doctor = ({ doctor }) => {
  const { _id, name, img, speciality, degree } = doctor;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border border-accent-content">
        <figure>
          <Image
            className="p-2 rounded-xl"
            width={1440}
            height={1080}
            src={img}
            alt="doctor"></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm">{speciality}</p>
          <p className="text-sm">{degree}</p>
          <div className="card-actions justify-end">
            <Link href={`/doctorDetails/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
