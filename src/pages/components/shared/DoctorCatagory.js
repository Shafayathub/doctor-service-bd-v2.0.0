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
        <Link href={'/Doctors/Diabetes'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Diabetes
          </motion.button>
        </Link>
        <Link href={'/Doctors/ENT'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            ENT
          </motion.button>
        </Link>
        <Link href={'/Doctors/Eye'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Eye
          </motion.button>
        </Link>
        <Link href={'/Doctors/Gastroenterology'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Gastroenterology
          </motion.button>
        </Link>
        <Link href={'/Doctors/Surgery'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Surgeon
          </motion.button>
        </Link>
        <Link href={'/Doctors/Hematology'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Hematology
          </motion.button>
        </Link>
        <Link href={'/Doctors/Kidney'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Nephrology
          </motion.button>
        </Link>
        <Link href={'/Doctors/Liver'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Liver
          </motion.button>
        </Link>
        <Link href={'/Doctors/Neurology'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Neurology
          </motion.button>
        </Link>
        <Link href={'/Doctors/Neurosurgery'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Neuro Surgeon
          </motion.button>
        </Link>
        <Link href={'/Doctors/Orthopedic'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Orthopedic
          </motion.button>
        </Link>
        <Link href={'/Doctors/Pediatric'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Pediatric
          </motion.button>
        </Link>
        <Link href={'/Doctors/Psychiatry'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Psychiatry
          </motion.button>
        </Link>
        <Link href={'/Doctors/Skin'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Skin
          </motion.button>
        </Link>
        <Link href={'/Doctors/Sexual'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Sexual
          </motion.button>
        </Link>
        <Link href={'/Doctors/Urology'}>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn btn-outline btn-sm btn-primary mr-2 mb-2">
            Urology
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default DoctorCatagory;
