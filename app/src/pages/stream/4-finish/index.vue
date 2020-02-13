<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <img
        src="~assets/island-color.svg"
        id="loading"
        class="center"
        style="width: 400px; align: center"
      />
      <br/>
      <b>{{ text }}</b><br><br>
      <q-btn @click="$router.push({ path: `/`, append: true })" color="primary ">Neues Spiel</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      text: 'Danke für die Mithilfe! Die Inselbewohner haben mehr Bewusstsein darüber bekommen, was es heißt, auf die eigene Umwelt achtzugeben, was alles an unserem Ernährungssystem hängt und dass jeder Einzelne seinen Teil dazu beiträgt, wie es uns und unserer Natur geht. Vielleicht hast auch du etwas davon mitnehmen können.'
    }
  }
}
</script>
<style>
</style>
