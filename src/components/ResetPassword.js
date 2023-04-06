import { yupResolver } from "@hookform/resolvers/yup";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { passwordResetSchema } from "../schemas";
import { firebaseAuth } from "../service/firebase";

export default function ResetPassword() {
  const [errorMsg, setErrorMsg] = useState();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(passwordResetSchema),
  });
  const { isValid, isDirty, errors } = formState;

  const passwordReset = (data) => {

    sendPasswordResetEmail(firebaseAuth, data.email)
      .then(() => {
        console.log("Reset password has been sent to your email");
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMsg(errorCode);
        // ..
      });
  };

  return (
    <div>
      <div className="flex h-[70%]   items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="mt-24" >
            <h2 className=" text-center text-2xl font-bold tracking-tight text-gray-900">
              Reset password
            </h2>
            <p className="my-2 text-center text-sm  tracking-tight text-gray-900">
              Password will be sent to your email
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(passwordReset)}
          >
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
            </div>
            {errorMsg && (
              <p className="text-sm mb-2  text-center">{errorMsg}</p>
            )}

            <div>
              <button
                disabled={!isValid || !isDirty}
                type="submit"
                className="group cursor-pointer relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
