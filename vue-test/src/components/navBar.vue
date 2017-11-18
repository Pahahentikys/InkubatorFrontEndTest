<template lang="pug">
  div.nav-bar-wrapper
    div.nav-bar
      ul
        li
          router-link(tag="a" to="/") Назад
    div.searh-users-block
      input(type="text" placeholder="поиск по юзерам" v-model="q")
      router-link(tag="a", :to="{name: 'userList', params:{query: q}}") Поиск
      span {{query}}
</template>

<script>
export default {
  data(){
    return{
      q:""
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../style/navBar"
@import "../style/reset"
</style>
