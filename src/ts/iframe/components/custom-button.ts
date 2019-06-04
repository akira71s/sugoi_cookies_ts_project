import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template:
  `<span v-bind:class="parentClass" v-bind:id="parentId">
    <input type="button" v-bind:id="btnId" v-bind:value="btnLabel" 
           v-bind:class="btnClass" @click="handleClick"></input>
  </span>`,
  props:['message', 'btnLabel','btnClass','btnId','parentClass','parentId'],
  methods:{
    handleClick():void{
      const id = this.$props.btnId;
      console.log(id);
      if(id==='go'){
        this.$emit('reload');
      } else if (id==='clear'){
        this.$emit('clear:cookies');
      } else if (id==='clear-all'){
        this.$emit('clear-all:cookies');
      }
    }
  }
})
export default class customBtn extends Vue {}