import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../service/firebase";

const Home = () => {

  const navigate = useNavigate()
 
  const handleLogout = () => {
    signOut(firebaseAuth)
      .then(() => {
        // Sign-out successful.
        navigate("/auth/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  

	return (
    <div className="flex mt-24 justify-center">
      <div className="flex   border-[#ad772b]  border-t-2 border-b-2 w-[80%] relative  justify-center items-center z-10 ">
        <h1 className=" brand w-full   tracking-[1.1rem] text-center z-20 text-gray-700 uppercase  ">
          Mastercraft
        </h1>
        <div className="absolute w-[150px] h-[150px]  rounded-full bg-[#ad772b] ring-8 ring-indigo-200 z-10 ">
          <p className="text-white  w-full text-sm tracking-[.2rem] text-center absolute bottom-8 uppercase left-0 right-0 font-bold ">
            productions
          </p>{" "}
        </div>
      </div>
      <button
        className="group relative mt-20 flex w-20 justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleLogout}
      >
        {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span> */}
        Sign out
      </button>
    </div>
  );
};

export default Home;
