import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import aboutImage from "../assets/MeAndMyHorse.jpg";

export default function Home() {
	return (
		<>
			<section className="hero section">
				<div className="container hero-grid">
					<div>
						<p className="eyebrow">Website Designer & UI/UX Designer</p>
						<h1>Thoughtful design, built for the web.</h1>
						<p className="lead">
							I design and build thoughtful, responsive websites and digital
							experiences that balance visual design, usability, and
							functionality.
						</p>
						<div className="buttons">
							<Link className="button" to="/work">
								View My Work
							</Link>
							<Link className="button outline" to="/contact">
								Contact Me
							</Link>
						</div>
					</div>
					<div className="hero-card" aria-hidden="true">
						<span>Design</span>
						<span>Build</span>
						<span>Refine</span>
					</div>
				</div>
			</section>
			<section className="section soft">
				<div className="container">
					<p className="eyebrow">Selected Work</p>
					<h2>A few things I've designed and built.</h2>
					<div className="projects">
						{projects.map((p, i) => (
							<ProjectCard key={p.slug} project={p} featured={i === 0} />
						))}
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<p className="eyebrow">What I Do</p>
					<h2>Design with development in mind.</h2>
					<div className="services">
						<article>
							<b>01</b>
							<h3>Website Design</h3>
							<p>
								Clean, organized layouts designed to communicate information
								clearly.
							</p>
						</article>
						<article>
							<b>02</b>
							<h3>UI/UX Design</h3>
							<p>
								User-focused interfaces balancing hierarchy, accessibility,
								usability, and function.
							</p>
						</article>
						<article>
							<b>03</b>
							<h3>Front-End Development</h3>
							<p>
								Responsive interfaces brought to life with HTML, CSS/Sass,
								JavaScript, and React.
							</p>
						</article>
					</div>
				</div>
			</section>
			<section className="section soft">
				<div className="container two-col">
					<div className="about-image">
						<img src={aboutImage} alt="Me and my horse" />
					</div>
					<div>
						<p className="eyebrow">About Me</p>
						<h2>Designer, developer, and problem solver.</h2>
						<p>
							I have a background in website design and development, with
							experience taking interfaces from requirements and visual
							direction through implementation and quality testing.
						</p>
						<Link className="text-link" to="/about">
							More about me →
						</Link>
					</div>
				</div>
			</section>
			<section className="cta section">
				<div className="container center">
					<p className="eyebrow">Have an opportunity?</p>
					<h2>Let's create something thoughtful.</h2>
					<Link className="button light" to="/contact">
						Get in Touch
					</Link>
				</div>
			</section>
		</>
	);
}
