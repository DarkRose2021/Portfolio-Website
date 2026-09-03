import { Link } from "react-router-dom";
export default function Resume() {
	return (
		<section className="section page">
			<div className="container resume">
				<div className="page-intro center">
					<p className="eyebrow">Resume</p>
					<h1>Kathrine King</h1>
					<p>Website Designer & UI/UX Designer</p>
					<a
						className="button"
						href="/Kathrine_King_Website_Designer_Resume.pdf"
						download
					>
						Download PDF
					</a>
				</div>
				<section className="resume-section">
					<h2>Professional Summary</h2>
					<p>
						Website Designer and UI/UX Designer with a Bachelor’s degree in
						Website Design and Development and hands-on experience designing and
						building responsive websites and user interfaces. Experienced in
						cohesive visual experiences, user-friendly layouts, Figma
						refinement, and React implementation.
					</p>
				</section>
				<section className="resume-section">
					<h2>Experience</h2>
					<Job
						title="Software Engineer Intern"
						company="TELLUS"
						dates="Jun 2024 – Aug 2024"
						bullets={[
							"Rebuilt a company dashboard and website in React.js and Material UI.",
							"Used Figma to refine layouts and interface components.",
							"Tested and resolved UI issues to improve responsiveness, usability, and consistency.",
							"Translated product requirements into polished interface deliverables.",
						]}
					/>
					<Job
						title="Software Engineer Intern"
						company="NICE CX One"
						dates="Jan 2024 – Jun 2024"
						bullets={[
							"Used Playwright and TypeScript to validate front-end behavior and identify UI regressions.",
							"Performed detailed quality checks on user-facing features.",
							"Supported faster development iterations through mock API testing.",
						]}
					/>
					<Job
						title="Academic Tutor"
						company="Neumont College of Computer Science"
						dates="Mar 2023 – Jun 2024"
						bullets={[
							"Supported students in web development and front-end implementation courses.",
							"Reviewed projects and helped identify implementation, usability, and quality issues.",
							"Provided individualized technical guidance.",
						]}
					/>
				</section>
				<section className="resume-section">
					<h2>Selected Project</h2>
					<Job
						title="Website Designer & Developer"
						company="Sweet Mystic Bakery"
						dates="Personal Project"
						bullets={[
							"Designed and developed a responsive multi-page bakery website.",
							"Created the brand logo in Canva and established a consistent visual system.",
							"Organized products, business information, policies, FAQs, and customer-facing content.",
						]}
					/>
					<Link className="text-link" to="/work/sweet-mystic-bakery">
						View Case Study →
					</Link>
				</section>
				<section className="resume-section">
					<h2>Education</h2>
					<div className="education">
						<div>
							<h3>Neumont College of Computer Science</h3>
							<p>Bachelor of Science in Website Design and Development</p>
						</div>
						<strong>Aug 2024</strong>
					</div>
				</section>
				<section className="resume-section">
					<h2>Skills</h2>
					<div className="skill-cols">
						<div>
							<h3>Design</h3>
							<p>
								Figma • Canva • Adobe Illustrator • Adobe XD • UI/UX • Visual
								Design • Responsive Design • Accessibility
							</p>
						</div>
						<div>
							<h3>Web</h3>
							<p>
								HTML • CSS/Sass • JavaScript/TypeScript • React • Next.js •
								Node.js • Express
							</p>
						</div>
						<div>
							<h3>QA & Workflow</h3>
							<p>
								Playwright • UI Testing • GitHub • Scrum • Requirements
								Translation
							</p>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
function Job({ title, company, dates, bullets }) {
	return (
		<article className="job">
			<div>
				<h3>{title}</h3>
				<p>{company}</p>
			</div>
			<span>{dates}</span>
			<ul>
				{bullets.map((x) => (
					<li key={x}>{x}</li>
				))}
			</ul>
		</article>
	);
}
