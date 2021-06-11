import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import './index.css';
import Navigator from './navigation'
import reducer from './reducer'

const store = createStore(
  reducer,
  applyMiddleware(thunk, reduxLogger)
  );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navigator />
      <div className="pages-navigation">
        <div>
          <div className="main-page-navigation"></div>
          <div className="profile-page-navigation"></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

