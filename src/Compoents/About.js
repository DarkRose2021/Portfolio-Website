import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pdf from "../Kathrine_King_Resume.pdf";

const About = () => {
	return (
		<div>
			<h1>Kathrine King</h1>
			<h2>Web Developer</h2>
			<h3>
				<a
					href="https://github.com/DarkRose2021"
					target="_blank"
					rel="noreferrer"
					className="icons"
				>
					<i class="bi bi-github"></i>
				</a>{" "}
				<a
					href="https://www.linkedin.com/in/kathrine-katie-king/"
					rel="noreferrer"
					target="_blank"
					className="icons"
				>
					<i class="bi bi-linkedin"></i>
				</a>{" "}
				<a
					href="mailto:kathrineking2021@gmail.com"
					target="_blank"
					rel="noreferrer"
					className="icons"
				>
					<i class="bi bi-envelope-fill"></i>
				</a>
			</h3>
			<a href={Pdf} target="_blank" rel="noreferrer">
				<Button>Resume</Button>
			</a>
		</div>
	);
};

export default About;
