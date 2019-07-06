<template>
  <span v-bind:class="parentClass" v-bind:id="parentId">
    <input type="button" v-bind:id="btnId" v-bind:value="btnLabel" 
           v-bind:class="btnClass" @click="handleClick"></input>
  </span>
</template>

<script>
export default {
  name:'CustomBtn',
  props:{
    btnLabel:{
      type: String,
      required: true,
    },
    btnClass:{
      type: String,
      required: true,
    },
    btnId:{
      type: String,
      required: true,
    },
    parentClass:{
      type: String,
      required: true,
    },
    parentId:{
      type: String,
      required: true,
    }
  },
  methods:{
    handleClick:function(){
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.go-parent{
  display: inline-block; 
}
#go{
  font-size:18px;
  margin-left: 8px;
}

#clear, #clear-all{
  font-size:14px;
}
</style>