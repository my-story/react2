import axios from 'axios';

//EL base env que este primero es el que requestea primero
const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, 
  withCredentials: true
})

http.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    if (error.status === 403) {
      window.location = '/login';
    } else {
      return Promise.reject(error);
    }
  }
)

export default http;