import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      count : 0
    },
    mutations :{
      incretemnt(state){
        state.count++;
      }
    },
    getters:{
        count(){
            return this.count;
        }
      }
})
export default store;