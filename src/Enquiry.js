import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Enquiry() {
  const navigate = useNavigate();
  const rName = useRef();
  const rCollege = useRef();
  const rQuery = useRef();
  const rPhone = useRef();
  const rEmail = useRef();

  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hName = (event) => { setName(event.target.value); };
  const hCollege = (event) => { setCollege(event.target.value); };
  const hEmail = (event) => { setEmail(event.target.value); };
  const hPhone = (event) => { setPhone(event.target.value); };
  const hQuery = (event) => { setQuery(event.target.value); };

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        navigate("/");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted, navigate]);

  const sm = (event) => {
    event.preventDefault();
    let data = { name, college, email, phone, query };
    emailjs
      .send("service_2140", "template_2140", data, "DuLx7as85v0Lh0iX2")
      .then((res) => {
        setMsg("We will get back to you, Thank You!!");
        setName("");
        setCollege("");
        setEmail("");
        setPhone("");
        setQuery("");
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.log("issue" + err);
        setMsg("There was an issue sending your enquiry. Please try again later.");
      });
  };

  return (
    <>
      <NavBar />
      <div className="enquiry-form">
        <h1>Fill the form</h1>
        {!isSubmitted ? (
          <form onSubmit={sm}>
            <input
              type="text"
              placeholder="enter name"
              onChange={hName}
              ref={rName}
              value={name}
              required
            />
            <input
              type="text"
              placeholder="enter college name"
              onChange={hCollege}
              ref={rCollege}
              value={college}
              required
            />
            <input
              type="email"
              placeholder="enter email"
              onChange={hEmail}
              ref={rEmail}
              value={email}
              required
            />
            <input
              type="number"
              placeholder="enter phone number"
              onChange={hPhone}
              ref={rPhone}
              value={phone}
              required
            />
            <textarea
              placeholder="enter query"
              rows={3}
              cols={30}
              onChange={hQuery}
              ref={rQuery}
              value={query}
              required
            />
            <input type="submit" value="Submit Enquiry" />
          </form>
        ) : (
          <div className="success-message">
            <h2>{msg}</h2>
            <p>Redirecting to home page in 5 seconds...</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Enquiry;