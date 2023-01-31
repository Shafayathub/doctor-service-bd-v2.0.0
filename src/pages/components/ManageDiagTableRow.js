import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ManageDiagTableRow = ({ diagnostic }) => {
  const { _id, name, img, address, appoinment } = diagnostic;
  const [diagnostics, setDiagnostics] = useState([]);
  useEffect(() => {
    fetch('https://server.doctorservicebd.com/diagnostic')
      .then((res) => res.json())
      .then((data) => setDiagnostics(data));
  }, []);
  const handleRemove = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://server.doctorservicebd.com/diagnostic/${id}`;
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
                src={img}
                alt="diagnostic Service BD"
              />
            </div>
          </div>
          <div>
            <h6 className="font-bold">{name}</h6>
            <div className="text-sm opacity-50">DocotorServiceBD</div>
          </div>
        </div>
      </td>
      <td>
        {address}
        <br />
        <span className="badge badge-ghost badge-sm">Diagnostic center</span>
      </td>
      <td>{appoinment}</td>
      <th>
        <button
          onClick={() => handleRemove(_id)}
          className="btn btn-ghost btn-xs text-red-600">
          X
        </button>
      </th>
    </tr>
  );
};

export default ManageDiagTableRow;
