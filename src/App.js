import "./App.scss";
import College from "./Compoents/College";
import Footer from "./Compoents/Footer";
import Nav from "./Compoents/Nav";
import Projects from "./Compoents/Projects";
import ScrollToTopButton from "./Compoents/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/react";
import Skills from "./Compoents/Skills";
import { useEffect, useState } from "react";
import About from "./Compoents/About";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div>
			{isMobile ? <About /> : <Nav />}
			<College />
			<Skills />
			<Projects />
			<ScrollToTopButton />
			<Footer />
			<Analytics />
		</div>
	);
}

export default App;
