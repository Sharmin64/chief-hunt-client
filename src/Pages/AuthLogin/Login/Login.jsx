import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider =new GithubAuthProvider()
    const { signIn } = useContext(AuthContext)
    const [user,setUser]=useState(null)
    
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    const from= location.state?.from?.pathname || '/categories/0'
  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user
          console.log(loggedUser);
          navigate(from,{replace:true})
      })
      .catch(error => {
      console.log(error);
    })
    }
    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log( "error",error.message);
        })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
            })
            .catch(error => {
            console.log('error',error.message);
        })
}


    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
            console.log(error);
        })
    }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mt-10 mx-auto md:h-screen lg:py-0">

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                   
      
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required="" />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input /*onClick={() => setAccepted(!accepted)}*/ id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label type="accept" className="text-gray-500 dark:text-gray-300">accept<a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"> terms and conditions</a></label>
                            </div>
                        </div>

                    </div>
                    <button /*disabled={!accepted}*/ type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to='/register' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
                    </p>
                      </form>
                      { user ?
                     <button onClick={handleSignOut} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Out</button> :
                          <>
                               <button onClick={handleGoogleSignIn} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in With Google</button>
                               <button onClick={handleGithubSignIn} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in With Github</button>
                          </>}
                      {
                          user && <div><h2>{user.displayName}</h2></div>
                      }
                  </div>
        </div>
    </div>
</section>
  );
};

export default Login;