import Home from "@/views/pages/Dashboard/Dashboard.vue";

export default [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Home,
      meta: {
        requiresAuth:true,
        title: `Dashboard`
      }
    }
    
  ]