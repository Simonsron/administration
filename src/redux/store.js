//从redux引入creactStore，用于创建最核心的store对象
import {createStore,applyMiddleware} from 'redux'

//引入reducer
import reducers from './reducers'

//引入redux-thunk
import thunk from 'react-redux'

//引入redux-devtools-extension，用于支持redux开发工具
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))