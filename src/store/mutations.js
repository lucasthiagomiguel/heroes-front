import * as types from './mutation-types'; 

export default{
    [types.SET_USER](state,payload){
        state.user = payload 
    },
    [types.SET_TOKEN](state,payload){
        state.token = payload 
    },
    [types.SET_AUTHENTICATED](state,payload){
        state.authenticated = payload 
    },
    [types.SET_HEROES](state,payload){
        state.heroes = payload 
    },
    
    
}