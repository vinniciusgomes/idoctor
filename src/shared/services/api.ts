import axios from 'axios';

const api = axios.create({
  baseURL: 'https://idoctor-ws.herokuapp.com/',
});

export default api;
