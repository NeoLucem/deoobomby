import React from 'react';
import './App.css';
import {Navbar} from './Components';
import {About, Skills, Work, Footer} from './Containers';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div className="App-section">
        <About />
        <Skills />
        <Work />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
