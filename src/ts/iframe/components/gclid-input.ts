import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template:
  `<span>
       <span class="gclid-title">gclid = </span>
       <span class="input-parent"> 
           <input id="gclid-input" @focus="emptyInput" @change="updateVal" @keydown.enter="handleReload" v-model="value"></input>
       </span>
   </span>`,
   data: function(){ 
    return {
        value: ''
    }
   },
   methods:{
     getTestDate():string{
       let mm:string = (new Date().getMonth()+1).toString();
       mm = mm.length == 1 ? '0' + mm : mm; 
       let dd:string = new Date().getDate().toString();
       dd = dd.toString().length == 1 ? '0'+dd : dd; 
       return 'test_'+mm+dd;
      },
      handleReload(e:KeyboardEvent):void{
        const val = this.$data.value
        // update the value frst
        this.$emit('update:value',val);
        if(val){
          this.$emit('reload', val);
        }
      },
      updateVal(e:KeyboardEvent):void{
        this.$emit('update:value', this.$data.value);
      },
      emptyInput():void{
        this.$data.value = '';
        // update the value
        this.$emit('update:value','');
      } 
  },
  mounted: function () {
    this.$data.value = this.getTestDate();
    console.log('mounted', this.$data.value);
    this.updateVal()
  },
  props:['handleKeydown']
})
export default class gclidInput extends Vue{};