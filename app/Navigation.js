import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const divStyle = {
  display: ''
}


export default class Navigation extends Component {
    constructor(props){
    super(props)
    this.state = { collapsed: false}
    this.setNavExpanded = this.setNavExpanded.bind(this)
  }

  setNavExpanded(){
    this.setState({ collapsed: !this.state.collapsed})

  }
  render() {
    {this.state.collapsed ?
    divStyle.display = 'none'
     : null
}
    return (<Navbar onToggle={this.setNavExpanded} className="nav-bar-img">
      <Navbar.Header>
        <Navbar.Brand>
          <div style={{display: this.state.collapsed ? 'none' : 'block'} } className="nav-header-wrapper">
            <div  id="navbar-header">KETEVAN BARATELI</div>
            <div id="navbar-subheader">Full stack developer</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse style={{display: this.state.collapsed ? 'block' : 'none'} }>
        <Nav pullRight >
          <NavItem className="nav-item" eventKey={1} href="#work">
            <div className="nav-item">Work</div>
          </NavItem>
          <NavItem className="nav-item" eventKey={3} href="#icons">
            <div className="nav-item">Contact</div>
          </NavItem>
          <NavItem className="nav-item" eventKey={3} href="#icons">
             <a  className="nav-item" href="Ketti-Barateli-resume.pdf" target="_blank">
             Resume</a>
          </NavItem>


        </Nav>
      </Navbar.Collapse>
    </Navbar>)
  }
}

