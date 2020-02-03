<template>
<q-page class="center">
  <h4>{{ title }}</h4>
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
          :value="value"
          :thickness="0.4"
          color="primary"
          track-color="grey-3"
          style="margin-top: 20px"
        />
        <q-circular-progress
          font-size="16px"
          size="60px"
          class="center"
          :value="second"
          :thickness="0.4"
          color="primary"
          track-color="grey-3"
          style="margin-top: 20px"
        />
        </div>
      </div>
      <div class="col-6">
        <strong style="margin-top:40px">{{ question }}</strong><br><br><br>
        <q-card class="my-card" id="question">
          <q-card-actions align="right">
            <q-btn flat round color="red" icon="info" />
            <q-btn flat round color="teal" icon="info" />
            <q-btn flat round color="primary" icon="panorama_fish_eye" />
          </q-card-actions>
          <q-card-section horizontal>{{ answer1 }}</q-card-section>
        </q-card><br>
        <q-card class="my-card" id="question">
          <q-card-actions align="right">
            <q-btn flat round color="red" icon="info" />
            <q-btn flat round color="teal" icon="info" />
            <q-btn flat round color="primary" icon="panorama_fish_eye" />
          </q-card-actions>
          <q-card-section>{{ answer2 }}</q-card-section>
        </q-card>
      </div>
    </div>
</q-page>
</template>
<script>
export default {
  name: 'in Game',
  data () {
    return {
      second: 100,
      title: 'SOZIOÖKONOMISCHE ENTWICKLUNG',
      question: 'Die Landwirte der Insel merken, dass die Frischwassernutzung besser reguliert und effektiver genutzt werden muss, um vor allem in der Landwirtschaft Verbesserungen zu erreichen. Die Insel muss sich auf eine Kombination verschiedener Maßnahmen, bzw. Herangehensweise, einigen.',
      answer1: 'Verbesserung der Technologien um 75% und der wie gewohnten Vermeidung von Lebensmittelverschwendung.',
      answer2: 'Eine weitere Reduzierung der Lebensmittelverschwendung um 50% und einem Fortschritt in der Technologie.',
      value: 10,
      myself: {},
      choosen: null
    }
  },
  mounted () {
    console.log('Nguyen')
    this.second -= 1
  },
  watch: {
    second (val) {
      setTimeout(() => {
        this.second -= 5
      }, 1000)
    }
  }/* ,
  async mounted () {
    const playerId = this.$route.query.id
    const boardId = this.$route.query.board
    this.myself = (await this.$api.patch('/game/myself', {
      id: this.$route.query.id
    })).data
    this.$socket.emit('in-room', id)
    this.$socket.on(`in-room/${boardId}/self`, data => {
      this.$store.state.showcase.players = data
    })
    this.$socket.on(`in-room/${boardId}/friend`, data => {
      this.$store.state.showcase.players = data
    })
    this.$socket.on('go-home', function () {
      this.$router.push({ path: `/`, append: true })
    })
  } */
}
</script>
