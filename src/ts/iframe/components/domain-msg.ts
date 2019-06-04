import Vue from 'vue';
import Component from 'vue-class-component';

const DOMAIN_HERE_MSG = 'domain will be shown here'; 
const INSTRUCTION = "To Enable It & Get Started, Click =>";

@Component({
  template:
  `<span id="domain-msg">
      <span class="domain-msg">{{msg}}</span>
      <br/>
      <span id="domain-name" v-if="enabled">{{domain}}</span>
  </span>`,
  props:['isEnabled','domainNm'],
  methods:{
    toggle:function(shouldEnabled:boolean):void{
      this.$data.msg = shouldEnabled ? DOMAIN_HERE_MSG:INSTRUCTION;
      this.$data.enabled = shouldEnabled;
    }
  },
  computed: {
    msg: function () {
      return this.isEnabled ? DOMAIN_HERE_MSG:INSTRUCTION;
    },
    enabled: function () {
      return this.isEnabled;
    },
    domain: function () {
      return this.domainNm;
    }
  }
})
export default class domainMsg extends Vue {}