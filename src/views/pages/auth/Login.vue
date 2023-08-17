<template>
  <div class="w-full h-screen flex flex-col items-center justify-center px-6 bg-[#146FE0]">
    <div class="flex flex-col items-center justify-center bg-white py-5 px-3 rounded">
      <div class="">
        
        <h1 class="text-[#337ab7]">Login</h1>
      </div>
      <form action="flex flex-col items-center justify-center" @submit.prevent="login($event)">
        <input type="text " class="w-full bg-gray-300 my-3 px-2 text-black p-1" placeholder="E-mail">
        <input type="text " class="w-full bg-gray-300 px-2 text-black p-1" placeholder="Senha">
        
        <button type="submit" class="w-full bg-green-500 my-3 rounded-full text-white p-2">ENTRAR</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  mounted() {
      console.log('Component mounted.')
  },
  data(){
      return{
          usersData:{
              email:'teste@teste.com',
              password:'1234'
          },
      }
  },
    
  props:[],
  methods:{
      ...mapActions('auth',['ActionSetLogin']),
      login(e){ 
        console.log(this.ActionSetLogin(this.usersData))
          // ActionSetLogin(this.usersData)
      }
  }
}
</script>

<style lang="scss" scoped>

</style>