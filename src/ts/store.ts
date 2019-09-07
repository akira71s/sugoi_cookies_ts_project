import 'babel-polyfill'
// @ts-ignore;
import {NO_COOKIE_MSG, INSTRUCTION} from './const';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      isEnabled : false,
      msg : INSTRUCTION,
      inputVal: '',
      gclawVal: NO_COOKIE_MSG,
      gacVal: NO_COOKIE_MSG,
      gclidVal: NO_COOKIE_MSG,
      domainNm : ''
    },
    /** mutations (setters) */
    mutations :{
      inputVal:(state, payload)=>{
        state.inputVal = payload;
      },
      isEnabled:(state, payload) =>{
        state.isEnabled = payload;
      },
      cookie:(state, payload)=>{
        const name = payload.name;
        const value = payload.cookieValue;
        if(name==='gclaw'){
          state.gclawVal = value;
        } else if(name==='gac') {
          state.gacVal = value;
        } else if(name==='gclid') {
          state.gclidVal = value;
        }
      },
      domainNm:(state, payload)=> {
        state.domainNm = payload;
      }
    },
    /** getters*/
    getters:{
      inputVal:state =>{
        return state.inputVal;
      },
      isEnabled:state =>{
        return state.isEnabled
      },
      cookie:state => (name) => { 
        if(name==='gclaw'){
          return state.gclawVal;
        } else if(name==='gac') {
          return state.gacVal;
        } else if(name==='gclid') {
          return state.gclidVal;
        }
      },
      has:state => (name) =>{
        if(name==='gclaw'){
          return state.gclawVal&&state.gclawVal!=NO_COOKIE_MSG;
        } else if(name==='gac'){
          return state.gacVal&&state.gacVal!=NO_COOKIE_MSG;
        } else if(name==='gclid') {
          return state.gclidVal&&state.gclidVal!=NO_COOKIE_MSG;
        }
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
