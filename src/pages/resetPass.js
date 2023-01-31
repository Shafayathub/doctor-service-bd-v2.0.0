import Link from 'next/link';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from './firebase/firebase.config';

const ResetPass = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const success = await sendPasswordResetEmail(email);
    if (success) {
      alert('Email sent');
    }

    event.target.reset();
  };
  if (sending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="m-10 progress w-56"></progress>
      </div>
    );
  }
  return (
    <>
      <div className="card w-full shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit}
          className="card-body max-w-screen-xl min-h-screen mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="m-1 label-text-alt">
              Want to try again?
              <Link
                href={'/adminLogin'}
                className="mx-1 label-text-alt link link-hover">
                Login here.
              </Link>
            </label>
          </div>
          {error && alert(error?.message)}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Reset Password</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPass;
