import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from '@/store/modules/login/auth'
import heroes from '@/store/modules/heroes'

const store = createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        heroes
    }
})

export default store