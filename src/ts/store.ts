import 'babel-polyfill'
// @ts-ignore;
import {NO_COOKIE_MSG} from './const';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      isEnabled : false,
      inputVal: '',
      gclawVal: NO_COOKIE_MSG,
      gacVal: NO_COOKIE_MSG,
      gclidVal: NO_COOKIE_MSG,
      domainNm : ''
    },
    mutations :{
      inputVal:(state, payload)=>{
        state.inputVal = payload.inputVal;
      },
      isEnabled:(state, payload) =>{
        state.isEnabled = payload.isEnabled;
      },
      gclawVal:(state, payload)=>{
        state.gclawVal = payload.gclawVal;
      },
      gacVal:(state, payload)=>{
        state.gacVal = payload.gacVal;
      },
      gclidVal:(state, payload)=> {
        state.gclidVal = payload.gclidVal;
      },
      domainNm:(state, payload)=> {
        state.domainNm = payload.domainNm;
      }    
    },
    getters:{
      inputVal:state =>{
        return state.inputVal;
      },
      isEnabled:state =>{
        return state.isEnabled
      },
      gclawVal:state=>{
        return state.gclawVal;
      },
      gacVal: state =>{
        return state.gacVal;
      },
      gclidVal: state => {
        return state.gclidVal ;
      },
      domainNm: state => {
       return state.domainNm ;
      }
    }
    //,
    // actions :{
    //     incretemnt(state){
    //       state.count++;
    //     }
    //   },
})
export default store;