import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
)