<template>
    <div class="city_container">
        <head-top go-back="true" :head-title="cityname"></head-top>
    </div>
</template>

<script>
import headTop from "@/components/headTop.vue"
import {currentcity} from "@/api/getData"

    export default {
       async  mounted () {
            this.cityid = this.$route.params.cityid 
            const { name } = await currentcity(this.cityid) 
            this.cityname = name
        },
        data(){
            return {
                cityid:'',
                cityname:''
            } 
        },
        components:{
            'head-top': headTop
        }
    }
</script>

<style lang="stylus">

</style>
