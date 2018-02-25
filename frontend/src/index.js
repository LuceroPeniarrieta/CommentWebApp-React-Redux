import React from 'react';
import { createStore, applyMiddleware, compose} from 'redux';
import { render } from 'react-dom';
import Root from './components/Root';
import thunk from 'redux-thunk';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
      applyMiddleware(thunk)
  )
);

render(
  <Root store={store}/>,
  document.getElementById('root')
)
