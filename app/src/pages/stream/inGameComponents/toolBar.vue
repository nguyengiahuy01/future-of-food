<template>
  <q-card-section>
    <!---->
    <q-btn round color="primary" flat>
      <q-icon name="assessment"/>
      <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
          <q-banner>
            <template v-slot:avatar>
              <q-icon name="assessment"/>
            </template>
            You have lost connection to the internet. This app is offline.
          </q-banner>
      </q-popup-proxy>
    </q-btn>
    <!---->
    <q-btn round color="primary" flat>
      <q-icon name="fa fa-user"/>
      <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
          <q-banner>
            <template v-slot:avatar>
              <q-icon name="signal_wifi_off"/>
            </template>
            You have lost connection to the internet. This app is offline.
          </q-banner>
      </q-popup-proxy>
    </q-btn>
    <!---->
  </q-card-section>
</template>
<script>
export default {
  name: 'Toolbar'
}
</script>
