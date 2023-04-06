import { Link } from "react-router-dom";
import { userSchema } from "../schemas";
import { firebaseAuth } from "../service/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [errorMsg, setErrorMsg] = useState();
  const provider = new GoogleAuthProvider();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(userSchema),
  });
  const { isValid, isDirty, errors } = formState;

  //Signup with firebase
  const signup = (data) => {
    createUserWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "Signup successful");
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setErrorMsg(error.code);
        // ..
      });
  };

  const googleAuth = async () => {
    signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        setErrorMsg(errorCode);

        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // ...
      });
  };

  return (
    <div className="md:grid grid-cols-2 h-[100vh] justify-center flex items-center bg-indigo-200">
      <div className="h-full w-[80%] md:w-[100%]  ">
        <div className="flex mt-24 justify-center">
          <div className="flex   border-[#ad772b]  border-t-2 border-b-2 w-[80%] relative  justify-center items-center z-10 ">
            <h1 className=" brand w-full  tracking-[0.01em]  md:tracking-[0.15em] lg:tracking-[0.2em] xl:tracking-[0.38em] text-center z-20 text-gray-700 uppercase  ">
              Mastercraft
            </h1>
            <div className="absolute w-[150px] h-[150px]  rounded-full bg-[#ad772b] ring-8 ring-indigo-200 z-10 ">
              <p className="text-white  w-full text-sm tracking-[.2rem] text-center absolute bottom-8 uppercase left-0 right-0 font-bold ">
                productions
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="flex h-[70%]   items-center justify-center py-2 px-4 sm:px-10 lg:px-12">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="my-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                Create an account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(signup)}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={
                      errors?.email
                        ? " focus:ring-red-600 ring-red-600 relative block w-full rounded-t-md border-0 py-1.5 pl-2 text-gray-900 ring-1  ring-inset  placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  outline-none sm:text-sm sm:leading-6"
                        : "relative block w-full rounded-t-md border-0 py-1.5 pl-2 text-gray-900 ring-1  ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none sm:text-sm sm:leading-6"
                    }
                    placeholder="Email address"
                    {...register("email")}
                  />
                  {errors?.email && (
                    <p className="text-xs mb-2 text-red-600">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={
                      errors?.password
                        ? " focus:ring-red-600 ring-red-600 relative block w-full rounded-b-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset  placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset outline-none  sm:text-sm sm:leading-6"
                        : "relative block w-full rounded-b-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    }
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors?.password && (
                    <p className="text-xs   text-red-600">
                      {errors.password?.message}
                    </p>
                  )}
                </div>
              </div>
              {errorMsg && (
                <p className="text-sm mb-2  text-center">{errorMsg}</p>
              )}

              <div className="flex items-center justify-end">
               

                <div className="text-sm">
                  Got an account?{" "}
                  <Link
                    to={"/auth/login"}
                    className="font-medium  text-indigo-600 hover:text-indigo-500"
                  >
                    Login
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!isDirty || !isValid}
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Sign up
                </button>
                <button
                  onClick={googleAuth}
                  className="group relative flex w-full items-center justify-center rounded-md mt-5 py-2 px-3 border-indigo-600 border mt- text-sm font-semibold text-indigo-600 hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <FcGoogle className=" flex items-center mr-3  " />
                  Sign up with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-full hidden md:block overflow-none shadow-2xl  ">
        <img
          src="/pieta.jpg"
          alt=""
          className="h-[100%] w-[100%] object-cover  "
        />
      </div>
    </div>
  );
}
