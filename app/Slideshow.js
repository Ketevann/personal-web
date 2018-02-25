


/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Carousel, Item, Caption } from 'react-bootstrap'
import { Fade } from 'react-slideshow-image';


const allImages = {


  images: {
    img: [
    { image: require("../public/img/Minimalist@2x.png") },
     { image: require("../public/img/log.png") },
     { image: require("../public/img/pr2.png") },
      { image: require("../public/img/iPhone-5.png") },
     { image: require("../public/img/add@2x.png") },
    { image: require("../public/img/cart@2x.png") },
    { image: require("../public/img/addreview@2x.png") },
    { image: require("../public/img/gotocart@2x.png") },

    { image: require("../public/img/order@2x.png") },
     { image: require("../public/img/review@2x.png")},
     { image: require("../public/img/single@2x.png") },

    ]
  },
  imagesMerc: {
    img: [   { image: require("../public/img/m1.png") },
       { image: require("../public/img/mlogin@2x.png") },
             { image: require("../public/img/m4.png") },
              { image: require("../public/img/m2.png") },
        { image: require("../public/img/m3.png") },
    //  { image: require("../public/img/mercury-2.png") },



{ image: require("../public/img/plaid.png") },

    ]
  },
  imagesbookApp: {

    img: [
       { image: require("../public/img/iPhone-8-Gold@2x.png") },
      { image: require("../public/img/bookapp3@2x.png") },

    { image: require("../public/img/Group4@2x.png") },
    { image: require("../public/img/iPhoneb@2x.png") },

      { image: require("../public/img/1@2x.png") },


    ]
  }
}



/* App component */
const Slideshow = (props) => {
  const images = allImages[props.img]
  return (

    <div className="slideshow">
      <Carousel className="carousel ">
        {images.img.map(elem => {
          return (
            <Carousel.Item >
              <img className="slide-img" src={elem.image} />
            </Carousel.Item>)
        })}
      </Carousel>
      </div>
  )
}

export default Slideshow;