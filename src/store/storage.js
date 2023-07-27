import  axios  from "@/axios";

export const setHeaderToken = token =>{
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
export const getLocalToken = () => localStorage.getItem('token');
export const deleteLocalToken = () => localStorage.removeItem('token');
export const setLocalToken = token => localStorage.setItem('token', token);