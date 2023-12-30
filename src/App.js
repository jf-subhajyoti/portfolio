import Navbar from "./components/Navbar/Navbar";

import './App.css';

import Intro from "./components/Info/Intro";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Works />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
