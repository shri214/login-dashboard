import {createStore} from 'redux'

export function reducer(state={name:"", email:""}, action){
  if(action.type==="credential"){
    return {...state, name:action.payload.name, email:action.payload.email}
  }
  return state;
}
export const store=createStore(reducer);

// store.subscribe(()=>{
//   console.log(store.getState());
  
// })







