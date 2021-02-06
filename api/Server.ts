import axios from 'axios';
const Server = axios.create({
  baseURL: 'http://100.83.155.195:3001',
  timeout: 5000,
  headers: { "Accept": 'application/json',
  'Content-Type': 'application/json',}
});
export default Server;