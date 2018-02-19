


/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Category from './Category'
import { Carousel, Item, Caption } from 'react-bootstrap'


const allImages = {


  images: {
    img: [
    { image: require("../img/Teacup-1.png") },
     { image: require("../img/Teacup-2.png") },
    { image: require("../img/Teacup-3.png") },
    { image: require("../img/Teacup-4.png") },
    { image: require("../img/Teacup-5.png") },
    ]
  },
  imagesMerc: {
    img: [ { image: require("../img/mercury-1.png") },
     { image: require("../img/mercury-2.png") },
    { image: require("../img/mercury-3.png") },

    ]
  },
  imagesbookApp: {
    img: [{ image: require("../img/bookapp-1.png") },
   { image: require("../img/bookapp-2.png") },
   { image: require("../img/bookapp-3.png") },]
  }
}



/* App component */
const Slideshow = (props) => {
  const images = allImages[props.img]
  return (

    <div className="slideshow">
      <Carousel>

        {images.img.map(elem => {

          console.log(elem);
          return (
            <Carousel.Item>
              <img className="slide-img" width={400} height={100} alt="900x500" src={elem.image} />
            </Carousel.Item>)


        })}
      </Carousel>
      </div>
  )
}

export default Slideshow;