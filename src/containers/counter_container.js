import Counter from '../components/counter'
import {createIncre,createPre,createIncreAsync} from '../redux/actions/counter_action'
import {connect} from 'react-redux'
/*
function mapStateToprops(state){
  return {count:state}
}
*/
// let mapStateToprops = state =>({count:state})
/*
function mapDispatchToProps(dispatch){
  return {
    incre:(value)=>{dispatch(createIncre(value))},
    decre:(value)=>{dispatch(createPre(value))}
  }
}*/
// let mapDispatchToProps = dispatch=>({
//     incre:(value)=>{dispatch(createIncre(value))},
//     decre:(value)=>{dispatch(createPre(value))}
// })
// export default connect(mapStateToprops,mapDispatchToProps)(Counter)
export default connect(
  state =>(
    {count:state.count,person:state.person}),
    {
      incre:createIncre,
      decre:createPre,
      increAsync:createIncreAsync
    }
  )(Counter)