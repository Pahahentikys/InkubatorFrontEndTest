<template lang="pug">
  div.user-list-wrapper
    h1 Список юзеров
    user-list-item(v-for="userItem in users", :user="userItem")
    input(type="button" value="Получить пользователей" v-on:click="getUsers")
    h2 {{ token }}
</template>

<script>
  import UserListItem from "../components/userListItem.vue"
  import axios from 'axios'

  const apiVersion = 'v=5.69'
  const method = 'users.search'

  export default {
    props:['token'],
    data(){
      return{
//        token: '',
        users: [
//          {
//            id: "1",
//            first_name : "ololo",
//            last_name: "ololoevich"
//          },
//          {
//            id: "2",
//            first_name : "ololo",
//            last_name: "memovich"
//          },
        ]
      }
    },
    components: {
      UserListItem
    },
    methods:{
      getUsers() {
        axios.get(this.getURL(this.method),
          {count: 10, fields: 'photo, first_name, last_name'}, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json'
            }
          }
        )
          .then((response) => this.data = response.data.response)
          .catch((error => console.log(error.response.data)))

        console.log(this.response);
      },
      getURL() {
        return 'https://api.vk.com/method/' + method + '?' + 'q='+ this.$route.params['query'] + '&' + this.token + '&' + apiVersion
      },
    }
  }

</script>

<style lang="sass" scoped>

</style>
