import React from 'react';

const AddDiagnosgtic = () => {
  const handleAdddiagnostic = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const appoinment = form.appoinment.value;
    const image = form.img.files[0];
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'g0qu4roj');
    data.append('cloud_name', 'dceli63sq');
    fetch('https://api.cloudinary.com/v1_1/dceli63sq/image/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.asset_id) {
          const newdiagnostic = {
            name,
            img: imgData?.secure_url,
            address,
            appoinment,
          };
          const url = 'http://localhost:5000/diagnostic';
          fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newdiagnostic),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));

          event.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              name="img"
              placeholder="diagnostic img link from img.bb"
              className="file-input file-input-bordered file-input-primary w-full"
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
