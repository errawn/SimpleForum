import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

export default class Navbar extends Component {
	render () {
		return (
			<nav className="navbar ">
			  <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            SimpleForum
          </Link>

			    <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma">
			      <span className="icon" style={{color: '#333'}}>
			        <i className="fa fa-github"></i>
			      </span>
			    </a>

			    <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms">
			      <span className="icon" style={{color: '#55acee'}}>
			        <i className="fa fa-twitter"></i>
			      </span>
			    </a>

			    <div className="navbar-burger burger" data-target="navMenuExample">
			      <span></span>
			      <span></span>
			      <span></span>
			    </div>
			  </div>

			  <div id="navMenuExample" className="navbar-menu">
    <div className="navbar-end">
      <Link to="/articles" className="navbar-item is-hidden-desktop-only">
        Home
      </Link>
      <a className="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" >
        Profile
      </a>
      
    </div>
  </div>
</nav>
		);
	}
}