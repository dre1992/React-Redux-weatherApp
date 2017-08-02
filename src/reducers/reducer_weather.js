import {FETCH_WEATHER} from '../actions/index'
export default function(state=[],action) {
  switch(action.type){
    case FETCH_WEATHER:
      return [action.payload.data,...state];       // return state.concat([action.paypload.data]); the same as below
//Never manipulate state send a fresh state every time state.push would be wrong here
  }
  return state;
}
