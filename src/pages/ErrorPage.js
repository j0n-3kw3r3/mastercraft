import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="h-screen relative w-screen bg-gradient-to-br from-gray-100 to-gray-500   items-center">
      <div className="  h-full  w-full ">
        <img
          src="/error.jpg"
          alt=""
          className="object-cover absolute top-0 left-0 h-full w-full z-0 opacity-100 "
        />
      </div>
      <div className=" w-[70%] container fixed top-[30%]  -translate-x-[50%] left-[50%] z-100 text-gray-100 bg-opacity-90 bg-gray-600 p-4 rounded-lg flex items-center justify-center px-5 ">
        <div className="md:max-w-md ">
          <div className="text-5xl font-dark font-bold  ">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find this page.{" "}
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <Link
            to="/"
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-indigo-600 active:bg-indigo-400 hover:bg-indigo-500"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
