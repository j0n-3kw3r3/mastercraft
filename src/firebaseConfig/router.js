import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp"

export const ReactRouter = ()=> {
<Router>
    <Router>
    <Route path='auth/login' element={<SignUp/>} />
    <Route path='auth/login' element={<Login/>} />
    </Router>
</Router>
}