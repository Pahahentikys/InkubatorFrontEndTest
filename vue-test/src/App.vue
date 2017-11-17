<template lang="pug">
  div
    nav-bar
    router-view
</template>

<script>
import navBar from './components/navBar.vue'
import userDetails from './components/userDetails.vue'
import userList from './components/userList.vue'
import userListItem from './components/userListItem.vue'


  export default{
    components:{
      navBar,
      userDetails,
      userList,
      userListItem
    }
}
</script>

<style lang="sass" scoped>
@import "./style/reset"
</style>
