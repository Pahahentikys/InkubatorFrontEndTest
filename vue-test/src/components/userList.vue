<template lang="pug">
  div.user-list-wrapper
    h1 Список юзеров
    user-list-item



</template>

<script>
  import UserListItem from "../components/userListItem.vue"

  export default {
    data(){
      return{
        users: []
      }
    },
    components: {
      UserListItem
    },
    methods:{
      viewUserDetails(id){
        let userForView =
        this.$emit("viewUserDetails", "userForView")
      }
    }
  }

</script>

<style lang="sass" scoped>

</style>
