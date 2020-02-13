<template>
<div id="container">
    <img src="~assets/0.gif" v-bind:style="{opacity: img0}"/>
    <img id="img1" src="~assets/1.gif" v-bind:style="{opacity: img1}"/>
    <img id="img2" src="~assets/2.gif" v-bind:style="{opacity: img2}"/>
</div>
</template>
<script>
export default {
  name: 'Insel',
  data () {
    return {
      img0: 0,
      img1: 1,
      img2: 0
    }
  },
  mounted () {
    this.$socket.on('update-island', data => {
      this.changeStatus(data)
    })
  },
  methods: {
    changeStatus (data) {
      this.img0 = data.negativ * 0.2
      this.img1 = data.neutral * 0.2
      this.img2 = data.positiv * 0.2
    }
  }
}
</script>
<style>
.inselBk {
  background-repeat: no-repeat;
  background-size: auto;
}
#container {
    position:relative;
}
#img1 {
    position: absolute;
    left: 0px;
    top: 0px;
}
#img2 {
    position: absolute;
    left: 0px;
    top: 0px;
}
</style>
