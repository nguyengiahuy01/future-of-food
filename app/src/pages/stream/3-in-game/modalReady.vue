<template>
  <q-dialog v-model="$store.state.inGame.ready" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6" align="center">Vielen Dank für deine Antwort</div><br>
        {{ $store.state.inGame.questions[$store.state.inGame.round].value.explanation }}<br><hr><br>
        <div align="center">
          <q-icon v-if="$store.state.inGame.answer === 2" name="sentiment_very_satisfied" size="56px" color="primary"/>
          <q-icon v-else name="sentiment_very_satisfied" size="56px" disabled/>&nbsp;
          <!---->
          <q-icon v-if="$store.state.inGame.answer === 1" name="sentiment_satisfied" size="56px" color="primary"/>
          <q-icon v-else name="sentiment_satisfied" size="56px" disabled/>&nbsp;
          <!---->
          <q-icon v-if="$store.state.inGame.answer === 0 || $store.state.inGame.answer === null"
                  name="mood_bad" size="56px" color="primary"/>
          <q-icon v-else name="mood_bad" size="56px" disabled/>
        </div><br>
        <div class="text-subtitle2" align="center">Hier sind die Ergebnisse von den anderen Spielern</div><br>
        <!---->
        <q-linear-progress size="25px" :value="positivAns" color="teal">
        <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="teal" label="Positiv" />
        </div>
        </q-linear-progress><br>
        <!---->
        <q-linear-progress size="25px" :value="neutralAns" color="accent">
        <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="accent" label="Neutral" />
        </div>
        </q-linear-progress><br>
        <!---->
        <q-linear-progress size="25px" :value="negativAns" color="red">
        <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="red" label="Negativ" />
        </div>
        </q-linear-progress><br>
        <!---->
        {{ questionExplanation }}
      </q-card-section>
      <q-card-actions align="center">
        <q-chip color="primary" text-color="white" icon="emoji_emotions">
          {{ $store.state.inGame.userReady }}/5
        </q-chip>
        <q-btn label="Ich bin bereits! Auf nächste Frage" color="primary" @click="confirm()" :disable="bereit" flat/>
      </q-card-actions>
      <q-linear-progress indeterminate color="warning" class="q-mt-sm" />
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: 'modalReady',
  props: {
    questionExplanation: Object
  },
  data () {
    return {
      bereit: false,
      positivAns: 0.2,
      neutralAns: 0.1,
      negativAns: 0.5
    }
  },
  async mounted () {
    this.$socket.on(`ready`, data => {
      this.$store.state.inGame.userReady = data
    })
    this.$socket.on('next', () => {
      this.reset()
      if (this.$store.state.inGame.roundUI === 100) {
        this.$router.push({ path: `/finish`, append: true })
      }
    })
  },
  methods: {
    reset () {
      this.$emit('resetTime')
      this.bereit = false
      this.$store.state.inGame.ready = false
      this.$store.state.inGame.userReady = 0
      this.$store.state.inGame.round = this.$store.state.inGame.round + 1
      this.$store.state.inGame.roundUI = this.$store.state.inGame.roundUI + 10
    },
    confirm () {
      this.bereit = true
      const playerId = this.$route.query.id
      const boardId = this.$route.query.board
      this.$socket.emit('confirm', playerId, boardId)
    }
  }
}
</script>
<style>
.answer {
  align: center;
}
</style>
