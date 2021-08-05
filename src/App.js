import logo from './logo.svg';
import './App.css';
import React from 'react';
import ScrollingStripContainer from './components/header-component/scrolling-strip-container';

function App() {
  return (
    <React.Fragment>
      <ScrollingStripContainer></ScrollingStripContainer>
      <div className="App">
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
