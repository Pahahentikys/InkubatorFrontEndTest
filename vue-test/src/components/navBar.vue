<template lang="pug">
  div.nav-bar-wrapper
    div.nav-bar
      div.searh-users-block
        router-link(tag="a", to="/" v-show="currentRoute == 'userDetails'") Назад
        input(type="text" placeholder="поиск по юзерам" v-model="q")
        router-link(tag="a", :to="{name: 'userList', params:{query: q}}") Поиск
        span {{query}}
</template>

<script>
  export default {
    data() {
      return {
        q: "",
        currentRoute: this.$router.currentRoute.name
      }
    },
    watch: {
      '$route'(to, from) {
        console.log('to', to.name)
        console.log('from', from.name)
        this.currentRoute = to.name
      },
    }
  }
</script>

<style lang="sass" scoped>
  @import "../style/navBar"
  @import "../style/reset"
</style>
