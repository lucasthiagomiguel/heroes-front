<template>
  <div class="">
    <NavBar/>
    <ModalSucess :modal="this.modal" />
    <div class="h-full p-4">
      <Table class="mt-[15vh]" :dados="this.allHeroes"/>
    </div>
  </div>
</template>

<script>
import NavBar from '../../../components/NavBar.vue'
import Table from '../../../components/Table.vue'
import ModalSucess from '../../../components/SucesseModal.vue'
import { mapActions, mapGetters } from 'vuex';
import store from '@/store'


export default {
  data(){
    return{
      heros:[]
    }
  },
  mounted() {
    this.Heroes()
  },
  computed:{
    ...mapGetters({
      allHeroes:'heroes/heroes',
      modal:'heroes/modal',
    })
  },
  methods:{
    ...mapActions({
        GetHeroes:'heroes/GetHeroes',
        
      }),
     Heroes(e){ 
      this.heros = this.allHeroes
      console.log(this.modal);
      this.GetHeroes()
      },
  },
  components:{
    NavBar,
    Table,
    ModalSucess
  }
}
</script>

<style>

</style>