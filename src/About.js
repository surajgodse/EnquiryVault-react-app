import NavBar from "./NavBar";
import Footer from "./Footer";

function About() {
    return (
        <div className="about-page">
            <center>
                <NavBar />
                <h1>About</h1>
                <div className="about-content">
                    <h2>Technology Stack:</h2>
                    <ul className="tech-stack">
                        <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a></li>
                        <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
                        <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express.js</a></li>
                        <li><a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a></li>
                    </ul>

                    <h2>Features:</h2>
                    <ul>
                        <li><strong>User Authentication:</strong> Secure sign-up, login, and password management using Firebase.</li>
                        <li><strong>Interactive Dashboard:</strong> An intuitive dashboard to track and manage your activities.</li>
                        <li><strong>Real-Time Updates:</strong> Seamless updates and notifications.</li>
                        <li><strong>Responsive Design:</strong> Accessible from any device with a user-friendly interface.</li>
                    </ul>

                    <h2>Development and Design:</h2>
                    <p>
                        This project is built with a focus on modern design principles and user experience. The stack chosen allows for a scalable and maintainable application, ensuring high performance and security.
                    </p>
                </div>
            </center>
            <Footer />
        </div>
    );
}

export default About;
