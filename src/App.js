import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import Mainsec from './components/Main/Mainsec';
import Footer from './components/Footer/Footer';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ItemDetailContainer from './components/Main/ItemDetailContainer';


function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <Navbar/>

        <div id="zona_mid">
            <Leftbar/>
            
            <Switch>
              <Route exact path="/"> <Mainsec/> </Route>
              <Route exact path='/detalle/:id'> <ItemDetailContainer/> </Route> 
            </Switch>
              
        </div>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
