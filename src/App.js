import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import About from "./About";
import NavBar from "./NavBar";
import ChangePassword from "./ChangePassword";
import ForgotPassword from "./ForgotPassword";
import Enquiry from "./Enquiry";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
	<BrowserRouter>
	<div className="content-wrapper">
		<Routes>
			<Route path="/home" element= <Home/> />
			<Route path="/" element= <Login/> />
			<Route path="/signup" element= <SignUp/> />
			<Route path="/about" element= <About/> />
			<Route path="/changepassword" element= <ChangePassword/> />
			<Route path="/forgotpassword" element= <ForgotPassword/> />
			<Route path="/enquiry" element= <Enquiry/> />

			<Route path="/*" element= <Login/> />

		</Routes>
		</div>
	</BrowserRouter>
  );
}

export default App;
