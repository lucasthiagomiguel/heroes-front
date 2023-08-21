<template>
  <div class="">
    <NavBar/>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-8 mt-4 ml-4" @click="showForm">New</button>
    <FormAddVue :formProp="formProp"  @close="formProp = $event"/>
    <ModalSucess :modal="this.modal" />
    <div class="h-full p-4">
      <Table class="mt-[15vh]" :dados="this.allHeroes"/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Table from '@/components/Table.vue'
import ModalSucess from '@/components/SucesseModal.vue'
import FormAddVue from '@/components/FormAdd.vue'
import { mapActions, mapGetters } from 'vuex';


export default {
  data(){
    return{
      heros:[],
      formProp:false
    }
  },
  mounted() {
    this.Heroes()
  },
  computed:{
    ...mapGetters({
      allHeroes:'heroes/heroes',
    })
  },
  methods:{
    ...mapActions({
        GetHeroes:'heroes/GetHeroes',
        
      }),
     Heroes(e){ 
        this.heros = this.allHeroes
        this.GetHeroes()
      },
      showForm(){
        this.formProp =  true
        console.log(this.formProp)
      }
  },
  components:{
    NavBar,
    Table,
    ModalSucess,
    FormAddVue
  }
}
</script>

<style>

</style>