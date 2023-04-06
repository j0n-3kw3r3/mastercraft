import { userSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { firebaseAuth } from "../service/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import ResetPassword from "../components/ResetPassword";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [errorMsg, setErrorMsg] = useState();
  const [resetPD, setResetPD] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(userSchema),
  });
  const { isValid, isDirty, errors } = formState;

  //logIn with firebase
  const signIn = (data) => {
    signInWithEmailAndPassword(firebaseAuth, data.email, data.password)
      .then((userCredential) => {
        // logged im in
        console.log("logged in successful");
        // ...
      })
      .catch((error) => {
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
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
                setErrorMsg(errorCode);

        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
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

        {!resetPD ? (
          <div className="flex h-[70%]   items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <h2 className="my-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                  Sign in your account
                </h2>
              </div>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit(signIn)}>
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
                    <p
                      onClick={() => setResetPD(true)}
                      className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer "
                    >
                      Forgot your password?
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    disabled={!isValid || !isDirty}
                    type="submit"
                    className="group cursor-pointer relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                    </span>
                    Sign In
                  </button>
              <button
                className="group relative flex w-full items-center justify-center rounded-md mt-5 py-2 px-3 border-indigo-600 border mt- text-sm font-semibold text-indigo-600 hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={googleAuth}
              >
                <FcGoogle className=" flex items-center mr-3  " />
                Sign in with Google
              </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <ResetPassword />
        )}
      </div>
      <div className="h-full hidden md:block overflow-none shadow-2xl  ">
        <img
          src="/david.jpg"
          alt=""
          className="h-[100%] w-[100%] object-cover  "
        />
      </div>
    </div>
  );
};

export default Login;
