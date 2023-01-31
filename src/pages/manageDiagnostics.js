import React from 'react';
import AddDiagnosgtic from './components/AddDiagnosgtic';
import ManageDiagnostics from './components/ManageDiagnostics';

const manageDiagnostics = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto pb-5">
        <h3 className="text-center text-xl font-semibold">
          Manage Diagnostics
        </h3>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content grid gap-2">
            <AddDiagnosgtic></AddDiagnosgtic>
            <ManageDiagnostics></ManageDiagnostics>
          </div>
        </div>
      </section>
    </>
  );
};

export default manageDiagnostics;
