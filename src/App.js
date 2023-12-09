import Navbar from "./components/Navbar/Navbar";

import './App.css';

import Intro from "./components/Info/Intro";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Works />
    </div>
  );
}

export default App;
