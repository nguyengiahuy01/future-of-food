<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        navigation
        padding
        arrows
        control-color="black"
        height="300px"
        class="rounded-borders"
      >
        <!-- Slide 1 -->
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">{{ text1 }}</div>
        </q-carousel-slide>
        <!-- Slide 1 -->
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">{{ text2 }}</div>
        </q-carousel-slide>
        <!-- Slide 1 -->
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">{{ text3 }}</div>
        </q-carousel-slide>
        <!-- end -->
      </q-carousel>
      <h6 class="q-mt-md text-center">{{ $store.state.showcase.ready }}/5</h6>
      <q-btn v-if="bereit" label="Ich bin bereit!" color="primary" style="width: 100%" disabled />
      <q-btn v-else label="Ich bin bereit!" color="primary" style="width: 100%" @click="confirm()" />
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'chooseRole',
  data () {
    return {
      slide: 'style',
      bereit: false,
      text1: 'Die Welt, wie wir sie kennen existiert so nicht mehr.',
      text2: 'Durch mehrere vorangegangene Krisen und Ereignisse, sind mehrere Teile der Erde abgebrochen. Die Ökosysteme der verschiedenen Erdteile sind aber immer noch miteinander verbunden.',
      text3: 'Die Bewohner der einzelnen “Inselstaaten” arbeiten nun daran, eine stabile Umwelt zu generieren und müssen Hand in Hand arbeiten.'
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
}
</script>
