import Vue from 'vue';
import customBtn from './components/custom-button';
import gclidInput from './components/gclid-input';
import cookieMsg from './components/cookie-msg';
import footerIframe from './components/footer-iframe';

// TODO: change this
const PARENT_URL = "*";
const NO_COOKIE_MSG='NO COOKIE FOUND';
// PARENT_URL = 'chrome-extension://chepcnlekjcepkfogmkaejhkobpbnnbi/'; // TEST_COOKIES
// const PARENT_URL = 'chrome-extension://knohbnpbdehneiegeneeeajikikaehag/'; // LOCAL
// const PARENT_URL = 'chrome-extension://oidgodfancakeifokbiocnnlfoocmbpd/'; // PRODUCTION
// TODO :handle-click="onGoBtnClicked"
// TODO :handle-click="onClearBtnClicked"
// TODO :handle-click="onClearAllBtnClicked"

new Vue({
  el: '#app',
  template:
    `<span>
    <div class="second-line">
        <gclid-input ref="gclidInput" @update:value="updateInputVal" @reload="reload"></gclid-input>
        <custom-btn parentClass="go-parent" parentId="go-parent" btnClass="btn-primary"
                btnId="go" btnLabel="Go!" @reload="reload" />
        </custom-btn>
    </div>
    <div class="third-line" id="clear-parent">
        <custom-btn parentClass="clear-parent" parentId="clear-parent" btnClass="btn-warning"
                   btnId="clear" btnLabel="Clear GoogleAds-related Cookies" @clear:cookies="clear">
        </custom-btn>
    </div>
    <div class="forth-line" id="clear-all-parent">
        <custom-btn parentClass="clear-all-parent" parentId="clear-all-parent" btnClass="btn-danger"
                       btnId="clear-all" btnLabel="Clear All Cookies of This Domain" @clear-all:cookies="clearAll"/>
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
    <footer-iframe ref="footerIframe" :is-enabled="isEnabled" :domain-nm="domainNm" @toggle="toggle"></footer-iframe>
    </span>`,
  components :{
    'custom-btn' : customBtn,
    'gclid-input' : gclidInput,
    'cookie-msg': cookieMsg,
    'footer-iframe':footerIframe
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
        this.postMessage({'type':'reload',val:this.inputVal});
      }
    },
    updateInputVal:function(inputVal:string){
      console.log('update ',inputVal);
      this.$data.inputVal = inputVal;
    },
    clear:function(inputVal:string){
      this.clearCookieMsgsAndInput_();
      this.sendMsgToContentJS_('clearCookies');
    },
    clearAll:function(inputVal:string){
      this.clearCookieMsgsAndInput_();
      this.sendMsgToContentJS_('clearAll');
    },
    clearCookieMsgsAndInput_:function(){
      this.$refs.gclidInput.emptyInput();
      this.$data.gclawVal ='';
      this.$data.gacVal ='';
      this.$data.gclidVal ='';
    },
    getCookies:function(inputVal:string){
      this.sendMsgToContentJS_('getCookies');
    },
    toggle:function(shouldEnabled:boolean):void{
      this.$data.isEnabled = shouldEnabled;
      this.postMessage({'type':'toggleEnabled'});
      this.sendMsgToContentJS_('toggle', shouldEnabled);
    },
    sendMsgToContentJS_:function(msg:string,val:string|null){
      const obj = {'type':'sendMsg','msg':msg, 'val':val, 'gclidVal': this.$data.inputVal};
      this.postMessage(obj);
    },
    postMessage:function(data:object):void{
      window.parent.postMessage(JSON.stringify(data), PARENT_URL);
    },
    IsJsonString(str:string) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }    
  },
  created:function(){
    window.addEventListener('message', (e)=>{
      if(!this.IsJsonString(e.data)){
        return;
      }
      const data = JSON.parse(e.data);
      if(data.type && data.type==='isEnabled'){
        this.isEnabled = data.isEnabled ? true:false;
      } else if(data.type && data.type==='reload'){
        this.reload();
      } else if(data.type && data.type==='emptyInput'){
        this.gclidInput.emptyInput();
      } else if(data.type && data.type==='sendDomainName'){
        this.$data.domainNm = data.domainName;
      } else if(data.type && data.type==='sendCookie'){
        const cookieName = data.cookieName;
        const cookieValue = data.cookieValue;
        if(cookieName.includes('gcl_aw')){
          this.$data.gclawVal = cookieValue.length ===0 ?'':cookieValue;
        } else if (cookieName.includes('gac')){
          this.$data.gacVal = cookieValue.length ===0 ?'':cookieValue;
        } else if (cookieName.includes('gclid')){
          this.$data.gclidVal = cookieValue.length ===0 ?'':cookieValue;
        }
      }
    });
  }
});