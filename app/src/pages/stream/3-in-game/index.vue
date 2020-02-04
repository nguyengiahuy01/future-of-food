<template>
<q-page class="center">
  <h4>{{ title }}</h4>
  <div class="row justify-center">
      <div class="col-6">
        <img
            src="~assets/island-grey.svg"
            id="loading"
            class="flex flex-center"
            style="width: 350px; margin-top:40px"
        />
        <div class="row">
        <q-circular-progress
          font-size="16px"
          size="60px"
          class="center"
          :value="value"
          :thickness="0.4"
          color="primary"
          track-color="grey-3"
          style="margin-top: 20px"
        />
        <q-circular-progress
          font-size="16px"
          size="60px"
          class="center"
          :value="second"
          :thickness="0.4"
          color="primary"
          track-color="grey-3"
          style="margin-top: 20px"
        />
        </div>
      </div>
      <question/>
      <modalReady @resetTime="resetTime"/>
    </div>
</q-page>
</template>
<script>
import question from './question'
import modalReady from './modalReady'
export default {
  name: 'in Game',
  components: {
    question,
    modalReady
  },
  data () {
    return {
      second: 100,
      title: 'SOZIOÖKONOMISCHE ENTWICKLUNG',
      value: 10
    }
  },
  mounted () {
    this.second -= 5
  },
  watch: {
    second (val) {
      if (val === 0) { // Het thoi gian tra loi
        this.endQuestion()
      } else {
        setTimeout(() => {
          this.second -= 5
        }, 1000)
      }
    }
  },
  methods: {
    endQuestion () {
      this.$store.state.inGame.ready = true
    },
    resetTime () {
      this.second = 100
    }
  }
  /*
  async mounted () {
    const playerId = this.$route.query.id
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
