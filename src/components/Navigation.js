import { NavLink } from "react-router-dom";
export default function Navigation() {
	return (
		<header className="nav">
			<div className="container nav-inner">
				<NavLink to="/" className="logo">
					<span>Kathrine King</span>
				</NavLink>
				<nav>
					<NavLink to="/" end>
						Home
					</NavLink>
					<NavLink to="/work">Work</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/resume">Resume</NavLink>
					<NavLink to="/contact" className="nav-cta">
						Contact
					</NavLink>
				</nav>
			</div>
		</header>
	);
}
