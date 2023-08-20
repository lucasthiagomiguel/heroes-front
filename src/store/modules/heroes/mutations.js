import * as types from './mutation-types'; 

export default{
    [types.SET_HEROES](state,payload){
        state.heroes = payload 
    },
    [types.SET_MODAL](state,payload){
        state.modal = payload 
    },
    
    
}