import axios from 'axios'
import { baseUrl, baseUrl2 } from './_env'

export default {
  // GET http://....:3000/list
  dosi: () => axios.get(`${baseUrl}/dosi`),
  dosiLists:() => axios.get(`${baseUrl}/dosilist`),

  dosiList:(keyword) => axios.get(`${baseUrl}/dosilist?q=${keyword}`),
  // GET http://....:3000/list/:id
  //get: (id) => axios.get(`${baseUrl}/dosi/${id}`),
  // GET http://....:3000/list?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/dosi?q=${keyword}`), 


  usl: () => axios.get(`${baseUrl2}`),
  search1: (keyword) => axios.get(`${baseUrl3}${keyword}`),
}