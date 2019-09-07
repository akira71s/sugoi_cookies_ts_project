// TODO: 
// this.$store...
import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import CustomBtn from './components/CustomBtn';
// @ts-ignore
import GclidInput from './components/GclidInput';
// @ts-ignore
import cookieMsg from './components/CookieMsg';
// @ts-ignore
import footer from './components/Footer';
import store from './store';
// @ts-ignore
import {PARENT_URL} from './const';
// @ts-ignore
import {NO_COOKIE_MSG} from './const';
// @ts-ignore
import appTemplate from './app.template';
import * as functions from './functions';

/** 
 * Listening message from content.js & writers.js
 */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let msg:string = request.message;
  if(msg==='sendDomainName'){
    app.$data.domainNm = request.domainName;
  } else if(msg==='sendCookie'){
     const cookieName:string = request.cookieName;
     let cookieValue:string|string[] = request.cookieValue;
     if(typeof cookieValue !='string' && cookieValue.length > 0){
       cookieValue = cookieValue[0]
     }
     if(cookieName.includes('gcl_aw')){
      app.$data.gclawVal = cookieValue.length ===0 ?'':cookieValue;
     } else if (cookieName.includes('gac')){
      app.$data.gacVal = cookieValue.length ===0 ?'':cookieValue;
     } else if (cookieName.includes('gclid')){
      app.$data.gclidVal = cookieValue.length ===0 ?'':cookieValue;
      if(!app.$data.gclidVal&&window.localStorage.getItem('gclid')){
        app.$data.gclidVal = window.localStorage.getItem('gclid');
      }
     }
  } 
  return true;
});

// @reload="reload"
// @clear:cookies="clear"
// @clear-all:cookies="clearAll" 
const app = new Vue({
  el: '#app',
  store,
  template: appTemplate,
  components :{
    'custom-btn' : CustomBtn,
    'gclid-input' : GclidInput,
    'cookie-msg': cookieMsg,
    'footer-comp':footer
  },
  data: function(){ 
    return {
        isEnabled : false,
        //window.localStorage.getItem('enabled') && 
        //  window.localStorage.getItem('enabled')=='true'? true : false,
        inputVal: '',
        gclawVal: NO_COOKIE_MSG,
        gacVal: NO_COOKIE_MSG,
        gclidVal: NO_COOKIE_MSG,
        domainNm : ''
    }
   },
   methods:{ 
    reload:function(){
      if(this.inputVal && this.$data.isEnabled/**TODO*/){
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tabID = tabs[0].id;
          if (tabID) {
            chrome.tabs.sendMessage(tabID, {message: 'getUrl'}, ((response)=>{
              const url = functions.getUrlWithoutGclid(response);
              if(url){
                // & or ? gclid=...
                const gclid = functions.getGclid_(url,this.inputVal);
                chrome.tabs.sendMessage(tabID, {message: 'reload', value:url+gclid});
              }
            return true; 
            }));
          }
          return true; 
        })
      }
    },
    updateInputVal:function(inputVal:string){
      this.$data.inputVal = inputVal;
    },
    clear:function(inputVal:string){
      this.clearCookieMsgsAndInput_();
      functions.sendMsgToContentJS({'msg':'clearCookies'});
    },
    clearAll:function(inputVal:string){
      this.clearCookieMsgsAndInput_();
      functions.sendMsgToContentJS({'msg':'clearAll'});
    },
    clearCookieMsgsAndInput_:function(){
      this.$refs.gclidInput.emptyInput();
      this.$data.gclawVal ='';
      this.$data.gacVal ='';
      this.$data.gclidVal ='';
    },
    getCookies:function(inputVal:string){
      functions.sendMsgToContentJS({'msg':'getCookies'});
    },
    toggle:function(shouldEnabled:boolean):void{
      this.$data.isEnabled = shouldEnabled;
      const isEnabledStr = window.localStorage.getItem('enabled');
      const shouldEnabledStr = isEnabledStr && isEnabledStr == 'true'? 'false' : 'true';
      window.localStorage.setItem('enabled', shouldEnabledStr);  
      shouldEnabled ? 
        functions.sendMsgToContentJS({'msg':'toggle', 'val':shouldEnabled, 'gclidVal':this.$data.inputVal}):
        functions.sendMsgToContentJS({'msg':'toggle', 'val':shouldEnabled, 'gclidVal':''});
    },
    postMessage:function(data:object):void{
      window.parent.postMessage(JSON.stringify(data), PARENT_URL);
    },
    // check if the plugin is enabled on load
    checkEnabled:function(){
      const isEnabledStr = window.localStorage.getItem('enabled');
      const isEnabled = isEnabledStr && isEnabledStr=='true'? true : false; 
      this.setEnabled(isEnabled);
    },
    // check if the plugin is enabled on load
    setEnabled:function(isEnabled){
      this.$data.isEnabled = isEnabled;
    },
    getDomainName:function(){
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabID = tabs[0].id;
        if (tabID) {
          chrome.tabs.sendMessage(tabID, {message: 'getDomainName'}, ()=>{});
        }
        return true; 
      })  
    },
    start_():void{
      this.checkEnabled();
      this.getDomainName();
      this.getCookies();
    }
  },
  created:function():void{
    this.start_(); // => start checking if the app is enabeled 
  }
});