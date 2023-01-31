import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Diagnostic from './Diagnostic';

const Diagnostics = () => {
  const [diagnostics, setDiagnostics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/diagnostic')
      .then((res) => res.json())
      .then((data) => setDiagnostics(data.slice(0, 3)));
  }, []);
  return (
    <section>
      <h2 className="text-center font-semibold text-2xl my-2">Diagnostics</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {diagnostics.map((diagnostic) => (
          <Diagnostic key={diagnostic._id} diagnostic={diagnostic}></Diagnostic>
        ))}
      </div>
      <div className="flex justify-center m-2">
        <Link href={'/allDiagnostics'}>
          <button className="btn btn-wide">See All</button>
        </Link>
      </div>
    </section>
  );
};

export default Diagnostics;
