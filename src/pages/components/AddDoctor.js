import React from 'react';

const AddDoctor = () => {
  const handleAddDoctor = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const speciality = form.speciality.value;
    const degree = form.degree.value;
    const hospital = form.hospital.value;
    const chamber = form.chamber.value;
    const visiting = form.visiting.value;
    const about = form.about.value;
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
          const newDoctor = {
            name,
            img: imgData?.secure_url,
            speciality,
            degree,
            hospital,
            chamber,
            visiting,
            about,
          };

          const url = 'http://localhost:5000/doctor';
          fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newDoctor),
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
        <form onSubmit={handleAddDoctor} className="card-body">
          <h2 className="card-title">Add Doctor</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Doctor name"
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
              placeholder="Doctor img link from img.bb"
              className="file-input file-input-bordered file-input-primary w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Specilaity</span>
            </label>
            <input
              type="text"
              name="speciality"
              placeholder="Speciality"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Degree</span>
            </label>
            <input
              type="text"
              name="degree"
              placeholder="Doctor degree"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Associated Hospital</span>
            </label>
            <input
              type="text"
              name="hospital"
              placeholder="Doctor hospital"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chamber</span>
            </label>
            <input
              type="text"
              name="chamber"
              placeholder="Chamber"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Visiting Hour</span>
            </label>
            <input
              type="text"
              name="visiting"
              placeholder="Visiting hours"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">About</span>
            </label>
            <input
              type="text"
              name="about"
              placeholder="Short description"
              className="input input-bordered input-lg"
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

export default AddDoctor;
