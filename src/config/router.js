import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { firebaseAuth } from "../service/firebase";

const RouterComponent = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const User = () => {
      onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = await user.uid;
          setUser(uid);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    };
    User();
  });


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <SignUp />} />
        {/* <Route path="/auth/signup" element={user ? <Navigate to="/" /> : <SignUp/> /> */}
        <Route
          path="/auth/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="*"
          element={ <ErrorPage />}
        />
      </Routes>
    </Router>
  );
};
export default RouterComponent;
