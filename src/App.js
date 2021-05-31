import Welcome from './components/Main/Welcome';
import React from 'react';
import OrdenDeCompra from './components/Main/OrdenDeCompra'
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemContainer from './components/Main/ItemContainer'
import Footer from './components/Footer/Footer';
import CarritoDetail from './components/Main/CarritoDetail'
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
                <Route exact path="/viziostore"> <Welcome/> </Route>
                <Route exact path='/tienda'> <ItemContainer/> </Route> 
                <Route exact path='/detalle/:id'> <ItemDetailContainer/> </Route> 
                <Route exact path='/carritolist'> <CarritoDetail/> </Route> 
                <Route exact path='/ordendecompra'> <OrdenDeCompra/> </Route> 
              </Switch>
                
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
