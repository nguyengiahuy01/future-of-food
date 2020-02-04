<template>
  <q-dialog v-model="$store.state.inGame.ready" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="emoji_emotions" color="primary" text-color="white" />
        <span class="q-ml-sm">Your answer is {{ $store.state.inGame.answer }}</span>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Ich bin bereits" color="primary"
               @click="ready()"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: 'modalReady',
  methods: {
    ready () {
      this.$emit('resetTime')
      this.$store.state.inGame.ready = false
    }
  }
}
</script>
