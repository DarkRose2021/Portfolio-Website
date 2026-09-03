import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
export default function Work() {
	return (
		<section className="section page">
			<div className="container">
				<div className="page-intro">
					<p className="eyebrow">Portfolio</p>
					<h1>Selected Work</h1>
					<p>
						A collection of websites, digital experiences, and interfaces I've
						designed and developed.
					</p>
				</div>
				<div className="projects">
					{projects.map((p, i) => (
						<ProjectCard key={p.slug} project={p} featured={i === 0} />
					))}
				</div>
			</div>
		</section>
	);
}
