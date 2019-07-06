import Vue from 'vue';
// @ts-ignore
import CustomBtn from './components/CustomBtn';
// @ts-ignore
import GclidInput from './components/GclidInput';
// @ts-ignore
import cookieMsg from './components/CookieMsg';
// @ts-ignore
import footer from './components/Footer';
import {VERSION} from './const';
import * as functions from './functions';

const PARENT_URL = "*";
const NO_COOKIE_MSG='NO COOKIE FOUND';

/**
 * set the version text in the popup menu
 */
window.addEventListener('DOMContentLoaded',(e)=>{
  document.getElementById('ver-info').innerText = VERSION;
});

/** 
 * Listening message from content.js & writers.js
 * once messages received, post message to the iframe window
 */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let msg = request.message;
  if(msg==='sendDomainName'){
    app.$data.domainNm = request.domainName;
  } else if(msg==='sendCookie'){
     const cookieName = request.cookieName;
     const cookieValue = request.cookieValue;
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
  template:
    `<span>
    <div class="second-line">
        <gclid-input ref="gclidInput" @update:value="updateInputVal" @reload="reload"></gclid-input>
        <custom-btn parentClass="go-parent" parentId="go-parent" btnClass="btn-primary"
                btnId="go" btnLabel="Go!" @click="reload">
        </custom-btn>
    </div>
    <div class="third-line" id="clear-parent">
        <custom-btn parentClass="clear-parent" parentId="clear-parent" btnClass="btn-warning"
                   btnId="clear" btnLabel="Clear GoogleAds-related Cookies" @click="clear">
        </custom-btn>
    </div>
    <div class="forth-line" id="clear-all-parent">
        <custom-btn parentClass="clear-all-parent" parentId="clear-all-parent" btnClass="btn-danger"
                       btnId="clear-all" btnLabel="Clear All Cookies of This Domain" @click="clearAll">
        </custom-btn>
    </div>
    <div class="msgs">
        <cookie-msg ref='gclawMsg' parentId="gclaw-msg" compId="gclaw-name" :cookie-val="gclawVal"
                    valueId="gclaw-value" name="gclaw" @get:cookies="getCookies">
        </cookie-msg>
        <cookie-msg ref='gacMsg' parentId="gac-msg" compId="gac-name" :cookie-val="gacVal"
                    valueId="gac-value" name="gac" @get:cookies="getCookies">
        </cookie-msg>
        <cookie-msg ref='gclidMsg' parentId="gclid-msg" compId="gclid-name" :cookie-val="gclidVal"
                    valueId="gclid-value" name="gclid" @get:cookies="getCookies">
        </cookie-msg>
    </div>
    <footer-iframe ref="footer" :is-enabled="isEnabled" :domain-nm="domainNm" @toggle="toggle"></footer-iframe>
    </span>`,
  components :{
    'custom-btn' : CustomBtn,
    'gclid-input' : GclidInput,
    'cookie-msg': cookieMsg,
    'footer-iframe':footer
  },
  data: function(){ 
    return {
        isEnabled : false,
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
              console.log(url);
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

      functions.sendMsgToContentJS({'msg':'toggle', 'val':shouldEnabled, 'gclidVal':this.$data.inputVal});
    },
    postMessage:function(data:object):void{
      window.parent.postMessage(JSON.stringify(data), PARENT_URL);
    },
    // check if the plugin is enabled on load
    checkEnabled:function(){
      const isEnabledStr = window.localStorage.getItem('enabled');
      const isEnabled = isEnabledStr && isEnabledStr=='true'? true : false; 
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
    start_(){
      this.checkEnabled();
      this.getDomainName();
      this.getCookies();
    }
  },
  created:function(){
    this.start_();
  }
});