import axios from 'axios'
import { getUserToken } from './Token'

export default () => {
  return axios.create({
    baseURL: 'http://159.65.158.103:5555/api',
    headers: {
      'Authorization': getUserToken()
    }
  });
}