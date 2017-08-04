import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchUser, getEmail, getPassword } from '../actions';

class Form extends Component {

	constructor(props) {
		super(props);
		this.getEmailText = this.getEmailText.bind(this);
		this.getPasswordText = this.getPasswordText.bind(this);
	}
	
	onLogin (email, password) {
		const { fetchUser } = this.props;
		fetchUser(email, password);
	}

	getEmailText(e) {
		const { getEmail } = this.props;
		getEmail(e.target.value);
	}

	getPasswordText(e) {
		const { getPassword } = this.props;
		getPassword(e.target.value);
	}

	onClearInput() {
		const { getPassword, getEmail } = this.props;
		getEmail('');
		getPassword('');
	}
	
	redirectToArticles() {
		const { user } = this.props;

		if (user.email != null ) {
			console.log(user);
			return <Redirect to='/articles'/>
		}
	}

	render () {
		const { email, password } = this.props;
		return (
		<div className="">
			<div className="field column is-8 is-offset-2">
			  <h1>Please login to continue</h1>
			  <label className="label">Email</label>
			  <div className="control">
			    <input className="input" type="email" value={email} onChange={this.getEmailText} />
			  </div>
			  <br />

			  <label className="label">Password</label>
			  <div className="control">
			    <input className="input" type="password" value={password} onChange={this.getPasswordText}/>
			  </div>
			</div>

			<div className="field column is-8 is-offset-2 is-grouped">
			  <div className="control">
			    <button type="submit" className="button is-primary" onClick={() => this.onLogin(email, password)}>
			    { this.props.loading ? 'Loading..' : 'Login' }
			    </button>
			  </div>
			  <div className="control">
			    <button className="button is-link" onClick={() => this.onClearInput()}>Clear</button>
			  </div>
			</div>

			{ this.redirectToArticles() }
		</div>
		);
	}
}

const mapStateToProps = ({ user }) => {
	return {
		email: user.email,
		password: user.password,
		user: user.user,
		loading: user.loading
	};
};

export default connect(mapStateToProps, { fetchUser, getEmail, getPassword })(Form);