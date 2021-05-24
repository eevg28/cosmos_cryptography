import axios from 'axios';

var axiosResult = axios.create({
  withCredentials: true,
  crossDomain: true,
  baseURL: "./",
});

export default axiosResult;
