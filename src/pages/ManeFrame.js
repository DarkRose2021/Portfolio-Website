import CaseStudy from "../components/CaseStudy";
import old from "../assets/ManeFrame/mf_old.png";
import older from "../assets/ManeFrame/mf_older.png";
import homepage from "../assets/ManeFrame/homepage.png";

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
					<h2>
						Turning a photography business concept into a full-stack platform.
					</h2>

					<div className="process">
						{[
							[
								"01",
								"Requirements",
								"Defined the website's goals around helping clients discover the photographer, explore their work, learn about services, and connect with the business.",
							],
							[
								"02",
								"Planning & Structure",
								"Translated the business requirements into page structure, navigation, content organization, and user flows for the application.",
							],
							[
								"03",
								"Visual Design",
								"Developed a rustic visual direction using neutral browns with light yellow and blue accents, keeping photography at the center of the experience.",
							],
							[
								"04",
								"Development",
								"Built the full-stack application using React, Node.js, Express, MongoDB, and reusable components for the front-end experience.",
							],
							[
								"05",
								"Testing & Refinement",
								"Tested application functionality and user flows, addressed issues, and refined the interface to create a more polished experience.",
							],
						].map(([n, t, description]) => (
							<article key={n}>
								<b>{n}</b>
								<h3>{t}</h3>
								<p>{description}</p>
							</article>
						))}
					</div>
				</div>
			</section>
			<section className="case-section">
				<div className="container">
					<p className="eyebrow">03 — Design Evolution</p>
					<h2>Starting with the original concept.</h2>

					<img
						src={older}
						alt="Original Mane Frame Photography homepage mockup"
					/>

					<p>
						The initial concept established the rustic direction, neutral color
						palette, and photography-focused layout.
					</p>

					<h2>Refining the visual system.</h2>

					<p>
						The visual direction was refined into a more cohesive system,
						balancing earthy neutrals with turquoise and warm yellow accents to
						reinforce the equestrian and western photography aesthetic.
					</p>

					<div className="palette">
						{[
							["Dust", "#E5E5E5"],
							["Turquoise", "#06A6A8"],
							["Sundown", "#E5CD75"],
							["Saddle", "#50473D"],
							["Ranch", "#2C261F"],
						].map(([n, h]) => (
							<div key={n}>
								<i style={{ background: h }} />
								<strong>{n}</strong>
								<small>{h}</small>
							</div>
						))}
					</div>

					<img src={old} alt="Updated Mane Frame Photography website mockup" />

					<h2>Bringing the design into the final product.</h2>

					<p>
						The final implementation translated the visual direction into a
						functional photography platform, combining the established branding
						with responsive layouts and full-stack functionality.
					</p>

					<img src={homepage} alt="Final Mane Frame Photography homepage" />
				</div>
			</section>
			<section className="case-section dark">
				<div className="container">
					<p className="eyebrow">04 — Development</p>
					<h2>Building the experience behind the design.</h2>
					<p>
						Mane Frame demonstrates my ability to move from requirements and
						interface decisions through front-end and back-end implementation.
					</p>
					<div className="tags large">
						{["MongoDB", "Express", "React", "Node.js", "SCSS"].map((x) => (
							<span key={x}>{x}</span>
						))}
					</div>
				</div>
			</section>
		</CaseStudy>
	);
}
