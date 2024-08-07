import NavBar from "./NavBar";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Footer from "./Footer";

function ForgotPassword() {
	const nav = useNavigate();
	useEffect(() => {
		let un = localStorage.getItem("un");
		if (un !== null) {
			nav("/home");
		}
	}, [nav])

	const rUn = useRef();
	const [un, setUn] = useState("");
	const [msg, setMsg] = useState("");

	const hUn = (event) => { setUn(event.target.value); }

	const sm = (event) => {
		event.preventDefault();
		const auth = getAuth();
		sendPasswordResetEmail(auth, un)
			.then(res => {
				nav("/");
			})
			.catch(err => setMsg("Issue: " + err));
	}

	return (
		<>
			<center>
				<NavBar />
				<div className="form-container">
				<h1> Forgot Password </h1>
				<form onSubmit={sm}>
					<input type="email" placeholder="enter registered email" onChange={hUn} ref={rUn} value={un} />
					<br /><br />
					<input type="submit" value="Send Email" />
				</form>
				<h2> {msg} </h2>
				</div>
			</center>
			<Footer />
		</>
	);
}

export default ForgotPassword;
