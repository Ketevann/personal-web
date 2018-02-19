


/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Slideshow from './Slideshow'

/* App component */
export const Work = () => {
  return (
    <div className="some">
    <div id="work-header">
    <div id="work" className="title-header">
        Work
    <hr className="title-line" />
        </div>
        </div>
        <div className="wrapper-flex-row">
          <div className="work-felx-col">
            <div id="work-title">Teacup</div>
            <div id="work-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
            <div className="buttons">
              <div className="see-button see-button-first"><a id="anchor-btn-first" href="https://github.com/Ketevann/teacup">See Code</a></div>
              <div className="see-button see-button-sec"><a
              id="anchor-btn-sec" href="https://tea-cup.herokuapp.com/">See Demo</a></div>
            </div>
          </div>
          <div className="individual-slides1">
            <Slideshow header={"TeaCup"} subHeader={"E-commerce web app"}
              description={"Allows users(logged in and logged out) to choose product items and add them to cart edit(update, remove) cart items post product reviews view/delete/update reviews view orders Allows admin to view and update product information view all orders view all users change users from user to admin"}
              img={"images"} />
          </div>
        </div>
        <div className="wrapper-flex-row">
          <div className="work-felx-col">
            <div id="work-title">Mercury</div>
            <div id="work-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
            <div className="buttons">
              <div className="see-button see-button-first"><a
              id="anchor-btn-first" href="https://github.com/Ketevann/mercury">See Code</a></div>
              <div className="see-button see-button-sec">
                <a
                id="anchor-btn-sec"
                href="https://app-mercury.herokuapp.com/">
                  See Demo</a></div>
            </div>
          </div>


          <div className="individual-slides2">

            <Slideshow header={"Mercury"} subHeader={"Personal Budget App"}
              description={"Allows users(logged in and logged out) to choose product items and add them to cart edit(update, remove) cart items post product reviews view/delete/update reviews view orders Allows admin to view and update product information view all orders view all users change users from user to admin"}
              img={["imagesMerc"]} />
          </div>
        </div>
        <div className="wrapper-flex-row">
          <div className="work-felx-col">
            <div id="work-title">BookApp</div>
            <div id="work-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
            <div className="buttons">
              <div className="see-button see-button-first"><a
              id="anchor-btn-first" href="https://github.com/Ketevann/bookapp">See Code</a></div>
            </div>
          </div>




          <div className="individual-slides3">
            <Slideshow header={"Mercury"} subHeader={"Personal Budget App"}
              description={"Allows users(logged in and logged out) to choose product items and add them to cart edit(update, remove) cart items post product reviews view/delete/update reviews view orders Allows admin to view and update product information view all orders view all users change users from user to admin"}
              img={["imagesbookApp"]} />
          </div>
        </div>
      </div>


  )
}


