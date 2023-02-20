import Image from 'next/image';
import React from 'react';

const Diagnostic = ({ diagnostic }) => {
  return (
    <div whileHover={{ scale: 1.05 }}>
      <div className="card card-side bg-base-100 shadow-xl h-60">
        <figure className="pl-2 h-56 max-w-xs">
          <Image
            className="rounded-lg"
            width={240}
            height={240}
            src={diagnostic?.img}
            alt="diagnostic"></Image>
        </figure>
        <div className="card-body h-56">
          <h2 className="card-title">{diagnostic?.name}</h2>
          <p>{diagnostic?.address}</p>
          <p>{diagnostic?.appoinment}</p>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;
