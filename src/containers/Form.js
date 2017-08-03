import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import { fetchUser, getEmail, getPassword } from '../actions/user_action';

class Form extends Component {
	
	onLogin (email, password) {
		this.props.fetchUser(email, password);
	}

	getEmailText(e) {
		this.props.getEmail(e.target.value);
	}

	getPasswordText(e) {
		this.props.getPassword(e.target.value);
	}

	onClearInput() {
		this.props.getEmail('');
		this.props.getPassword('');
	}
	
	redirectToHome() {
		if (this.props.user.email != null ) {
			console.log(this.props.user);
			return <Redirect to='/navbar'/>
		}
	}

	render () {
		return (
		<div className="">

			<div className="field column is-8 is-offset-2">
			  <label className="label">Email</label>
			  <div className="control">
			    <input className="input" type="email" value={this.props.email} onChange={this.getEmailText.bind(this)} />
			  </div>
			  <br />

			  <label className="label">Password</label>
			  <div className="control">
			    <input className="input" type="password" value={this.props.password} onChange={this.getPasswordText.bind(this)}/>
			  </div>
			</div>
			
			{this.redirectToHome()}

			<div className="field column is-8 is-offset-2 is-grouped">
			  <div className="control">
			    <button type="submit" className="button is-primary" onClick={() => this.onLogin(this.props.email, this.props.password)}>Login</button>
			  </div>
			  <div className="control">
			    <button className="button is-link" onClick={() => this.onClearInput()}>Clear</button>
			  </div>
			</div>
		</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		email: state.user.email,
		password: state.user.password,
		user: state.user.user
	};
};

export default connect(mapStateToProps, { fetchUser, getEmail, getPassword })(Form);