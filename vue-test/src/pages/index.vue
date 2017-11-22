<template lang="pug">
  div
    h1 INDEX-PAGE
    div.show-user-wrapper
      user-list

</template>

<script>
  import userList from "../components/userList.vue"
  import axios from 'axios'

  export default {
    name: 'index',
    components:{
      userList
    }
  }

</script>

<style lang="sass">

</style>
