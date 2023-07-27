import Login from '@/views/Pages/Auth/Login.vue'

export default [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth:false,
        title: `Login`
      }
    }
    
  ]