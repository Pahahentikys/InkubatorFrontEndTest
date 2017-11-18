<template lang="pug">
  div
    nav-bar
    router-view
</template>

<script>
import navBar from './components/navBar.vue'

  export default{
    components:{
      navBar
    }
}
</script>

<style lang="sass" scoped>
@import "./style/reset"
</style>
