/** 
 * get url without gclid 
 * @return {!string}
 * @param {string} url
 */
export function getUrlWithoutGclid (url:string):string {
  if(!url) return;
  if(url.includes('?gclid')){
    url = url.substring(url.indexOf('?gclid'),0);
  } else if(url.includes('&gclid')) {
    url = url.substring(url.indexOf('&gclid'),0);
  } else if (url.includes('?_gl')){
    url = url.substring(url.indexOf('?_gl'),0);
  } else if (url.includes('&_gl')){
    url = url.substring(url.indexOf('&_gl'),0);
  }
  return url;
};

/** 
 * get gclid val according to the value in the input box
 * @return {!string};
 * @param {string} url
 * @param {string?} val
 */
export function getGclid_(url:string, val:string|null) {
  if(!val) return '';
  return url.includes('?') ? '&gclid='+val : '?gclid='+val; 
};

/**
 * check if the string is JSON parsable
 * @return {boolean}  
 */
export function IsJsonString(str:string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

// TODO: make data class
export function sendMsgToContentJS(data){
  const msg:string = data.msg;
  const val:string = data.val!=null ? data.val : '';
  const gclidVal:string = data.gclidVal!=null ? data.gclidVal : '';
  const $iFrame:HTMLIFrameElement = document.getElementById('main-iframe') as HTMLIFrameElement;;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabID = tabs[0].id;
    if (!tabID) return null;
    chrome.tabs.sendMessage(tabID, {'message': msg, 'value':val,'gclidVal':gclidVal});
  });
}
