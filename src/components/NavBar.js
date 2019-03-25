import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header className="header">
        <ul className="nav">
          <a className="nav-link" href="/">About</a>
          <a className="nav-link" href="/resume">Resume</a>
        </ul>
      </header>
    )
  }
}
export default NavBar;