/** 
 * @author Akira Sakaguchi <akira.s7171@gmail.com>
 */
import * as CONST from '../const';
let gacCache:string[] = [];
let gclawCache:string[] = [];
let gclidCache:string[] = [];

/** 
 * eventListener - eventListener for chrome.tabs.sendMessage(tabID, obj, function) 
 */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const msg:string = request.message;
  const val:string = request.value;

  // from background js
  if(msg=='enabled'){
    start_();
    let cookies:string[] = getCookies(true);
    write_(cookies, document.domain);
    setTimeout(checkCookies_, 3000);
  
  // from background js
  } else if (msg=='CV'){
    writeCVinfo_(val);
  } else if (msg=='getCookies'){
    chrome.runtime.sendMessage({message:'sendCookie', cookieName: 'gcl_aw', cookieValue:gclawCache});
    chrome.runtime.sendMessage({message:'sendCookie', cookieName: 'gac', cookieValue:gacCache});
    chrome.runtime.sendMessage({message:'sendCookie', cookieName: 'gclid', cookieValue:gclidCache});
  }
  return true;
});

/** 
 * check if new cookies created / overriden after window loaded
 * @return {bookean}
 */
function checkCookies_(){
  let newCookies:string[] = [];
  let isChanged:boolean = false;
  let cookies:string[] = getCookies(false);
  cookies.forEach((cookie:string)=>{
    let name:string = cookie.split('=')[0];   
    let value:string = cookie.split('=')[1];
    if(name.includes('gac')&&!gacCache.includes(value)) {
      isChanged = true;
      newCookies.push(name+'='+value);
    }  
    if(name.includes('gcl_aw')&&!gclawCache.includes(value)) {
      isChanged = true;
      newCookies.push(name+'='+value);
    }  
    if(name.includes('gclid')&&!gclidCache.includes(value)) {
      isChanged = true;
      newCookies.push(name+'='+value);
    }
  });
  if(isChanged){
    console.log("%cCOOKIE CHANGED after windowLoaded", CONST.STYLES_BOLD_RED.join(';'));    
    newCookies.forEach((cookie:string)=>{
      add_(cookie);
    });
  }
};

 /** 
 * return array of cookies ('name=value')
 * @return {string[]}
 */
function getCookies(isOnload:boolean){
  let cookies:string[] = document.cookie.split(';');
  let localStorageGclid = localStorage.getItem('gclid');
  if(localStorageGclid){
    cookies.push('gclid='+localStorageGclid);
  }
  cookies = cookies.filter((cookie)=>{
    let name = cookie.split('=')[0];
    let value = cookie.split('=')[1];
    if(name.includes('gac')&&!gacCache.includes(value)){
      if(isOnload){
        gacCache.push(value) 
      }
      return true;
    } else if (name.includes('gcl_aw')&&!gclawCache.includes(value)){
      if(isOnload){
        gclawCache.push(value); 
      }
      return true;
    } else if (name.includes('gclid')&& !gclidCache.includes(value)){
      if(isOnload){
        gclidCache.push(value); 
      }
      return true;
    }
    return false;
  });
  return cookies;
};

/** 
 * calling console log for starter messages
 */
function start_(){
  const domain:string = document.domain;
  console.log("%cSUGOI!Cookies for Google Ads (`*・ω・’)" + CONST.VERSION, CONST.STYLE_BOLD);
  console.log("Current domain is : 【", domain ,"】");
};

/** 
 * calling console log for cookies
 * @private
 * @oaram {Array.<string>} cookies
 * @oaram {string} domain
 */
const write_ =(cookies, domain) =>{
  /** _gal_aw */
  writeCookies_(cookies, CONST.GCLAW_NM, domain);
  /** _gac */ 
  writeCookies_(cookies, CONST.GAC_NM, domain);
  /** gclid */ 
  writeCookies_(cookies, CONST.GCLID_NM, domain);
};

/** 
 * logging cookie info (related to Google Ads)
 */
const writeCVinfo_ =(CVinfo) =>{
  console.log('%cCONGRATULATIONS! CV FIRES!', CONST.STYLES_BOLD_WHITE_BG_ORANGE.join(';'));
  console.log('CV ID: %c'+ CVinfo.cvid, CONST.STYLE_BOLD);
  console.log('CV LABEL: %c'+ CVinfo.cvlabel, CONST.STYLE_BOLD);
  if(!CVinfo.gclaw&&!CVinfo.gac){
    console.log('%cBUT NOT COOKIES DETECTED', CONST.STYLES_BOLD_WHITE_BG_GRAY.join(';'));
  } else { 
    if (CVinfo.gclaw){
      console.log('CV COOKIE: %c'+ CVinfo.gclaw, CONST.STYLE_BOLD);
    }  
    if(CVinfo.gac){
    console.log('CV COOKIE: %c'+ CVinfo.gac, CONST.STYLE_BOLD);
    }
  }
}
/** 
 * calling console log for cookies
 * @private
 * @oaram {Array.<string>} cookies
 * @oaram {string} domain
 */
const add_ =(cookie:string) =>{
  let name:string = cookie.split('=')[0];
  let value:string = cookie.split('=')[1];
  console.log(CONST.STYLE_ESCAPE + name + '=' + value, CONST.STYLES_BOLD_WHITE_BG_GREEN.join(';'));
};

/** 
 * calling console log for cookies
 * @private
 * @return {Promise} 
 * @param {Array.<string>} cookies
 * @param {string} cookieNm
 * @param {string} domain
 */
function writeCookies_(cookies:string[], cookieNm:string, domain:string){
  cookies = cookies.filter((cookie) => {
    let name:string = cookie.split('=')[0];
    return name.includes(cookieNm);
  });
  cookies.length > 0 ?
  console.log('【found out:', cookies.length, ' ', cookieNm + ' cookies】') :
  console.log('NO '+ cookieNm + ' detected');
  cookies.forEach(function(item){
    writeCookieInfo_(item);
  }); 
};

/** 
 * @private
 * @param {!string} cookie
 */
const writeCookieInfo_ = (cookie:string) =>{
  if(!cookie){
    console.error('parameter invalid');
    return;
  }
  let name:string = cookie.split('=')[0];
  let value:string = cookie.split('=')[1];
  console.log(CONST.STYLE_ESCAPE + name + '=' + value, CONST.STYLES_BOLD_WHITE_BG_GREEN.join(';'));
  chrome.runtime.sendMessage({message:'sendCookie', cookieName: name, cookieValue:value});
}; 
