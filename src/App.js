import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/Main/Mainsec.css'
import Footer from './components/Footer/Footer';
import Leftbar from './components/Leftbar/Leftbar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemContainer from './components/Main/ItemContainer'
import Welcome from './components/Main/Welcome';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <Navbar/>

        <div id="zona_mid">
          <Leftbar/>

          <div className='item_container'>
              <Switch>
                <Route exact path="/"> <ItemContainer/> </Route>
                <Route exact path='/viziostore'> <Welcome/> </Route> 
                <Route exact path='/detalle/:id'> <ItemDetailContainer/> </Route> 
              </Switch>
                
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
