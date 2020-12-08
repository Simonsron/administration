import React,{Component} from 'react'
import './css/login.less'
import Logo from './imgs/logo.png'
import { Form, Input, Button} from 'antd';
import {connect} from 'react-redux'
import {creacteDemo1Action,creacteDemo2Action} from '../../redux/action_creators/test_action'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends Component{
  pswValidator=(rule,value)=>{
    if(!value){
      return Promise.reject('请输入密码')
    }else if(value.length<4){
      return Promise.reject('密码不能少于4位')
    }else if(value.length>12){
      return Promise.reject('密码不能多于12位')
    }else if(!(/^\w+$/).test(value)){
      return Promise.reject('密码必须是字母、数字、下划线组成')
    }else{
      return Promise.resolve();
    }
  }
  onFinish = values => {
    console.log('Received values of form: ', values);
  };
  render(){
    return (
      <div className="login">
        <header>
          <img src={Logo} alt=""/>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <Form name="complex-form" onFinish={this.onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 20 }}>
            <Form.Item>
              <Form.Item
                name="username"
                noStyle
                rules={[
                  { required: true, message: '用户名必须输入!' },
                  { min: 4, message: '用户名不能少于4位!' },
                  { max: 12, message: '用户名不能多于12位!' },
                  { pattern: /^\w+$/, message: '用户名必须是字母、数字、下划线组成' }
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,0.25)'}}/>}  placeholder="请输入用户名" />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Form.Item
                name="password"
                noStyle
                rules={[
                 {validator:this.pswValidator}
                ]}
              >
                <Input prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="请输入密码" />
              </Form.Item>
            </Form.Item>
           <Form.Item colon={false}>
              <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                登录
              </Button>
            </Form.Item>
          </Form>
       </section>
      </div>
    )
  }
}
export default connect(
  state=>({demo:state.test}),
  {
    demo1:creacteDemo1Action,
    demo2:creacteDemo2Action
  }
)(Login)