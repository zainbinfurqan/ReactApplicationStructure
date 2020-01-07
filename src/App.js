import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from 'pages/home'
import AboutUs from 'pages/about'
import 'assets/css/main.css'
import { Router } from "@reach/router";
import {NotFound}  from 'pages/NotFound'
function App() {
  return (
    <Router>
      <Home path='/'/>
      <AboutUs path="/about" />
      <NotFound default />
    </Router>
  );
}

export default App;
