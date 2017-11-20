<template lang="pug">
  div.user-list-item-wrapper
    h1 Элемент из списка юзеров
    router-link( tag="a", to="/" ) На главную
    p.user-id {{user.uid}}
    p.user-first-name {{user.first_name}}
    p.user-last-name {{user.last_name}}
    p.user-bdate {{user.bdate}}
    p.user-education {{user.education}}
</template>

<script>
  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      getUser() {
        const urlAPI = 'https://api.vk.com/method/'
        const method = 'users.get?'
        const UID = 'user_ids=' + this.$route.params['id']

        let requestURL = urlAPI + method + UID

        this.$jsonp(requestURL, {
          fields: 'photo_100, first_name, last_name, bdate, city, country, education'
        })
          .then((resp) => {
            console.log(resp)
            this.user = resp.response[0]
            console.log(this.user)
          })
          .catch((error) => {
            console.log(error)
          })
      },
    },
    created(){
      this.getUser()
    }
  }
</script>

<style lang="sass" scoped>

</style>
