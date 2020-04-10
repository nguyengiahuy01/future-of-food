import io from 'socket.io-client'
export default ({ Vue }) => {
  // Vue.prototype.$api = axios
  // const baseUri = process.env.VUE_APP_API_URL
  // Vue.prototype.$socket = io('https://future-of-food.herokuapp.com/')
  Vue.prototype.$socket = io('http://localhost:8085')
}
