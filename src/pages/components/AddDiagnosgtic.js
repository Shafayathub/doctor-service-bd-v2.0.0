import React from 'react';

const AddDiagnosgtic = () => {
  const handleAdddiagnostic = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const address = form.address.value;
    const appoinment = form.appoinment.value;

    const newdiagnostic = {
      name,
      img,
      address,
      appoinment,
    };
    const url = 'https://server.doctorservicebd.com/diagnostic';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newdiagnostic),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    event.target.reset();
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card flex-shrink-0 w-80 md:w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAdddiagnostic} className="card-body">
          <h2 className="card-title">Add diagnostic</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="diagnostic name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image link</span>
            </label>
            <input
              type="text"
              name="img"
              placeholder="diagnostic img link from img.bb"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="address"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Appoinment Phone no.</span>
            </label>
            <input
              type="text"
              name="appoinment"
              placeholder="Phone no for serial"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDiagnosgtic;
