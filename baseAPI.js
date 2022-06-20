import axios from 'axios';

const newAPI = axios.create({ baseURL: 'https://api.habibigarden.com' });
const localAPI = axios.create({baseURL: 'http://localhost:3001'});

// instance.defaults.headers.common['Authorization'] = token;
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export {
  newAPI,
  localAPI
};