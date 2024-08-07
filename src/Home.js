import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
	const nav = useNavigate();
	const [un, setUn] = useState("");

	useEffect(() => {
		const u = localStorage.getItem("un");
		if (u != null) {
			setUn(u);
		} else {
			nav("/");
		}
	}, [nav]);

	const logout = (event) => {
		event.preventDefault();
		localStorage.removeItem("un");
		nav("/");
	}

	return (
		<>
		
			<center>
				<NavBar />
				<h1><u> Home </u></h1>
				<br/><br/>
				<h2> Welcome {un} </h2>
				<br/><br/><br/>
				<form onSubmit={logout}>
					<input type="submit" value="Logout" />
				</form>
			</center>
			<Footer />
		</>
	);
}

export default Home;
