
import {createStore} from 'redux'

let reducer = function(state, action){
    if(state == null){
		state = {
			addr: '深圳',	
			id:3828
		};
    }
    if(action.type === 'changeaddr'){
		state.addr = action.val;
	} 
    
    return state;
}

export default createStore(reducer);