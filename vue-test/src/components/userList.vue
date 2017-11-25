<template lang="pug">
  div.user-list-wrapper
    h1 Список юзеров
    user-list-item(v-for="userItem in users", :user="userItem")
    div.users-loader(v-show="usersLoading") Идёт загрузка пользователей...
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
        currentRoute: this.$router.currentRoute.params['query'],
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
        const offset = 'offset=' + this.offsetNumber + '&'
        const requestURL = urlAPI + method + count + offset + query + this.token

        const offsetUsersParam = 10
        const loaderTime = 1000

        this.$jsonp(requestURL, {
          fields: 'photo_100, first_name, last_name'
        })
          .then((resp) => {

            resp.response.shift()
            this.users = this.users.concat(resp.response)
            console.log(this.users)
            this.offsetNumber += offsetUsersParam

            setTimeout(() => {
              this.usersLoading = false
            }, loaderTime)

          })
          .catch((error) => {
            console.log(error)
          })
      },
      onScroll() {
        const requestTime = 2000

        if (document.body.scrollHeight - window.innerHeight - document.scrollingElement.scrollTop <= 5) {
          if (this.usersLoading === false) {
            this.usersLoading = true
            console.log('Запрос полетел...')
            setTimeout(() => {
              this.getUsersJSONP()
            }, requestTime)
          }
        }
      }

    },
    created() {
      if (this.currentRoute.name !== 'Index') {
        this.getUsersJSONP()
      }

      window.addEventListener('scroll', this.onScroll);
    }
  }

</script>

<style lang="sass" scoped>
  @import "../style/userList"
</style>
