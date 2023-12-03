import React from "react";
import { Image } from "react-bootstrap";

const College = () => {
	return (
		<div className="college">
			<h1>My College</h1>
			<div>
				<div className="cImage">
					<Image src="/images/neumontlogo.png" roundedCircle />
				</div>
				<div className="cText">
					<h2>Neumont College of Computer Science</h2>
					<h3>
						<b>Degree:</b> Bachelor of Science Web Design &amp; Development
					</h3>
					<h3>
						<b>Graduation Date:</b> August 29, 2024
					</h3>
				</div>
			</div>
		</div>
	);
};

export default College;
