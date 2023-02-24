import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const DoctorCatagory = () => {
  return (
    <section className="my-2">
      <Link href={'/Doctors/Dental'}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="btn btn-outline btn-sm btn-primary mr-2 mb-2 hover:text-white">
          Dental
        </motion.button>
      </Link>
      <Link href={'/Doctors/Medicine'}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="btn btn-outline btn-sm btn-primary mr-2 hover:text-white">
          Medicine
        </motion.button>
      </Link>
      <Link href={'/Doctors/Gynecology'}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="btn btn-outline btn-sm btn-primary mr-2 hover:text-white">
          Gynecology
        </motion.button>
      </Link>
      <Link href={'/Doctors/Anesthesiology'}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="btn btn-outline btn-sm btn-primary mr-2 hover:text-white">
          Anesthesiology
        </motion.button>
      </Link>
    </section>
  );
};

export default DoctorCatagory;
