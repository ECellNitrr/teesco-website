import axios from 'axios'

export default axios.create({
  baseURL: 'http://159.65.158.103:5555/api',
  timeout: 1000,
});