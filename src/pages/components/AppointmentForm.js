import React from 'react';
import appointment from '../../images/appointment.png';

const AppointmentForm = () => {
  const handleContactUs = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const contactUs = {
      name,
      phone,
      address,
    };
    console.log(contactUs);
    form.reset();
  };
  return (
    <section
      className="mt-3 lg:mt-5 p-10"
      style={{
        backgroundImage: `url(${appointment.src})`,
        width: '100%',
        height: '100%',
      }}>
      <div className="text-center">
        <h3 className="text-xl font bold text-secondary">Book Appointment</h3>
      </div>
      <div className="hero">
        <div className="hero-content">
          <div className="card flex-shrink-0">
            <form onSubmit={handleContactUs} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Patient Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  placeholder="Address. example:Upazila, Zilla"
                  name="address"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  required></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
