import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log(request);
    return request;
})