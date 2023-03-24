import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const RouterComponent = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/auth/signup" element={<SignUp />} />
				<Route path="/auth/login" element={<Login />} />
			</Routes>
		</Router>
	);
};
export default RouterComponent;
