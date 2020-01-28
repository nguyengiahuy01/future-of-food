<template>
  <q-page class="flex flex-center">
    <q-spinner-pie color="primary" size="2em"/>
    <q-dialog v-model="modal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Herzlich Glückwunsch! Du bist {{ $parse.role(myself.role).name }} </div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
        <div class="row">
        <!-- <img src="~assets/role/greta.jpg" class="flex flex-center col-3" style="max-height: 200px"/><hr>&nbsp; -->
        <div class="col">{{ $parse.role(myself.role).description }}</div>
        </div>
        </q-card-section>
        <q-separator />
         <q-card-actions align="right">
           ( Das Spiel fängt nach {{ second }} Sekunden an .. )
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  name: 'chooseRole',
  data () {
    return {
      modal: false,
      second: 20,
      roleName: '',
      myself: {}
    }
  },
  async mounted () {
    try {
      this.myself = (await this.$api.patch('/game/myself', {
        id: this.$route.query.id
      })).data
    } catch (error) {
      this.$notify(error)
    }
    this.modal = true
    this.second -= 1
  },
  watch: {
    second (val) {
      setTimeout(() => {
        this.second -= 1
      }, 1000)
      if (val === 0) {
        this.$router.push({ path: `/in-game?id=${this.$route.query.id}&board=${this.$route.query.board}`, append: true })
      }
    }
  }
}
</script>
