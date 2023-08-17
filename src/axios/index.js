import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3333/'
});

 axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';


export default axiosInstance;
