import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Doctor = ({ doctor }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border border-accent-content">
        <figure>
          <Image
            className="p-2 rounded-xl"
            width={1440}
            height={1080}
            src={doctor?.img}
            alt="doctor"></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{doctor?.name}</h2>
          <p className="text-sm">{doctor?.speciality}</p>
          <p className="text-sm">{doctor?.degree}</p>
          <div className="card-actions justify-end">
            <Link href={`/doctorDetails/${doctor?._id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
