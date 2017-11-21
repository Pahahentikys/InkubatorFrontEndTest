<template lang="pug">
  div.user-list-wrapper
    h1 Список юзеров
    user-list-item(v-for="userItem in users", :user="userItem")
    div.users-loader(v-show="usersLoading") Идёт загрузка пользователей...
    input(type="button" value="Получить пользователей" v-on:click="getUsersJSONP")
</template>

<script>
  import userListItem from "../components/userListItem.vue"
  import Vue from 'vue'
  import VueJsonp from 'vue-jsonp'

  Vue.use(VueJsonp)

  export default {
    props: ['token'],
    data() {
      return {
        usersLoading: false,
        offsetNumber: parseInt(0),
        users: []
      }
    },
    components: {
      userListItem
    },

    methods: {
      getUsersJSONP() {
        this.usersLoading = true

        const urlAPI = 'https://api.vk.com/method/'
        const method = 'users.search?'
        const count = 'count=10&'
        const query = 'q=' + this.$route.params['query'] + '&'
        let offset = 'offset=' + this.offsetNumber + '&'

        let requestURL = urlAPI + method + count + offset + query + this.token


        this.$jsonp(requestURL, {
          count: 10,
          fields: 'photo_100, first_name, last_name'
        })
          .then((resp) => {
            console.log(resp)
            this.users = this.users.concat(resp.response)
            console.log(this.users)
            this.offsetNumber += 10
            console.log(this.offset)
            this.usersLoading = false
          })
          .catch((error) => {
            console.log(error)
          })

      },

    },
    created() {
//      this.getUsersJSONP()
    }
  }

</script>

<style lang="sass" scoped>

</style>
