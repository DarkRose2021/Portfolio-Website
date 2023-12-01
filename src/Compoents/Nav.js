import React from "react";
import { Image } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import About from "./About";


const Nav = () => {
	return (
		<div className="hero-image">
      <div className="image">
      <Image src="/images/AboutMe.jpg" alt="person with horse" rounded  />
      </div>
			<div className="text">
				<About />
			</div>
		</div>
	);
};

export default Nav;
