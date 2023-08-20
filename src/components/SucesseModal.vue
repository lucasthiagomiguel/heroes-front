<template>
    <div class="p-4 mb-4 text-sm text-center mt-3 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert" v-show="modal">
        <span class="font-medium">Deletado com sucesso!</span> 
    </div>
</template>

<script>
export default {
    props: {    
        modal: {
            default: false
        }, 
    },  
}
</script>

<style>

</style>