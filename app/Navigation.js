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

    // this.setState({ collapsed: !this.state.collapsed})
     //console.log(this.state.collapsed)
  }
  render() {
    console.log('toggled', this.state)
    {this.state.collapsed ?
    divStyle.display = 'none'
     : null
}
    return (<Navbar onToggle={this.setNavExpanded}>
      <img id="nav-img" src={require('../img/group@3x.png')} alt="" />
      <Navbar.Header>
        <Navbar.Brand>

          <div style={{display: this.state.collapsed ? 'none' : 'block'} } className="nav-header-wrapper">
            <div  id="navbar-header">KETEVAN BARATELI</div>
            <div stye={{divStyle}} id="navbar-subheader">Full stack developer</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />

      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem className="nav-item" eventKey={1} href="#work">
            <div className="nav-item">Work</div>
          </NavItem>
          <NavItem className="nav-item" eventKey={2} href="#about">
            <div className="nav-item">About</div>
          </NavItem>
          <NavItem className="nav-item" eventKey={3} href="#icons">
            <div className="nav-item">Contact</div>
          </NavItem>

        </Nav>
      </Navbar.Collapse>
    </Navbar>)
  }
}

