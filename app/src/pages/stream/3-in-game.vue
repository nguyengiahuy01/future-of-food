<template>
<q-page class="flex flex-center">
  <q-card class="my-card">
  </q-card>
</q-page>
</template>
<script>
export default {
  name: 'in Game',
  data () {
    return {
      myself: {},
      choosen: null
    }
  }/* ,
  async mounted () {
    const id = this.$route.query.id
    const boardId = this.$route.query.board
    this.myself = (await this.$api.patch('/game/myself', {
      id: this.$route.query.id
    })).data
    this.$socket.emit('in-room', id)
    this.$socket.on(`in-room/${boardId}/self`, data => {
      this.$store.state.showcase.players = data
    })
    this.$socket.on(`in-room/${boardId}/friend`, data => {
      this.$store.state.showcase.players = data
    })
    this.$socket.on('go-home', function () {
      this.$router.push({ path: `/`, append: true })
    })
  } */
}
</script>
