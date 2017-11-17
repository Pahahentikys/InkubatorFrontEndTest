import index from '../pages/index.vue'
import userProfile from  '../pages/userProfile.vue'
import userList from '../components/userList.vue'
import userListItem from '../components/userListItem.vue'
import userDetails from '../components/userDetails.vue'

export const routes = [
  {
    path: '/',
    name:'Index',
    component: index
  },

  {
    path: '/userProfile',
    name:'userProfile',
    component: userProfile
  },

  {
    path: '/userList/:query',
    name:'userList',
    component: userList
  },

  {
    path:'/userListItem/:id',
    name:'userListItem',
    component: userListItem
  },

  {
    path:'/userDetails/:id',
    name:'userDetails',
    component: userDetails
  }


]
