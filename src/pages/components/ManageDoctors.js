import React, { useEffect, useState } from 'react';
import ManageDocTableRow from './ManageDocTableRow';

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('https://server.doctorservicebd.com/doctor')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, [doctors]);
  return (
    <section className="p-3">
      <div className="overflow-x-scroll w-80 md:w-full lg:w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Speciality</th>
              <th>Chamber</th>
              <th>remove</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <ManageDocTableRow
                key={doctor._id}
                doctor={doctor}></ManageDocTableRow>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <th>Doctor</th>
              <th>Speciality</th>
              <th>Chamber</th>
              <th>Remove</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default ManageDoctors;
