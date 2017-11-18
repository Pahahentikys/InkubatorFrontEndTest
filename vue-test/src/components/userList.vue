<template lang="pug">
  div.user-list-wrapper
    h1 Список юзеров
    user-list-item(v-for="userItem in users", user="userItem")
</template>

<script>
  import UserListItem from "../components/userListItem.vue"

  export default {
    data(){
      return{
        users: [
          {
            id: "1",
            first_name : "ololo",
            last_name: "ololoevich"
          },
          {
            id: "2",
            first_name : "ololo",
            last_name: "memovich"
          },
        ]
      }
    },
    components: {
      UserListItem
    },
  }

</script>

<style lang="sass" scoped>

</style>
