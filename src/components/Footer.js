export default function Footer() {
	return (
		<footer>
			<div className="container footer-inner">
				<div>
					<strong>Kathrine King</strong>
					<p>Website Designer & UI/UX Designer</p>
				</div>
				<div className="footer-links">
					<a href="mailto:katiek2128@gmail.com">Email</a> |{" "}
					<a
						href="https://github.com/DarkRose2021"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>{" "}
					| <a href="/contact">Contact</a>
				</div>
				<small>&copy; {new Date().getFullYear()} Kathrine King</small>
			</div>
		</footer>
	);
}
