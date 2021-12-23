<template>
    <div>
        <PageNav PageName='會員管理' :WithFunc='func' :Checked='checked'></PageNav>
        <input type="checkbox" v-model="boxes" name="one" id="one" value="one">
        <input type="checkbox" v-model="boxes" name="two" id="two" value="two">
        <DataFooter :start="DataStart" :end="DataEnd" :count="DataCount"></DataFooter>

    </div>
</template>

<script>
import DataFooter from '../components/Data_Footer.vue'
import PageNav from '../components/Page_Nav.vue'

    export default {
        components:{DataFooter , PageNav},
        data:function(){
            return {
                func:false,
                checked:false,
                DataStart:0,
                DataEnd:0,
                DataCount:0,
                boxes:[]
            }
        },
        watch:{
            boxes(){
                if(this.boxes.length>0){
                    this.checked = true ;
                }else{
                    this.checked = false;
                }
            }
        }

    }
</script>

<style>

</style>