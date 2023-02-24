import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ManageDiagTableRow = ({ diagnostic }) => {
  const [diagnostics, setDiagnostics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/diagnostic')
      .then((res) => res.json())
      .then((data) => setDiagnostics(data));
  }, []);
  const handleRemove = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/diagnostic/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = diagnostics.filter(
            (diagnostic) => diagnostic._id !== id
          );
          setDiagnostics(remaining);
        });
    }
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <Image
                width={1440}
                height={1080}
                src={diagnostic?.img}
                alt="diagnostic Service BD"
              />
            </div>
          </div>
          <div>
            <h6 className="font-bold">{diagnostic?.name}</h6>
            <div className="text-sm opacity-50">DocotorServiceBD</div>
          </div>
        </div>
      </td>
      <td>
        {diagnostic?.address}
        <br />
        <span className="badge badge-ghost badge-sm">Diagnostic center</span>
      </td>
      <td>{diagnostic?.appoinment}</td>
      <th>
        <button
          onClick={() => handleRemove(diagnostic?._id)}
          className="btn btn-ghost btn-xs text-red-600">
          X
        </button>
      </th>
    </tr>
  );
};

export default ManageDiagTableRow;
