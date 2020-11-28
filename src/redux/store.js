import {createStore} from 'redux'//从redux众引入createStore，用于创建最核心的store对象

import reducer from './reducer'

export default createStore(reducer)