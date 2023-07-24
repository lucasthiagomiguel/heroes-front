<template>
  <div class="w-full h-screen flex flex-col items-center justify-center px-6">
    <div class="flex flex-col items-center justify-center bg-white py-5 px-3 rounded">
      <div class="">
        <img src="@/assets/img/logo-login.png" alt="logo firtsDocy">
        <h1 class="text-[#337ab7]">Login</h1>
      </div>
      <form action="flex flex-col items-center justify-center">
        <input type="text " class="w-full bg-gray-300 my-3 px-2 text-black p-1" placeholder="E-mail">
        <input type="text " class="w-full bg-gray-300 px-2 text-black p-1" placeholder="Senha">
        <div class="flex items-center">  
        <input type="checkbox" class="my-3 border-solid border-gray-100" name="" id=""> <small class="text-black ml-2">Manter conectado</small>
        </div>
        <button type="submit" class="w-full bg-green-500 rounded-full text-white p-2">ENTRAR</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>