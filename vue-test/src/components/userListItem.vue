<template lang="pug">
  div.user-details-wrapper
    h1 Подробная информация о пользователе
    span {{user.first_name}}
    //span {{userId}}
    router-link(tag="a", :to="{name: 'userDetails', params:{id: 1}}") Подробнее
</template>

<script>
  export default {
    props: ['user'],
    data(){
      return{
        user: null
      }
    },


  }
</script>

<style lang="sass" scoped>

</style>
