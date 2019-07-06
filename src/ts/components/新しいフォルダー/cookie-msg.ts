import Vue from 'vue';
import Component from 'vue-class-component';

const NO_COOKIE_MSG='NO COOKIE FOUND';

@Component({
  template:
  `<div v-bind:id="parentId">
      <span v-bind:id="compId">
          {{name}}
      </span>
      <span v-bind:id="valueId" v-bind:class="{bgGreen:hasValue}">
          {{cookieVal}}
      </span>
  </div>`,  
  // title={{value}}
  props:['name','valueId','compId','parentId','cookieVal'],
  computed: {
    hasValue: function () {
      return this.cookieVal && this.cookieVal!==NO_COOKIE_MSG;
    }
  },
  created: function(){
    this.$emit('get:cookies');
  }
})
export default class cookieMsg extends Vue {}