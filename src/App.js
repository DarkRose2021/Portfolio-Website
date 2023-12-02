import './App.scss';
import College from './Compoents/College';
import Contact from './Compoents/Contact';
import Footer from './Compoents/Footer';
import Nav from './Compoents/Nav';
import Projects from './Compoents/Projects';
import ScrollToTopButton from './Compoents/ScrollToTopButton';

function App() {
  return (
    <div>
      <Nav />

      <Contact />

      <Projects />

      <College />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
