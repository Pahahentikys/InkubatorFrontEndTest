<template lang="pug">
  div.user-item
    h1 Информация о пользователе
    img(:src="user.photo_100")
    p {{user.uid}}
    p {{user.first_name}}
    p {{user.last_name}}
    router-link(tag="a", :to="{name: 'userDetails', params:{id: user.uid}}").text-details Подробнее
</template>

<script>
  export default {
    props: ['user'],
  }
</script>

<style lang="sass" scoped>
  @import "../style/userListItem"
</style>
