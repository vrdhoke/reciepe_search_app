import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
function App() {
  return (
    <div>
    
    <div className="App">
      {/* <header className=""> */}
        <Header/>
        <Main/>
      {/* </header> */}
    </div>
    </div>
  );
}

export default App;
