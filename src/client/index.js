import React from 'react'
import ReactDom from 'react-dom'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import fruitsReducer from './reducers/fruitsReducer'

import App from './containers/app'

const fruitsNumber = 5;
const fruitsFactory = (n) => _.times(n, id => ({id, color: '', icon: ''}))

const initialState = {
  fruits: fruitsFactory(fruitsNumber),
};

// console.log(initialState);

const oneArmedStore = createStore(
  fruitsReducer,
  initialState,
  applyMiddleware(createLogger(), thunk)
);

ReactDom.render(
  <Provider store={oneArmedStore}>
    <App />
  </Provider>, document.getElementById('react-wrapper')
);
