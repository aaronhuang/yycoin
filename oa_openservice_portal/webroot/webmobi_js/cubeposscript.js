function CString(){this._string_=[]}var MB={namespace:"minbean",index:0,get:function(n){return document.getElementById(n)},getId:function(n){return n?n:this.namespace+this.index++},getPath:function(n){n||(n=location.href);var t=n.split("/");return delete t[t.length-1],t.join("/")},getJsPath:function(n){var i=document.getElementsByTagName("script"),t,r,u;if(!i)return"";for(t=0;t<i.length;t++)if(r=i[t].src,u=this.getFileName(r),u==n)return this.getPath(r);return""},getFileName:function(n){var t=n.split("/");return t[t.length-1]},include:function(n){var t;if(!n)return!1;var i=this.getFileName(n).split("."),u=i[i.length-1].split("?"),r=u[0].toLowerCase();n.substring(0,4).toLowerCase()!="http"&&(n=this.getJsPath()+n),r=="js"?(t=document.createElement("script"),t.type="text/javascript",t.src=n):r=="css"&&(t=document.createElement("link"),t.type="text/css",t.rel="stylesheet",t.href=n),document.getElementsByTagName("head")[0].appendChild(t)},copyPro:function(n,t){for(var i in t)try{t[i]!==undefined&&(n[i]=t[i])}catch(r){alert("copyPro error")}},classExtend:function(n,t){for(var i in t)try{t[i]!==undefined&&(n[i]=t[i])}catch(r){alert("classExtend error")}n.toString=t.toString},runFun:function(fun,param){fun&&(typeof fun=="string"?eval(fun):typeof fun=="function"&&fun(param))},getHtml:function(n){return typeof n=="string"?n:typeof n=="object"?n.outerHTML:void 0},getScroll:function(){var i,r,u,f,n=document.documentElement,t=document.body;return n&&n.scrollTop?(i=n.scrollTop,r=n.scrollLeft,u=n.scrollWidth,f=n.scrollHeight):t&&(i=t.scrollTop,r=t.scrollLeft,u=t.scrollWidth,f=t.scrollHeight),{t:i,l:r,w:u,h:f}},getMousePos:function(n){var i=0,r=0,t;return n||(n=window.event?window.event:this.getEvent()),t=getScroll(),i=n.clientX+t.l,r=n.clientY+t.t,{x:i,y:r}},getEvent:function(n){var t=n||window.event,i;if(!t)for(i=this.getEvent.caller;i;){if(t=i.arguments[0],t&&Event==t.constructor)break;i=i.caller}return t},getPageSize:function(){var r=this.getScroll(),n=document.documentElement,t=window.innerWidth||self.innerWidth||n&&n.clientWidth||document.body.clientWidth,i=window.innerHeight||self.innerHeight||n&&n.clientHeight||document.body.clientHeight;return[t,i]},getIEVer:function(){var n=-1,t,i;return navigator.appName=="Microsoft Internet Explorer"&&(t=navigator.userAgent,i=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),i.exec(t)!=null&&(n=parseFloat(RegExp.$1))),n},getItemTextWithValue:function(n,t){var r="",i;n=n+"";try{for(i=0;i<t.length;i++)if(t[i].value==n)return t[i].text}catch(u){}return r},delArrWithValue:function(n,t){var r=[],i;if(typeof n=="number")for(i=0;i<t.length;i++)t[i]&&i!=n&&r.push(t[i]);else for(i=0;i<t.length;i++)t[i]&&t[i].value!=n&&r.push(t[i]);return r},delArrWithId:function(n,t){for(var r=[],i=0;i<t.length;i++)t[i]&&t[i].id!=n&&r.push(t[i]);return r},getTopZindex:function(){var t=document.body,n=t.getAttribute(this.namespace+"_topz");return n||(n=this.getTopZindex2(),t.setAttribute(this.namespace+"_topz",n)),n++,t.setAttribute(this.namespace+"_topz",n),n},getTopZindex2:function(){var t=document.getElementsByTagName("div"),r=1,i,n;if(t&&t.length)for(i=0;i<t.length;i++)n=t[i].style.zIndex,n&&(n=parseInt(n),n>=r&&(r=n+1));return r},onBlurIt:function(n){if(typeof n=="string"&&(n=document.getElementById(n)),typeof n!="object")return swobjBlurObject=null,!1;swobjBlurObject=n,$(document).bind("mousedown",MB._swIsBlurObj)},_swIsBlurObj:function(n){for(var i=$(swobjBlurObject).find("*").andSelf(),r=!1,t=0;t<i.length;t++)if(i[t]==n.target){r=!0;break}r||($(swobjBlurObject).hide(),swobjBlurObject=null)}},swobjBlurObject,_gaq;CString.prototype.j=CString.prototype.append=function(n){this._string_.push(n)},CString.prototype.toString=function(){return this._string_.join("")},swobjBlurObject=null,_gaq=_gaq||[],_gaq.push(["_setAccount","UA-32291800-1"]),_gaq.push(["_setDomainName","cubepos.com"]),_gaq.push(["_trackPageview"]),function(){var n=document.createElement("script"),t;n.type="text/javascript",n.async=!0,n.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(n,t)}()