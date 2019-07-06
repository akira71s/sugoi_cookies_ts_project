import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template:
  `<label id="switch-input" class="switch">
    <input id="toggle" @change="toggle" type="checkbox">
    <span  class="slider round"></span>
  </label>`,
  // enabled?checked:''
  props:['enabled'],
  methods:{
    toggle(e:Event):void{
      const target:EventTarget = e.target;
      if(target['tagName'] !== 'INPUT'){
        return;
      }
      const isChecked = target['checked'];
      this.$emit('toggle:switch',isChecked);
    }
  }
})
export default class swtichInput extends Vue {}