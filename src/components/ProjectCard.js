import { Link } from "react-router-dom";
export default function ProjectCard({ project, featured = false }) {
	return (
		<article className={featured ? "project featured" : "project"}>
			<Link to={`/work/${project.slug}`} className="project-image">
				<img
					src={project.image}
					alt={`${project.title} preview`}
					
				/>
				<span>{project.category}</span>
			</Link>
			<div className="project-copy">
				<p className="eyebrow">Selected Work</p>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<div className="tags">
					{project.tools.map((x) => (
						<span key={x}>{x}</span>
					))}
				</div>
				<Link className="text-link" to={`/work/${project.slug}`}>
					View case study →
				</Link>
			</div>
		</article>
	);
}
