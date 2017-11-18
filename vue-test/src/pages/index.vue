<template lang="pug">
  div
    p INDEX
    router-link(tag="a" to="/userProfile")
      em Переход на страницу пользователя
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

<style>

</style>
