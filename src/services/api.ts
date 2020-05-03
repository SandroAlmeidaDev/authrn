import axios from 'axios';

const api = axios.create({
  baseURL: "https://atualizavxapi.herokuapp.com/auth/authenticate"
})

export default api;