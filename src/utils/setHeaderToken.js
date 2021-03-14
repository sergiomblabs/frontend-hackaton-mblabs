import api from '../services/api';

async function setToken(token) {
  if (!token) return false;
  
  api.defaults.headers.Authorization = `Bearer ${token}`;

  return true;
}

export default setToken;