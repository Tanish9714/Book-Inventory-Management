import React from 'react'
import { Link , useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'
import { useContext } from 'react'
import googleLogo from '../assets/google-logo.svg'

const Signup = () => {

  const{createUser, LogInWithGoogle} = useContext(AuthContext);
  const [error, setError] = React.useState("error");

  const location = useLocation();
  const navigate = useNavigate();

  const form = location.state?.form?.pathname || '/';


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    createUser(email, password).then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Sign up successfully")
      navigate(form, {replace: true});
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      // ..
    });

  }

  //Google Sign up
  const handleRegister =() => {
      LogInWithGoogle().then((result) => {
          const user = result.user; 
          alert("Sign up successfully")
          navigate(form, {replace: true});
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
      });
  }

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Sign up Form</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <form onSubmit={handleSubmit} class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input  id="email" name="email" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                </div>
                <div class="relative">
                  <input id="password" name="password" type="password" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                </div>
                <p>If you have an account. Please <Link to="/login" className='text-blue-600 underline'>Login</Link> here</p>
                <div class="relative">
                  <button class="bg-blue-500 text-white rounded-md px-6 py-2">Sign up</button>
                </div>
              </form>
            </div>
            <hr/>
            <div className='w-full flex items-center flex-col mt-5 gap-3'>
              <button onClick={handleRegister} className='block'><img src={googleLogo} className='w-12 h-12 inline-block'/>Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
