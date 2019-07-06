<template>
  <span id="domain-msg">
      <span class="domain-msg">{{msg}}</span>
      <br/>
      <span class="domain-name" v-if="enabled">{{domain}}</span>
  </span>
</template>

<script>
const DOMAIN_HERE_MSG = 'domain will be shown here'; 
const CURRENT_DOMAIN_IS = 'Current domain is :'; 
const INSTRUCTION = "To Enable It & Get Started, Click =>";

export default {
  props:{
    isEnabled:{
      type:Boolean,
      required:false
    },
    domainNm:{
      type:String,
      required:false
    }
  },
  methods:{
    toggle:function(shouldEnabled){
      this.$data.msg = shouldEnabled ? CURRENT_DOMAIN_IS:INSTRUCTION;
      this.$data.enabled = shouldEnabled;
    }
  },
  computed: {
    msg: function () {
      return this.isEnabled ? CURRENT_DOMAIN_IS:INSTRUCTION;
    },
    enabled: function () {
      return this.isEnabled;
    },
    domain: function () {
      return this.domainNm;
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