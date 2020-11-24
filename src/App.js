import React,{Component} from 'react';//引入react核心库
import {Route,Switch} from 'react-router-dom'
import './App.less';//react脚手架中引入样式的方式
import Login from './page/login/login.jsx';
import Admin from './page/admin/admin.jsx';
//通过关键字对作者进行axios请求查找对应的作者并展示作者的头像和名字
export default class App extends Component{
  render(){
    return (
      <div className="app">
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/admin" component={Admin}></Route>
        </Switch>

      </div>
    )
  }
}


