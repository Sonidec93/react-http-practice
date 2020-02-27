import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
instance.defaults.headers.common['content-type'] = 'application/json';



export default instance;