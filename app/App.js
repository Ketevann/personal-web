


/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import  Slideshow from './Slideshow'
import  Navigation  from './Navigation'
import { About } from './About';
import { Skills } from './Skills';
import { Work } from './Work';
import { Footer } from './Footer';


/* App component */
class App extends React.Component {


  render() {

    return (

      <div className="wrapper-col-flex" >
      <Navigation />
      <About/>
      <Skills />
      <Work />
      <Footer/>




      </div>
    )
  }
}
export default App;