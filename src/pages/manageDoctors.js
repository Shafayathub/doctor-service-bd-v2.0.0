import React from 'react';
import AddDoctor from './components/AddDoctor';
import ManageDoctors from './components/ManageDoctors';

const manageDoctors = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto pb-5">
        <h3 className="text-center text-xl font-semibold">Manage Doctors</h3>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content grid gap-2">
            <AddDoctor></AddDoctor>
            <ManageDoctors></ManageDoctors>
          </div>
        </div>
      </section>
    </>
  );
};

export default manageDoctors;
