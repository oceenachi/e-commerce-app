import React from 'react';
import './App.css';
import Nav from "./components/Navbar";
import Headerbody from './components/Headerbody';
import SampleProducts from './components/Product'

function App() {
  return (
    <div className="App">
      <Nav />
      <Headerbody />
      <SampleProducts/>
    </div>
  );
}

export default App;
