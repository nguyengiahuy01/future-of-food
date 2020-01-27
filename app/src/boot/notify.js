import { Notify } from 'quasar'
export default ({ Vue }) => {
  Vue.prototype.$notify = {
    show (message) {
      Notify.create({
        position: 'center',
        message,
        timeout: 300
      })
    },
    error (message) {
      Notify.create({
        position: 'center',
        message,
        color: 'orange',
        icon: 'thumb_down',
        timeout: 300
      })
    }
  }
}
