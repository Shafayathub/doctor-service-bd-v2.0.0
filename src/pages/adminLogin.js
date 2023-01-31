import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';

const AdminLogin = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="m-10 progress w-56"></progress>
      </div>
    );
  }
  if (user) {
    navigate.push('/');
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h6 className="text-5xl font-bold">Login now!</h6>
          <p className="py-6">Login and use all the functionality.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
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
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <Link
                  href="/resetPass"
                  className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {error && toast(error?.message)}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
