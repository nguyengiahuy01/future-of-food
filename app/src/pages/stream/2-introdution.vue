<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="min-width:700px; max-width:700px">
      <div>
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        navigation
        padding
        arrows
        thumbnails
        control-color="black"
        height="400px"
        width="700px"
        class="rounded-borders"
      >
        <!-- Slide 1 -->
        <q-carousel-slide name="1" class="column no-wrap flex-center">
          <q-icon name="language" size="56px"/>
          <div class="q-mt-md text-center"><h6>{{ text1 }}</h6></div>
        </q-carousel-slide>
        <!-- Slide 2 -->
        <q-carousel-slide name="2" class="column no-wrap flex-center">
          <q-icon name="donut_small" size="56px" />
          <div class="q-mt-md text-center"><h6>{{ text2 }}</h6></div>
        </q-carousel-slide>
        <!-- Slide 3 -->
        <q-carousel-slide name="3" class="column no-wrap flex-center">
          <q-icon name="face" size="56px" />
          <div class="q-mt-md text-center"><h6>{{ text3 }}</h6></div>
        </q-carousel-slide>
        <!-- Slide 4 -->
        <q-carousel-slide name="4" class="column no-wrap flex-center">
          <q-icon name="eco" size="56px" />
          <div class="q-mt-md text-center"><h6>{{ text4 }}</h6></div>
        </q-carousel-slide>
        <!-- end -->
      </q-carousel>
      </div>
      <div>
      <h6 class="q-mt-md text-center">{{ $store.state.showcase.ready }}/5</h6>
      <q-btn v-if="bereit" label="Ich bin bereit!" color="primary" style="width: 100%" disabled />
      <q-btn v-else label="Ich bin bereit!" color="primary" style="width: 100%" @click="confirm()"/>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'chooseRole',
  data () {
    return {
      slide: '1',
      bereit: false,
      text1: 'Die Welt, wie wir sie kennen existiert so nicht mehr.',
      text2: 'Durch mehrere vorangegangene Krisen und Ereignisse, sind mehrere Teile der Erde abgebrochen. Die Ökosysteme der verschiedenen Erdteile sind aber immer noch miteinander verbunden.',
      text3: 'Die Bewohner der einzelnen “Inselstaaten” arbeiten nun daran, eine stabile Umwelt zu generieren und müssen Hand in Hand arbeiten.',
      text4: 'Helfe ihnen, ihre und unser aller Umwelt zu erhalten!'
    }
  },
  async mounted () {
    this.$socket.on(`ready`, data => {
      this.$store.state.showcase.ready = data
    })
    this.$socket.on('next', () => {
      this.$router.push({
        path: `/in-game?id=${this.$route.query.id}&board=${this.$route.query.board}`,
        append: true
      })
    })
  },
  methods: {
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
.q-card {
  width: 500px;
  margin: 30px
}
</style>
