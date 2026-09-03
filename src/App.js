import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import SweetMysticBakery from "./pages/SweetMysticBakery";
import ManeFrame from "./pages/ManeFrame";
import Tellus from "./pages/Tellus";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<>
			<Navigation />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/work" element={<Work />} />
					<Route
						path="/work/sweet-mystic-bakery"
						element={<SweetMysticBakery />}
					/>
					<Route path="/work/mane-frame" element={<ManeFrame />} />
					<Route path="/work/tellus" element={<Tellus />} />
					<Route path="/about" element={<About />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
