import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'



import routes from './routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,  
})

// router.beforeEach = (to, from, next) => {
//     const auth = to.meta.requiresAuth
  
//     // verifica se a rota requer autenticação
//     if (needAuth(auth)) {    '
//       // verifica se o usuário já está autenticado
//       if (!isAuthRoute(to) && !isLogged()) {
//         next('/login')
//       } else {
//         if (isLogged() && to.path === '/login') {
//           from()
//         }
//         next()
//       }
//     } else {
//       next()
//     }
//   }

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.requiresAuth == true && !store.state.auth.authenticated) {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            next()
        } else {
            // next({ name: "login" })
            next()
        }
    }
})


export default router
