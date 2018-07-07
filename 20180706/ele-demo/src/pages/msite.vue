<template>
    
</template>

<script>
import {cityGuess,__cityGuess} from '@/api/getData'
    export default {
        data () {
            return {
                geohash: ''
            } 
        },
        async beforeMount () {
            //city/25?a=1
            // this.cityid = this.$route.params.cityid

            if(this.$route.query.geohash){
                this.geohash = this.$route.query.geohash
            }
            else{
                const data = await __cityGuess()
                console.log(data)
                this.geohash = `${data.latitude},${data.longitude}`
            }
        },
        mounted () {     
            //多页应用，spa组成   
            console.log(this.$route.query.geohash);
        }
    }
</script>

<style>

</style>
