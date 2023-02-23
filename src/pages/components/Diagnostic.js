import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Diagnostic = ({ diagnostic }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <div className="card card-side bg-base-100 shadow-xl h-80">
        <figure className="pl-2 h-56">
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
    </motion.div>
  );
};

export default Diagnostic;
