import axios from 'axios'

export const baseURL = 'http://192.168.0.107:3000'
export const api = axios.create({ baseURL })

export default api