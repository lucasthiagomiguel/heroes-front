import * as types from './mutation-types';
import axios  from '@/axios';
import * as storage from '../../storage';



export const ActionDelete = ({dispatch},payload) =>{
    return  axios.delete(`/knights/${payload}`).then(({data})=>{
        dispatch('GetHeroes');
        if(data.menssage){
            dispatch('ActionSetModal',true);
            setTimeout(()=>{
                dispatch('ActionSetModal',false);
            },5000)
        }
        console.log(data)
     }).catch((error)=>{
         
         console.log(error);
     })
 }

 export const ActionCreate = ({dispatch},payload) =>{
    return  axios.post('/knights',payload).then(({data})=>{
        console.log('action',payload)
        dispatch('GetHeroes');
        console.log(data)
     }).catch((error)=>{
         
         console.log(error);
     })
 }

export const GetHeroes = ({dispatch},payload) =>{
    return  axios.get('/knights').then(({data})=>{
        dispatch('ActionSetHeroes',data);
        console.log('testeteststeet')
        }).catch((error)=>{
            console.log(error);
        })
}
 





export const ActionSetHeroes = ({commit},payload) =>{
    commit(types.SET_HEROES,payload)
    
}

export const ActionSetModal = ({commit},payload) =>{
    commit(types.SET_MODAL,payload)
    
}

