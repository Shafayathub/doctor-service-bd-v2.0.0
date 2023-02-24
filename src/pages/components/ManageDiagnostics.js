import React, { useEffect, useState } from 'react';
import ManageDiagTableRow from './ManageDiagTableRow';

const ManageDiagnostics = () => {
  const [diagnostics, setDiagnostics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/diagnostic')
      .then((res) => res.json())
      .then((data) => setDiagnostics(data));
  }, [diagnostics]);
  return (
    <section className="p-3">
      <div className="overflow-x-scroll w-80 md:w-full lg:w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>diagnostic</th>
              <th>Address</th>
              <th>Contact</th>
              <th>remove</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((diagnostic) => (
              <ManageDiagTableRow
                key={diagnostic._id}
                diagnostic={diagnostic}></ManageDiagTableRow>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th>diagnostic</th>
              <th>Address</th>
              <th>Contact</th>
              <th>remove</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default ManageDiagnostics;
