<template>
  <q-page class="flex flex-center fullscreen">
    <div class="column items-center">
      <img src="~assets/island-grey-40.svg" id="loading" class="center" style="width: 400px; align: center">
      <div class="col">
        <p class="column items-center"><q-spinner-pie color="primary" size="2em"/>&nbsp;
        <strong>Warten wir, bis die anderen kommen ...</strong></p>
        <template v-for='(item, index) in $store.state.showcase.players'>
        <q-chip :key='index' icon="favorite" color="primary" text-color="white"><strong>{{ item.name }}</strong></q-chip>
      </template></div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'setRound',
  mounted () {
    const id = this.$route.query.id
    this.$socket.emit('join-room', id)
    //
    this.$socket.on('join-room/update-myself', data => {
      this.$store.state.showcase.players = data
    })
    this.$socket.on('join-room/update-friend', data => {
      this.$store.state.showcase.players = data
    })
    this.$socket.on('join-room/ready', boardId => {
      this.$router.push({ path: `/introdution?id=${id}&board=${boardId}`, append: true })
    })
  }
}
</script>
