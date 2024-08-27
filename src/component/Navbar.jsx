import React from 'react';
import Logo from "../assests/TestPilot.jpg";

function Navbar() {
  return (
    <div className="relative">
      <div className="absolute inset-0  backdrop-blur-md "></div>
      <div className="relative text-gray-800 hover:text-gray-900">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
          <div className="relative flex h-24 space-x-10 w-full font-bold ">
            <div className="flex justify-start">
              <a className="flex gap-4 items-center" href="/">
                <img className="block h-16 rounded-full w-auto" height="32" src={Logo} alt='img' />
                <h1 className='text-2xl font-sans '>
                  Test Pilot
                </h1>
              </a>
            </div>
            <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end">
              <a className="text-md " href="https://www.linkedin.com/in/parth-guptaji/">Linkedln</a>
              <a className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-md  rounded-md shadow-sm bg-slate-400 hover:bg-slate-500"
                href="https://github.com/ParthGupta84616">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;