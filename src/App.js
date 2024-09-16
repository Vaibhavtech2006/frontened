import React from 'react';
import './App.css';
import uidaiLogo from './uidai.jpg'; // Logo 1


function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><a href="#home">My Aadhar</a></li>
        <li><a href="#features">About UIDAI</a></li>
        <li><a href="#contact">Ecosystem</a></li>
        <li><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Scan the Face</a></li>
      </ul>
    </nav>
  );
}

function App() {
  const handleScanFace = () => {
    alert('Scanning face...');
  };

  return (
    <div className="App">
      {/* New logo positioned at the top-left corner */}
      <div className="Left-logo-container">
        <img src={leftLogo} alt="Left Logo" className="Left-logo" />
      </div>

      {/* Existing UIDAI logo positioned above the navbar */}
      <div className="Logo-container">
        <img src={uidaiLogo} alt="UIDAI Logo" className="Navbar-logo" />
      </div>

      <Navbar />
      <header className="App-header">
        <h1>Welcome to Face Scanner</h1>
        <button className="Scan-button" onClick={handleScanFace}>Scan Face</button>
      </header>
    </div>
  );
}

export default App;
