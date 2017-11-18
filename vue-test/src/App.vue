<template lang="pug">
  div
    nav-bar
    router-view(v-bind:token="accessToken")
</template>

<script>
  import navBar from './components/navBar.vue'

  export default {
    components: {
      navBar
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        accessToken: "access_token=6cb73bab05de52dec76af86ae08f2826e79ba1d97dae34b649860dee21979618d8214715db3873832fba7",
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "./style/reset"
</style>
