import CaseStudy from "../components/CaseStudy";
export default function Tellus() {
	return (
		<CaseStudy
			eyebrow="Professional Experience"
			title="TELLUS"
			subtitle="Dashboard and website interface work focused on usability, consistency, responsiveness, and quality."
			role="Software Engineer Intern"
			tools={["React", "Figma", "Material UI", "Playwright"]}
			type="Professional Project"
		>
			<section className="case-section">
				<div className="container">
					<div className="confidential">
						Professional project — visual details omitted where confidential
					</div>
					<p className="eyebrow">01 — Overview</p>
					<h2>Refining user-facing interfaces.</h2>
					<p>
						During my internship at TELLUS, I worked on rebuilding a company
						dashboard and website in React.js and Material UI. I used Figma to
						refine layouts and interface components with a focus on clarity,
						consistency, responsiveness, and usability.
					</p>
				</div>
			</section>
			<section className="case-section soft">
				<div className="container">
					<p className="eyebrow">02 — My Role</p>
					<h2>Design, implementation, and quality checks.</h2>
					<div className="services">
						<article>
							<b>01</b>
							<h3>Interface Refinement</h3>
							<p>Refined page layouts and interface components using Figma.</p>
						</article>
						<article>
							<b>02</b>
							<h3>React Implementation</h3>
							<p>
								Implemented updated interface work using React.js and Material
								UI.
							</p>
						</article>
						<article>
							<b>03</b>
							<h3>UI Quality</h3>
							<p>
								Tested and resolved interface issues affecting consistency,
								responsiveness, and usability.
							</p>
						</article>
					</div>
				</div>
			</section>
			<section className="case-section">
				<div className="container">
					<p className="eyebrow">03 — Approach</p>
					<h2>Turning requirements into clearer interfaces.</h2>
					<div className="process">
						{[
							["01", "Requirements"],
							["02", "Figma"],
							["03", "React"],
							["04", "QA"],
						].map(([n, t]) => (
							<article key={n}>
								<b>{n}</b>
								<h3>{t}</h3>
								<p>
									Translate requirements into clearer user-facing interface
									work.
								</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<section className="case-section dark">
				<div className="container">
					<p className="eyebrow">04 — Professional Takeaway</p>
					<h2>Design thinking backed by technical implementation.</h2>
					<p>
						TELLUS strengthened my ability to work between visual design,
						front-end implementation, requirements, feedback, and quality
						assurance.
					</p>
				</div>
			</section>
		</CaseStudy>
	);
}
