import axios from 'axios'
import { baseUrl, baseUrl2, baseUrl3, baseUrl4 } from './_env'

export default {
  // GET http://....:3000/list
  dosi: () => axios.get(`${baseUrl}/dosi`),
  dosiLists:() => axios.get(`${baseUrl}/dosilist`),

  dosiList:(keyword) => axios.get(`${baseUrl}/dosilist?q=${keyword}`),
  // GET http://....:3000/list/:id
  //get: (id) => axios.get(`${baseUrl}/dosi/${id}`),
  // GET http://....:3000/list?q=keyword
  search: (keyword) => axios.get(`${baseUrl}/dosi?q=${keyword}`), 
  get: (id) => axios.get(`${baseUrl}/dosiDetail/${id}`),

  usl: () => axios.get(`${baseUrl}/dosiDetail`),
  search1: (keyword) => axios.get(`${baseUrl}/dosiDetails?q=${keyword}`),
  usl1: () => axios.get(`${baseUrl}/dosiDetails`),
  
}