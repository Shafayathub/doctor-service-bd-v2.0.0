import Image from 'next/image';
import React from 'react';

const Diagnostic = ({ diagnostic }) => {
  const { name, img, address, appoinment } = diagnostic;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border border-accent-content">
        <figure>
          <Image
            className="rounded-lg"
            width={1440}
            height={1080}
            src={img}
            alt="diagnostic"></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{address}</p>
          <p>{appoinment}</p>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;
