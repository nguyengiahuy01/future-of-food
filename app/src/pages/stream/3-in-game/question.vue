<template>
  <div class="inGame_questionPart">
    <h5><b>{{ $store.state.inGame.questions[$store.state.inGame.round].value.thema }}</b></h5>
    <b>{{ $store.state.inGame.questions[$store.state.inGame.round].value.question }}</b><br><br>
    <!-- Question 01 ________________ -->
    <div class="inGame_answerCard">
    <q-card v-if="$store.state.inGame.questions[$store.state.inGame.round].value.answers[0] != null">
      <q-card-actions align="right">
        <q-btn v-if="$store.state.inGame.answer == 0" flat round color="primary" icon="check_circle"/>
        <q-btn v-else flat round color="primary" icon="panorama_fish_eye" @click="$store.state.inGame.answer = 0"/>
        <!---->
        <q-icon name="info" class="text-teal cursor-pointer">
          <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
            <q-banner class="bg-brown text-white">
            <template v-slot:avatar><q-icon name="info"/></template>
            <div class="explanation">
              {{ $store.state.inGame.questions[$store.state.inGame.round].value.answers[0].explanation }}
            </div>
            </q-banner>
          </q-popup-proxy>
        </q-icon>
            <!---->
      </q-card-actions>
      <q-card-section horizontal>
        {{ $store.state.inGame.questions[$store.state.inGame.round].value.answers[0].label }}
      </q-card-section>
    </q-card><br>
    <!-- Question 02 ________________ -->
    <q-card v-if="$store.state.inGame.questions[$store.state.inGame.round].value.answers[1] != null">
      <q-card-actions align="right">
        <q-btn v-if="$store.state.inGame.answer == 1" flat round color="primary" icon="check_circle"/>
        <q-btn v-else flat round color="primary" icon="panorama_fish_eye"
                   @click="$store.state.inGame.answer = 1"/>
        <!---->
        <q-icon name="info" class="text-teal cursor-pointer">
        <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
          <q-banner class="bg-brown text-white">
          <template v-slot:avatar><q-icon name="info"/></template>
          <div class="explanation">
            {{ $store.state.inGame.questions[$store.state.inGame.round].value.answers[1].explanation }}
          </div>
          </q-banner>
        </q-popup-proxy>
        </q-icon>
        <!---->
      </q-card-actions>
      <q-card-section>
        {{ $store.state.inGame.questions[$store.state.inGame.round].value.answers[1].label }}
      </q-card-section>
    </q-card><br>
    <!-- Question 03 ________________ -->
    <q-card v-if="$store.state.inGame.questions[$store.state.inGame.round].value.answers[2] != null">
      <q-card-actions align="right">
        <q-btn v-if="$store.state.inGame.answer == 2" flat round color="primary" icon="check_circle"/>
        <q-btn v-else flat round color="primary" icon="panorama_fish_eye"
                @click="$store.state.inGame.answer = 2"/>
        <!---->
        <q-icon name="info" class="text-teal cursor-pointer">
          <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
            <q-banner class="bg-brown text-white">
            <template v-slot:avatar><q-icon name="info"/></template>
            <div class="explanation">
              {{ $store.state.inGame.questions[$store.state.inGame.round].value.answers[2].explanation }}
            </div>
            </q-banner>
          </q-popup-proxy>
        </q-icon>
            <!---->
      </q-card-actions>
      <q-card-section horizontal>
        {{ $store.state.inGame.questions[$store.state.inGame.round].value.answers[2].label }}
      </q-card-section>
    </q-card><br></div>
  </div>
</template>
<script>
export default {
  name: 'question'
}
</script>
<style>
.explanation {
  max-width: 500px
}
</style>
