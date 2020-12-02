import React,{Component} from 'react'
// import {createIncre,createPre} from './redux/action_creator'
export default class Counter extends Component{
 
  componentDidMount(){
    console.log(this.props)
  }
  incre=()=>{
    // let num = this.refs.selectNum.value
    let num = this.select.value
    // this.props.store.dispatch(createIncre(num*1))
    this.props.incre(num*1)
  }
  pre=()=>{
    let num = this.select.value
    // let num = this.refs.selectNum.value
    // this.props.store.dispatch(createPre(num*1))
    this.props.decre(num*1)
  }
  ifOdd=()=>{
    // let num = this.refs.selectNum.value
    let num = this.select.value
    let count = this.props.count
    if(count%2===1){
      this.props.incre(num*1)
    }
  }
  async=()=>{
    let num = this.select.value
    // let num = this.refs.selectNum.value
    this.props.increAsync(num*1,1000)
    // setTimeout(()=>{
    //   this.props.incre(num*1)
    // },1000)
  }
  render(){
    // let count = this.props.store.getState()
    return (
        <div>
          <h3>总共计数为{this.props.count},总共有{this.props.person.length}个人</h3>
          {/* <select ref="selectNum"> */}
          <select ref={(select)=>this.select=select}>
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