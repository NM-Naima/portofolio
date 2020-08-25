import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';

function Routes() {
  return ( 
    <div className="App">
     <Router>
       <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>    
          <Route path="/about">
            <About />
          </Route> 
          <Route path="/contact">
            <Contact />
          </Route>  
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default Routes;