import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPosts } from '../actions';

import Navbar from '../components/Navbar';


class Article extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	renderArticles() {
		const ArticleCard = (
			<div>
			<Navbar />
			<div className="card column is-8 is-offset-2">
			  <header className="card-header">
			    <p className="card-header-title">
			      Component
			    </p>
			    <a className="card-header-icon">
			      <span className="icon">
			        <i className="fa fa-angle-down"></i>
			      </span>
			    </a>
			  </header>
			  <div className="card-content">
			    <div className="content">
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
			      <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
			      <br />
			      <small>11:09 PM - 1 Jan 2016</small>
			    </div>
			  </div>
			  <footer className="card-footer">
			    <a className="card-footer-item">Save</a>
			    <a className="card-footer-item">Edit</a>
			    <a className="card-footer-item">Delete</a>
			  </footer>
			</div>
			</div>
		);

		if (this.props.loading) {
			return <h1>Fetching Articles...</h1>
		}
		else {
			return ArticleCard;
		}
	}

	render () {
		return (
			<div className="container">
			{ this.renderArticles() }
			</div>
		);
	}
}

const mapStateToProps = ({ user_posts }) => {
	return {
		posts: user_posts.posts,
		loading: user_posts.loading
	};
};

export default withRouter(connect(mapStateToProps, { fetchPosts })(Article));