import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const DoctorCatagory = () => {
  return (
    <section className="mt-5 mb-2">
      <h2 className="text-center text-xl font-semibold mb-2 text-primary">
        Specialists - Doctor Service BD
      </h2>
      <div>
        <Link href={'/Doctors/Dental'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2 ">
            Dental
          </motion.button>
        </Link>
        <Link href={'/Doctors/Medicine'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2 ">
            Medicine
          </motion.button>
        </Link>
        <Link href={'/Doctors/Gynecology'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2 ">
            Gynecology
          </motion.button>
        </Link>
        <Link href={'/Doctors/Anesthesiology'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Anesthesiology
          </motion.button>
        </Link>
        <Link href={'/Doctors/Cardiovascular'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Cardiovascular
          </motion.button>
        </Link>
        <Link href={'/Doctors/Cancer'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Cancer
          </motion.button>
        </Link>

        <Link href={'/Doctors/Cardiology'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Cardiology
          </motion.button>
        </Link>
        <Link href={'/Doctors/Child'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Child
          </motion.button>
        </Link>
        <Link href={'/Doctors/Chest'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Chest Diseases
          </motion.button>
        </Link>

        <Link href={'/Doctors/Colorectal'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Colorectal
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default DoctorCatagory;
