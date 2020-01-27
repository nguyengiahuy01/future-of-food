<template>
<q-page class="flex flex-center">
  <q-card class="my-card">
    <tool-bar/>
    <q-separator/>
    <div class="col">
        <q-btn flat v-if="choosed == 0" disabled>
          <img src="~assets/players/1.svg" class="cute-in-game"/>
        </q-btn>
        <q-btn flat @click="choose(0)" v-else>
          <img src="~assets/players/1.svg" class="cute-in-game"/>
          <q-badge color="blue" floating transparent>(1) sdfe</q-badge>
        </q-btn>
        <!---->
        <q-btn flat v-if="choosed == 1" disabled>
          <img src="~assets/players/2.svg" class="cute-in-game"/>
        </q-btn>
        <q-btn flat @click="choose(1)" v-else>
          <img src="~assets/players/2.svg" class="cute-in-game"/>
          <q-badge color="blue" floating transparent align="bottom">(2) asdfasd</q-badge>
        </q-btn>
        <!---->
        <q-btn flat v-if="choosed == 2" disabled>
          <img src="~assets/players/3.svg" class="cute-in-game"/>
        </q-btn>
        <q-btn flat @click="choose(2)" v-else>
          <img src="~assets/players/3.svg" class="cute-in-game"/>
          <q-badge color="blue" floating transparent>(3) sgdssd</q-badge>
        </q-btn>
      </div>
      <div class="col">
        <q-btn flat v-if="choosed == 3" disabled>
          <img src="~assets/players/4.svg" class="cute-in-game"/>
        </q-btn>
        <q-btn flat @click="choose(4)" v-else>
          <img src="~assets/players/4.svg" class="cute-in-game"/>
          <q-badge color="blue" floating transparent>(4) sdfwerwe</q-badge>
        </q-btn>
        <!---->
        <q-btn flat v-if="choosed == 4" disabled>
          <img src="~assets/players/5.svg" class="cute-in-game"/>
        </q-btn>
        <q-btn flat @click="choose(5)" v-else>
          <img src="~assets/players/5.svg" class="cute-in-game"/>
          <q-badge color="blue" floating transparent>(5) sdfsfwe</q-badge>
        </q-btn>
        <!---->
        <q-btn flat  v-if="choosed == 5" disabled>
          <img src="~assets/players/6.svg" class="cute-in-game"/>
        </q-btn>
        <q-btn flat @click="choose(6)" v-else>
          <img src="~assets/players/6.svg" class="cute-in-game"/>
          <q-badge color="blue" floating transparent>(6) asdv</q-badge>
        </q-btn>
      </div>
      <div class="col">
        <q-btn flat v-if="choosed == 6" disabled>
          <img src="~assets/players/7.svg" class="cute-in-game"/>
        </q-btn>
        <q-btn flat @click="choose(7)" v-else>
          <img src="~assets/players/7.svg" class="cute-in-game"/>
          <q-badge color="blue" floating transparent>(7) asdg</q-badge>
        </q-btn>
        <!---->
        <q-btn flat v-if="choosed == 7" disabled>
          <img src="~assets/players/8.svg" class="cute-in-game"/>
        </q-btn>
        <q-btn flat @click="choose(8)" v-else>
          <img src="~assets/players/8.svg" class="cute-in-game"/>
          <q-badge color="blue" floating transparent>(8) asdfwer</q-badge>
        </q-btn>
        <!---->
        <q-btn flat v-if="choosed == 8" disabled>
          <img src="~assets/players/9.svg" class="cute-in-game"/>
        </q-btn>
        <q-btn flat @click="choose(9)" v-else>
          <img src="~assets/players/9.svg" class="cute-in-game"/>
          <q-badge color="blue" floating transparent>(9) asdfds</q-badge>
        </q-btn>
      </div>
  </q-card>
</q-page>
</template>
<script>
import toolBar from './stream/inGameComponents/toolBar'
export default {
  name: 'test',
  data () {
    return {
      myself: {},
      choosed: null
    }
  },
  components: {
    toolBar
  },
  methods: {
    choose (option) {
      this.choosed = option
    }
  }
}
</script>
