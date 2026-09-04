import { Link } from "react-router-dom";
import aboutImage from "../assets/MeAndMyHorse.jpg";
export default function About() {
	return (
		<section className="section page">
			<div className="container">
				<div className="page-intro">
					<p className="eyebrow">About</p>
					<h1>Design-minded. Detail-oriented. Always learning.</h1>
				</div>
				<div className="two-col about">
					<div className="about-image">
						<img src={aboutImage} alt="Me and my horse" />
					</div>
					<div>
						<p className="lead">
							I'm Kathrine, a website designer and UI/UX designer with a
							Bachelor of Science in Website Design and Development.
						</p>
						<p>
							My background combines visual design, front-end development,
							usability, and quality assurance. I enjoy taking complex
							requirements and turning them into interfaces that feel clear,
							intentional, and easy to use.
						</p>
						<p>
							I especially enjoy the space where design and development meet:
							creating the visual direction, thinking through the user
							experience, and bringing the design to life on the web.
						</p>
						<Link className="button" to="/resume">
							View My Resume
						</Link>
					</div>
				</div>
				<div className="about-block">
					<p className="eyebrow">My Approach</p>

					<div className="services">
						<article>
							<b>01</b>
							<h3>Clarity</h3>
							<p>
								I organize information so users can understand what matters
								quickly.
							</p>
						</article>

						<article>
							<b>02</b>
							<h3>Consistency</h3>
							<p>
								I use typography, spacing, color, and reusable components to
								create cohesive experiences.
							</p>
						</article>

						<article>
							<b>03</b>
							<h3>Usability</h3>
							<p>
								I consider responsive behavior, accessibility, and interaction
								throughout the design.
							</p>
						</article>
					</div>
				</div>

				<div className="about-block">
					<p className="eyebrow">Education</p>
					<div className="education">
						<div>
							<h3>Neumont College of Computer Science</h3>
							<p>Bachelor of Science in Website Design and Development</p>
						</div>
						<strong>2024</strong>
					</div>
				</div>
			</div>
		</section>
	);
}
