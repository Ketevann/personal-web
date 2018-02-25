import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export const Footer = () => {
  return(
    <div id="footer-wrapper">

    <div id="icons">
    <a href="https://github.com/Ketevann/"><img id="git" className="ind-icons" src={require('../public/img/githubLogo.png')} alt=""/></a>
   <a href="https://www.linkedin.com/in/ketti-barateli/"><img id="linkedin" className="ind-icons" src={require('../public/img/linkedin.png')} alt=""/></a>
   <a href="mailto:ketevan.tsin@gmail.com"><img id="email" className="ind-icons" src={require('../public/img/email.png')} alt=""/></a>
    </div>
    <div id="footer-name">© Ketevan Barateli</div>
    </div>
  )
}