<template>
<q-page class="center">
  <h4>
    {{ $store.state.inGame.questions }}
  </h4>
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
          :value="roundUI"
          :thickness="0.4"
          color="primary"
          track-color="grey-3"
          style="margin-top: 20px"
        />
        <q-circular-progress
          font-size="16px"
          size="60px"
          class="center"
          :value="timer"
          :thickness="0.4"
          color="primary"
          track-color="grey-3"
          style="margin-top: 20px"
        />
        </div>
      </div>
      <question v-if="$store.getters['inGame/questionsLength'] > 0"/>
      <modalReady @resetTime="resetTime"/>
    </div>
</q-page>
</template>
<script>
import question from './question'
import modalReady from './modalReady'
export default {
  name: 'inGame',
  components: {
    question,
    modalReady
  },
  data () {
    return {
      seconds: 10,
      valueTimer: 100,
      timer: 100,
      roundUI: 10
    }
  },
  async mounted () {
    this.timer -= (this.valueTimer / this.seconds)
    const boardId = this.$route.query.board
    this.$store.state.inGame.questions = (await this.$api.patch('game/questions', { boardId })).data
  },
  watch: {
    timer (val) {
      if (val === 0) { // Het thoi gian tra loi
        this.endQuestion()
      } else {
        setTimeout(() => {
          this.timer -= (this.valueTimer / this.seconds)
        }, 1000)
      }
    }
  },
  methods: {
    endQuestion () {
      this.$store.state.inGame.ready = true
    },
    resetTime () {
      this.timer = 100
    }
  }
}
</script>
