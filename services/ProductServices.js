import http from './BaseServices';

const getAll = () => http.get('/product/all')
    .then((res) => res.data);
  
const productForm = (product) => http.post('/product/create',product)
    .then((res) => res.data);

const productImage = (product) => http.create('/product/upload/picture',product)
    .then((res) => res.data)

const productDetail = (id) => http.get(`/product/details/${id}`)
  .then((res) => res.data);

// const getSurvivalProduct = (id) => http.get('/product/survival/product', id)
//   .then((res) => res.data)

const searchProduct = (search) => http.get(`/product/filter?search=${search}`)
  .then((res) => res.data);

const deleteProduct = (id) => http.post(`/product/delete/${id}`)
  .then((res) => res.data);

const updateProduct = (id, product) => http.post(`/product/edit/${id}`, product)
  .then((res) => res.data);

const updateTotal = (id, qty) => http.post(`/product/update/total/${id}`, qty)
  .then((res) => res.data);

const getOneAdmin = (id) => http.get(`/product/details/admin/${id}`)
  .then((res) => res.data);

const filterPriceDecending = () => http.get(`/product/filter/price/decending`)
  .then((res) => res.data);

const filterPriceAcending = () => http.get(`/product/filter/price/acending`)
  .then((res) => res.data);



export default {
  getAll,
  productForm,
  productImage,
  productDetail,
  searchProduct,
  deleteProduct,
  updateProduct,
  updateTotal,
  getOneAdmin,
  filterPriceDecending,
  filterPriceAcending,
  // getSurvivalProduct
}