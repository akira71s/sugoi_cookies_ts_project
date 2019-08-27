<template>
  <!-- :enabled="checked" がなければ、computed が　で動かない -->
  <label id="switch-input" class="switch">
    <input id="toggle" @change="toggle" type="checkbox" v-model="checked">
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  props:{
  isEnabled:{
     type:Boolean,
     required:false
   }
  },
  methods:{
    toggle(e){
      const target = e.target;
      if(target['tagName'] !== 'INPUT'){
        return;
      }
      const isChecked = target['checked'];
      this.$emit('toggle:switch',isChecked);
    }
  },
  computed: {
    checked: function () {
      return this.isEnabled;
    }
  }
}
</script>

<style scoped>
/* FOR TOGGLE BUTTON */
.switch{
    margin-left:36px;
    display:inline-block; 
  }
  
  /* The switch - the box around the slider */
  .switch {
    position: fixed;
    display: inline-block;
    width: 60px;
    height: 36px;
    right: 10px;
    bottom: 0px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 34px;
    width: 36px;
    left: 0px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 24px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
</style>