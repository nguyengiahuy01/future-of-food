<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
    <img id="loading" src="~assets/loading.svg" class="cute center" style="align: center"><br>
    <q-form>
      <q-input
        rounded outlined
        filled v-model="name"
        label="Dein Spielername *"
        :rules="[ val => val && val.length > 0 || 'Wir möchten wissen, wer du bist']"
        style="min-width: 300px"
      /><hr>
      <q-btn label="Jetzt spielen" color="primary" @click="start()" v-if="name != ''" style="width: 100%"/>
      <q-btn label="Jetzt spielen" color="primary" disabled v-else style="width: 100%"/>
    </q-form><br>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    async start () {
      try {
        this.$loading.show()
        const id = (await this.$api.post('/game/join-game', {
          name: this.name
        })).data.id
        this.$router.push({ path: `/start?id=${id}`, append: true })
        this.$loading.hide()
      } catch (error) {
        this.$loading.hide()
      }
    }
  }
}
</script>
<style>
#loading {
  -webkit-animation: rotation 5s infinite linear;
}
@-webkit-keyframes rotation {
  from {-webkit-transform: rotate(0deg);}
  to {-webkit-transform: rotate(359deg);}
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
