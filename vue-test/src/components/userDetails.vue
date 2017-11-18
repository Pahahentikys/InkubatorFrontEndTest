<template lang="pug">
  div.user-list-item-wrapper
    h1 Элемент из списка юзеров
    router-link( tag="a", to="/" ) На главную
    <!--img.user-image {{user.photo_100}}-->
    //p.user-id  {{user.id}}
    //p.user-first-name {{user.first_name}}
    //p.user-last-name  {{user.last_name}}
    <!--p.user-last-name  {{user.last_name}}-->
    <!--a(@click="userDetailsClicked") Details-->



</template>

<script>
  export default {
    props:{
      user: {
        type: Object,
      }
    },
    data(){
      return{

      }
    },
    methods:{
      userDetailsClicked(){
        this.$emit("userDetails", this.user.id);
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
