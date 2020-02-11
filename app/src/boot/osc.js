import osc from 'osc'
export default ({ Vue }) => {
  // Vue.prototype.$api = axios
  // const baseUri = process.env.VUE_APP_API_URL
  Vue.prototype.$osc = {
    run () {
      const udpPort = new osc.UDPPort({
        localAddress: '0.0.0.0',
        localPort: 57121,
        metadata: true
      })
      console.log(udpPort)
      udpPort.on('message', function (oscMsg, timeTag, info) {
        console.log('An OSC message just arrived!', oscMsg)
        console.log('Remote info is: ', info)
      })
      console.log('Mat mui nao nhin ba con')
      udpPort.open()
      console.log('testla')
      udpPort.on('ready', function () {
        udpPort.send({
          address: '/s_new',
          args: [
            {
              type: 's',
              value: 'default'
            },
            {
              type: 'i',
              value: 100
            }
          ]
        }, '127.0.0.1', 57110)
      })
    }
  }
}
