import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Doctor = ({ doctor }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="pl-2 h-72">
          <Image
            className="rounded-xl max-w-xs"
            width={240}
            height={240}
            src={doctor?.img}
            alt="doctor"></Image>
        </figure>
        <div className="card-body h-72">
          <h2 className="card-title">{doctor?.name}</h2>
          <p className="text-sm">{doctor?.speciality}</p>
          <p className="text-sm">{doctor?.degree}</p>
          <div className="card-actions justify-end">
            <Link href={`/doctorDetails/${doctor?._id}`}>
              <button
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.2 }}
                className="btn btn-primary text-white">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
