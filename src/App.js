import Navbar from "./components/Navbar/Navbar";

import './App.css';

import Intro from "./components/Info/Intro";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

import { useThemeContext } from "./ThemeContext";

function App() {

  const {darkTheme} = useThemeContext();
  return (
    <div className="App" style={{
      background: darkTheme ? 'black' : '',
      color: darkTheme ? "white" : ''
    }}>
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
