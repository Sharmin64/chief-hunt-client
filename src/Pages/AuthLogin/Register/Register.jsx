import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {


  const {createUser}=useContext(AuthContext)

  const handleRegister = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch(error => {
      console.log(error);
    })
  }
  return (
    <div className='mt-16'>
    <div className="hero min-h-screen bg-base-200">
 <div className="hero-content flex-col lg:flex-row-reverse">
   <div className="text-center lg:text-left">
     <h1 className="text-5xl font-bold">Register Now!</h1>
     <p className="py-6">For knowing the best recipe of our best chef please login here and get the recipe.</p>
   </div>
   <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <div className="card-body">
       <div onSubmit={handleRegister} type='submit' className="form-control">
         <label className="label">
           <span className="label-text">Name</span>
         </label>
         <input type="text" placeholder="name" className="input input-bordered" />
       </div>
       <div className="form-control" type='submit'>
         <label className="label">
           <span className="label-text">Email</span>
         </label>
         <input type="text" placeholder="email" className="input input-bordered" />
       </div>
       <div className="form-control" type='submit'>
         <label className="label">
           <span className="label-text">Photo URL</span>
         </label>
         <input type="text" placeholder="photo url" className="input input-bordered" />
       </div>
       <div className="form-control" type='submit'>
         <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type="password" placeholder="password" className="input input-bordered" />
         <label className="label">
           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
         </label>
              </div>
              {/*<div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Remember me</span> 
      <input type="checkbox" className="toggle toggle-secondary" checked />
    </label>
  </div>*/}
       <div className="form-control mt-6" type='submit'>
         <button className="btn btn-primary">Register</button>
             </div>
             <label className="label">
          <p>Already have an account? Please <Link to='/login' className='link-btn'><button className="btn bg-[#bababa]">Login</button></Link></p>
         </label>
     </div>
   </div>
 </div>
</div>
   </div>
  );
};

export default Register;