import { Loading } from 'quasar'
export default ({ Vue }) => {
  Vue.prototype.$loading = {
    show () {
      Loading.show()
    },
    hide () {
      Loading.hide()
    }
  }
}
