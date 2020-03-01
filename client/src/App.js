import './App.css';

import React, { Component } from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import SlideShow from './components/SlideShow';
import NavBar from './components/NavBar'
import CardsContainer from './components/CardsContainer';
import Features from './components/Features';
import Footer from './components/Footer';
import Contact from './components/Contact';


class App extends Component {


render() {
  return (
    <Router>
      <NavBar/>
      <SlideShow/>
      <CardsContainer/>
      <Features/>
      <Contact/>
      <Footer/>
    </Router>
    );
  }
}

export default App;


