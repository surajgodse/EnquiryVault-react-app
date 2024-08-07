import NavBar from "./NavBar";
import { useState, useRef, useEffect } from "react";
import { getAuth, updatePassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function ChangePassword() {
	const nav = useNavigate();

	useEffect(() => {
		let un = localStorage.getItem("un");
		if (un === null) {
			nav("/")
		}
	}, [nav])

	const rPw1 = useRef();
	const rPw2 = useRef();

	const [pw1, setPw1] = useState("");
	const [pw2, setPw2] = useState("");
	const [msg, setMsg] = useState("");

	const hPw1 = (event) => { setPw1(event.target.value); }
	const hPw2 = (event) => { setPw2(event.target.value); }

	const cp = (event) => {
		event.preventDefault();
		if (pw1 === pw2) {
			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				updatePassword(user, pw1)
					.then(res => {
						localStorage.removeItem("un");
						nav("/");
					})
					.catch(err => setMsg("Issue: " + err));
			});
		}
		else {
			setMsg("Password did not match");
			setPw1("");
			setPw2("");
			rPw1.current.focus();
		}
	}

	return (
		<>
			<center>
				<NavBar />
				<div className="form-container">
				<h1> Change Password </h1>
				<form onSubmit={cp}>
					<input type="password" placeholder="Enter new Password" onChange={hPw1} ref={rPw1} value={pw1} />
					<br /><br />
					<input type="password" placeholder="Confirm New Password" onChange={hPw2} ref={rPw2} value={pw2} />
					<br /><br />
					<input type="submit" value="Change Password" />
				</form>
				<h2> {msg} </h2>
				</div>
			</center>
			<Footer />
		</>
	);
}

export default ChangePassword;
