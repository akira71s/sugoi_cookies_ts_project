<template>
  <div class='footer'>
      <!-- :is-enabled="enabled" 渡すのは computedの中の enabled-->
      <domain-msg :is-enabled="isEnabled" :domain-nm="domainNm"></domain-msg>
      <switch-input :is-enabled="isEnabled" @toggle:switch="toggle"></switch-input>
  </div>
</template>

<script>
import switchInput from './SwitchInput';
import domainMsg from './DomainMsg';

export default {
 props:{
   isEnabled:{
     type:Boolean,
     required:false
   },
   domainNm: {
     type:String,
     required:false
   }
 },
  methods:{
    toggle:function(shouldEnabled){
      this.$emit('toggle', shouldEnabled);
    }
  },
  components:{
    'switch-input':switchInput,
    'domain-msg':domainMsg
  },
  computed: {
    enabled: function () {
      console.log('computed Footer.VUE:', this.isEnabled);
      return this.isEnabled;
    }
  }
}
</script>

<style>
.footer{
  background-color:black;
  height:56px;
  width:100%;
  padding-top:12px;
}
</style>