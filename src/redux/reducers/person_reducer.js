let initperson = [{name:'lisi',age:18},{name:'wade',age:15}]

export default function operaPerson(preState=initperson,action){
  console.log(action);
  return preState
}