<template>
   <div  tabindex="-1" class="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center   justify-items-center bg-[#000]" >
        <form class="mt-9 w-96  w-lg-70% " @submit.prevent="heroes($event)">
            <div class="relative z-0 w-full mb-6 group" >
                <input type="text" name="name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" :value="name">Name</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" name="nickname" id="nickname" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label for="nickname" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nickname</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input v-mask="'##/##/####'" name="birthday" id="birthday" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label for="birthday" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Birthday</label>
            </div>
            <div class="mb-4 flex justify-between   justify-items-center">
                <h3>Weapons:</h3> 
                <span class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" @click="addWeapons">+</span>
            </div>
            <div class="relative z-0 w-full mb-6 group pl-4">
                <div class="" v-for="(w,i)  in weapons" :key="i">
                    <div class="flex mt-4">
                        <div class="w-full">
                            <div class="relative mb-5">
                                <input type="text" name="weapons"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                                <label for="nameweapons" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
                            </div>
                            <div class="relative mb-5 " >
                                <input type="number" name="weapons"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="modweapons" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mod</label>
                            </div>
                            <div class="relative mb-5 " >
                                <input type="number" name="weapons"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label for="attrweapons" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">attr</label>
                            </div>
                            <div class="relative mb-5 " >                                
                                <label for="equipped" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">equipped</label>
                                <select  size="2" name="weapons" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>

                            </div>
                        </div>
                        <span  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm h-[30px] w-[30px]  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-7 px-3 py-1" @click="Weapons(i)" v-if="i > 0">-</span>
                    </div>
                
                </div>
                
                
            </div>
            <div class="mb-4 flex justify-between   justify-items-center">
                <h3>attributes:</h3> 
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <input type="number" name="attributes" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="strength" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Strength</label>
                </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <input type="number" name="attributes"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="dexterity" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dexterity</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="number" name="attributes"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="constitution" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Constitution</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="number" name="attributes"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="intelligence" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Intelligence</label>
                </div>
                 <div class="relative z-0 w-full mb-6 group">
                    <input type="number" name="attributes"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="wisdom" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Wisdom</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="number" name="attributes"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="charisma" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Charisma</label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="keyAttribute"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="keyAttribute" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">KeyAttribute</label>
                </div>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-8">Submit</button>
        </form>
   </div>

</template>

<script>

import { mapActions } from 'vuex';
export default {
     data(){
        return{
            heroesObject:[],
            weapons:[ 
                {
                    name:'',
                    mod:0,
                    attr:'',
                    equipped:0
                }
            ],
            attributes:{
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0
            },
            keyAttribute:''
        }
    },
    mounted() {
    console.log(this.searchText)
  },
    computed:{
        
    },
    methods:{
        ...mapActions({
        createHeroes:'heroes/ActionCreate',
        
      }),
      
        heroes(e){
            
                
            var attributes = []
            
            for(var i=0;i< e.target.length;i++){
                var weapons = []
                if(e.target[i].name == "weapons"){
                    
                    weapons.push({
                        name:e.target[i].value
                        
                    })
                }
                
                if(e.target[i].name == "attributes"){
                    
                    attributes.push(

                            e.target[i].value  
                    )
                }
                if(e.target[i].name == "keyAttribute"){
                    
                    console.log(e.target[i].value);
                    this.keyAttribute = e.target[i].value

                    
                }
                
                
            }
            for(var i=0;i< weapons.length;i=4){
                this.weapons.push(
                    {
                        name:weapons[0],
                        mod:weapons[1],
                        attr:weapons[2],
                        equipped:weapons[3]
                    }
                )
                
            }
            
            for(var i=0;i < attributes.length;i=6){
                
                this.attributes = 
                    {
                        strength: attributes[0],
                        dexterity: attributes[1],
                        constitution: attributes[2],
                        intelligence: attributes[3],
                        wisdom: attributes[4],
                        charisma: attributes[5]
                    }
                
            }

            this.heroesObject.push(
                {
                    name: e.target[0].value,
                    nickname:e.target[1].value,
                    birthday:reverse(e.target[2].value),
                    weapons:this.weapons,
                    attributes:this.attributes,
                    keyAttribute:this.keyAttribute
                }
            )
                   
            // this.createHeroes(this.heroesObject[0])
            console.log(this.heroesObject)
        },
        addWeapons(){
             this.weapons.push(
                {
                    name:"",
                    mod:0,
                    attr:'',
                    equipped:0
                }
            )
        },
        Weapons(e){
            if(e >= 1 ){
                var index = this.weapons.indexOf(e)
                this.weapons.splice(index, 1)               
            
            }
        }
    }
}
</script>

<style>

</style>