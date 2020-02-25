import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// var requestInterceptor;
axios.interceptors.request.use((request) => {
    console.log(request);
    return request;
}, err => {
    console.log(err);
    Promise.reject(err);
});
// axios.interceptors.request.eject(requestInterceptor)

axios.interceptors.response.use((response) => {
    console.log(response);
    return response;
}, (err) => {
    Promise.reject(err);
})
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// axios.defaults.headers.common['content-type'] = 'application/json';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
