import axios from 'axios'
import { store } from './CreateStore'


export default () => {
  const {auth: {token}} = store.getState()
  console.log(token)
  
  return axios.create({
    baseURL: 'http://159.65.158.103:5555/api',
    headers: {
      'Authorization': token
    }
  });
}