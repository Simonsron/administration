import {INCRE,PRE} from '../action_types'
let initState = 0//设置初始化状态
export default function operaCount(preState=initState,action){
  console.log('------reducer-------',action);
  let {type,data} = action
  //根据action中的type喝data，决定应该怎么操作状态
  let newState
  switch (type) {
    case INCRE:
      newState = preState + data
      return newState
    case PRE:
      newState = preState - data
      return newState
    default:
      return preState
  }
 }