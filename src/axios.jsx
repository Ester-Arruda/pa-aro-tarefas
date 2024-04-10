import Axios from 'axios';
import toast from 'react-simple-toasts';
import { history } from './history';


export const axios = Axios.create({
  baseURL: "https://pacaro-tarefas.netlify.app/api/ester-lemes/",
});

axios.interceptors.request.use((config) => {
  return config;
});

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);  
});