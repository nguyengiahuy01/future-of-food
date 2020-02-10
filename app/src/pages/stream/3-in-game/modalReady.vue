<template>
  <q-dialog v-model="$store.state.inGame.ready" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">Vielen Dank für deine Antwort</div>
        <div class="text-subtitle2">Hier sind die Ergebnisse von den anderen Spielern:</div><br>
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
      </q-card-section>
      <q-card-actions align="right">
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
  data () {
    return {
      bereit: false,
      positivAns: 0.3,
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
    })
  },
  methods: {
    reset () {
      this.$emit('resetTime')
      this.bereit = false
      this.$store.state.inGame.ready = false
      this.$store.state.inGame.userReady = 0
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
