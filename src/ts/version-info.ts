import {VERSION} from './const';
import Vue from 'vue';

// version info mation header
new Vue({
    el: '#ver-info',
    data: {
      message: VERSION
    }
  })