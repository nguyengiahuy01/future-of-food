<template>
<q-page class="center">
  <h4>
    {{ $store.state.inGame.questions[$store.state.inGame.round].value.thema }}
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
          :value="$store.state.inGame.roundUI"
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
      <modalReady @resetTime="resetTime" @questionExplanation="questionExplanation"/>
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
      seconds: 20,
      valueTimer: 100,
      timer: 100,
      questionExplanation: ''
    }
  },
  async mounted () {
    this.timer -= (this.valueTimer / this.seconds)
    const boardId = this.$route.query.board
    this.questionExplanation = this.$store.state.inGame.questions
    this.$store.state.inGame.questions = (await this.$api.patch('game/questions', { boardId })).data
  },
  watch: {
    timer (val) {
      if (val === 0) { // Het thoi gian tra loi
        this.$store.state.inGame.ready = true
      } else {
        setTimeout(() => {
          this.timer -= (this.valueTimer / this.seconds)
        }, 1000)
      }
    }
  },
  methods: {
    resetTime () {
      this.timer = 100
    }
  }
}
</script>
