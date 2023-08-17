import * as types from './mutation-types';
import axios  from '@/axios';
import * as storage from './storage';
import router from '@/router';

export const ActionSetLogin = ({dispatch},payload) =>{
   return  axios.post('/sessions',payload).then(({data})=>{
    //    console.log(data);
    dispatch('ActionAuthenticated',true);
    dispatch('ActionSetToken',data.token);
    storage.setHeaderToken(data.token);
    storage.setLocalToken(data.token);
    dispatch('UserLoged');
    router.push('/dashboard')
    }).catch((error)=>{
        dispatch('ActionAuthenticated',false)
        console.log(error);
    })
}

export const ActionDelete = ({dispatch},payload) =>{
    return  axios.delete(`/knights/${payload}`).then(({data})=>{
        console.log(payload);
     dispatch('GetHeroes');
     }).catch((error)=>{
         dispatch('ActionAuthenticated',false)
         console.log(error);
     })
 }

export const GetHeroes = ({dispatch},payload) =>{
    return  axios.get('/knights').then(({data})=>{
        dispatch('ActionSetHeroes',data);
        }).catch((error)=>{
            console.log(error);
        })
}
    


export const ActionSetUser = ({commit},payload) =>{
    commit(types.SET_USER,payload)
}

export const ActionAuthenticated = ({commit},payload) =>{
    commit(types.SET_AUTHENTICATED,payload)
    
}

export const ActionSetToken = ({commit},payload) =>{
    commit(types.SET_TOKEN,payload)
}



export const ActionSetHeroes = ({commit},payload) =>{
    commit(types.SET_HEROES,payload)
    
}
export const ActionSingOut = ({dispatch}) => {
    storage.setHeaderToken('');
    storage.deleteLocalToken();
    dispatch('ActionSetUser',{});
    dispatch('ActionSetToken','');

}
