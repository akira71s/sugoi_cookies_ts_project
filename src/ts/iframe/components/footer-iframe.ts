import Vue from 'vue';
import Component from 'vue-class-component';
import switchInput from './switch-input';
import domainMsg from './domain-msg';

@Component({
  template:
  `<div class='footer-iframe'>
      <domain-msg :is-enabled="enabled" :domain-nm="domainNm"></domain-msg>
      <switch-input :is-enabled="enabled" @toggle:switch="toggle"></switch-input>
   </div>`,
  props:['isEnabled','domainNm'], // domainName domainMsg
  methods:{
    toggle:function(shouldEnabled:boolean){
      this.$emit('toggle', shouldEnabled);
    }
  },
  components:{
    'switch-input':switchInput,
    'domain-msg':domainMsg
  },
  computed: {
    enabled: function () {
      return this.isEnabled;
    }
  }
})
export default class footerIframe extends Vue {}