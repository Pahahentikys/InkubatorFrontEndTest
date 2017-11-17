<template lang="pug">
  div
    p USER
    router-link(tag="a" to="/")
      em Переход на главную
    user-details
</template>

<script>
import userDetails from "../components/userDetails.vue"

export default {
  components:{
    userDetails
  }
}

</script>

<style>

</style>
