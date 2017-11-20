<template lang="pug">
  div.user-list-wrapper
    h1 Список юзеров
    user-list-item(v-for="userItem in users", :user="userItem")
</template>

<script>
  import UserListItem from "../components/userListItem.vue"
  import Vue from 'vue'
  import VueJsonp from 'vue-jsonp'

  Vue.use(VueJsonp)

  export default {
    props: ['token'],
    data() {
      return {
        users: []
      }
    },
    components: {
      UserListItem
    },

    methods: {
      getUsersJSONP() {
        const urlAPI = 'https://api.vk.com/method/'
        const method = 'users.search?'
        const count = 'count=10&'
        const query = 'q=' + this.$route.params['query'] + '&'

        let requestURL = urlAPI + method + count + query + this.token

        this.$jsonp(requestURL, {
          count: 10,
          fields: 'photo_100, first_name, last_name'
        })
          .then((resp) => {
            console.log(resp)
            this.users = resp.response
            console.log(this.users)
          })
          .catch((error) => {
            console.log(error)
          })

      }
    },
    created() {
      this.getUsersJSONP()
    }
  }

</script>

<style lang="sass" scoped>

</style>
