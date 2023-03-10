import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ManageDocTableRow = ({ doctor }) => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://server.doctorservicebd.com/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const handleRemove = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `https://server.doctorservicebd.com/doctor/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = doctors.filter((doctor) => doctor._id !== id);
          setDoctors(remaining);
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
                src={doctor?.img}
                alt="Doctor Service BD"
              />
            </div>
          </div>
          <div>
            <h6 className="font-bold">{doctor?.name}</h6>
            <div className="text-sm opacity-50">DoctorServiceBD</div>
          </div>
        </div>
      </td>
      <td>
        {doctor?.speciality}
        <br />
        <span className="badge badge-ghost badge-sm">{doctor?.degree}</span>
      </td>
      <td>{doctor?.chamber}</td>
      <th>
        <button
          onClick={() => handleRemove(doctor?._id)}
          className="btn btn-ghost btn-xs text-red-600">
          X
        </button>
      </th>
    </tr>
  );
};

export default ManageDocTableRow;
