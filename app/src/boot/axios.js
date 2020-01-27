import axios from 'axios'
export default ({ Vue }) => {
  // Vue.prototype.$api = axios
  // const baseUri = process.env.VUE_APP_API_URL
  Vue.prototype.$api = axios.create({
    // baseURL: 'https://foodplay.herokuapp.com/',
    baseURL: 'http://localhost:8085/',
    transformRequest: [...axios.defaults.transformRequest, (data, headers) => {
      headers['user'] = `${localStorage.getItem('userName')}`
      return data
    }]
  })
}
