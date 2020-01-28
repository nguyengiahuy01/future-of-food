<template>
  <q-page class="flex flex-center">
    <div class="column items-center" style="height: 500px">
      <div class="col">
        <img src="~assets/players/1.svg" class="cute" v-if="$store.state.showcase.players[0]">
        <img src="~assets/players/1.svg" class="cute" v-else disabled/>&nbsp;
        <img src="~assets/players/2.svg" class="cute" v-if="$store.state.showcase.players[1]"/>
        <img src="~assets/players/2.svg" class="cute" v-else disabled/>&nbsp;
        <img src="~assets/players/3.svg" class="cute" v-if="$store.state.showcase.players[2]"/>
        <img src="~assets/players/3.svg" class="cute" v-else disabled/>&nbsp;
      </div>
      <div class="col">
        <img src="~assets/players/4.svg" class="cute" v-if="$store.state.showcase.players[3]"/>
        <img src="~assets/players/4.svg" class="cute" v-else disabled/>&nbsp;
        <img src="~assets/players/5.svg" class="cute" v-if="$store.state.showcase.players[4]"/>
        <img src="~assets/players/5.svg" class="cute" v-else disabled/>&nbsp;
        <img src="~assets/players/6.svg" class="cute" v-if="$store.state.showcase.players[5]"/>
        <img src="~assets/players/6.svg" class="cute" v-else disabled/>&nbsp;
      </div>
      <div class="col">
        <img src="~assets/players/7.svg" class="cute" v-if="$store.state.showcase.players[6]"/>
        <img src="~assets/players/7.svg" class="cute" v-else disabled/>&nbsp;
        <img src="~assets/players/8.svg" class="cute" v-if="$store.state.showcase.players[7]"/>
        <img src="~assets/players/8.svg" class="cute" v-else disabled/>&nbsp;
        <img src="~assets/players/9.svg" class="cute" v-if="$store.state.showcase.players[8]"/>
        <img src="~assets/players/9.svg" class="cute" v-else disabled/>&nbsp;
      </div>
      <div class="col">
        <p class="column items-center"><q-spinner-pie color="primary" size="2em"/>&nbsp;<strong>Warten wir, bis die anderen kommen ...</strong></p>
        <template v-for='(item, index) in $store.state.showcase.players'>
        <q-chip :key='index' icon="favorite" color="primary" text-color="white"><strong>{{ item.name }}</strong></q-chip>
      </template></div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'setRound',
  data () {
    return {
      uri: './loading.svg'
    }
  },
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
      this.$router.push({ path: `/set-role?id=${id}&board=${boardId}`, append: true })
    })
  }
}
</script>
