import React from 'react';
import Image from 'next/image';

function SignUpPage() {
  return (
    <div>
         <Image src ="/image/menu.header.png" alt ="" width={1960} height={410}/>
                <header className="text-center py-8">
                <h1 className="text-4xl font-bold mb-4">Sign up Page</h1>
            <p className= ' mt-2' >Home {'>'} <span className='text-orange'>Sign in</span></p>
          </header>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Sign in</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Name</label>
              <input 
                type="text" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-400">Email or Phone Number</label>
              <input 
                type="email" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required 
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400">Password</label>
              <input 
                type="password" 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required 
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-orange text-white py-2 rounded-md shadow"
            >Sign up
            </button>
          </form>
        
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
