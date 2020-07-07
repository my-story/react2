import http from './BaseServices';

const charge = (info) => http.post('/payment/charge', info)
  .then((res) => res.data);


  export default {
    charge
  }