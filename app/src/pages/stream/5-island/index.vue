<template>
<div>
    <img src="~assets/0.gif" v-if="status === 0" style="background-size: cover;"/>
    <img src="~assets/1.gif" v-if="status === 1" style="background-size: cover;"/>
    <img src="~assets/2.gif" v-if="status === 2" style="background-size: cover;"/>
</div>
</template>
<script>
export default {
  name: 'Insel',
  data () {
    return {
      status: 1
    }
  },
  mounted () {
    this.$socket.on('update-island', data => {
      this.changeStatus(data)
    })
  },
  methods: {
    changeStatus (data) {
      let punkt = 0
      const positiv = data.positiv
      const negativ = data.negativ
      punkt = punkt - negativ
      punkt = punkt + positiv
      if (punkt === 0) {
        this.status = 1
      } else if (punkt > 0) {
        this.status = 2
      } else if (punkt < 0) {
        this.status = 0
      }
    }
  }
}
</script>
<style>
.inselBk {
  background-repeat: no-repeat;
  background-size: auto;
}
</style>
