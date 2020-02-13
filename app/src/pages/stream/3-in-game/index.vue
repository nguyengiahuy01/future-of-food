<template>
<q-page>
  <img src="~assets/island-grey.svg" id="loading" class="inGame_insel"/>
  <q-circular-progress
    class="inGame_round"
    :value="$store.state.inGame.roundUI"
    :thickness="0.4"
    color="primary"
    size="60px"
    track-color="grey-3"
  />
  <q-circular-progress
    class="inGame_seconds"
    :value="timer"
    :thickness="0.4"
    color="primary"
    size="60px"
    track-color="grey-3"
  />
  <question v-if="$store.getters['inGame/questionsLength'] > 0"/>
  <modalReady @resetTime="resetTime" @questionExplanation="questionExplanation"/>
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
    async timer (val) {
      if (val === 0) { // Het thoi gian tra loi
        // Post cau hoi
        await this.$socket.emit('post-your-answer', {
          boardId: this.$route.query.board,
          questionid: this.$store.state.inGame.questions[this.$store.state.inGame.round].value.id,
          answer: this.$store.state.inGame.answer
        })
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
