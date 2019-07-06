import * as functions from '.././functions';
import {STYLE_ESCAPE,STYLE_BOLD} from "../const";
/** 
 * @author Akira Sakaguchi <akira.s7171@gmail.com>
 */
"use strict";

// start
chrome.runtime.sendMessage({message:'start'});
chrome.runtime.sendMessage({message:'sendDomainName',domainName:document.domain}); 

/** 
 * eventListener - eventListener for chrome.tabs.sendMessage(tabID, obj, function) 
 */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   const msg = request.message;
   const url = window.location.href;
   switch(msg){
     case "clearCookies":
     clearCookies_(document.domain);
     break;

     case "clearAll" :
     clearCookies_(document.domain, true);
     break;

     case 'reload' :
     reload_(request.value);
     break;

     case 'toggle':
     // request.value = shouldEnabled
     toggle_(request.value);
     reload_(url, request.gclidVal);
     break;

     case 'getUrl':
     sendResponse(url);
     break;

     case 'getDomainName':
     chrome.runtime.sendMessage({message:'sendDomainName',domainName:document.domain}); 
     break;
  }
  return true;
});

/** 
 * from popup.js to background.js
 * @private
 * @param {boolean} enabled
 */
function toggle_(enabled){
  chrome.runtime.sendMessage({message:'toggle', shouldEnabled: enabled},()=>{});
 };

/**
 * from popup.js to background.js 
 * @private
 * @param {string} domainStr
 * @param {?boolean} isAll
 */
function clearCookies_(domainStr:string, isAll?){
  const domains = getDomains(document.domain);
  let msgObj = isAll ? 
    {message:'clearAll', domain:domains} :
    {message:'clearCookies', domain:domains}; 
  chrome.runtime.sendMessage(msgObj, function(response){
    console.log(STYLE_ESCAPE + response, STYLE_BOLD);
    console.log('reloading this page in a moment...');
    reload_();
    return true;
  });
};

/** 
 * @return {string{}}
 * @param {string} domain;
 */
function getDomains(domain){
  let domains = [];
  domains.push(domain);
  while(domain.indexOf('.')!=-1){
    domain = domain.slice(domain.indexOf('.'));
    domain = domain.replace('.','');
    domains.push(domain);
  }
  return domains;
};

/** 
 * from popup.js 
 * @private
 * @param {?string} url;
 */
function reload_(url?:string,inputVal?:string):void{
  functions.getUrlWithoutGclid
  if(inputVal){
    url = functions.getUrlWithoutGclid(url);
    url.includes('?')?
      window.location.href = url+'&gclid='+inputVal:
      window.location.href = url+'?gclid='+inputVal;
  } else {
  url?
   window.location.href = url:
   window.location.href = functions.getUrlWithoutGclid(window.location.href);
  }
};