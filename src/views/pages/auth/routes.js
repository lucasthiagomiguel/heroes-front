import Login from '@/views/Pages/Auth/Login.vue'

export default [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth:false,
        title: `Login`
      }
    }
    
  ]