import React, { useEffect, useState } from 'react';
import Diagnostic from './components/Diagnostic';

const AllDiagnostics = () => {
  const [diagnostics, setDiagnostics] = useState([]);
  useEffect(() => {
    fetch('https://server-doctorservicebd-com.onrender.com/diagnostic')
      .then((res) => res.json())
      .then((data) => setDiagnostics(data));
  }, []);
  return (
    <section className="bg-base-100">
      <h2 className="text-center font-semibold text-2xl">Diagnostics</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {diagnostics.map((diagnostic) => (
          <Diagnostic key={diagnostic._id} diagnostic={diagnostic}></Diagnostic>
        ))}
      </div>
    </section>
  );
};

export default AllDiagnostics;
