import Welcome from './components/Main/Welcome';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemContainer from './components/Main/ItemContainer'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './components/Main/Mainsec.css'
import './App.css';


function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <Navbar/>

        <div id="zona_mid">
          <Leftbar/>

          <div className='item_container'>
              <Switch>
                <Route exact path="/"> <Welcome/> </Route>
                <Route exact path='/viziostore'> <ItemContainer/> </Route> 
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
