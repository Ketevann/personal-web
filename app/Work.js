


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
          <div id="work-text">
          Tea-cup is an e-commerce website for tea products. Users can view different types of teas, search for a particular tea and add to a shopping cart. Additionally, logged in users can post reviews for products they have previously purchased, as well as edit their reviews and view their purchase history.
                </div>
          <div id="work-text">Used Node ,Express, PostgreSQL, Sequelize, React-Redux, Axios, Auth, Passport </div>
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
          <div id="work-text">Personal budget web app that allows users to add budget for categories such as food and entertainment. Users can link their bank account and compare their monthly spending by category to their overall budget. Updates are emailed of whether or not the user met the overall budget goal.
          </div>
          <div id="work-text">Used Node, PostgreSQL, React-Redux, Auth, Passport, Express, Sequelize, Axios, Plaid API, Recharts, Chai
          </div>
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
          <div id="work-text">Book recommedation mobile app. Allows the user to search for book recommendations based on similar titles or books by the same author. Saves books by swiping the deck right or removes the books by swiping left. Allows the user to mark a saved books as 'read' and to delete saved books by clicking  delete button.</div>
          <div id="work-text">Used React Native, React Native Router Flux, Firebase, React/Redux, Axios, TastediveApi, GoogleBooks Api </div>
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


