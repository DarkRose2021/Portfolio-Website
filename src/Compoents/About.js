import React from "react";
import { Button, Image } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const About = () => {
	return (
		<div>
			<h1>I'm Kathrine King</h1>
			<h2>Web Developer</h2>
			<h3>
				<i class="bi bi-github"></i> <i class="bi bi-linkedin"></i>{" "}
				<i class="bi bi-envelope-fill"></i>
			</h3>
			<Button>Resume</Button>
		</div>
	);
};

export default About;
