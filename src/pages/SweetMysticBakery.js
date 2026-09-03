import CaseStudy from "../components/CaseStudy";
import desktop from "../assets/SweetMysticBakery/smb_desktop.png";

export default function SweetMysticBakery() {
	return (
		<CaseStudy
			eyebrow="Featured Case Study"
			title="Sweet Mystic Bakery"
			subtitle="Brand and responsive website design for a warm, autumn-inspired bakery business."
			role="Website Designer • UI/UX Designer • Front-End Developer"
			tools={["React", "Figma", "Canva", "Sass", "JavaScript"]}
			type="Personal Business Website"
		>
			<CaseSection title="01 — Overview">
				<h2>Building a cohesive brand and customer experience.</h2>
				<p>
					Sweet Mystic Bakery was designed as a bakery brand with a warm,
					seasonal identity. The website brings the brand into a digital
					experience where customers can explore products, business information,
					policies, FAQs, and contact details.
				</p>
			</CaseSection>
			<CaseSection title="02 — Brand Direction" soft>
				<h2>Creating a recognizable visual system.</h2>
				<p>
					I created the logo in Canva and developed a consistent visual
					direction through color, typography, navigation, and page layouts.
				</p>
				<div className="palette">
					{[
						["Cream", "#F6F1E7"],
						["Sage", "#A1AD86"],
						["Forest", "#66704F"],
						["Brown", "#4B2E2A"],
						["Gold", "#D9A441"],
						["Fox", "#D06E2D"],
					].map(([n, h]) => (
						<div key={n}>
							<i style={{ background: h }} />
							<strong>{n}</strong>
							<small>{h}</small>
						</div>
					))}
				</div>
			</CaseSection>
			<CaseSection title="03 — Website Structure">
				<h2>Organizing information around the customer.</h2>
				<div className="site-map">
					{[
						"Home",
						"About",
						"Menu",
						"Gallery",
						"FAQ",
						"Policies",
						"Contact",
					].map((x) => (
						<span key={x}>{x}</span>
					))}
				</div>
				<p>
					Content was separated into clear customer-facing sections so visitors
					can quickly understand the bakery, browse products, and find important
					ordering and policy information.
				</p>
			</CaseSection>
			<CaseSection title="04 — Responsive Design" soft>
				<h2>Designed to work across screen sizes.</h2>
				<div className="devices">
					<div>Desktop</div>
					<div>Tablet</div>
					<div>Mobile</div>
				</div>
			</CaseSection>
			<CaseSection title="05 — Development">
				<h2>From visual design to implementation.</h2>
				<p>
					The website was implemented with React, HTML, CSS/Sass, and JavaScript
					using reusable interface patterns.
				</p>
				<div className="tags large">
					{["React", "HTML", "CSS/Sass", "JavaScript", "Figma", "Canva"].map(
						(x) => (
							<span key={x}>{x}</span>
						)
					)}
				</div>
			</CaseSection>
			<CaseSection title="06 — Final Result" dark>
				<h2>A complete brand experience built for the web.</h2>
				<p>
					The finished project combines visual identity, content organization,
					responsive design, and front-end development into one cohesive
					customer experience.
				</p>
			</CaseSection>
		</CaseStudy>
	);
}
function CaseSection({ title, soft, dark, children }) {
	return (
		<section
			className={`case-section ${soft ? "soft" : ""} ${dark ? "dark" : ""}`}
		>
			<div className="container">
				<p className="eyebrow">{title}</p>
				{children}
			</div>
		</section>
	);
}
