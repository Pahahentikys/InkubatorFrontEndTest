<template lang="pug">
  div
    p INDEX
    router-link(tag="a" to="/userProfile")
      em Переход на страницу пользователя
    div.show-user-wrapper
      input(type="button" value="Найти пользователей" v-on:click="getUsers")
      div.show-user
        ul(v-for="user in users")
          li {{users.first_name}} {{users.last_name}}]
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'index',
    data() {
      return {
        users: [],
        token: 'access_token=dbabad03dbabad03dbabad03b6dbf4cc8bddbabdbabad0381a90d015c0132c6bfd42148',
        apiVersion: '&v=5.69',
        method: 'users.search'
      }
    },
    methods: {
      getUsers() {

        axios.get(this.getURL(this.method),
          {count: 10, fields: 'photo, first_name, last_name'}, {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json',
              'Acces-Control-Allow-Origin': '*'
            }
          }
        )
          .then((response) => this.data = response.data.response)
          .catch((error => console.log(error.response.data)))
      },
      getURL(method, params) {
        return 'https://api.vk.com/method/' + method + '?' + params + '&' + this.token + '&' + this.apiVersion
      }
    }
  }

</script>

<style>

</style>
