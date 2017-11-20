<template lang="pug">
  div.user-details-wrapper
    h1 Подробная информация о пользователе
    img(:src="user.photo_100")
    p {{user.uid}}
    p {{user.first_name}}
    p {{user.last_name}}
    router-link(tag="a", :to="{name: 'userDetails', params:{id: user.uid}}") Подробнее
</template>

<script>
  export default {
    props: ['user'],
  }
</script>

<style lang="sass" scoped>

</style>
