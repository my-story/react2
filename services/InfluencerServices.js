import http from './BaseServices';

const createInfluencer = (data) => http.post('/influencer/create', data)
  .then((res)=> res.data);

const getAll = () => http.get('/influencer/all')
  .then((res) => res.data);

const deleteInfluencer = (user, id) => http.post(`/influencer/delete/${id}`, user)
  .then((res) => res);

const getFilter = (search) => http.get(`/influencer/filter?search=${search}`)
  .then((res) => res.data);

const searchFilter = (search) => http.get(`/influencer/filter/category?search=${search}`)
  .then((res) => res.data);

const updateInfluencer = (influencer , id) => http.post(`/influencer/edit/${id}`, influencer)
  .then((res) => res.data);

const getOne = (id) => http.get(`/influencer/${id}`)
  .then((res) => res);

const addReward = (reward, id) => http.post(`/influencer/reward/${id}`, reward)
  .then((res) => res.data);

const getAllAdmin = () => http.get("influencer/all/admin")
  .then((res) => res.data);

export default {
    createInfluencer,
    getAll,
    deleteInfluencer,
    getFilter,
    searchFilter,
    updateInfluencer,
    getOne,
    addReward,
    getAllAdmin
}