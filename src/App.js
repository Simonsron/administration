import React,{Component} from 'react'
import {createIncre,createPre} from './redux/action_creator'
export default class App extends Component{
 
  componentDidMount(){
    console.log(this.props.store.getState())
  }
  incre=()=>{
    let num = this.refs.selectNum.value
    this.props.store.dispatch(createIncre(num*1))
  }
  pre=()=>{
    let num = this.refs.selectNum.value
    this.props.store.dispatch(createPre(num*1))
  }
  ifOdd=()=>{
    let num = this.refs.selectNum.value
    let count = this.props.store.getState()
    if(count%2===1){
      this.props.store.dispatch(createIncre(num*1))
    }
  }
  async=()=>{
    let num = this.refs.selectNum.value
    setTimeout(()=>{
      this.props.store.dispatch(createIncre(num*1))
    },1000)
  }
  render(){
    let count = this.props.store.getState()
    return (
        <div>
          <h3>总共计数为{count}</h3>
          <select ref="selectNum">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.incre}>+</button>
          <button onClick={this.pre}>-</button>
          <button onClick={this.ifOdd}>increment if odd</button>
          <button onClick={this.async}>increment async</button>
        </div>
    )
  }
}