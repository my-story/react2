import http from './BaseServices';

const getCart = (userId) => http.get(`order/${userId}`)
  .then(response => response.data);

const payCart = (user,cardname,address,addressCity,addressZip) => http.post(`order/payment`,user,cardname,address,addressCity,addressZip)
  .then(response => response.data);

const createOrder = (user, products,address,email,name) => http.post(`order/add`,user,products,address,email,name)
  .then(response => response.data);

const checkAddress = (address, name,company,street1,city,state,zip,country) => http.post('shipping/validate',address,name,company,street1,city,state,zip,country)
  .then(response => response.data);

const shippingRates = (address) => http.post('shipping/create', address)
  .then(response =>response.data);

export default {
  getCart,
  payCart,
  createOrder,
  checkAddress,
  shippingRates
}