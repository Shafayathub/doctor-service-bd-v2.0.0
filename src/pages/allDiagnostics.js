import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Diagnostic from './components/Diagnostic';

const AllDiagnostics = () => {
  const [diagnostics, setDiagnostics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/diagnostic')
      .then((res) => res.json())
      .then((data) => setDiagnostics(data));
  }, []);
  return (
    <>
      <Head>
        <title>Diagnostics | Doctor Service BD</title>
        <meta
          name="description"
          content="Doctor Service BD. We are committed to serve you with better Health Care. Welcome to
              you our Doctor Service BD website to take the services and serial
              of all expert and experienced doctors in Rajshahi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-base-100 p-5">
        <h2 className="text-center font-semibold text-2xl text-primary">
          Diagnostics | Doctor Service BD
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {diagnostics.map((diagnostic) => (
            <Diagnostic
              key={diagnostic._id}
              diagnostic={diagnostic}></Diagnostic>
          ))}
        </div>
      </main>
    </>
  );
};

export default AllDiagnostics;
