import { Link } from "react-router-dom";
export default function CaseStudy({
	eyebrow,
	title,
	subtitle,
	role,
	tools,
	type,
	children,
}) {
	return (
		<>
			<section className="case-hero">
				<div className="container">
					<p className="eyebrow">{eyebrow}</p>
					<h1>{title}</h1>
					<p className="lead">{subtitle}</p>
					<div className="meta">
						<div>
							<small>Role</small>
							<strong>{role}</strong>
						</div>
						<div>
							<small>Tools</small>
							<strong>{tools.join(" • ")}</strong>
						</div>
						<div>
							<small>Type</small>
							<strong>{type}</strong>
						</div>
					</div>
				</div>
			</section>
			{children}
			<section className="case-end">
				<div className="container case-end-inner">
					<Link to="/work">← Back to Work</Link>
					<Link className="button" to="/contact">
						Let's Connect
					</Link>
				</div>
			</section>
		</>
	);
}
