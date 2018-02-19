


/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


/* App component */
export const About = () => {
  return (
    <div className="about-wrapper">
    <div id="about-flex-col">
    <div className="title-header">About
    <hr className="title-line" />
    </div>
      <div className="about-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
     </div>
     </div>
      <img id="profile" src="" alt="Profile" />

    </div>
  )
}


