import React from 'react';
import {
    Nav,
    NavLink,
  } from 'reactstrap';
  import './css/App.css';

class Header extends React.Component {
  render() {
    const { props } = this.props;
    const navLinkStyle = {color: "white", marginRight: "60px", marginLeft: "60px",cursor: "pointer"};
    return (
      <div className="navBar">
        <Nav>
          <NavLink style={navLinkStyle}>Home</NavLink>
          <NavLink onClick={() => {console.log("abc")}} style={navLinkStyle}>Menu</NavLink>
          <NavLink style={navLinkStyle}>About</NavLink>
          <NavLink style={navLinkStyle}>Contact</NavLink>
        </Nav>
    </div>
    );
  }
}

export default Header;