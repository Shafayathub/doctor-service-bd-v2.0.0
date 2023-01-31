import Image from 'next/image';
import React from 'react';

const Diagnostic = ({ diagnostic }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border border-accent-content">
        <figure>
          <Image
            className="rounded-lg"
            width={1440}
            height={1080}
            src={diagnostic?.img}
            alt="diagnostic"></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{diagnostic?.name}</h2>
          <p>{diagnostic?.address}</p>
          <p>{diagnostic?.appoinment}</p>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;
