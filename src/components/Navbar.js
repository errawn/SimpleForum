import React, { Component } from 'react';

export default class Navbar extends Component {
	render () {
		return (
			<nav className="navbar ">
			  <div className="navbar-brand">
			    <a className="navbar-item" href="http://bulma.io">
			      
			    </a>

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
			    <div className="navbar-start">
			      <div className="navbar-item has-dropdown is-hoverable">
			        <a className="navbar-link  is-active" href="/documentation/overview/start/">
			          Docs
			        </a>
			        <div className="navbar-dropdown ">
			          <a className="navbar-item " href="/documentation/overview/start/">
			            Overview
			          </a>
			          <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
			            Modifiers
			          </a>
			          <a className="navbar-item " href="http://bulma.io/documentation/grid/columns/">
			            Grid
			          </a>
			          <a className="navbar-item " href="http://bulma.io/documentation/form/general/">
			            Form
			          </a>
			          <a className="navbar-item " href="http://bulma.io/documentation/elements/box/">
			            Elements
			          </a>
          
			            <a className="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
			              Components
			            </a>
          
		          <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
		            Layout
		          </a>
		          <hr className="navbar-divider" />
		          <div className="navbar-item">
		            <div>
		              <p className="is-size-6-desktop">
		                <strong className="has-text-info">0.5.0</strong>
		              </p>
		              
		                <small>
		                  <a className="view-all-versions" href="/versions">View all versions</a>
		                </small>
		              
		            </div>
		          </div>
		        </div>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link " href="http://bulma.io/blog/">
          Blog
        </a>
        <div id="blogDropdown" className="navbar-dropdown " data-style={{width: '18rem'}}>
          
            <a className="navbar-item" href="/2017/08/01/bulma-bootstrap-comparison/">
              <div className="navbar-content">
                <p>
                  <small className="has-text-info">01 Aug 2017</small>
                </p>
                <p>Bulma / Bootstrap comparison</p>
              </div>
            </a>
          
            <a className="navbar-item" href="/2017/07/24/access-previous-bulma-versions/">
              <div className="navbar-content">
                <p>
                  <small className="has-text-info">24 Jul 2017</small>
                </p>
                <p>Access previous Bulma versions</p>
              </div>
            </a>
          
            <a className="navbar-item" href="/2017/03/10/new-field-element/">
              <div className="navbar-content">
                <p>
                  <small className="has-text-info">10 Mar 2017</small>
                </p>
                <p>New field element (for better controls)</p>
              </div>
            </a>
          
          <a className="navbar-item" href="http://bulma.io/blog/">
            More posts
          </a>
          <hr className="navbar-divider" />
          <div className="navbar-item">
            <div className="navbar-content">
              <div className="level is-mobile">
                <div className="level-left">
                  <div className="level-item">
                    <strong>Stay up to date!</strong>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <a className="button is-rss is-small" href="http://bulma.io/atom.xml">
                      <span className="icon is-small">
                        <i className="fa fa-rss"></i>
                      </span>
                      <span>Subscribe</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-link">
          More
        </div>
        <div id="moreDropdown" className="navbar-dropdown ">
          <a className="navbar-item " href="http://bulma.io/extensions/">
            <div className="level is-mobile">
              <div className="level-left">
                <div className="level-item">
                  <p>
                    <strong>Extensions</strong>
                    <br />
                    <small>Side projects to enhance Bulma</small>
                  </p>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <span className="icon has-text-info">
                    <i className="fa fa-plug"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <a className="navbar-item " href="http://bulma.io/expo/">
        
        Expo
      </a>
      <a className="navbar-item " href="http://bulma.io/love/">
        
        Love
      </a>
    </div>

    <div className="navbar-end">
      <a className="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" >
        Github
      </a>
      <a className="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" >
        Twitter
      </a>
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="tw-button button"
  data-social-network="Twitter"
  data-social-action="tweet"
  data-social-target="http://bulma.io"
  
  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
  <span className="icon">
    <i className="fa fa-twitter"></i>
  </span>
  <span>
    Tweet
  </span>
</a>
          </p>
          <p className="control">
            <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.0.zip">
              <span className="icon">
                <i className="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
		);
	}
}