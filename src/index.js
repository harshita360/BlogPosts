import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import App from'./components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';


const store=createStore(reducers,applyMiddleware(thunk));




ReactDOM.render(
  //create a redux store and pass it on throgh provider so that any component can get access to the redux store through the provider tag
  <Provider store={store}>
  <App/>
  </Provider>,
  document.querySelector('#root')
);
