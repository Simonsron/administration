import React,{Component} from 'react'
import {connect} from 'react-redux'
import {creacteDemo1Action} from '../../redux/action_creators/test_action'
class Admin extends Component{
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    return (
      <div>
        Admin
      </div>
    )
  }
}
export default connect(
  state=>({test:state.test}),
  {
    test1:creacteDemo1Action
  }
)(Admin)