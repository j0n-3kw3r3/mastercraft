import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { userSchema } from "../schemas";

const Login = () => {
  const onSubmit = (values, actions) => {
    console.log("submitted");
    actions.resetForm();
  };

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: userSchema,
      onSubmit,
    });

  return (
    <div className="grid grid-cols-2 h-full bg-indigo-200">
      <div className="h-full">
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
        </div>

        <div className="flex h-[70%]   items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="my-6 text-center text-2xl font-bold tracking-tight text-gray-900">
                Sign in your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                      errors.email && touched.email
                        ? " focus:ring-red-600 ring-red-600 relative block w-full rounded-t-md border-0 py-1.5 pl-2 text-gray-900 ring-1  ring-inset  placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset  outline-none sm:text-sm sm:leading-6"
                        : "relative block w-full rounded-t-md border-0 py-1.5 pl-2 text-gray-900 ring-1  ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none sm:text-sm sm:leading-6"
                    }
                    placeholder="Email address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className="text-xs mb-2 text-red-600">{errors.email}</p>
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
                      errors.password && touched.password
                        ? " focus:ring-red-600 ring-red-600 relative block w-full rounded-b-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset  placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset outline-none  sm:text-sm sm:leading-6"
                        : "relative block w-full rounded-b-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    }
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <p className="text-xs   text-red-600">{errors.password}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {" "}
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                  </span>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="h-full overflow-none shadow-2xl  ">
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
