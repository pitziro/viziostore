import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import Mainsec from './components/Main/Mainsec';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div id='app'>
      <Navbar/>

      <div id="zona_mid">
        <Leftbar/>
        <Mainsec/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
