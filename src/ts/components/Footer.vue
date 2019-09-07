<template>
  <div class='footer'>
      <!-- :is-enabled="enabled" 渡すのは computedの中の enabled-->
      <domain-msg></domain-msg>
      <switch-input @toggle:switch="toggle"></switch-input>
  </div>
</template>

<script>
import switchInput from './SwitchInput';
import domainMsg from './DomainMsg';

export default {
  methods:{
    toggle:function(shouldEnabled){
      this.$store.commit('isEnabled', shouldEnabled)
    }
  },
  components:{
    'switch-input':switchInput,
    'domain-msg':domainMsg
  },
  computed: {
    enabled: function () {
       return this.$store.getters.isEnabled;
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