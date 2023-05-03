import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
     <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">For knowing the best recipe of our best chef please login here and get the recipe.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
              </div>
              <label className="label">
           <p>Do not have an account? Please <Link to='/register' className='link-btn'><button className="btn bg-[#bababa]">Register</button></Link></p>
          </label>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Login;