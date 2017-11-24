<template lang="pug">
  div.user-list-wrapper
    h1 Список юзеров
    user-list-item(v-for="userItem in users", :user="userItem")
    div.users-loader(v-show="usersLoading") Идёт загрузка пользователей...
    input(type="button" value="получить пользователей" v-on:click="getUsersJSONP" v-show="showed").users-input-more
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
        showed: false,
        showedNotFound: false,
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

        this.$jsonp(requestURL, {
          fields: 'photo_100, first_name, last_name'
        })
          .then((resp) => {
            resp.response.shift()
            this.users = this.users.concat(resp.response)
            console.log(this.users)
            this.offsetNumber += 10
            this.usersLoading = false
            this.showed = true
          })
          .catch((error) => {
            console.log(error)
          })
      },
      onScroll(){
        console.log(document.body.scrollHeight)
        if(document.body.scrollHeight - window.innerHeight - document.scrollingElement.scrollTop<=5){
          if(this.usersLoading === false ){
            this.usersLoading = true
            console.log('Запрос полетел...')
            this.getUsersJSONP()
          }
        }
      }

    },
    created() {
      if (this.currentRoute.name !== 'Index') {
        console.log(this.currentRoute.name)
        this.getUsersJSONP()
      }

      window.addEventListener('scroll', this.onScroll);
    }
  }

</script>

<style lang="sass" scoped>
  @import "../style/userList"
</style>
