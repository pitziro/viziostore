import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Leftbar from './components/Leftbar/Leftbar';
import CarritoDetail from './components/Main/CarritoDetail';
import ItemContainer from './components/Main/ItemContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import './components/Main/Mainsec.css';
import OrdenDeCompra from './components/Main/OrdenDeCompra';
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
                <Route exact path="/"> <Welcome/> </Route>
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
