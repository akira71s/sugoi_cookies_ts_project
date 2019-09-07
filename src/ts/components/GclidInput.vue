import Vue from 'vue';
import Component from 'vue-class-component';

<template>
  <span>
    <span class="gclid-title">gclid = </span>
    <span class="input-parent"> 
      <input id="gclid-input" @focus="emptyInput" @change="updateVal" @keydown.enter="handleReload" v-model="value"></input>
    </span>
  </span>
</template>

<script>
export default {
  name:'GclidInput', 
  data: function(){ 
    return {
        value: ''
    }
  }, 
  methods:{ 
    getTestDate:function(){
        let mm = (new Date().getMonth()+1).toString();
        mm = mm.length == 1 ? '0' + mm : mm; 
        let dd = new Date().getDate().toString();
        dd = dd.toString().length == 1 ? '0'+dd : dd; 
        return 'test_'+mm+dd;
      },
      handleReload(e){ // :KeyboardEvent
        const val = this.$data.value
        // update the value frst
        this.$emit('update:value',val);
        if(val){
          this.$emit('reload', val);
        }
      },
      updateVal(e){//:KeyboardEvent
        this.$emit('update:value', this.$data.value);
      },
      emptyInput(){ // :void
        this.$data.value = '';
        // update the value
        this.$emit('update:value','');
      } 
  },
  mounted: function () {
    this.$data.value = this.getTestDate();
    this.updateVal()
  }
}
</script>

<style scoped>
.gclid-title{
  font-size:24px;
  font-weight: bold; 
}

.input-parent{
  display: inline-block; 
}

#gclid-input{
  margin-left:4px;
  font-size:24px;
  max-width:120px;
}
</style>