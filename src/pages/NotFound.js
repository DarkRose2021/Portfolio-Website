import { Link } from "react-router-dom";
export default function NotFound() {
	return (
		<section className="section page">
			<div className="container not-found">
				<p className="eyebrow">404</p>
				<h1>This page wandered off.</h1>
				<p>The page you're looking for doesn't exist or may have moved.</p>
				<Link className="button" to="/">
					Back Home
				</Link>
			</div>
		</section>
	);
}
