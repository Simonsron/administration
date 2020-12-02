import {createStore,applyMiddleware} from 'redux'//从redux众引入createStore，用于创建最核心的store对象

import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'

import thunk from 'redux-thunk'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))