import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
// dont need relative paths for modules
// import is done this way since I did npm install materialize-css
// instead of just embedding the style link onto the html page.
import 'materialize-css/dist/css/materialize.min.css';

import App from './components/app';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.querySelector('#root')
);
