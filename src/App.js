import React from 'react';
import Rectangle from './components/Rectangle/Rectangle';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import './app.css';

const App = () => {
  return (
      <div>
      <Rectangle/>
      <div className='outer-box'>
        <Navbar/>
        <Section/>
        
      </div>
    </div>
  )
}

export default App