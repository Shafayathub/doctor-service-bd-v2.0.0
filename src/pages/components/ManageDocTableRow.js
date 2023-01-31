import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ManageDocTableRow = ({ doctor }) => {
  const { _id, name, img, speciality, degree, chamber } = doctor;
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  const handleRemove = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/doctor/${id}`;
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
                src={img}
                alt="Doctor Service BD"
              />
            </div>
          </div>
          <div>
            <h6 className="font-bold">{name}</h6>
            <div className="text-sm opacity-50">DoctorServiceBD</div>
          </div>
        </div>
      </td>
      <td>
        {speciality}
        <br />
        <span className="badge badge-ghost badge-sm">{degree}</span>
      </td>
      <td>{chamber}</td>
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

export default ManageDocTableRow;
