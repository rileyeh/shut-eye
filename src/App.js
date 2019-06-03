import React from 'react';
import './App.css';

import Display from './Components/Display/Display'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <Footer />
    </div>
  );
}

export default App;
