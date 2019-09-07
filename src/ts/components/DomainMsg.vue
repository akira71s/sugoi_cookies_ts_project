<template>
  <span id="domain-msg" >
      <span class="domain-msg">{{msg}}</span>
      <br/>
      <span class="domain-name" :enabled="checked" v-if="checked">{{domain}}</span>
  </span>
</template>

<script>
import {CURRENT_DOMAIN_IS,INSTRUCTION,DOMAIN_HERE_MSG} from '../const';
export default {
  methods:{
    toggle:function(shouldEnabled){
      this.$store.commit('msg', shouldEnabled ? CURRENT_DOMAIN_IS:INSTRUCTION);
      this.$store.commit('isEnabled', shouldEnabled);
    }
  },
  computed: {
    msg: function () {
      return this.$store.getters.isEnabled ? CURRENT_DOMAIN_IS: INSTRUCTION;
    },
    checked: function () {
      return this.$store.getters.isEnabled;
    },
    domain: function () {
      // TODO: use DOMAIN_HERE_MSG
      return this.$store.getters.domainNm;
    }
  }
}
</script>

<style scoped>
.domain-msg{
  font-size: 14px; 
  padding-top: 8px;
}
.domain-name{
  margin-left: 8px;
  font-weight: bold;
  font-size: 18px; 
}
</style>