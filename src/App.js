import "./App.scss";
import College from "./Compoents/College";
import Footer from "./Compoents/Footer";
import Nav from "./Compoents/Nav";
import Projects from "./Compoents/Projects";
import ScrollToTopButton from "./Compoents/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/react";
// import Skills from "./Compoents/Skills";

function App() {
	return (
		<div>
			<Nav />
			<College />
			{/* <Skills /> */}
			<Projects />
			<ScrollToTopButton />
			<Footer />
			<Analytics />
		</div>
	);
}

export default App;
