import { signOut } from 'firebase/auth';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import { motion } from 'framer-motion';

const Nav = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    const agree = window.confirm('Do you really want to log Out?');
    if (agree) {
      signOut(auth);
    }
  };
  return (
    <div className="navbar bg-base-100 z-10 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <motion.li whileHover={{ scale: 1.2 }}>
              <Link href={'/allDoctors'}>Doctors</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <Link href={'/allDiagnostics'}>Diagnostics</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <Link href={'/Ambulance'}>Ambulance</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <Link href={'/BloodDonor'}>Blood Donor</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <Link href={'/physioTherapy'}>Physio Therapy</Link>
            </motion.li>
            {user && (
              <>
                <li>
                  <Link href={'/manageDoctors'}>Manage Doctors</Link>
                </li>
                <li>
                  <Link href={'/manageDiagnostics'}>Manage Diagnostics</Link>
                </li>
              </>
            )}
            <motion.li whileHover={{ scale: 1.2 }}>
              <Link href={'/about'}>About Us</Link>
            </motion.li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          DoctorServiceBD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link href={'/allDoctors'}>Doctors</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link href={'/allDiagnostics'}>Diagnostics</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link href={'/Ambulance'}>Ambulance</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link href={'/BloodDonor'}>Blood Donor</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link href={'/physioTherapy'}>Physio Therapy</Link>
          </motion.li>

          <motion.li whileHover={{ scale: 1.2 }}>
            <Link href={'/about'}>About Us</Link>
          </motion.li>
          {user && (
            <>
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-outline">
                  Manage
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <motion.li whileHover={{ scale: 1.2 }}>
                    <Link href={'/manageDoctors'}>Manage Doctors</Link>
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.2 }}>
                    <Link href={'/manageDiagnostics'}>Manage Diagnostics</Link>
                  </motion.li>
                </ul>
              </div>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={logout} className="btn">
            Log Out
          </button>
        ) : (
          <Link href="tel:+8801723-025514" className="btn">
            Call Us
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
