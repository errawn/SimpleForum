import React, { Component } from 'react';
import 'bulma/css/bulma.css';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Component Imports
import Content from '../components/Content';
import Form from './Form';
import Navbar from '../components/Navbar';

import rootReducer from '../reducers';

class App extends Component {
  render() {
    return (
      <Provider store={ createStore(rootReducer, {}, applyMiddleware(thunk)) } >
        <div>
            <Navbar />
            <Content>
            	<Form />
            </Content>
        </div>
      </Provider>
    );
  }
}

export default App;
