import http from './BaseServices';

const getAll = () => http.get("/kit/all")
  .then((res) => res.data);

const getLast = () => http.get("/kit/last")
  .then((res) => res.data);

const getKit = (id) => http.get(`/kit/survival/${id}`)
  .then((res) => res.data);

const kitCreate = (kit) => http.post('/kit/create',kit)
    .then((res) => res.data);

const kitProductBacked = (id) => http.get('/kit/popular', id)
  .then((res) => res.data)

const getKitAdmin = (id) => http.get(`/kit/admin/${id}`)
  .then((res) => res.data);

const updateKit = (kit, id) => http.post(`/kit/update/kit/${id}`, kit)
  .then((res) => res.data);

const createTechnique = (technique) => http.post(`/kit/create/technique`, technique)
  .then((res) => res.data);

const getListTechnique = () => http.get('/kit/list/techniques')
  .then((res) => res.data);

const createSurvivalProduct = (product) => http.post('/kit/create/product', product)
  .then((res) => res.data)

const getListProducts = () => http.get('/kit/list/products')
  .then((res) => res.data)

const createSurvivalTip = (tip) => http.post('/kit/create/tip', tip)
  .then((res) => res.data)

const getListTips = () => http.get('/kit/list/tips')
  .then((res) => res.data)

const getProductSurvival = (id) => http.get(`/kit/product/${id}`)
  .then((res) => res.data)

const getTipAdmin = (id) => http.get(`kit/admin/tip/${id}`)
  .then((res) => res.data)

const getTechniqueAdmin = (id) => http.get(`kit/admin/technique/${id}`)
  .then((res) => res.data)

const getSurvivalProductAdmin = (id) => http.get(`kit/admin/survival-product/${id}`)
  .then((res) => res.data)

const getSurvivalProductEdit = (id) => http.get(`kit/admin/survival-product/1/${id}`)
  .then((res) => res.data)

const editSurvivalKit = (id, product) => http.post(`kit/update/product/${id}`, product)
  .then((res) => res.data)

const getTipEdit = (id) => http.get(`kit/admin/tip/1/${id}`)
  .then((res) => res.data)

const editTipKit = (id, tip) => http.post(`kit/update/tip/${id}`, tip)
  .then((res) => res.data)

const getTechniqueEdit = (id) => http.get(`kit/admin/technique/1/${id}`)
  .then((res) => res.data)

const editTechniqueKit = (id, technique) => http.post(`kit/update/technique/${id}`, technique)
  .then((res) => res.data)

const getKitProfile = (id) => http.get(`/kit/profile/${id}`)
  .then((res) => res.data);

const searchKit = (search) => http.get(`/kit/filter?search=${search}`)
  .then((res) => res.data);

const getKits = (id) => http.get(`/kit/influencer/${id}`)
  .then((res) => res.data);

export default {
    getKit,
    getKits,
    kitCreate,
    kitProductBacked,
    getKitAdmin,
    updateKit,
    createTechnique,
    getListTechnique,
    createSurvivalProduct,
    getListProducts,
    createSurvivalTip,
    getListTips,
    getProductSurvival,
    getTipAdmin,
    getTechniqueAdmin,
    getSurvivalProductAdmin,
    getSurvivalProductEdit,
    editSurvivalKit,
    editTipKit,
    editTechniqueKit,
    getTipEdit,
    getTechniqueEdit,
    getKitProfile,
    getAll,
    searchKit,
    getLast
}