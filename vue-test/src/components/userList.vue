<template lang="pug">
  div.user-list-wrapper
    h1 Список юзеров
    user-list-item(v-for="userItem in users", :user="userItem")
    <!--input(type="button" value="Получить пользователей" v-on:click="getUsers")-->
    input(type="button" value="Получить пользователей" v-on:click="getUsersJSONP")
    h2 {{ token }}
</template>

<script>
  import UserListItem from "../components/userListItem.vue"
  import axios from 'axios'
  import jsonp from 'jsonp'
  import Vue from 'vue'
  import VueJsonp from 'vue-jsonp'

  Vue.use(VueJsonp)

  export default {
    props: ['token'],
    data() {
      return {
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
          .then((resp)=>{
            console.log(resp)
            this.users = resp.response
            console.log(this.users)
          })
          .catch((error)=>{
            console.log(error)
          })

      },

//      getUsers() {
//        let headersConfig = {
//          headers: {
//            'Access-Control-Allow-Origin': 'http://localhost:8080',
//            'Content-Type': 'application/json'
//          }
//        }
//
//        axios.get(this.getURL(), {
//            params:
//              {
//                fields: 'first_name, last_name'
//              },
//            headersConfig
//
//          }
//        )
//          .then((res) => {
//
////          console.log('ky-ky')
////            console.log(res.data)
////            this.users = JSON.parse(res.data).response.items
////            let parsedString = res.data.response.items
//            this.users = res.data.response.items
////            console.log(parsedString)
//          })
//
//          .catch(error => console.log(error))
//
//      },
//      getURL() {
//        const urlAPI = 'https://api.vk.com/method/'
//        const apiVersion = 'v=5.69'
//        const method = 'users.search?'
//        const query = 'q=' + this.$route.params['query'] + '&'
//        const count = 'count=10&'
//
//        return urlAPI + method + count + query + this.token
//      },
    }
  }

</script>

<style lang="sass" scoped>

</style>
