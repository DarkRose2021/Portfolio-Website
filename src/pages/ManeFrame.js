import CaseStudy from "../components/CaseStudy";
export default function ManeFrame() {
	return (
		<CaseStudy
			eyebrow="Case Study"
			title="Mane Frame"
			subtitle="A photography business website created as a senior capstone project."
			role="Full-Stack Developer • UI/UX Designer"
			tools={["React", "Node.js", "Express", "MongoDB", "SCSS"]}
			type="Academic Capstone"
		>
			<section className="case-section">
				<div className="container">
					<p className="eyebrow">01 — Overview</p>
					<h2>Designing a professional photography experience.</h2>
					<p>
						Mane Frame was a mock business photography website developed as my
						senior capstone. The project focused on translating project
						requirements into a polished, usable website experience.
					</p>
				</div>
			</section>
			<section className="case-section soft">
				<div className="container">
					<p className="eyebrow">02 — Process</p>
					<h2>From requirements to a working product.</h2>
					<div className="process">
						{[
							["01", "Requirements"],
							["02", "Structure"],
							["03", "Design"],
							["04", "Development"],
							["05", "Testing"],
						].map(([n, t]) => (
							<article key={n}>
								<b>{n}</b>
								<h3>{t}</h3>
								<p>Translate project goals into a clear, usable experience.</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<section className="case-section">
				<div className="container">
					<p className="eyebrow">03 — Development</p>
					<h2>A full-stack implementation.</h2>
					<p>
						The project used React on the front end with Node.js and Express on
						the server side, backed by MongoDB. SCSS was used for visual
						styling.
					</p>
					<div className="tags large">
						{["MongoDB", "Express", "React", "Node.js", "SCSS"].map((x) => (
							<span key={x}>{x}</span>
						))}
					</div>
				</div>
			</section>
			<section className="case-section dark">
				<div className="container">
					<p className="eyebrow">04 — Outcome</p>
					<h2>A complete business website experience.</h2>
					<p>
						Mane Frame demonstrates my ability to move from requirements and
						interface decisions through front-end and back-end implementation.
					</p>
				</div>
			</section>
		</CaseStudy>
	);
}
