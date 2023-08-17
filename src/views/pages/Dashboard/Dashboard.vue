<template>
  <div class="">
    <NavBar/>
    <div class="h-full p-4">
      <Table class="mt-[15vh]" :dados="this.allHeroes"/>
    </div>
  </div>
</template>

<script>
import NavBar from '../../../components/NavBar.vue'
import Table from '../../../components/Table.vue'
import { mapActions, mapGetters } from 'vuex';


export default {
  data(){
    return{
      
    }
  },
  mounted() {
    this.getHeroes()
  },
  computed:{
    ...mapGetters({
      allHeroes:'auth/heroes',
    })
  },
  methods:{
    ...mapActions({
        GetHeroes:'auth/GetHeroes',
        
      }),
     getHeroes(e){ 
      this.heroes = this.allHeroes
      this.GetHeroes
      },
  },
  components:{
    NavBar,
    Table
  }
}
</script>

<style>

</style>