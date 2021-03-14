import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lookout-hackaton.herokuapp.com'
});

export default api;
