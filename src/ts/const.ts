/** 
 * @author Akira Sakaguchi <akira.s7171@gmail.com>
 * A list of constants  
 */

// @ts-ignore
import manifestJSON from '../../manifest.json';

const STYLE_HIGHLIGHT:string ='font-weight: bold;background-color:black;color:#fff';
const STYLE_BOLD ='font-weight: bold';
const STYLE_BLUE ='color: blue';
const STYLE_RED ='color: red';
const STYLE_WHITE ='color: #fff';
const STYLE_LIGHT_GRAY ='color: #D3D3D3';
const STYLE_BG_GREEN ='background-color: green';
const STYLE_BG_BLUE ='background-color: blue';
const STYLE_BG_LIGHT_BLUE ='background-color: #ADD8E6';
const STYLE_BG_ORANGE ='background-color: orange';
const STYLE_BG_GRAY ='background-color: gray';
const STYLE_ESCAPE = '%c';
const STYLES_BOLD_BULE = [STYLE_BOLD, STYLE_BLUE];
const STYLES_BOLD_RED = [STYLE_BOLD, STYLE_RED];
const STYLES_BOLD_WHITE_BG_GREEN = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_GREEN];
const STYLES_BOLD_WHITE_BG_BLUE = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_BLUE];
const STYLES_BOLD_WHITE_BG_ORANGE = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_ORANGE];
const STYLES_BOLD_WHITE_BG_GRAY = [STYLE_BOLD, STYLE_WHITE, STYLE_BG_GRAY];
const VERSION = 'v'+ manifestJSON.version;

/** 
 * Google Ads Cookies usually consists of 3 parts: conversionID, timeStamp, and UUID 
 * */
const DEFAULT_COOKIE_LENGTH = 3;  
export {VERSION,STYLE_HIGHLIGHT,STYLE_BOLD,STYLE_BLUE,
    STYLE_RED,STYLE_WHITE,STYLE_LIGHT_GRAY, STYLE_BG_GREEN,
    STYLE_BG_BLUE,STYLE_BG_LIGHT_BLUE,STYLE_BG_ORANGE,
    STYLE_BG_GRAY,STYLE_ESCAPE,STYLES_BOLD_BULE,STYLES_BOLD_RED,
    STYLES_BOLD_WHITE_BG_GREEN,STYLES_BOLD_WHITE_BG_BLUE,
    STYLES_BOLD_WHITE_BG_ORANGE,STYLES_BOLD_WHITE_BG_GRAY}