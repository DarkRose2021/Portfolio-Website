import "./App.scss";
import College from "./Compoents/College";
import Contact from "./Compoents/Contact";
import Footer from "./Compoents/Footer";
import Nav from "./Compoents/Nav";
import Projects from "./Compoents/Projects";
import ScrollToTopButton from "./Compoents/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/react";

function App() {
	return (
		<div>
			<Nav />

			<Contact />
			<College />
			<Projects />

			
			<ScrollToTopButton />
			<Footer />
			<Analytics />
		</div>
	);
}

export default App;
