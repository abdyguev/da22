import React from 'react';
import './App.css';
import Landing from './components/Landing'
import { Switch, Route } from 'react-router-dom'
import About from "./components/About"
import Contact from "./components/Contact"
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <>
      <Switch>

      <Route exact path="/" component={Landing} />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route path='/instagram' component={() => {
          window.location.href = 'https://www.instagram.com/deadattwentytwo/';
          return null;
        }} />
        <Route path='/spotify' component={() => {
          window.location.href = 'https://www.spotify.com/';
          return null;
        }} />
        <Route path='/youtube' component={() => {
          window.location.href = 'https://www.youtube.com/';
          return null;
        }} />
      </Switch>
    </>
  );
}

export default App;
