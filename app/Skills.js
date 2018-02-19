


/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


/* App component */
export const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div id="about-flex-col">
        <div id="skills" className="title-header">
        Skills
    <hr className="title-line" />
        </div>
        <div className="list-of-skills">
        <ul>
        <li className="list-name-header">Front End</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Redux</li>
          <li>React Native</li>
          <li>JQuery</li>
          <li>Axios</li>
        </ul>
        <ul>
         <li className="list-name-header">Back End</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>SQL/PostreSQL</li>
          <li>Sequelize</li>
          <li>Firebase</li>
        </ul>
        <ul>
         <li className="list-name-header">Tools</li>
          <li>Git + Github</li>
          <li>Command Line</li>
          <li>Chrome Devtools</li>
          <li>Postman</li>
          <li>Postico</li>
          <li>Mocha/Chai</li>
          <li>Expo</li>
          <li>Xcode</li>
          <li>Agile</li>
        </ul>
        </div>
      </div>
    </div>
  )
}


