import axios from 'axios'
import { baseUrl } from './_env'

export default {
  list: ()=> axios.get(`${baseUrl}/tasks`),
  post: (data)=> axios.post(`${baseUrl}/tasks`, data),
  delete: (title)=> axios.delete(`${baseUrl}/tasks/${title}`),
}