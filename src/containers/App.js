import React, { Component } from 'react';
import 'bulma/css/bulma.css';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component Imports
import Article from './Article';
import Home from '../components/Home';

import rootReducer from '../reducers';

class App extends Component {
  render() {
    return (
      <Provider store={ createStore(rootReducer, {}, applyMiddleware(thunk)) } >
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/articles" component={Article}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
