import axios from 'axios'
import { getUserToken } from '../components/PrivateRoute/actions'

export default () => {
  return axios.create({
    baseURL: 'http://159.65.158.103:5555/api',
    headers: {
      'Authorization': getUserToken()
    }
  });
}