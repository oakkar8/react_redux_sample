import React from 'react';
import Navigation from './components/Navigation';
import Cart from './components/Cart';
import Home from './components/Home';
import Item from './components/Item';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/singleitem" component={Item}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
