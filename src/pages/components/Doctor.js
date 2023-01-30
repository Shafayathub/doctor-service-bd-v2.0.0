import Image from 'next/image';
import React from 'react';

const Doctor = ({ doctor }) => {
  const { name, img } = doctor;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border border-accent-content">
        <figure>
          <Image
            className="rounded-lg"
            width={1440}
            height={1080}
            src={img}
            alt="doctor"></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
