import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Contact from './Contact';
import Home from './Home';
import Publications from './Publications';
import Research from './Research';
import Namepage from './Namepage';
import Services from "./Services";

function App() {
  return (
    <div className="App">
      <section id='Homepage'>
        <Navbar />
        <Namepage />
      </section>
      <section id='Services'>
        <Services />
      </section>
      <section id='Portfolio'>
        <Publications />
      </section>
      <section></section>
      <section>Publications</section>
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
