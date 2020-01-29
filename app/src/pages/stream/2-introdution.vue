<template>
  <q-page class="flex flex-center">
     <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable animated navigation padding arrows
        control-color="black"
        height="300px"
        class="rounded-borders"
      >
        <!-- Slide 1 -->
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ text1 }}
          </div>
        </q-carousel-slide>
        <!-- Slide 1 -->
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ text2 }}
          </div>
        </q-carousel-slide>
        <!-- Slide 1 -->
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ text3 }}
          </div>
        </q-carousel-slide>
        <!-- end -->
      </q-carousel>
  </q-page>
</template>
<script>
export default {
  name: 'chooseRole',
  data () {
    return {
      myself: {},
      slide: 'style',
      text1: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. dfdsfsdf',
      text2: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      text3: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
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
  }
}
</script>
