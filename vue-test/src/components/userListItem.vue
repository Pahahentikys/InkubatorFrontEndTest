<template lang="pug">
  div.user-details-wrapper
    h1 Подробная информация о пользователе
      h2 {{user.id}}
      h2 {{user.first_name}}
      h2 {{user.last_name}}
    router-link(tag="a", :to="{name: 'userDetails', params:{id: user.id}}") Подробнее
</template>

<script>
  export default {
    props: ['user'],
    data(){
      return{
//        userItem: null
      }
    },
    created(){
      console.log(user);
    }


  }
</script>

<style lang="sass" scoped>

</style>
