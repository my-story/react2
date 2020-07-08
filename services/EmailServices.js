import http from './BaseServices';

const addEmail = (data) => http.post('email/add', data)
  .then((res)=> res.data);

const addSubscriber = (data) => http.post('email/subscriber', data)
  .then((res)=> res.data);

export default {
  addEmail,
  addSubscriber
}