import React from 'react'
import { useState } from "react";


const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [PhoneNumber, setphoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({});

  const checkValidation = (e) => {
    const newError = {};
    if (e.target.firstName.value === "") {
      newError.firstname = "Enter your First Name";
    }

    if (e.target.lastName.value === "") {
      newError.lastName = "Enter your Last Name";
    }

    if (e.target.PhoneNumber.value === "") {
      newError.contact = "Enter your Contact Number";
    }

    if (e.target.email.value === "") {
      newError.email = "Enter your Email";
    }

    if (e.target.password.value === "") {
      newError.password = "Enter your Password";
    }

   
    setError(newError);
    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const PhoneNumber = e.target.PhoneNumber.value;

    
          }
    
  
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Signup</h2>
  </div>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form onSubmit={(e) => handleSubmit(e)} className='bg-white shadow-md rounded px-10 pb-8 mb-4'>
      <div>
      <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
      <div class="mt-2">
      <input id='firstName' type="text" name="firstName" value={firstName} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      {error.firstname && <span className='valid'>{error.firstname}</span>} </div>
        <label for="Lname" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
      <div class="mt-2">
      <input id="lastName" name="lastName" type="lastName" autoComplete="off" value={lastName}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.lastName && <span className='valid'>{error.lastName}</span>}
        </div>
        <label for="PhoneNumber" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
      <div class="mt-2">
      <input id="PhoneNumber" name="PhoneNumber" type="PhoneNumber" autoComplete="off" value={PhoneNumber}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.PhoneNumber && <span className='valid'>{error.PhoneNumber}</span>}
        </div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
        <input id="email" name="email" type="email" autoComplete="off" value={email}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.email && <span className='valid'>{error.email}</span>}
        </div>
     <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2">
          <input id="password" name="password" type="password" autoComplete="off" value={password}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.password && <span className='valid'>{error.password}</span>}
        </div>
      
      <label for="Confirm password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
      <div class="mt-2">
      <input id="password" name="password" type="password" autoComplete="off" value={password}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.password && <span className='valid'>{error.password}</span>}
        </div>
        </div>
      <div>
      <button type='Submit'  onSubmit={(e) => handleSubmit(e)} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bright-orange hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Sign up
                    </button>
      </div>
      
    </form>
    <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-indigo-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
    
  </div>
</div>







  )
}

export default Signup