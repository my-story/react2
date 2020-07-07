import http from './BaseServices';

const addEmail = (data) => http.post('email/add', data)
  .then((res)=> res.data);

export default {
  addEmail
}