/* 2015-12-16 17:44:36 */
!function e(t,a,n){function r(i,s){if(!a[i]){if(!t[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(o)return o(i,!0);throw new Error("Cannot find module '"+i+"'")}var l=a[i]={exports:{}};t[i][0].call(l.exports,function(e){var a=t[i][1][e];return r(a?a:e)},l,l.exports,e,t,a,n)}return a[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)r(n[i]);return r}({1:[function(require,module,exports){!function(){function isStartWith(e,t){return 0===e.indexOf(t)}function isEndWith(e,t){var a=e.length,n=t.length;return a>=n&&e.indexOf(t)==a-n}function trim(e){return isString(e)?e.replace(/^\s+|\s+$/g,""):""}function tryToDecodeURIComponent(e,t){var a=t||"";if(e)try{a=decodeURIComponent(e)}catch(n){}return a}function obj2param(e){var t,a,n=[];for(t in e)e.hasOwnProperty(t)&&(a=""+e[t],n.push(isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a)));return n.join("&")}function arr2param(e){var t,a,n,r=[],o=e.length;for(n=0;o>n;n++)t=e[n][0],a=e[n][1],r.push(isStartWith(t,s_plain_obj)?a:t+"="+encodeURIComponent(a));return r.join("&")}function arr2obj(e){var t,a,n,r={},o=e.length;for(n=0;o>n;n++)t=e[n][0],a=e[n][1],r[t]=a;return r}function isContain(e,t){return e.indexOf(t)>-1}function isNumber(e){return"number"==typeof e}function isUnDefined(e){return"undefined"==typeof e}function isString(e){return"string"==typeof e}function isArray(e){return"[object Array]"===Object.prototype.toString.call(e)}function tryToGetAttribute(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function tryToGetHref(e){var t;try{t=trim(e.getAttribute("href",2))}catch(a){}return t||""}function getExParams(){var e=doc.getElementById("tb-beacon-aplus");return tryToGetAttribute(e,"exparams").replace(/&amp;/g,"&").replace(/\buserid=/,"uidaplus=")}function getMetaTags(){return _head_node=_head_node||doc.getElementsByTagName("head")[0],_meta_nodes||(_head_node?_meta_nodes=_head_node.getElementsByTagName("meta"):[])}function parseMetaContent(e,t){var a,n,r,o=e.split(";"),i=o.length;for(a=0;i>a;a++)n=o[a].split("="),r=trim(n[0]),r&&(t[r]=tryToDecodeURIComponent(trim(n[1])))}function getCookie(e){var t=doc.cookie.match(new RegExp("\\b"+e+"=([^;]+)"));return t?t[1]:""}function getSPMFromUrl(e){var t,a=e.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*]+)"));return a&&(t=a[1])&&4==t.split(".").length?t:null}function makeCacheNum(){return Math.floor(268435456*Math.random()).toString(16)}function makePVId(){for(var e="",t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";e.length<6;)e+=t.substr(Math.floor(62*Math.random()),1);return win[s_pv_id_key]=e,e}function getMetaAtpData(){var e,t,a,n=getMetaTags(),r=n.length;for(e=0;r>e;e++)t=n[e],"atp-beacon"==tryToGetAttribute(t,"name")&&(a=tryToGetAttribute(t,"content"),parseMetaContent(a,_atp_beacon_data));_atp_beacon_data_params=obj2param(_atp_beacon_data)}function getMetaWaiting(){return util.getMetaCnt("aplus-waiting")}function isOnePage(){return util.getMetaCnt("isonepage")||"-1"}function makeChkSum(e){e=(e||"").split("#")[0].split("?")[0];var t=e.length,a=function(e){var t,a=e.length,n=0;for(t=0;a>t;t++)n=31*n+e.charCodeAt(t);return n};return t?a(t+"#"+e.charCodeAt(t-1)):-1}function onDOMReady(e){var t=win.KISSY;t?t.ready(e):win.jQuery?jQuery(doc).ready(e):"complete"===doc.readyState?e():addEventListener(win,"load",e)}function recordValInWindowName(){var e,t;!is_in_iframe&&is_https&&(is_login_page&&page_referrer?(e=page_referrer,t=nameStorage.getItem(KEY.NAME_STORAGE.REFERRER_PV_ID)):(e=page_url,t=pvid),nameStorage.setItem(KEY.NAME_STORAGE.REFERRER,e),nameStorage.setItem(KEY.NAME_STORAGE.REFERRER_PV_ID,t))}function addEventListener(e,t,a){e[onevent]((atta?"on":"")+t,function(e){e=e||win.event;var t=e.target||e.srcElement;a(e,t)},s_false)}function atp_inIframeException(){var e,t,a=[];for(e=0,t=a.length;t>e;e++)if(-1!=pathname.indexOf(a[e]))return s_true;var n=/^https?:\/\/[\w\.]+\.(taobao|tmall|etao|tao123|juhuasuan)\.com/i;return!n.test(page_referrer)}function cleanParams(e){var t,a,n,r,o=[],i={};for(t=e.length-1;t>=0;t--)a=e[t],n=a[0],n!=s_plain_obj&&i.hasOwnProperty(n)||(r=a[1],("aplus"==n||r)&&(o.unshift([n,r]),i[n]=1));return o}function cleanParamsForWindvane(e){var t,a,n,r,o=[],i={logtype:!0,cache:!0,scr:!0,"spm-cnt":!0};for(t=e.length-1;t>=0;t--)a=e[t],n=a[0],r=a[1],isStartWith(n,s_plain_obj)||i[n]||o.unshift([n,r]);return o}function tblogSend(e,t){var a,n,r;if(t){if(t=cleanParams(t),isWindVane){r=cleanParamsForWindvane(t);var o,i={},s=getSPMFromUrl(page_referrer),c=isOnePage(),l=c.split("|"),u=l[0],p=l[1]?l[1]:"";try{n=arr2obj(r),o=JSON.stringify(n),"{}"==o&&(o="")}catch(m){o=""}if(i.functype="2001",i.urlpagename=p,i.url=loc.href,i.spmcnt=(spm_ab||"0.0")+".0.0",i.spmpre=s||"",i.lzsid="",i.cna=acookie_cna||"",i.extendargs=o,i.isonepage=u,WindVane.call("WVTBUserTrack","toUT",i),win[s_goldlog].windVaneData=i,is_ali_app_tb&&-1!=hostname.indexOf("market.m.taobao.com"))return}return is_use_LS_proxy?(a=makeUrl(e,t),useLSProxy({url:a,js:js_fdc_lsproxy,referrer:loc.href})):a=goldlog.send(e,t),a}}function mkPlainKey(){return s_plain_obj+Math.random()}function addScript(e,t){var a="script",n=doc.createElement(a);n.type="text/javascript",n.async=!0,n.src=is_https?t||e:e;var r=doc.getElementsByTagName(a)[0];r.parentNode.insertBefore(n,r)}function createIframe(e,t){var a=document.createElement("iframe");a.style.width="1px",a.style.height="1px",a.style.position="absolute",a.style.display="none",a.src=e,t&&(a.name=t);var n=document.getElementsByTagName("body")[0];return n.appendChild(a),a}function checkLS(){var e=!1;if("localStorage"in win&&win.localStorage)try{localStorage.setItem("test","test"),localStorage.removeItem("test"),e=!0}catch(t){}return e}function isUseLSProxy(){if(is_ali_app)return!1;var e=ua.split(" Safari/");return 2!=e.length?!1:(e[1]=trim(e[1]),checkLS()&&win.postMessage&&!e[1].match(/[\d\.]+?\s+.+/)&&ua.indexOf("AppleWebKit")>-1&&ua.match(/\bVersion\/\d+/)&&!ua.match(/\bChrome\/\d+/)&&!ua.match(/TencentTraveler|QQBrowser/)&&!ua.match(/UCBrowser|UCWEB/))}function useLSProxy(e){var t="//mmstat.alicdn.com/aplus-proxy.html?v=20130115",a=createIframe(t,JSON.stringify(e));proxy_iframes.push(a),win.addEventListener&&win.JSON&&win.addEventListener("message",function(e){function t(){var e=hostname.split("."),t=e.length;return t>1?e[t-2]+"."+e[t-1]:hostname}var a=e.data;try{a=JSON.parse(a)}catch(n){return}if(a[0]&&"cna"==a[0].k)for(var r,o,i,s=0,c=a.length;c>s;s++)r=a[s],i=r.k,o=encodeURIComponent(i)+"="+("cna"==i?r.v:encodeURIComponent(r.v))+"; domain=."+t()+"; path=/; expires="+new Date(r.t).toGMTString(),doc.cookie=o})}function makeUrl(e,t){var a=-1==e.indexOf("?")?"?":"&",n=t?isArray(t)?arr2param(t):obj2param(t):"";return n?e+a+n:e}function getSPMProtocolFromMeta(){var e,t,a,n,r=getMetaTags();for(e=0,t=r.length;t>e;e++)a=r[e],n=tryToGetAttribute(a,"name"),n==s_SPM_ATTR_NAME&&(spm_protocol=tryToGetAttribute(a,s_SPM_DATA_PROTOCOL))}function getMetaSPMData(e){var t,a,n,r,o,i,s=getMetaTags();if(s)for(t=0,a=s.length;a>t;t++)if(r=s[t],o=tryToGetAttribute(r,"name"),o==e)return page_global_spm_id_origin=tryToGetAttribute(r,"content"),page_global_spm_id_origin.indexOf(":")>=0&&(n=page_global_spm_id_origin.split(":"),spm_protocol="i"==n[0]?"i":"u",page_global_spm_id_origin=n[1]),i=tryToGetAttribute(r,s_SPM_DATA_PROTOCOL),i&&(spm_protocol="i"==i?"i":"u"),spm_ab=page_global_spm_id_origin,s_true;return s_false}function ifAdd(e,t){var a,n,r,o,i=t.length;for(a=0;i>a;a++)n=t[a],r=n[0],o=n[1],o&&e.push([r,o])}function compareVersion(e,t){e=e.toString().split("."),t=t.toString().split(".");for(var a=0;a<e.length||a<t.length;a++){var n=parseInt(e[a],10),r=parseInt(t[a],10);if(window.isNaN(n)&&(n=0),window.isNaN(r)&&(r=0),r>n)return-1;if(n>r)return 1}return 0}function callback(e,t){isAndroid&&compareVersion(osVersion,"2.4.0")<0?setTimeout(function(){e&&e(t)},1):e&&e(t)}function init_getGlobalSPMId(){if(!isUnDefined(spm_ab))return spm_ab;if(spm_a&&spm_b)return spm_a=spm_a.replace(/^{(\w+)}$/g,"$1"),spm_b=spm_b.replace(/^{(\w+)}$/g,"$1"),wh_in_page=s_true,spm_ab=spm_a+"."+spm_b,getSPMProtocolFromMeta(),goldlog.spm_ab=[spm_a,spm_b],spm_ab;var e;if(getMetaSPMData(s_SPM_ATTR_NAME)||getMetaSPMData("spm-id"),spm_ab=spm_ab||default_ab,!spm_ab)return spm_ab;var t,a=doc.getElementsByTagName("body");return e=spm_ab.split("."),goldlog.spm_ab=e,a=a&&a.length?a[0]:null,a&&(t=tryToGetAttribute(a,s_SPM_ATTR_NAME),t?(spm_ab=e[0]+"."+t,goldlog.spm_ab=[e[0],t]):1==e.length&&(spm_ab=default_ab)),spm_ab}function init_loadScripts(){var e="laiwang",t="/ilw/a/lwlog.js?v=140709";isContain(loc.href.split("?")[0],e)&&addScript(g_alicdn_url+t),onDOMReady(function(){setTimeout(function(){addScript(g_alicdn_url+"/sd/data_sufei/1.4.8/aplus/index.js")},1e3)})}function init_windVane(){var WV_Core={call:function(e,t,a,n,r,o){var i,s;return lib.promise&&(s=lib.promise.deferred()),i=o>0?setTimeout(function(){WV_Core.onFailure(i,{ret:"TIMEOUT"})},o):WV_Private.getSid(),a.sid=i,WV_Private.registerCall(i,n,r,s),isAndroid?compareVersion(wvVersion,"2.7.0")>=0?WV_Private.callMethodByPrompt(e,t,WV_Private.buildParam(a),i+""):WindVane_Native&&WindVane_Native.callMethod&&WindVane_Native.callMethod(e,t,WV_Private.buildParam(a),i+""):isIOS&&WV_Private.callMethodByIframe(e,t,WV_Private.buildParam(a),i+""),s?s.promise():void 0},fireEvent:function(e,t){var a=doc.createEvent("HTMLEvents");a.initEvent(e,!1,!0),a.param=WV_Private.parseParam(t),doc.dispatchEvent(a)},getParam:function(e){return WV_Private.params[PARAM_PREFIX+e]||""},onSuccess:function(e,t){clearTimeout(e);var a=WV_Private.unregisterCall(e),n=a.success,r=a.deferred,o=WV_Private.parseParam(t);callback(function(e){n&&n(e),r&&r.resolve(e)},o.value||o),WV_Private.onComplete(e)},onFailure:function(e,t){clearTimeout(e);var a=WV_Private.unregisterCall(e),n=a.failure,r=a.deferred,o=WV_Private.parseParam(t);callback(function(e){n&&n(e),r&&r.reject(e)},o),WV_Private.onComplete(e)}},WV_Private={params:{},buildParam:function(e){return e&&"object"==typeof e?JSON.stringify(e):e||""},parseParam:function(str){var obj;if(str&&"string"==typeof str)try{obj=JSON.parse(str)}catch(e){obj=eval("("+str+")")}else obj=str||{};return obj},getSid:function(){return Math.floor(Math.random()*(1<<50))+""+inc++},registerCall:function(e,t,a,n){t&&(callbackMap[SUCCESS_PREFIX+e]=t),a&&(callbackMap[FAILURE_PREFIX+e]=a),n&&(callbackMap[DEFERRED_PREFIX+e]=n)},unregisterCall:function(e){var t=SUCCESS_PREFIX+e,a=FAILURE_PREFIX+e,n=DEFERRED_PREFIX+e,r={success:callbackMap[t],failure:callbackMap[a],deferred:callbackMap[n]};return delete callbackMap[t],delete callbackMap[a],r.deferred&&delete callbackMap[n],r},useIframe:function(e,t){var a=IFRAME_PREFIX+e,n=iframePool.pop();n||(n=doc.createElement("iframe"),n.setAttribute("frameborder","0"),n.style.cssText="width:0;height:0;border:0;display:none;"),n.setAttribute("id",a),n.setAttribute("src",t),n.parentNode||setTimeout(function(){doc.body.appendChild(n)},5)},retrieveIframe:function(e){var t=IFRAME_PREFIX+e,a=doc.querySelector("#"+t);iframePool.length>=iframeLimit?doc.body.removeChild(a):iframePool.push(a)},callMethodByIframe:function(e,t,a,n){var r={"selfParam=1":1,sid:this.parseParam(a).sid};r=this.buildParam(r);var o=LOCAL_PROTOCOL+"://"+e+":"+n+"/"+t+"?"+r;this.params[PARAM_PREFIX+n]=a,this.useIframe(n,o)},callMethodByPrompt:function(e,t,a,n){var r=LOCAL_PROTOCOL+"://"+e+":"+n+"/"+t+"?"+a,o=WV_PROTOCOL+":";this.params[PARAM_PREFIX+n]=a,window.prompt(r,o)},onComplete:function(e){isIOS&&this.retrieveIframe(e),delete this.params[PARAM_PREFIX+e]}};for(var key in WV_Core)win[s_goldlog][key]=WindVane[key]=WV_Core[key]}var win=window,doc=document,_k="g_tb_aplus_loaded",_launch="g_tb_aplus_launch";if(!doc.getElementsByTagName("body").length)return void setTimeout(arguments.callee,50);if(!win[_k]){win[_k]=1;var util=require("./lib/util"),g_alicdn_url="//g.alicdn.com",js_fdc_lsproxy=g_alicdn_url+"/alilog/mlog/lsproxy.js?v=20140709",KEY={NAME_STORAGE:{REFERRER:"wm_referrer",REFERRER_PV_ID:"refer_pv_id"}},VERSION="9",loc=location,is_https="https:"==loc.protocol,is_in_iframe=parent!==win.self,pathname=loc.pathname,hostname=loc.hostname,use_protocol=is_https?"https://":"http://",tblog_beacon_base=use_protocol+"log.mmstat.com/",tblog_beacon_url=tblog_beacon_base+"m.gif",tblog_data=[["logtype",is_in_iframe?0:1]],page_url=loc.href,page_url_constant=page_url.replace(/[\?#].*/g,""),s_pv_id_key="g_aplus_pv_id",pvid=makePVId(),loc_hash=loc.hash,s_goldlog="goldlog",ua=navigator.userAgent,lib=win.lib||(win.lib={}),isIOS=/iPhone|iPad|iPod/i.test(ua),isAndroid=/Android/i.test(ua),isWindVane=/WindVane/i.test(ua),osVersion=ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i),wvVersion=ua.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),WindVane={},WindVane_Native=win.WindVane_Native,callbackMap={},inc=1,iframePool=[],iframeLimit=3,LOCAL_PROTOCOL="hybrid",WV_PROTOCOL="wv_hybrid",IFRAME_PREFIX="iframe_",SUCCESS_PREFIX="suc_",FAILURE_PREFIX="err_",DEFERRED_PREFIX="defer_",PARAM_PREFIX="param_",page_referrer=doc.referrer,is_login_page=is_https&&(page_url.indexOf("login.m.taobao.com")>=0||page_url.indexOf("login.m.tmall.com")>=0),atta=!!doc.attachEvent,s_attachEvent="attachEvent",s_addEventListener="addEventListener",onevent=atta?s_attachEvent:s_addEventListener,s_false=!1,s_true=!0,s_plain_obj="::-plain-::",_head_node,_meta_nodes,acookie_cna=getCookie("cna"),cookie_unb=getCookie("unb"),proxy_iframes=[],is_use_LS_proxy=s_false,s_SPM_ATTR_NAME="data-spm",s_SPM_DATA_PROTOCOL="data-spm-protocol",wh_in_page=s_false,default_ab="0.0",page_global_spm_id_origin,spm_protocol,spm_a=win._SPM_a,spm_b=win._SPM_b,spm_ab,_microscope_data={},_atp_beacon_data={},_atp_beacon_data_params,waitingMeta=getMetaWaiting(),goldlog,m_log=require("./lib/log"),is_ali_app,is_ali_app_tb,matched;(matched=ua.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i))&&(is_ali_app=!0,is_ali_app_tb="TB"==matched[1]);var nameStorage=function(){function e(){var e,t=[],o=!0;for(var u in p)p.hasOwnProperty(u)&&(o=!1,e=p[u]||"",t.push(l(u)+s+l(e)));a.name=o?n:r+l(n)+i+t.join(c)}function t(e,t,a){e&&(e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent&&e.attachEvent("on"+t,function(t){a.call(e,t)}))}var a=window;if(a.nameStorage)return a.nameStorage;var n,r="nameStorage:",o=/^([^=]+)(?:=(.*))?$/,i="?",s="=",c="&",l=encodeURIComponent,u=decodeURIComponent,p={},m={};return function(e){if(e&&0===e.indexOf(r)){var t=e.split(/[:?]/);t.shift(),n=u(t.shift())||"";for(var a,i,s,l=t.join(""),m=l.split(c),f=0,d=m.length;d>f;f++)a=m[f].match(o),a&&a[1]&&(i=u(a[1]),s=u(a[2])||"",p[i]=s)}else n=e||""}(a.name),m.setItem=function(t,a){t&&"undefined"!=typeof a&&(p[t]=String(a),e())},m.getItem=function(e){return p.hasOwnProperty(e)?p[e]:null},m.removeItem=function(t){p.hasOwnProperty(t)&&(p[t]=null,delete p[t],e())},m.clear=function(){p={},e()},m.valueOf=function(){return p},m.toString=function(){var e=a.name;return 0===e.indexOf(r)?e:r+e},t(a,"beforeunload",function(){e()}),m}();page_referrer=doc.referrer||nameStorage.getItem(KEY.NAME_STORAGE.REFERRER)||"",osVersion=osVersion?(osVersion[1]||"0.0.0").replace(/\_/g,"."):"0.0.0",wvVersion=wvVersion?(wvVersion[1]||"0.0.0").replace(/\_/g,"."):"0.0.0",goldlog={version:VERSION,referrer:page_referrer,_d:{},_microscope_data:_microscope_data,getCookie:getCookie,tryToGetAttribute:tryToGetAttribute,tryToGetHref:tryToGetHref,isNumber:isNumber,nameStorage:nameStorage,launch:function(e,t){if(!win[_launch]||t){win[_launch]=s_true;var a,n,r,o=getExParams(),i=1==waitingMeta,s=tblog_data.slice(0);e&&e.isWait&&i?(r=7,delete e.isWait):i?r=8:i||(r=5);for(a in e)e.hasOwnProperty(a)&&(n=e[a])&&s.push([a,n]);t||(s.push(["isbeta",r]),s.push([mkPlainKey(),o])),ifAdd(s,[["urlokey",loc_hash],["aunbid",cookie_unb]]),t&&(s.push([s_plain_obj,t.gokey]),m_log.updateSPMCnt(s,t.page_id),m_log.updateSPMUrl(s)),win.g_aplus_pv_req=tblogSend(tblog_beacon_url,s)}},send:function(e,t){var a,n=new Image,r="_img_"+Math.random(),o=-1==e.indexOf("?")?"?":"&",i=t?isArray(t)?arr2param(t):obj2param(t):"";return win[r]=n,n.onload=n.onerror=function(){win[r]=null},n.src=a=i?e+o+i:e,n=null,a},record:function(e,t,a,n){n=arguments[3]||"";var r,o,i="?",s=s_false,c="//wgo.mmstat.com/",l="//wgm.mmstat.com/",u=makeCacheNum(),p="",m=(spm_ab||"0.0")+".0.0";if("ac"==e)r="//ac.mmstat.com/1.gif",s=isStartWith(n,"A")&&n.substring(1)==makeChkSum(t);else if(isStartWith(e,"/"))s=isStartWith(n,"H")&&n.substring(1)==makeChkSum(e),r=c+e.substring(1),o=2,p+="&spm-cnt="+m;else if(isEndWith(e,".gif"))r=tblog_beacon_base+e;else{if("aplus"!=e)return s_false;r=l+"mx.gif",o=1}if(!s&&"%"!=n&&makeChkSum(page_url_constant)!=n)return s_false;if(a=(a||"")+(loc_hash?"&urlokey="+encodeURIComponent(loc_hash):"")+(cookie_unb?"&aunbid="+encodeURIComponent(cookie_unb):""),0===a.indexOf("&")&&(a=a.substr(1)),r+=i+"cache="+u+"&gmkey="+encodeURIComponent(t)+"&gokey="+encodeURIComponent(a)+"&cna="+acookie_cna+"&isbeta="+VERSION+p,o&&(r+="&logtype="+o),isWindVane){var f,d={},_={gmkey:t,gokey:a,isbeta:VERSION},g=isOnePage(),h=g.split("|"),b=h[0],v=h[1]?h[1]:"";try{f=JSON.stringify(_),"{}"==f&&(f="")}catch(y){f=""}d.functype="2101",d.logkey=e,d.logkeyargs=f,d.urlpagename=v,d.url=loc.href,d.cna=acookie_cna||"",d.extendargs="",d.isonepage=b,WindVane.call("WVTBUserTrack","toUT",d)}return is_use_LS_proxy?useLSProxy({url:r,js:js_fdc_lsproxy,referrer:loc.href}):goldlog.send(r)},sendPV:m_log.sendPV},win[s_goldlog]=goldlog,init_getGlobalSPMId(),init_loadScripts(),isWindVane&&init_windVane(),function(){var e,t,a=getSPMFromUrl(page_url),n=getSPMFromUrl(page_referrer),r=getCookie("tracknick");if(is_use_LS_proxy=isUseLSProxy(),loc_hash&&0===loc_hash.indexOf("#")&&(loc_hash=loc_hash.substr(1)),(!is_in_iframe||atp_inIframeException())&&(t=1==waitingMeta?7:VERSION,e=[[mkPlainKey(),"title="+escape(doc.title)],["pre",page_referrer],["cache",makeCacheNum()],["scr",screen.width+"x"+screen.height],["isbeta",t]],acookie_cna&&e.push([mkPlainKey(),"cna="+acookie_cna]),r&&e.push([mkPlainKey(),"nick="+r]),e.push(["spm-cnt",(spm_ab||"0.0")+".0.0"]),ifAdd(e,[["spm-url",a],["spm-pre",n]]),tblog_data=tblog_data.concat(e),7==t?setTimeout(function(){goldlog.launch({isWait:!0})},6e3):(tblog_data.push([mkPlainKey(),getExParams()]),ifAdd(tblog_data,[["urlokey",loc_hash],["aunbid",cookie_unb]]),win.g_aplus_pv_req=tblogSend(tblog_beacon_url,tblog_data))),is_in_iframe){getMetaAtpData();var o,i=_atp_beacon_data.on,s="1"==i?"//ac.mmstat.com/y.gif":tblog_beacon_url;"1"!=i&&"2"!=i||!(o=_atp_beacon_data.chksum)||o!==makeChkSum(page_url).toString()||tblogSend(s,tblog_data)}addEventListener(win,"beforeunload",function(){recordValInWindowName()})}()}}(),function(){function e(e){var t,a;try{return t=[].slice.call(e)}catch(n){t=[],a=e.length;for(var r=0;a>r;r++)t.push(e[r]);return t}}function t(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function a(e,t,a){if(e&&e.setAttribute)try{e.setAttribute(t,a)}catch(n){}}function n(e,t){if(e&&e.removeAttribute)try{e.removeAttribute(t)}catch(n){a(e,t,"")}}function r(e,t){return 0==e.indexOf(t)}function o(e){for(var t=["javascript:","tel:","sms:","mailto:","tmall://"],a=0,n=t.length;n>a;a++)if(r(e,t[a]))return!0}function i(e){return"string"==typeof e}function s(e){return"[object Array]"===Object.prototype.toString.call(e)}function c(e){return"number"==typeof e}function l(e,t){return e.indexOf(t)>=0}function u(e,t){return e.indexOf(t)>-1}function p(e,t){for(var a=0,n=t.length;n>a;a++)if(u(e,t[a]))return ge;return he}function m(e){return i(e)?e.replace(/^\s+|\s+$/g,""):""}function f(e){return"undefined"==typeof e}function d(e,t){var a=t||"";if(e)try{a=decodeURIComponent(e)}catch(n){}return a}function _(){return le=le||de.getElementsByTagName("head")[0],ue||(le?ue=le.getElementsByTagName("meta"):[])}function g(e,t){var a,n,r=e.split(";"),o=r.length;for(a=0;o>a;a++)n=r[a].split("="),t[m(n[0])||Re]=d(m(n.slice(1).join("=")))}function h(){var e,a,n,r,o=_();for(e=0,a=o.length;a>e;e++)n=o[e],r=t(n,"name"),r==Ue&&(pe=t(n,Fe))}function b(e){var a,n,o,i,s,c,l=_();if(l)for(a=0,n=l.length;n>a;a++)if(i=l[a],s=t(i,"name"),s==e)return ie=t(i,"content"),ie.indexOf(":")>=0&&(o=ie.split(":"),pe="i"==o[0]?"i":"u",ie=o[1]),c=t(i,Fe),c&&(pe="i"==c?"i":"u"),se=r(ie,"110"),oe=se?Oe:ie,ge;return he}function v(){var e,a,n,r=_(),o=r.length;for(e=0;o>e;e++)if(a=r[e],"aplus-touch"==t(a,"name")){n=t(a,"content");break}return n}function y(){return Math.floor(268435456*Math.random()).toString(16)}function E(e){var t,a,n=[];for(t in e)e.hasOwnProperty(t)&&(a=""+e[t],n.push(r(t,Re)?a:t+"="+encodeURIComponent(a)));return n.join("&")}function P(e){var t,a,n,o=[],i=e.length;for(n=0;i>n;n++)t=e[n][0],a=e[n][1],o.push(r(t,Re)?a:t+"="+encodeURIComponent(a));return o.join("&")}function S(e){var t;try{t=m(e.getAttribute("href",2))}catch(a){}return t||""}function w(e,t,a){return"tap"==t?void k(e,a):void e[je]((xe?"on":"")+t,function(e){e=e||fe.event;var t=e.target||e.srcElement;a(t)},he)}function k(e,t){var a="ontouchend"in document.createElement("div"),n=a?"touchstart":"mousedown";w(e,n,function(e){t&&t(e)})}function A(e){var t=fe.KISSY;t?t.ready(e):fe.jQuery?jQuery(de).ready(e):"complete"===de.readyState?e():w(fe,"load",e)}function O(e,t){var a,n=new Image,r="_img_"+Math.random(),o=-1==e.indexOf("?")?"?":"&",i=t?s(t)?P(t):E(t):"";return fe[r]=n,n.onload=n.onerror=function(){fe[r]=null},n.src=a=i?e+o+i:e,n=null,a}function M(){var e;if(ke&&!Ke&&(e=be.match(/^[^?]+\?[^?]*spm=([^&#?]+)/),e&&(Ke=e[1]+"_")),!f(oe))return oe;if(fe._SPM_a&&fe._SPM_b)return ne=fe._SPM_a.replace(/^{(\w+)}$/g,"$1"),re=fe._SPM_b.replace(/^{(\w+)}$/g,"$1"),Ve=ge,oe=ne+"."+re,h(),oe;if(b(Ue)||b("spm-id"),!oe)return Me=!0,oe=Oe,Oe;var a,n,r=de.getElementsByTagName("body");return r=r&&r.length?r[0]:null,r&&(a=t(r,Ue),a&&(n=oe.split("."),oe=n[0]+"."+a)),u(oe,".")||(Me=!0,oe=Oe),oe}function R(e){var t,a,n,r,o,i,s=de.getElementsByTagName("*");for(t=[];e&&1==e.nodeType;e=e.parentNode)if(i=e.id){for(r=0,a=0;a<s.length;a++)if(o=s[a],o.id==i){r++;break}if(t.unshift(e.tagName.toLowerCase()+'[@id="'+i+'"]'),1==r)return t.unshift("/"),t.join("/")}else{for(a=1,n=e.previousSibling;n;n=n.previousSibling)n.tagName==e.tagName&&a++;t.unshift(e.tagName.toLowerCase()+"["+a+"]")}return t.length?"/"+t.join("/"):null}function T(e){var t=We[R(e)];return t?t.spmc:""}function C(a,n){var r,o,i,s,c,l,u,p,m,f=[];for(r=e(a.getElementsByTagName("a")),o=e(a.getElementsByTagName("area")),s=r.concat(o),u=0,p=s.length;p>u;u++){for(l=!1,c=i=s[u];(c=c.parentNode)&&c!=a;)if(t(c,Ue)){l=!0;break}l||(m=t(i,Ge),n||"t"==m?n&&"t"==m&&f.push(i):f.push(i))}return f}function x(e,a,n,o){var s,u,p,m,f,d,_,g,h,b,v,y,E,P,w;if(t(e,"data-spm-delay"))return void e.setAttribute("data-spm-delay","");if(a=a||e.getAttribute(Ue)||"",a&&(s=C(e,o),0!==s.length)){if(p=a.split("."),E=r(a,"110")&&3==p.length,E&&(P=p[2],p[2]="w"+(P||"0"),a=p.join(".")),i(h=M())&&h.match(/^[\w\-\*]+(\.[\w\-\*]+)?$/))if(l(a,".")){if(!r(a,h)){for(m=h.split("."),p=a.split("."),v=0,b=m.length;b>v;v++)p[v]=m[v];a=p.join(".")}}else l(h,".")||(h+=".0"),a=h+"."+a;if(a.match&&a.match(/^[\w\-\*]+\.[\w\-\*]+\.[\w\-\*]+$/)){var k=o?Xe:$e;for(w=parseInt(t(e,k))||0,y=0,f=w,b=s.length;b>y;y++)u=s[y],d=S(u),(o||d)&&(E&&u.setAttribute(qe,P),(_=u.getAttribute(Ye))?U(u,_,n):(f++,g=D(u)||f,o&&(g="at"+((c(g)?1e3:"")+g)),_=a+"."+g,U(u,_,n)));e.setAttribute(k,f)}}}function I(e){var t,a=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"],n=a.length;for(t=0;n>t;t++)if(-1!=e.indexOf(a[t]))return!0;return!1}function N(e){return e?!!e.match(/^[^\?]*\balipay\.(?:com|net)\b/i):he}function j(e){return e?!!e.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i):he}function V(e){for(var a;(e=e.parentNode)&&e.tagName!=Ce;)if(a=t(e,Fe))return a;return""}function W(e,t){if(e&&/&?\bspm=[^&#]*/.test(e)&&(e=e.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!t)return e;var a,n,r,o,i,s,c,l="&";if(-1!=e.indexOf("#")&&(r=e.split("#"),e=r.shift(),n=r.join("#")),o=e.split("?"),i=o.length-1,r=o[0].split("//"),r=r[r.length-1].split("/"),s=r.length>1?r.pop():"",i>0&&(a=o.pop(),e=o.join("?")),a&&i>1&&-1==a.indexOf("&")&&-1!=a.indexOf("%")&&(l="%26"),e=e+"?spm="+Ke+t+(a?l+a:"")+(n?"#"+n:""),c=u(s,".")?s.split(".").pop().toLowerCase():""){if({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}.hasOwnProperty(c))return 0;!a&&1>=i&&(n||{htm:1,html:1,php:1}.hasOwnProperty(c)||(e+="&file="+s))}return e}function L(e){return e&&be.split("#")[0]==e.split("#")[0]}function U(e,a,n){if(e.setAttribute(Ye,a),!n&&!t(e,Be)){var i=S(e),s="i"==(t(e,Fe)||V(e)||pe),c=Se+"tbspm.1.1?logtype=2&spm=";i&&!I(i)&&(s||!(r(i,"#")||L(i)||o(i.toLowerCase())||N(i)||j(i)))&&(s?(c+=a+"&url="+encodeURIComponent(i)+"&cache="+y(),me==e&&O(c)):n||(i=W(i,a))&&F(e,i))}}function F(e,t){var a,n=e.innerHTML;n&&-1==n.indexOf("<")&&(a=de.createElement("b"),a.style.display="none",e.appendChild(a)),e.href=t,a&&e.removeChild(a)}function D(e){var a,n,r;return Me?a="0":Ve?(n=R(e),r=We[n],r&&(a=r.spmd)):(a=t(e,Ue),a&&a.match(/^d\w+$/)||(a="")),a}function B(e){for(var t,a,n=e;e&&e.tagName!=Te&&e.tagName!=Ce&&e.getAttribute;){if(a=Ve?T(e):e.getAttribute(Ue)){t=a,n=e;break}if(!(e=e.parentNode))break}return t&&!/^[\w\-\.]+$/.test(t)&&(t="0"),{spm_c:t,el:n}}function G(e){var t;return e&&(t=e.match(/&?\bspm=([^&#]*)/))?t[1]:""}function $(e,t){var a=S(e),n=G(a),r=null,o=oe&&2==oe.split(".").length;return o?(r=[oe,0,D(e)||0],void U(e,r.join("."),t)):void(a&&n&&(a=a.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"").replace(/\?#/,"#"),F(e,a)))}function X(e,a){me=e;var n,r,o=t(e,Ye);if(o)U(e,o,a);else{if(n=B(e.parentNode),r=n.spm_c,!r)return void $(e,a);Me&&(r="0"),x(n.el,r,a),x(n.el,r,a,!0)}}function K(t){if(t&&1==t.nodeType){n(t,$e),n(t,Xe);var a,r=e(t.getElementsByTagName("a")),o=e(t.getElementsByTagName("area")),i=r.concat(o),s=i.length;for(a=0;s>a;a++)n(i[a],Ye)}}function q(e){var t=e.parentNode;if(!t)return"";var a=e.getAttribute(Ue),n=B(t),r=n.spm_c||0;r&&-1!=r.indexOf(".")&&(r=r.split("."),r=r[r.length-1]);var o=oe+"."+r,i=Ae[o]||0;return i++,Ae[o]=i,a=a||i,o+".i"+a}function Y(e){var a,n=e.tagName;return ce=fe.g_aplus_pv_id,"A"!=n&&"AREA"!=n?a=q(e):(X(e,ge),a=t(e,Ye)),a=(a||"0.0.0.0").split("."),{a:a[0],b:a[1],c:a[2],d:a[3]}}function z(e){var t=Y(e);return t.a+"."+t.b+"."+t.c+"."+t.d}function H(){if(!Le){if(!fe.spmData)return void(we||setTimeout(arguments.callee,100));Le=ge;var e,t,a,n,r=fe.spmData.data;if(r&&s(r))for(e=0,t=r.length;t>e;e++)a=r[e],n=a.xpath,We[n]={spmc:a.spmc,spmd:a.spmd}}}function J(){var e,a,n,r,o=de.getElementsByTagName("iframe"),i=o.length;for(a=0;i>a;a++)e=o[a],!e.src&&(n=t(e,De))&&(r=Y(e),r?(r=[r.a,r.b,r.c,r.d,r.e].join("."),e.src=W(n,r)):e.src=n)}function Q(){function e(){t++,t>10&&(a=3e3),J(),setTimeout(e,a)}var t=0,a=500;e()}function Z(e,t){var a,n,o="gostr",i="locaid",s={};if(g(t,s),a=s[o],n=s[i],a&&n){r(a,"/")&&(a=a.substr(1));var c,l=Y(e),u=[l.a,l.b,l.c,n].join("."),p=a+"."+u,m=["logtype=2","cache="+Math.random(),"autosend=1"];for(c in s)s.hasOwnProperty(c)&&c!=o&&c!=i&&m.push(c+"="+s[c]);m.length>0&&(p+="?"+m.join("&"));var f,d={gmkey:"",gokey:m.length>0?m.join("&"):""};setTimeout(function(){if(fe.goldlog&&fe.goldlog.call&&(f=fe.goldlog.windVaneData)){try{d=JSON.stringify(d),"{}"==d&&(d="")}catch(e){d=""}f.functype="2101",f.logkey="/"+a+"."+u,f.logkeyargs=d,f.extendargs="",delete f.spmcnt,delete f.spmpre,delete f.lzsid,fe.goldlog.call("WVTBUserTrack","toUT",f)}},300),O(Se+p),e.setAttribute(Ye,u)}}function ee(e){for(var a;e&&e.tagName!=Te;){a=t(e,Be);{if(a){Z(e,a);break}e=e.parentNode}}}function te(){Ee?w(de,"tap",ee):w(de,"mousedown",ee)}function ae(e){for(var t;e&&(t=e.tagName);){if("A"==t||"AREA"==t){X(e,he);break}if(t==Ce||t==Te)break;e=e.parentNode}}var ne,re,oe,ie,se,ce,le,ue,pe,me,fe=window,de=document,_e=location,ge=!0,he=!1,be=_e.href,ve=_e.protocol,ye="https:"==ve,Ee=v(),Pe=ye?"https:":"http:",Se=Pe+"//wgo.mmstat.com/",we=he,ke=parent!==self,Ae={},Oe="0.0",Me=!1,Re="::-plain-::",Te="HTML",Ce="BODY",xe=!!de.attachEvent,Ie="attachEvent",Ne="addEventListener",je=xe?Ie:Ne,Ve=he,We={},Le=he,Ue="data-spm",Fe="data-spm-protocol",De="data-spm-src",Be="data-spm-click",Ge="data-auto-spmd",$e="data-spm-max-idx",Xe="data-auto-spmd-max-idx",Ke="",qe="data-spm-wangpu-module-id",Ye="data-spm-anchor-id";p(be,["xiaobai.com","admin.taobao.org"])||(A(function(){we=ge}),M(),H(),Q(),te(),Ee?w(de,"tap",ae):(w(de,"mousedown",ae),w(de,"keydown",ae)),fe.g_SPM={resetModule:K,anchorBeacon:X,getParam:Y,spm:z})}(),function(){function e(e,t,a){e[E]((b?"on":"")+t,function(e){e=e||l.event;var t=e.target||e.srcElement;a(e,t)},!1)}function t(){return/&?\bspm=[^&#]*/.test(location.href)?location.href.match(/&?\bspm=[^&#]*/gi)[0].split("=")[1]:""}function a(e,t){if(e&&/&?\bspm=[^&#]*/.test(e)&&(e=e.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!t)return e;var a,n,r,o,i,s,c,l="&";if(-1!=e.indexOf("#")&&(r=e.split("#"),e=r.shift(),n=r.join("#")),o=e.split("?"),i=o.length-1,r=o[0].split("//"),r=r[r.length-1].split("/"),s=r.length>1?r.pop():"",i>0&&(a=o.pop(),e=o.join("?")),a&&i>1&&-1==a.indexOf("&")&&-1!=a.indexOf("%")&&(l="%26"),e=e+"?spm="+t+(a?l+a:"")+(n?"#"+n:""),c=s.indexOf(".")>-1?s.split(".").pop().toLowerCase():""){if({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}.hasOwnProperty(c))return 0;!a&&1>=i&&(n||{htm:1,html:1,php:1}.hasOwnProperty(c)||(e+="&file="+s))}return e}function n(e){function t(e){return e=e.replace(/refpos[=(%3D)]\w*/gi,s).replace(o,"%3D"+n+"%26"+r.replace("=","%3D")).replace(i,n),r.length>0&&(e+="&"+r),e}var a=window.location.href,n=a.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i),r=a.match(/[&\?](pvid=[^&]*)/i),o=new RegExp("%3Dmm_\\d+_\\d+_\\d+","ig"),i=new RegExp("mm_\\d+_\\d+_\\d+","ig");r=r&&r[1]?r[1]:"";var s=a.match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);return s=s&&s[0]?s[0]:"",n?(n=n[0],t(e)):e}function r(t){var a=l.KISSY;a?a.ready(t):l.jQuery?jQuery(u).ready(t):"complete"===u.readyState?t():e(l,"load",t)}function o(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function i(e){if(e){var t,a=h.length;for(t=0;a>t;t++)if(e.indexOf(h[t])>-1)return!0;return!1}}function s(e,t){if(e&&/&?\bspm=[^&#]*/.test(e)&&(e=e.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!t)return e;var a,n,r,o,i,s,c,l="&";if(-1!=e.indexOf("#")&&(r=e.split("#"),e=r.shift(),n=r.join("#")),o=e.split("?"),i=o.length-1,r=o[0].split("//"),r=r[r.length-1].split("/"),s=r.length>1?r.pop():"",i>0&&(a=o.pop(),e=o.join("?")),a&&i>1&&-1==a.indexOf("&")&&-1!=a.indexOf("%")&&(l="%26"),e=e+"?spm="+t+(a?l+a:"")+(n?"#"+n:""),c=s.indexOf(".")>-1?s.split(".").pop().toLowerCase():""){if({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}.hasOwnProperty(c))return 0;!a&&1>=i&&(n||{htm:1,html:1,php:1}.hasOwnProperty(c)||(e+="&__file="+s))}return e}function c(e){if(i(e.href)){var a=o(e,g);if(!a){if(!f)return;var n=f(e),r=[n.a,n.b,n.c,n.d,n.e].join(".");_&&(r=[n.a||"0",n.b||"0",n.c||"0",n.d||"0"].join("."),r=(t()||"0.0.0.0.0")+"_"+r);var c=s(e.href,r);e.href=c,e.setAttribute(g,r)}}e=void 0}var l=window,u=document,p=location,m=(p.href,l._alimm_spmact_on_);if("undefined"==typeof m&&(m=1),1==m&&(m=1),0==m&&(m=0),m){try{var f=l.g_SPM.getParam}catch(d){f=function(){return{a:0,b:0,c:0,d:0,e:0}}}var _=!0;try{_=self.location!=top.location}catch(d){}var g="data-spm-act-id",h=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"],b=!!u.attachEvent,v="attachEvent",y="addEventListener",E=b?v:y;e(u,"mousedown",function(e,t){for(var a,n=0;t&&(a=t.tagName)&&5>n;){if("A"==a||"AREA"==a){c(t);break}if("BODY"==a||"HTML"==a)break;t=t.parentNode,n++}}),r(function(){for(var e,r,i=document.getElementsByTagName("iframe"),s=0;s<i.length;s++){e=o(i[s],"mmsrc"),r=o(i[s],"mmworked");
var c=f(i[s]),l=[c.a||"0",c.b||"0",c.c||"0",c.d||"0",c.e||"0"].join(".");e&&!r?(_&&(l=[c.a||"0",c.b||"0",c.c||"0",c.d||"0"].join("."),l=t()+"_"+l),i[s].src=a(n(e),l),i[s].setAttribute("mmworked","mmworked")):i[s].setAttribute(g,l)}})}}()},{"./lib/log":2,"./lib/util":3}],2:[function(e,t,a){"use strict";function n(){var e=s.getMetaCnt("aplus-ajax");return goldlog.spm_ab&&s.makeChkSum(goldlog.spm_ab.join("."))==e?!0:s.makeChkSum(location.href)==e?!0:!1}function r(e,t,a){var n,r,o,i=e.length,s="spm-cnt";for(n=0;i>n;n++)if(r=e[n],r[0]===s){o=r[1].split("."),o[1]=o[1].split("/")[0]+"/"+t,a&&(o[4]=a),r[1]=o.join(".");break}}function o(e,t){var a,n,r=e.length,o="spm-url",i="spm-cnt",s=-1,c=g_SPM._current_spm;if(c){var l=[c.a,c.b,c.c,c.d].join(".")+(t?"."+t:"");for(a=0;r>a;a++){if(n=e[a],n[0]===o)return void(n[1]=l);n[0]===i&&(s=a)}s>-1&&e.splice(s,0,[o,l])}}function i(e,t){n()&&goldlog.launch({},{page_id:e,gokey:t})}var s=e("./util");t.exports={sendPV:i,updateSPMCnt:r,updateSPMUrl:o}},{"./util":3}],3:[function(e,t,a){"use strict";function n(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function r(e){return s=s||l.getElementsByTagName("head")[0],c&&!e?c:s?c=s.getElementsByTagName("meta"):[]}function o(e){var t,a,o,i=r(),s=i.length;for(t=0;s>t;t++)a=i[t],n(a,"name")===e&&(o=n(a,"content"));return o||""}function i(e){e=(e||"").split("#")[0].split("?")[0];var t=e.length,a=function(e){var t,a=e.length,n=0;for(t=0;a>t;t++)n=31*n+e.charCodeAt(t);return n};return t?a(t+"#"+e.charCodeAt(t-1)):-1}var s,c,l=document;t.exports={getMetaTags:r,getMetaCnt:o,tryToGetAttribute:n,makeChkSum:i}},{}]},{},[1]);