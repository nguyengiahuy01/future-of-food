<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
<<<<<<< HEAD
      <img id="loading" src="~assets/island-grey.svg" class="cute center" style="align: center" />
      <br />
      <q-form>
        <q-input
          rounded
          outlined
          filled
          v-model="name"
          label="Dein Spielername *"
          :rules="[ val => val && val.length > 0 || 'Wir möchten wissen, wer du bist']"
          style="min-width: 300px"
        />
        <hr />
        <q-btn label="Jetzt spielen" class="buttonbh" @click="start()" v-if="name != ''" />
        <q-btn label="Jetzt spielen" class="buttonbh" disabled v-else />
      </q-form>
      <br />
    </div>
=======
    <img src="~assets/island-grey.svg" id="loading" class="center" style="width: 400px; align: center"><br>
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
>>>>>>> a2cfbffcb30329dc7af17b2ce4bea5b33945b40c
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
</style>
