import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
  state={};
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router />
      </Provider>
    );
  }
}

export default App;
