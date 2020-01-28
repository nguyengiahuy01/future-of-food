<template>
<q-page class="flex flex-center">
  <q-card class="my-card">
    <tool-bar/>
    <q-separator/>
    <div class="col">
        <q-btn flat @click="choosePlayer(0)">
          <img src="~assets/players/1.svg" id="loading" class="cute-in-game" style="margin: 10px;" v-if="choosen == 0"/>
          <img src="~assets/players/1.svg" class="cute-in-game" style="margin: 10px;" v-else/>
          <q-badge v-if="$store.state.showcase.players[0].id == myself.id" color="red" floating transparent>(1) {{ $store.state.showcase.players[0].name }}</q-badge>
          <q-badge v-else color="blue" floating transparent>(1) {{ $store.state.showcase.players[0].name }}</q-badge>
        </q-btn>
        <q-btn flat @click="choosePlayer(1)">
          <img src="~assets/players/2.svg" id="loading" class="cute-in-game" style="margin: 10px;" v-if="choosen == 1"/>
          <img src="~assets/players/2.svg" class="cute-in-game" style="margin: 10px;" v-else/>
          <q-badge v-if="$store.state.showcase.players[1].id == myself.id" color="red" floating transparent>(2) {{ $store.state.showcase.players[1].name }}</q-badge>
          <q-badge v-else color="blue" floating transparent align="bottom">(2) {{ $store.state.showcase.players[1].name }}</q-badge>
        </q-btn>
        <q-btn flat @click="choosePlayer(2)">
          <img src="~assets/players/3.svg" id="loading" class="cute-in-game" style="margin: 10px;" v-if="choosen == 2"/>
          <img src="~assets/players/3.svg" class="cute-in-game" style="margin: 10px;" v-else/>
          <q-badge v-if="$store.state.showcase.players[2].id == myself.id" color="red" floating transparent>(3) {{ $store.state.showcase.players[2].name }}</q-badge>
          <q-badge v-else color="blue" floating transparent>(3) {{ $store.state.showcase.players[2].name }}</q-badge>
        </q-btn>
      </div>
      <div class="col">
        <q-btn flat @click="choosePlayer(3)">
          <img src="~assets/players/4.svg" id="loading" class="cute-in-game" style="margin: 10px;" v-if="choosen == 3"/>
          <img src="~assets/players/4.svg" class="cute-in-game" style="margin: 10px;" v-else/>
          <q-badge v-if="$store.state.showcase.players[3].id == myself.id" color="red" floating transparent>(4) {{ $store.state.showcase.players[3].name }}</q-badge>
          <q-badge v-else color="blue" floating transparent>(4) {{ $store.state.showcase.players[3].name }}</q-badge>
        </q-btn>
        <q-btn flat @click="choosePlayer(4)">
          <img src="~assets/players/5.svg" id="loading" class="cute-in-game" style="margin: 10px;" v-if="choosen == 4"/>
          <img src="~assets/players/5.svg" class="cute-in-game" style="margin: 10px;" v-else/>
          <q-badge v-if="$store.state.showcase.players[4].id == myself.id" color="red" floating transparent>(5) {{ $store.state.showcase.players[4].name }}</q-badge>
          <q-badge v-else color="blue" floating transparent>(5) {{ $store.state.showcase.players[4].name }}</q-badge>
        </q-btn>
        <q-btn flat @click="choosePlayer(5)">
          <img src="~assets/players/6.svg" id="loading" class="cute-in-game" style="margin: 10px;" v-if="choosen == 5"/>
          <img src="~assets/players/6.svg" class="cute-in-game" style="margin: 10px;" v-else/>
          <q-badge v-if="$store.state.showcase.players[5].id == myself.id" color="red" floating transparent>(6) {{ $store.state.showcase.players[5].name }}</q-badge>
          <q-badge v-else color="blue" floating transparent>(6) {{ $store.state.showcase.players[5].name }}</q-badge>
        </q-btn>
      </div>
      <div class="col">
        <q-btn flat @click="choosePlayer(6)">
          <img src="~assets/players/7.svg" id="loading" class="cute-in-game" style="margin: 10px;" v-if="choosen == 6"/>
          <img src="~assets/players/7.svg" class="cute-in-game" style="margin: 10px;" v-else/>
          <q-badge v-if="$store.state.showcase.players[6].id == myself.id" color="red" floating transparent>(7) {{ $store.state.showcase.players[6].name }}y</q-badge>
          <q-badge v-else color="blue" floating transparent>(7) {{ $store.state.showcase.players[6].name }}</q-badge>
        </q-btn>
        <q-btn flat @click="choosePlayer(7)">
          <img src="~assets/players/8.svg" id="loading" class="cute-in-game" style="margin: 10px;" v-if="choosen == 7"/>
          <img src="~assets/players/8.svg" class="cute-in-game" style="margin: 10px;" v-else/>
          <q-badge v-if="$store.state.showcase.players[7].id == myself.id" color="red" floating transparent>(8) {{ $store.state.showcase.players[7].name }}</q-badge>
          <q-badge v-else color="blue" floating transparent>(8) {{ $store.state.showcase.players[7].name }}</q-badge>
        </q-btn>
        <q-btn flat @click="choosePlayer(8)">
          <img src="~assets/players/9.svg" id="loading" class="cute-in-game" style="margin: 10px;" v-if="choosen == 8"/>
          <img src="~assets/players/9.svg" class="cute-in-game" style="margin: 10px;" v-else/>
          <q-badge v-if="$store.state.showcase.players[8].id == myself.id" color="red" floating transparent>(9) {{ $store.state.showcase.players[8].name }}</q-badge>
          <q-badge v-else color="blue" floating transparent>(9) {{ $store.state.showcase.players[8].name }}</q-badge>
        </q-btn>
      </div>
  </q-card>
</q-page>
</template>
<script>
import toolBar from './inGameComponents/toolBar'
export default {
  name: 'in Game',
  data () {
    return {
      myself: {},
      choosen: null
    }
  },
  components: {
    toolBar
  },
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
  },
  methods: {
    choosePlayer (position) {
      this.choosen = null
      if (this.$store.state.showcase.players[position].id === this.myself.id) {
        this.$notify.error('Ich kann mich selbst nicht wählen !!')
      } else {
        this.choosen = position
      }
    }
  }
}
</script>
<style>
#loading {
  -webkit-animation: rotation 2s infinite linear;
}
@-webkit-keyframes rotation {
  from {-webkit-transform: rotate(0deg);}
  to {-webkit-transform: rotate(359deg);}
}
</style>
