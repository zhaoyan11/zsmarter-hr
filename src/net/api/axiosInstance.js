import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: '/api/',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default axiosInstance;
