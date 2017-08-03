import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './containers/App';
import Navbar from './components/Navbar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App}/>
			<Route path="/navbar" component={Navbar}/>
		</div>
	</Router>

, document.getElementById('root'));
registerServiceWorker();
