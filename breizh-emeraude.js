/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(U,X,u){'use strict';function A(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.6/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ra(b){if(null==b||Sa(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:z(b)||x(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(B(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(x(b)||Ra(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Cd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Dd(){return++kb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function G(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var k=f[g];b[k]=e[k]}}lc(b,a);return b}function $(b){return parseInt(b,10)}function H(){}function oa(b){return b}function ca(b){return function(){return b}}function C(b){return"undefined"===typeof b}function y(b){return"undefined"!==
typeof b}function O(b){return null!==b&&"object"===typeof b}function z(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function pa(b){return"[object Date]"===Ja.call(b)}function B(b){return"function"===typeof b}function lb(b){return"[object RegExp]"===Ja.call(b)}function Sa(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function Ua(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Ed(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Va(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Sa(b)||Ta(b))throw Wa("cpws");if(a){if(b===a)throw Wa("cpi");c=c||[];d=d||[];if(O(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(x(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;x(a)?a.length=
0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),O(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)x(b)?a=Da(b,[],c,d):pa(b)?a=new Date(b.getTime()):lb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):O(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function qa(b,a){if(x(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(O(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function ga(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(x(b)){if(!x(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ga(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)?ga(b.getTime(),a.getTime()):!1;if(lb(b)&&lb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Sa(b)||Sa(a)||x(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!B(b[d])){if(!ga(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==u&&!B(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(Ya.call(a,c))}function nc(b,a){var c=2<arguments.length?Ya.call(arguments,2):[];return!B(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Fd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Sa(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":Ta(a)&&
(c="$SCOPE");return c}function Za(b,a){if("undefined"===typeof b)return u;Y(a)||(a=a?2:null);return JSON.stringify(b,Fd,a)}function oc(b){return z(b)?JSON.parse(b):b}function va(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return b[0].nodeType===mb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?x(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];r(b,function(b,d){x(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function nb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Gd(b,a){var c,d,e=ob.length;b=D(b);for(d=0;d<e;++d)if(c=ob[d]+a,z(c=b.attr(c)))return c;return null}function Hd(b,a){var c,d,e={};r(ob,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(ob,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Gd(c,"strict-di"),a(c,d?[d]:[],e))}function sc(b,
a,c){O(c)||(c={});c=G({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===X?"document":va(b);throw Wa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;U&&e.test(U.name)&&(c.debugInfoEnabled=!0,U.name=U.name.replace(e,""));if(U&&!f.test(U.name))return d();U.name=U.name.replace(f,"");ha.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function Id(){U.name="NG_ENABLE_DEBUG_INFO!"+U.name;U.location.reload()}function Jd(b){return ha.element(b).injector().get("$$testability")}function Pb(b,a){a=a||"_";return b.replace(Kd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Ld(){var b;
tc||((ra=U.jQuery)&&ra.fn.on?(D=ra,G(ra.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ra._data(e,"events"))&&c.$destroy&&ra(e).triggerHandler("$destroy");b(a)}):D=R,ha.element=D,tc=!0)}function Rb(b,a,c){if(!b)throw Wa("areq",a||"?",c||"required");return b}function pb(b,a,c){c&&x(b)&&(b=b[b.length-1]);Rb(B(b),a,"not a function, got "+
(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Wa("badname",a);}function uc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&B(b)?nc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function ia(){return Object.create(null)}function Md(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=A("$injector"),
d=A("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||A;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide",
"factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return t})}})}function Nd(b){G(b,{bootstrap:sc,copy:Da,extend:G,equals:ga,element:D,forEach:r,injector:Ob,noop:H,bind:nc,toJson:Za,fromJson:oc,identity:oa,isUndefined:C,
isDefined:y,isString:z,isFunction:B,isObject:O,isNumber:Y,isElement:mc,isArray:x,version:Od,isDate:pa,lowercase:Q,uppercase:rb,callbacks:{counter:0},getTestability:Jd,$$minErr:A,$$csp:$a,reloadWithDebugInfo:Id});ab=Md(U);try{ab("ngLocale")}catch(a){ab("ngLocale",[]).provider("$locale",Pd)}ab("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Qd});a.provider("$compile",vc).directive({a:Rd,input:wc,textarea:wc,form:Sd,script:Td,select:Ud,style:Vd,option:Wd,ngBind:Xd,ngBindHtml:Yd,ngBindTemplate:Zd,
ngClass:$d,ngClassEven:ae,ngClassOdd:be,ngCloak:ce,ngController:de,ngForm:ee,ngHide:fe,ngIf:ge,ngInclude:he,ngInit:ie,ngNonBindable:je,ngPluralize:ke,ngRepeat:le,ngShow:me,ngStyle:ne,ngSwitch:oe,ngSwitchWhen:pe,ngSwitchDefault:qe,ngOptions:re,ngTransclude:se,ngModel:te,ngList:ue,ngChange:ve,pattern:xc,ngPattern:xc,required:yc,ngRequired:yc,minlength:zc,ngMinlength:zc,maxlength:Ac,ngMaxlength:Ac,ngValue:we,ngModelOptions:xe}).directive({ngInclude:ye}).directive(sb).directive(Bc);a.provider({$anchorScroll:ze,
$animate:Ae,$browser:Be,$cacheFactory:Ce,$controller:De,$document:Ee,$exceptionHandler:Fe,$filter:Cc,$interpolate:Ge,$interval:He,$http:Ie,$httpBackend:Je,$location:Ke,$log:Le,$parse:Me,$rootScope:Ne,$q:Oe,$$q:Pe,$sce:Qe,$sceDelegate:Re,$sniffer:Se,$templateCache:Te,$templateRequest:Ue,$$testability:Ve,$timeout:We,$window:Xe,$$rAF:Ye,$$asyncCallback:Ze,$$jqLite:$e})}])}function bb(b){return b.replace(af,function(a,b,d,e){return e?d.toUpperCase():d}).replace(bf,"Moz$1")}function Dc(b){b=b.nodeType;
return b===na||!b||9===b}function Ec(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(cf.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(df,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;z(b)&&(b=P(b),
a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new R(b)}if(a){a=X;var c;b=(c=ef.exec(b))?[a.createElement(c[1])]:(c=Ec(b,a))?c.childNodes:[]}Fc(this,b)}function Ub(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Gc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),function(a){if(y(c)){var d=e[a];Va(d||[],c);if(d&&0<
d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&wb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Gc(b)),delete wb[c],b.ng339=u))}function vb(b,a){var c=b.ng339,c=c&&wb[c];a&&!c&&(b.ng339=c=++ff,c=wb[c]={events:{},data:{},handle:u});return c}function Vb(b,a,c){if(Dc(b)){var d=y(c),e=!d&&a&&!O(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;
if(e)return b&&b[a];G(b,a)}}}function xb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function yb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",P((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+P(a)+" "," ")))})}function zb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=P(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",P(c))}}function Fc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Hc(b,a){return Ab(b,"$"+(a||"ngController")+"Controller")}function Ab(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=x(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Ic(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function Jc(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function gf(b,a){a=a||U;if("complete"===a.document.readyState)a.setTimeout(b);else D(a).on("load",b)}function Kc(b,a){var c=Bb[a.toLowerCase()];return c&&Lc[ua(b)]&&c}function hf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Mc[a]}function jf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(C(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;
c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var k=0;k<g;k++)c.isImmediatePropagationStopped()||f[k].call(b,c)}};c.elem=b;return c}function $e(){this.$get=function(){return G(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return zb(b,a)},removeClass:function(b,a){b.attr&&
(b=b[0]);return yb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Dd)():c+":"+b}function cb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function kf(b){return(b=b.toString().replace(Nc,"").match(Oc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Wb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw z(c)&&
c||(c=b.name||kf(b)),Fa("strictdi",c);a=b.toString().replace(Nc,"");a=a.match(Oc);r(a[1].split(lf),function(a){a.replace(mf,function(a,b,c){d.push(c)})})}b.$inject=d}}else x(b)?(a=b.length-1,pb(b[a],"fn"),d=b.slice(0,a)):pb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(O(b))r(b,kc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(B(b)||x(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,
this);if(C(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{z(a)?(c=ab(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(q.invoke(a)):x(a)?b.push(q.invoke(a)):pb(a,"module")}catch(e){throw x(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&
(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===k)throw Fa("cdep",a+" <- "+l.join(" <- "));return b[a]}try{return l.unshift(a),b[a]=k,b[a]=c(a,e)}catch(f){throw b[a]===k&&delete b[a],f;}finally{l.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=Wb(b,a,g),l,q,s;q=0;for(l=k.length;q<l;q++){s=k[q];if("string"!==typeof s)throw Fa("itkn",s);h.push(f&&f.hasOwnProperty(s)?f[s]:d(s,g))}x(b)&&
(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((x(a)?a[a.length-1]:a).prototype);a=e(a,d,b,c);return O(a)||B(a)?a:d},get:d,annotate:Wb,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var k={},l=[],m=new cb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ca(b),!1)}),constant:c(function(a,b){La(a,
"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ha.isString(b)&&l.push(b);throw Fa("unpr",l.join(" <- "));}),t={},s=t.$injector=h(t,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,u,a)});r(g(b),function(a){s.invoke(a||H)});return s}function ze(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location",
"$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}
var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||gf(function(){d.$evalAsync(g)})});return g}]}function Ze(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Ya.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function Aa(){r(K,function(a){a()});E=b(Aa,a)})()}function g(){h();k()}function h(){J=
b.history.state;J=C(J)?null:J;ga(J,S)&&(J=S);S=J}function k(){if(F!==m.url()||L!==J)F=m.url(),L=J,r(W,function(a){a(m.url(),J)})}function l(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,p=a[0],q=b.location,t=b.history,s=b.setTimeout,N=b.clearTimeout,n={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){r(K,function(a){a()});0===v?a():w.push(a)};var K=[],E;m.addPollFn=function(a){C(E)&&
f(100,s);K.push(a);return a};var J,L,F=q.href,da=a.find("base"),I=null;h();L=J;m.url=function(a,c,e){C(e)&&(e=null);q!==b.location&&(q=b.location);t!==b.history&&(t=b.history);if(a){var f=L===e;if(F===a&&(!d.history||f))return m;var g=F&&Ga(F)===Ga(a);F=a;L=e;!d.history||g&&f?(g||(I=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(t[c?"replaceState":"pushState"](e,"",a),h(),L=J);return m}return I||q.href.replace(/%27/g,"'")};m.state=function(){return J};var W=
[],ba=!1,S=null;m.onUrlChange=function(a){if(!ba){if(d.history)D(b).on("popstate",g);D(b).on("hashchange",g);ba=!0}W.push(a);return a};m.$$checkUrlChange=k;m.baseHref=function(){var a=da.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var aa={},y="",ea=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===u?p.cookie=encodeURIComponent(a)+"=;path="+ea+";expires=Thu, 01 Jan 1970 00:00:00 GMT":z(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ea).length+
1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),aa={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=l(e.substring(0,g)),aa[a]===u&&(aa[a]=l(e.substring(g+1))));return aa}};m.defer=function(a,b){var c;v++;c=s(function(){delete n[c];e(a)},b||0);n[c]=!0;return c};m.defer.cancel=function(a){return n[a]?(delete n[a],N(a),e(H),!0):!1}}function Be(){this.$get=["$window","$log","$sniffer",
"$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ce(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw A("$cacheFactory")("iid",b);var g=0,h=G({},d,{id:b}),k={},l=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!C(b))return a in k||g++,k[a]=b,g>l&&this.remove(q.key),b},get:function(a){if(l<
Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete k[a];g--},removeAll:function(){k={};g=0;m={};p=q=null},destroy:function(){m=h=k=null;delete a[b]},info:function(){return G({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Te(){this.$get=["$cacheFactory",function(b){return b("templates")}]}
function vc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ka("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Ed("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");z(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||
(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);B(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";O(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,kc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?
(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var l=!0;this.debugInfoEnabled=function(a){return y(a)?(l=a,this):l};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,N,n,v,w,K,E,J){function L(a,b){try{a.addClass(b)}catch(c){}}
function F(a,b,c,d,e){a instanceof D||(a=D(a));r(a,function(b,c){b.nodeType==mb&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=da(a,b,a,c,d,e);F.$$addScopeClass(a);var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?D(U(g,D("<div>").append(a).html())):
c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);F.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function da(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,q,s,n,w;if(p)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(s=h.length;q<s;)k=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),F.$$addScopeInfo(D(k),l)):l=a,n=c.transcludeOnThisElement?I(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?I(a,
b):null,c(f,l,k,d,n)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,q,s,p,n=0;n<a.length;n++){k=new V;l=W(a[n],[],k,0===n?d:u,e);(f=l.length?aa(l,a[n],k,b,c,null,[],[],f):null)&&f.scope&&F.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[n].childNodes)||!q.length?null:da(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(n,f,k),s=!0,p=p||f;f=null}return s?g:null}function I(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(b,c,g,h,k){var l=g.$attr,q;switch(b.nodeType){case na:ea(c,wa(ua(b)),"E",h,k);for(var s,n,w,N=b.attributes,K=0,t=N&&N.length;K<t;K++){var J=!1,v=!1;s=N[K];q=s.name;s=P(s.value);n=wa(q);if(w=Ha.test(n))q=Pb(n.substr(6),"-");var L=n.replace(/(Start|End)$/,""),E;a:{var F=L;if(d.hasOwnProperty(F)){E=void 0;for(var F=a.get(F+"Directive"),W=0,r=F.length;W<r;W++)if(E=F[W],E.multiElement){E=!0;break a}}E=!1}E&&n===L+"Start"&&
(J=q,v=q.substr(0,q.length-5)+"end",q=q.substr(0,q.length-6));n=wa(q.toLowerCase());l[n]=q;if(w||!g.hasOwnProperty(n))g[n]=s,Kc(b,n)&&(g[n]=!0);R(b,c,s,n,w);ea(c,n,"A",h,k,J,v)}b=b.className;if(z(b)&&""!==b)for(;q=f.exec(b);)n=wa(q[2]),ea(c,n,"C",h,k)&&(g[n]=P(q[3])),b=b.substr(q.index+q[0].length);break;case mb:T(c,b.nodeValue);break;case 8:try{if(q=e.exec(b.nodeValue))n=wa(q[1]),ea(c,n,"M",h,k)&&(g[n]=P(q[2]))}catch(da){}}c.sort(A);return c}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&
a.hasAttribute(b)){do{if(!a)throw ka("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function S(a,b,c){return function(d,e,f,g,h){e=ba(e[0],b,c);return a(d,e,f,g,h)}}function aa(a,d,e,f,g,k,l,s,p){function w(a,b,c,d){if(a){c&&(a=S(a,c,d));a.require=M.require;a.directiveName=fa;if(I===M||M.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=S(b,c,d));b.require=M.require;b.directiveName=fa;if(I===
M||M.$$isolateScope)b=Y(b,{isolateScope:!0});s.push(b)}}function K(a,b,c,d){var e,f="data",g=!1,k=c,l;if(z(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw ka("ctreq",b,a);return e||null}x(b)&&(e=[],r(b,function(b){e.push(K(a,b,c,d))}));return e}function J(a,c,f,g,h){function k(a,b,c){var d;
Ta(a)||(c=b,b=a,a=u);ya&&(d=L);c||(c=ya?W.parent():W);return h(a,b,d,c,Xb)}var p,w,t,v,L,db,W,S;d===f?(S=e,W=e.$$element):(W=D(f),S=new V(W,e));I&&(v=c.$new(!0));h&&(db=k,db.$$boundTransclude=h);E&&(da={},L={},r(E,function(a){var b={$scope:a===I||a.$$isolateScope?v:c,$element:W,$attrs:S,$transclude:db};t=a.controller;"@"==t&&(t=S[a.name]);b=n(t,b,!0,a.controllerAs);L[a.name]=b;ya||W.data("$"+a.name+"Controller",b.instance);da[a.name]=b}));if(I){F.$$addScopeInfo(W,v,!0,!(aa&&(aa===I||aa===I.$$originalDirective)));
F.$$addScopeClass(W,!0);g=da&&da[I.name];var ba=v;g&&g.identifier&&!0===I.bindToController&&(ba=g.instance);r(v.$$isolateBindings=I.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":S.$observe(e,function(a){ba[d]=a});S.$$observers[e].$$scope=c;S[e]&&(ba[d]=b(S[e])(c));break;case "=":if(f&&!S[e])break;h=N(S[e]);l=h.literal?ga:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw ka("nonassign",S[e],I.name);};g=ba[d]=h(c);f=function(a){l(a,
ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(S[e],f):c.$watch(N(S[e],f),null,h.literal);v.$on("$destroy",f);break;case "&":h=N(S[e]),ba[d]=function(a){return h(c,a)}}})}da&&(r(da,function(a){a()}),da=null);g=0;for(p=l.length;g<p;g++)w=l[g],Z(w,w.isolateScope?v:c,W,S,w.require&&K(w.directiveName,w.require,W,L),db);var Xb=c;I&&(I.template||null===I.templateUrl)&&(Xb=v);a&&a(Xb,f.childNodes,u,h);for(g=s.length-1;0<=g;g--)w=s[g],Z(w,w.isolateScope?
v:c,W,S,w.require&&K(w.directiveName,w.require,W,L),db)}p=p||{};for(var v=-Number.MAX_VALUE,L,E=p.controllerDirectives,da,I=p.newIsolateScopeDirective,aa=p.templateDirective,ea=p.nonTlbTranscludeDirective,H=!1,G=!1,ya=p.hasElementTranscludeDirective,T=e.$$element=D(d),M,fa,A,Ha=f,Q,xa=0,R=a.length;xa<R;xa++){M=a[xa];var Cb=M.$$start,$=M.$$end;Cb&&(T=ba(d,Cb,$));A=u;if(v>M.priority)break;if(A=M.scope)M.templateUrl||(O(A)?(Aa("new/isolated scope",I||L,M,T),I=M):Aa("new/isolated scope",I,M,T)),L=L||
M;fa=M.name;!M.templateUrl&&M.controller&&(A=M.controller,E=E||{},Aa("'"+fa+"' controller",E[fa],M,T),E[fa]=M);if(A=M.transclude)H=!0,M.$$tlb||(Aa("transclusion",ea,M,T),ea=M),"element"==A?(ya=!0,v=M.priority,A=T,T=e.$$element=D(X.createComment(" "+fa+": "+e[fa]+" ")),d=T[0],Db(g,Ya.call(A,0),d),Ha=F(A,f,v,k&&k.name,{nonTlbTranscludeDirective:ea})):(A=D(Ub(d)).contents(),T.empty(),Ha=F(A,f));if(M.template)if(G=!0,Aa("template",aa,M,T),aa=M,A=B(M.template)?M.template(T,e):M.template,A=Pc(A),M.replace){k=
M;A=Sb.test(A)?Qc(U(M.templateNamespace,P(A))):[];d=A[0];if(1!=A.length||d.nodeType!==na)throw ka("tplrt",fa,"");Db(g,T,d);R={$attr:{}};A=W(d,[],R);var pf=a.splice(xa+1,a.length-(xa+1));I&&y(A);a=a.concat(A).concat(pf);C(e,R);R=a.length}else T.html(A);if(M.templateUrl)G=!0,Aa("template",aa,M,T),aa=M,M.replace&&(k=M),J=of(a.splice(xa,a.length-xa),T,e,g,H&&Ha,l,s,{controllerDirectives:E,newIsolateScopeDirective:I,templateDirective:aa,nonTlbTranscludeDirective:ea}),R=a.length;else if(M.compile)try{Q=
M.compile(T,e,Ha),B(Q)?w(null,Q,Cb,$):Q&&w(Q.pre,Q.post,Cb,$)}catch(ca){c(ca,va(T))}M.terminal&&(J.terminal=!0,v=Math.max(v,M.priority))}J.scope=L&&!0===L.scope;J.transcludeOnThisElement=H;J.elementTranscludeOnThisElement=ya;J.templateOnThisElement=G;J.transclude=Ha;p.hasElementTranscludeDirective=ya;return J}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=G(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ea(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;
e=a.get(e+"Directive");for(var s=0,n=e.length;s<n;s++)try{if(q=e[s],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)){if(k){var w={$$start:k,$$end:l};q=G(Object.create(q),w)}b.push(q);h=q}}catch(N){c(N)}}return h}function C(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(L(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+
b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,h){var k=[],l,q,p=b[0],n=a.shift(),w=G({},n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),N=B(n.templateUrl)?n.templateUrl(b,c):n.templateUrl,t=n.templateNamespace;b.empty();s(K.getTrustedResourceUrl(N)).then(function(s){var K,v;s=Pc(s);if(n.replace){s=Sb.test(s)?Qc(U(t,P(s))):[];K=s[0];if(1!=s.length||K.nodeType!==na)throw ka("tplrt",n.name,N);s={$attr:{}};
Db(d,b,K);var J=W(K,[],s);O(n.scope)&&y(J);a=J.concat(a);C(c,s)}else K=p,b.html(s);a.unshift(w);l=aa(a,K,c,e,b,n,f,g,h);r(d,function(a,c){a==K&&(d[c]=b[0])});for(q=da(b[0].childNodes,e);k.length;){s=k.shift();v=k.shift();var E=k.shift(),F=k.shift(),J=b[0];if(!s.$$destroyed){if(v!==p){var S=v.className;h.hasElementTranscludeDirective&&n.replace||(J=Ub(K));Db(E,D(v),J);L(D(J),S)}v=l.transcludeOnThisElement?I(s,l.transclude,F):F;l(q,s,J,d,v)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?
k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=I(b,l.transclude,e)),l(q,b,c,d,a)))}}function A(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Aa(a,b,c,d){if(b)throw ka("multidir",b.name,c.name,a,va(d));}function T(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&F.$$addBindingClass(a);return function(a,c){var e=c.parent();b||F.$$addBindingClass(e);F.$$addBindingInfo(e,d.expressions);a.$watch(d,
function(a){c[0].nodeValue=a})}}})}function U(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function xa(a,b){if("srcdoc"==b)return K.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return K.RESOURCE_URL}function R(a,c,d,e,f){var h=b(d,!0);if(h){if("multiple"===e&&"select"===ua(a))throw ka("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(c,
d,l){d=l.$$observers||(l.$$observers={});if(k.test(e))throw ka("nodomevents");l[e]&&(h=b(l[e],!0,xa(a,e),g[e]||f))&&(l[e]=h(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(h,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)}))}}}})}}function Db(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=
c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());ra?(Qb=!0,ra.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return G(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var V=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
{};this.$$element=a};V.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&E.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&E.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Rc(a,b);c&&c.length&&E.addClass(this.$$element,c);(c=Rc(b,a))&&c.length&&E.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Kc(f,a),h=hf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
e=Pb(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=J(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=P(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+J(P(h[q]),!0),g=g+(" "+P(h[q+1]));h=P(h[2*l]).split(/\s/);g+=J(P(h[0]),!0);2===h.length&&(g+=" "+P(h[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&
r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Va(e,b)}}};var ya=b.startSymbol(),fa=b.endSymbol(),Pc="{{"==ya||"}}"==fa?oa:function(a){return a.replace(/\{\{/g,ya).replace(/}}/g,fa)},Ha=/^ngAttr[A-Z]/;F.$$addBindingInfo=l?function(a,b){var c=a.data("$binding")||[];x(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:H;
F.$$addBindingClass=l?function(a){L(a,"ng-binding")}:H;F.$$addScopeInfo=l?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:H;F.$$addScopeClass=l?function(a,b){L(a,b?"ng-isolate-scope":"ng-scope")}:H;return F}]}function wa(b){return bb(b.replace(qf,""))}function Rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Qc(b){b=D(b);var a=b.length;
if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function De(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");O(a)?G(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!O(a.$scope))throw A("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,k,l){var m,p,q;k=!0===k;l&&z(l)&&(q=l);z(g)&&(l=g.match(c),p=l[1],q=q||l[3],g=b.hasOwnProperty(p)?b[p]:uc(h.$scope,p,
!0)||(a?uc(e,p,!0):u),pb(g,p,!0));if(k)return k=(x(g)?g[g.length-1]:g).prototype,m=Object.create(k),q&&f(h,q,m,p||g.name),G(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:q});m=d.instantiate(g,h,p);q&&f(h,q,m,p||g.name);return m}}]}function Ee(){this.$get=["$window",function(b){return D(b.document)}]}function Fe(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(z(b)){b=b.replace(sf,"");var c=a("Content-Type");if(c&&0===c.indexOf(Sc)&&
b.trim()||tf.test(b)&&uf.test(b))b=oc(b)}return b}function Tc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=Q(P(b.substr(0,e)));d=P(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Uc(b){var a=O(b)?b:u;return function(c){a||(a=Tc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Vc(b,a,c){if(B(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function Ie(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return O(a)&&
"[object File]"!==Ja.call(a)&&"[object Blob]"!==Ja.call(a)?Za(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(Zb),put:qa(Zb),patch:qa(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,k){function l(a){function c(a){var b=G({},a);b.data=a.data?Vc(a.data,a.headers,d.transformResponse):
a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}var d={method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},e=function(a){var c=b.headers,d=G({},a.headers),e,f,c=G({},c.common,c[Q(a.method)]);a:for(e in c){a=Q(e);for(f in d)if(Q(f)===a)continue a;d[e]=c[e]}(function(a){var b;r(a,function(c,d){B(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(d);return d}(a);if(!ha.isObject(a))throw A("$http")("badreq",a);G(d,a);d.headers=e;d.method=rb(d.method);var f=[function(a){e=
a.headers;var d=Vc(a.data,Uc(e),a.transformRequest);C(d)&&r(e,function(a,b){"content-type"===Q(b)&&delete e[b]});C(a.withCredentials)&&!C(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,d,e).then(c,c)},u],g=h.when(d);for(r(t,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,
b.headers,d)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,d)});return g};return g}function m(c,f,k){function m(b,c,d,e){function f(){w(c,b,d,e)}F&&(200<=b&&300>b?F.put(I,[b,c,Tc(d),e]):F.remove(I));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function w(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?J.resolve:J.reject)({data:a,status:b,headers:Uc(d),config:c,statusText:e})}function t(a){w(a.data,a.status,qa(a.headers()),a.statusText)}function E(){var a=l.pendingRequests.indexOf(c);
-1!==a&&l.pendingRequests.splice(a,1)}var J=h.defer(),L=J.promise,F,r,I=p(c.url,c.params);l.pendingRequests.push(c);L.then(E,E);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(F=O(c.cache)?c.cache:O(b.cache)?b.cache:q);F&&(r=F.get(I),y(r)?r&&B(r.then)?r.then(t,t):x(r)?w(r[1],r[0],qa(r[2]),r[3]):w(r,200,{},"OK"):F.put(I,L));C(r)&&((r=Wc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(k[c.xsrfHeaderName||b.xsrfHeaderName]=r),d(c.method,I,f,m,k,c.timeout,c.withCredentials,
c.responseType));return L}function p(a,b){if(!b)return a;var c=[];Cd(b,function(a,b){null===a||C(a)||(x(a)||(a=[a]),r(a,function(a){O(a)&&(a=pa(a)?a.toISOString():Za(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),t=[];r(c,function(a){t.unshift(z(a)?k.get(a):k.invoke(a))});l.pendingRequests=[];(function(a){r(arguments,function(a){l[a]=function(b,c){return l(G(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,
function(a){l[a]=function(b,c,d){return l(G(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");l.defaults=b;return l}]}function vf(){return new U.XMLHttpRequest}function Je(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);
e.body.removeChild(f);f=null;var g=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,p,q,t){function s(){v&&v();w&&w.abort()}function N(a,d,e,f,g){E!==u&&c.cancel(E);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(H)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var n="_"+(d.counter++).toString(36);
d[n]=function(a){d[n].data=a;d[n].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+n),n,function(a,b){N(l,a,d[n].data,"",b);d[n]=H})}else{var w=a();w.open(e,h,!0);r(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);N(l,c,b,w.getAllResponseHeaders(),a)};e=function(){N(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=
!0);if(t)try{w.responseType=t}catch(K){if("json"!==t)throw K;}w.send(k||null)}if(0<p)var E=c(s,p);else p&&B(p.then)&&p.then(s)}}function Ge(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,s){function N(c){return c.replace(l,b).replace(m,a)}function n(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(s&&!y(a))c=
a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=Za(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}s=!!s;for(var v,w,K=0,E=[],J=[],L=f.length,F=[],r=[];K<L;)if(-1!=(v=f.indexOf(b,K))&&-1!=(w=f.indexOf(a,v+h)))K!==v&&F.push(N(f.substring(K,v))),K=f.substring(v+h,w),E.push(K),J.push(c(K,n)),K=w+k,r.push(F.length),F.push("");else{K!==L&&F.push(N(f.substring(K)));break}if(t&&1<F.length)throw $b("noconcat",f);if(!g||E.length){var I=function(a){for(var b=
0,c=E.length;b<c;b++){if(s&&C(a[b]))return;F[r[b]]=a[b]}return F.join("")};return G(function(a){var b=0,c=E.length,e=Array(c);try{for(;b<c;b++)e[b]=J[b](a);return I(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:E,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(J,function(c,e){var f=I(c);B(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,k=a.length,l=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function He(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,k,l){var m=a.setInterval,p=a.clearInterval,q=0,t=y(l)&&!l,s=(t?d:c).defer(),N=s.promise;k=y(k)?k:0;N.then(null,null,e);N.$$intervalId=m(function(){s.notify(q++);0<k&&q>=k&&(s.resolve(q),p(N.$$intervalId),delete f[N.$$intervalId]);t||b.$apply()},h);f[N.$$intervalId]=s;return N}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Pd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function Xc(b,a){var c=Ba(b);a.$$protocol=
c.protocol;a.$$host=c.hostname;a.$$port=$(c.port)||xf[c.protocol]||null}function Yc(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Zc(b){return b.replace(/(#.+)|#$/,
"$1")}function bc(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);Xc(b,this);this.$$parse=function(a){var b=za(c,a);if(!z(b))throw Eb("ipthprfx",a,c);Yc(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=za(b,d))!==u?(g=f,g=(f=za(a,f))!==u?c+(za("/",f)||f):b+g):(f=za(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);Xc(b,this);this.$$parse=function(d){d=za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),C(e)&&(e=d)):e=this.$$html5?d:"";Yc(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?
"#"+nb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function $c(b,a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):
"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Fb(b){return function(){return this[b]}}function ad(b,a){return function(c){if(C(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Ke(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Ua(b)?(a.enabled=b,this):O(b)?(Ua(b.enabled)&&(a.enabled=b.enabled),Ua(b.requireBase)&&(a.requireBase=b.requireBase),Ua(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function h(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,l;l=d.baseHref();var m=d.url(),p;if(a.enabled){if(!l&&a.requireBase)throw Eb("nobase");p=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(l||"/");l=e.history?cc:$c}else p=Ga(m),
l=dc;k=new l(p,"#"+b);k.$$parseLinkUrl(m,m);k.$$state=d.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&2!=b.which){for(var e=D(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");O(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=Ba(g.animVal).href);q.test(g)||!g||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(g,h)||(b.preventDefault(),k.absUrl()!=
d.url()&&(c.$apply(),U.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=m&&d.url(k.absUrl(),!0);var t=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,g(d,!1,e)):(t=!1,h(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Zc(d.url()),b=Zc(k.absUrl()),f=d.state(),l=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;
if(t||q)t=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&g(b,l,f===k.$$state?null:k.$$state),h(a,f)))});k.$$replace=!1});return k}]}function Le(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||H;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function sa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===
b||"__proto__"===b)throw la("isecfld",a);return b}function ta(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function Na(b,a,c,d){ta(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=sa(a.shift(),d);var g=ta(b[e],d);g||(g={},b[e]=g);b=g}e=sa(a.shift(),d);ta(b[e],d);return b[e]=c}function Oa(b){return"constructor"==
b}function bd(b,a,c,d,e,f,g){sa(b,f);sa(a,f);sa(c,f);sa(d,f);sa(e,f);var h=function(a){return ta(a,f)},k=g||Oa(b)?h:oa,l=g||Oa(a)?h:oa,m=g||Oa(c)?h:oa,p=g||Oa(d)?h:oa,q=g||Oa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=k(h[b]);if(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=m(h[c]);if(!d)return h;if(null==h)return u;h=p(h[d]);return e?null==h?u:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ta,a)}}function cd(b,
a,c){var d=a.expensiveChecks,e=d?zf:Af,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?bd(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=bd(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=u,a=f;while(e<h);return f};else{var k="";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var l=d;r(g,function(a,b){sa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Oa(a))e="eso("+e+", fe)",l=!0;k+="if(s == null) return undefined;\ns="+e+";\n"});k+="return s;";a=new Function("s",
"l","eso","fe",k);a.toString=ca(k);l&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return Na(a,b,c,b)};return e[b]=f}function fc(b){return B(b.valueOf)?b.valueOf():Bf.call(b)}function Me(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===
b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&fc(b));return h},b,c)}for(var l=[],q=0,p=e.length;q<p;q++)l[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&fc(k)}b&&(h=d(a));
return h},b,c)}function k(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;B(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function l(a,b,c,d){function e(a){var b=!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;B(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){B(b)&&
b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==l&&c!==k?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,K;switch(typeof d){case "string":K=d=d.trim();var E=g?a:b;v=E[K];
v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?t:q,v=new gc(g),v=(new eb(v,c,g)).parse(d),v.constant?v.$$watchDelegate=m:w?(v=e(v),v.$$watchDelegate=v.literal?l:k):v.inputs&&(v.$$watchDelegate=h),E[K]=v);return p(v,f);case "function":return p(d,f);default:return p(H,f)}}}]}function Oe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return dd(function(a){b.$evalAsync(a)},a)}]}function Pe(){this.$get=["$browser","$exceptionHandler",function(b,a){return dd(function(a){b.defer(a)},
a)}]}function dd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{B(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),
a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=A("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}};
g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(O(b)||B(b))d=b&&b.then;B(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=
a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(B(b)?b(c):c)}catch(h){a(h)}}})}};var k=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},l=function(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return k(e,!1)}return d&&B(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):
k(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!B(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=x(a)?[]:{};r(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||
b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Ye(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Ne(){var b=10,
a=A("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function k(){this.$id=++kb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function l(b){if(s.$$phase)throw a("inprog",s.$$phase);s.$$phase=b}function m(a,
b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function t(){null===d&&(d=h.defer(function(){s.$apply(q)}))}k.prototype={constructor:k,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new k,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners=
{};this.$$listenerCount={};this.$id=++kb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;B(b)||(h.fn=H);f||(f=this.$$watchers=[]);f.unshift(h);
return function(){Va(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,
b){function c(a){e=a;var b,d,g,h;if(!C(e)){if(O(e))if(Ra(e))for(f!==p&&(f=p,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==m&&(f=m={},t=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,q=g(a,c),p=[],m=
{},n=!0,t=0;return this.$watch(q,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(k)if(O(e))if(Ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,k,m,t,v,r=b,I,u=[],y,S;l("$digest");h.$$checkUrlChange();this===s&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(I=this;N.length;){try{S=N.shift(),S.scope.$eval(S.expression)}catch(A){f(A)}c=null}a:do{if(m=I.$$watchers)for(t=m.length;t--;)try{if(e=m[t])if((g=
e.get(I))!==(k=e.last)&&!(e.eq?ga(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))v=!0,c=e,e.last=e.eq?Da(g,null):g,e.fn(g,k===p?g:k,I),5>r&&(y=4-r,u[y]||(u[y]=[]),u[y].push({msg:B(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:k}));else if(e===c){v=!1;break a}}catch(D){f(D)}if(!(m=I.$$childHead||I!==this&&I.$$nextSibling))for(;I!==this&&!(m=I.$$nextSibling);)I=I.$parent}while(I=m);if((v||N.length)&&!r--)throw s.$$phase=null,a("infdig",b,u);}while(v||N.length);
for(s.$$phase=null;n.length;)try{n.shift()()}catch(ea){f(ea)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==s){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=H;this.$on=this.$watch=this.$watchGroup=function(){return H};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){s.$$phase||N.length||h.defer(function(){N.length&&s.$digest()});N.push({scope:this,expression:a})},$$postDigest:function(a){n.push(a)},$apply:function(a){try{return l("$apply"),
this.$eval(a)}catch(b){f(b)}finally{s.$$phase=null;try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,
stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Xa([h],arguments,1),l,q;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(q=d.length;l<q;l++)if(d[l])try{d[l].apply(null,k)}catch(m){f(m)}else d.splice(l,1),l--,q--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;
for(var g=Xa([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new k,N=s.$$asyncQueue=[],n=s.$$postDigestQueue=[],v=s.$$applyAsyncQueue=[];return s}]}function Qd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Cf(b){if("self"===b)return b;if(z(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=ed(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(lb(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function fd(b){var a=
[];y(b)&&r(b,function(b){a.push(Cf(b))});return a}function Re(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=fd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=fd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Wc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Ba(e.toString()),p,q,t=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){t=!0;break}if(t)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){t=!1;break}if(t)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Qe(){var b=!0;this.enabled=function(a){arguments.length&&
(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Pa)throw Ca("iequirks");var d=qa(ma);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(ma,function(a,b){var c=Q(b);d[bb("parse_as_"+c)]=function(b){return e(a,
b)};d[bb("get_trusted_"+c)]=function(b){return f(a,b)};d[bb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Se(){this.$get=["$window","$document",function(b,a){var c={},d=$((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var p in k)if(l=h.exec(p)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");
l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!d||l&&m||(l=z(f.body.style.webkitTransition),m=z(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Pa)return!1;if(C(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:$a(),vendorPrefix:g,transitions:l,animations:m,android:d}}]}function Ue(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;
var g=a.defaults&&a.defaults.transformResponse;x(g)?g=g.filter(function(a){return a!==Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){d.totalPendingRequests--;return a.data},function(a){d.totalPendingRequests--;if(!f)throw ka("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Ve(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=
ha.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+ed(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function We(){this.$get=
["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,k,l){var m=y(l)&&!l,p=(m?d:c).defer(),q=p.promise;k=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},k);q.$$timeoutId=k;g[k]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Pa&&(Z.setAttribute("href",b),b=Z.href);
Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Wc(b){b=z(b)?Ba(b):b;return b.protocol===gd.protocol&&b.host===gd.host}function Xe(){this.$get=ca(U)}function Cc(b){function a(c,d){if(O(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",hd);a("date",id);a("filter",Df);a("json",Ef);a("limitTo",Ff);a("lowercase",Gf);a("number",jd);a("orderBy",kd);a("uppercase",Hf)}function Df(){return function(b,a,c){if(!x(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=If(a,c,d);break;default:return b}return b.filter(a)}}function If(b,a,c){!0===a?a=ga:B(a)||
(a=function(a,b){if(O(a)||O(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(d){return fb(d,b,a,c)}}function fb(b,a,c,d){var e=typeof b,f=typeof a;if("string"===f&&"!"===a.charAt(0))return!fb(b,a.substring(1),c,d);if("array"===e)return b.some(function(b){return fb(b,a,c,d)});switch(e){case "object":var g;if(d){for(g in b)if("$"!==g.charAt(0)&&fb(b[g],a,c))return!0;return!1}if("object"===f){for(g in a)if(e=a[g],!B(e)&&(f="$"===g,!fb(f?b:b[g],e,c,f)))return!1;return!0}return c(b,
a);case "function":return!1;default:return c(b,a)}}function hd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){C(d)&&(d=a.CURRENCY_SYM);C(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:ld(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:ld(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function ld(b,a,c,d,e){if(!isFinite(b)||O(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],l=!1;if(-1!==g.indexOf("e")){var m=
g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,l=!0)}if(l)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(md)[1]||"").length;C(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(md),l=g[0],g=g[1]||"",p=0,q=a.lgSize,t=a.gSize;if(l.length>=q+t)for(p=l.length-q,m=0;m<p;m++)0===(p-m)%t&&0!==m&&(h+=c),h+=l.charAt(m);for(m=p;m<l.length;m++)0===(l.length-m)%q&&0!==m&&(h+=c),h+=l.charAt(m);for(;g.length<
e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);k.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return k.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function V(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function nd(b){var a=(new Date(b,0,1)).getDay();
return new Date(b,0,(4>=a?5:12)-a)}function od(b){return function(a){var c=nd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function id(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+
(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],k,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;z(c)&&(c=Jf.test(c)?$(c):a(c));Y(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(l=Kf.exec(e))?(h=Xa(h,l,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){k=Lf[a];g+=k?k(c,b.DATETIME_FORMATS):
a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ef(){return function(b,a){C(a)&&(a=2);return Za(b,a)}}function Ff(){return function(b,a){Y(b)&&(b=b.toString());if(!x(b)&&!z(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):$(a);if(z(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function kd(b){return function(a,c,d){function e(a,b){return b?
function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c===d&&"object"===c&&(c=typeof(a.valueOf?a=a.valueOf():a),d=typeof(b.valueOf?b=b.valueOf():b),c===d&&"object"===c&&(c=typeof(a.toString?a=a.toString():a),d=typeof(b.toString?b=b.toString():b),c===d&&a===b||"object"===c))?0:c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ra(a))return a;c=x(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||oa;if(z(a)){if("+"==a.charAt(0)||
"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var l=d();return e(function(a,b){return f(a[l],b[l])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return Ya.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){B(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function pd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||
Ib;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});Va(g,a)};qd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Va(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Qa);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Qa,Jb+" ng-submitted");
f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function gb(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;k()})}var k=function(b){l&&(f.defer.cancel(l),
l=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=P(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",k);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?
"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(pa(c))return c;if(z(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Mf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,
f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function hb(b,a,c,d){return function(e,f,g,h,k,l,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?pa(a)?a:c(a):u}rd(e,f,g,h);gb(e,f,g,h,k,l);var t=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});h.$formatters.push(function(a){if(a&&!pa(a))throw Lb("datefmt",a);if(p(a)){if((s=
a)&&"UTC"===t){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return m("date")(a,d,t)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||C(r)||c(a)>=r};g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var n;h.$validators.max=function(a){return!p(a)||C(n)||c(a)<=n};g.$observe("max",function(a){n=q(a);h.$validate()})}}}function rd(b,a,c,d){(d.$$hasNativeValidators=O(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||
{};return c.badInput&&!c.typeMismatch?u:b})}function sd(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw A("ngModel")("constexpr",c,d);return b(a)}return e}function qd(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Pb(b,"-"):"";a(ib+b,!0===c);a(td+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,k=b.parentForm,l=b.$animate;f[td]=!(f[ib]=e.hasClass(ib));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,
b,f)):(d.$pending&&h(d.$pending,b,f),ud(d.$pending)&&(d.$pending=u));Ua(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(vd,!0),d.$valid=d.$invalid=u,c("",null)):(a(vd,!1),d.$valid=ud(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);k.$setValidity(b,e,d)}}function ud(b){if(b)for(var a in b)return!1;return!0}function ic(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!x(a)){if(z(a))return a.split(" ");if(O(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(b){if(!0===
a||f.$index%2===a){var l=e(b||[]);if(!m){var t=k(l,1);h.$addClass(t)}else if(!ga(b,m)){var s=e(m),t=d(l,s),l=d(s,l),t=k(t,1),l=k(l,-1);t&&t.length&&c.addClass(g,t);l&&l.length&&c.removeClass(g,l)}}m=qa(b)}var m;f.$watch(h[b],l,!0);h.$observe("class",function(a){l(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Nf=/^\/(.+)\/([a-z]*)$/,Q=function(b){return z(b)?b.toLowerCase():
b},rc=Object.prototype.hasOwnProperty,rb=function(b){return z(b)?b.toUpperCase():b},Pa,D,ra,Ya=[].slice,rf=[].splice,Of=[].push,Ja=Object.prototype.toString,Wa=A("ng"),ha=U.angular||(U.angular={}),ab,kb=0;Pa=X.documentMode;H.$inject=[];oa.$inject=[];var x=Array.isArray,P=function(b){return z(b)?b.trim():b},ed=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},$a=function(){if(y($a.isActive_))return $a.isActive_;var b=!(!X.querySelector("[ng-csp]")&&!X.querySelector("[data-ng-csp]"));
if(!b)try{new Function("")}catch(a){b=!0}return $a.isActive_=b},ob=["ng-","data-ng-","ng:","x-ng-"],Kd=/[A-Z]/g,tc=!1,Qb,na=1,mb=3,Od={full:"1.3.6",major:1,minor:3,dot:6,codeName:"robofunky-danceblaster"};R.expando="ng339";var wb=R.cache={},ff=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var af=/([\:\-\_]+(.))/g,bf=/^moz([A-Z])/,Pf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=A("jqLite"),ef=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,cf=/<([\w:]+)/,df=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(U).on("load",a))},
toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:Of,sort:[].sort,splice:[].splice},Bb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Bb[Q(b)]=b});var Lc={};r("input select option textarea button form details".split(" "),function(b){Lc[b]=!0});var Mc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
r({data:Vb,removeData:ub},function(b,a){R[a]=b});r({data:Vb,inheritedData:Ab,scope:function(b){return D.data(b,"$scope")||Ab(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:Hc,injector:function(b){return Ab(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:xb,css:function(b,a,c){a=bb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Bb[d])if(y(c))c?
(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||H).specified?d:u;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(C(b)){var d=a.nodeType;return d===na||d===mb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(C(a)){if(b.multiple&&"select"===ua(b)){var c=[];r(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(C(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Ic},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Ic&&(2==b.length&&b!==xb&&b!==Hc?a:d)===u){if(O(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});
r({removeData:ub,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Dc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=jf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],k=g.length;k--;){d=g[k];var l=f[d];l||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Pf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),l=f[d]);l.push(e)}}},off:Gc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,
d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);r(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;r(new R(c),function(c){a.insertBefore(c,
d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Jc,detach:function(a){Jc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:zb,removeClass:yb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;C(f)&&(f=!xb(a,c));(f?zb:yb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:H,type:g,target:a},c.type&&(e=G(e,
c)),c=qa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,k=this.length;h<k;h++)C(g)?(g=a(this[h],c,e,f),y(g)&&(g=D(g))):Fc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});cb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];
return c}};var Oc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,lf=/,/,mf=/^\s*(_?)(\S+?)\1\s*$/,Nc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=A("$injector");Ob.$$annotate=Wb;var Qf=A("$animate"),Ae=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};
this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function k(){m||
(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function l(a,c){if(ha.isObject(c)){var d=G(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){l(a,{from:c,to:d});return k()},enter:function(a,c,d,e){l(a,e);d?d.after(a):c.prepend(a);return k()},leave:function(a,c){a.remove();return k()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=D(a);c=z(c)?c:x(c)?c.join(" "):"";
r(a,function(a){zb(a,c)});l(a,d);return k()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=D(a);c=z(c)?c:x(c)?c.join(" "):"";r(a,function(a){yb(a,c)});l(a,d);return k()},setClass:function(a,c,d,e){var k=this,l=!1;a=D(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ha.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=x(c)?c:c.split(" ");d=x(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=
a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);l(a,e);return k()},enabled:H,cancel:H}}]}],ka=A("$compile");vc.$inject=["$provide","$$sanitizeUriProvider"];var qf=/^((?:x|data)[\:\-_])/i,Sc="application/json",Zb={"Content-Type":Sc+";charset=utf-8"},
tf=/^\s*(\[|\{[^\{])/,uf=/[\}\]]\s*$/,sf=/^\)\]\}',?\n/,$b=A("$interpolate"),Rf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Eb=A("$location"),Sf={$$html5:!1,$$replace:!1,absUrl:Fb("$$absUrl"),url:function(a){if(C(a))return this.$$url;var c=Rf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Fb("$$protocol"),host:Fb("$$host"),port:Fb("$$port"),path:ad("$$path",function(a){a=null!==a?
a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(z(a)||Y(a))a=a.toString(),this.$$search=qc(a);else if(O(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Eb("isrcharg");break;default:C(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:ad("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([$c,dc,cc],function(a){a.prototype=Object.create(Sf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Eb("nostate");this.$$state=C(c)?null:c;return this}});var la=A("$parse"),Tf=Function.prototype.call,Uf=Function.prototype.apply,Vf=Function.prototype.bind,Mb=ia();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;Mb[c]=a});Mb["this"]=
function(a){return a};Mb["this"].sharedGetter=!0;var jb=G(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,
c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Wf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=
[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=jb[c],f=jb[d];jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=
a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Wf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var eb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};eb.ZERO=G(function(){return 0},
{sharedGetter:!0,constant:!0});eb.prototype={constructor:eb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier?a=this.identifier():this.peek().constant?a=
this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,
e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=jb[a];return G(function(a,f){return d(a,
f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=jb[c];return G(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return Mb[a]||cd(a,this.options,this.text)},constant:function(){var a=this.consume().value;return G(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=
[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return G(function(f,h){var k=a(f,h);if(e){e[0]=
k;for(k=d.length;k--;)e[k+1]=d[k](f,h);return c.apply(u,e)}return c(k)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),G(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&
(c=this.assignment(),this.consume(":"))){var d=this.assignment();return G(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=",
"===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?
this.primary():(a=this.expect("-"))?this.binaryFn(eb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.text,d=this.consume().text,e=cd(d,this.options,c);return G(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return Na(h,d,g,c)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return G(function(e,f){var g=a(e,f),h=d(e,f);sa(h,c);return g?ta(g[h],
c):u},{assign:function(e,f,g){var h=sa(d(e,g),c);(g=ta(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var k=c?c(g,h):y(c)?u:g,l=a(g,h,k)||H;if(f)for(var m=d.length;m--;)f[m]=ta(d[m](g,h),e);ta(k,e);if(l){if(l.constructor===l)throw la("isecfn",e);if(l===Tf||l===Uf||l===Vf)throw la("isecff",e);}k=l.apply?l.apply(k,
f):l(f[0],f[1],f[2],f[3],f[4]);return ta(k,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return G(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):
this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return G(function(d,f){for(var g={},h=0,k=c.length;h<k;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Af=ia(),zf=ia(),Bf=Object.prototype.valueOf,Ca=A("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ka=A("$compile"),Z=X.createElement("a"),gd=Ba(U.location.href);Cc.$inject=["$provide"];hd.$inject=["$locale"];jd.$inject=
["$locale"];var md=".",Lf={yyyy:V("FullYear",4),yy:V("FullYear",2,0,!0),y:V("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:V("Month",2,1),M:V("Month",1,1),dd:V("Date",2),d:V("Date",1),HH:V("Hours",2),H:V("Hours",1),hh:V("Hours",2,-12),h:V("Hours",1,-12),mm:V("Minutes",2),m:V("Minutes",1),ss:V("Seconds",2),s:V("Seconds",1),sss:V("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=
a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:od(2),w:od(1)},Kf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Jf=/^\-?\d+$/;id.$inject=["$locale"];var Gf=ca(Q),Hf=ca(rb);kd.$inject=["$parse"];var Rd=ca({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ja.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),sb=
{};r(Bb,function(a,c){if("multiple"!=a){var d=wa("ng-"+c);sb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Mc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Nf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=wa("ng-"+a);sb[c]=function(){return{priority:99,
link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ja.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Pa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:H,$$renameControl:function(a,c){a.$name=c},$removeControl:H,$setValidity:H,$setDirty:H,$setPristine:H,$setSubmitted:H};pd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var wd=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:pd,compile:function(a){a.addClass(Qa).addClass(ib);return{pre:function(a,d,g,h){if(!("action"in g)){var k=function(c){a.$apply(function(){h.$commitViewValue();h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",k,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",k,!1)},0,!1)})}var l=h.$$parentForm,m=h.$name;m&&(Na(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(Na(a,m,u,m),m=c,Na(a,m,h,m),l.$$renameControl(h,
m))}));d.on("$destroy",function(){l.$removeControl(h);m&&Na(a,m,u,m);G(h,Ib)})}}}}}]},Sd=wd(),ee=wd(!0),Mf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Xf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Yf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Zf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,xd=/^(\d{4})-(\d{2})-(\d{2})$/,yd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
jc=/^(\d{4})-W(\d\d)$/,zd=/^(\d{4})-(\d\d)$/,Ad=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,$f=/(\s+|^)default(\s+|$)/,Lb=new A("ngModel"),Bd={text:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e)},date:hb("date",xd,Kb(xd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hb("datetimelocal",yd,Kb(yd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:hb("time",Ad,Kb(Ad,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:hb("week",jc,function(a,c){if(pa(a))return a;if(z(a)){jc.lastIndex=0;var d=
jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,k=0,l=nd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),k=c.getMilliseconds());return new Date(e,0,l.getDate()+f,d,g,h,k)}}return NaN},"yyyy-Www"),month:hb("month",zd,Kb(zd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){rd(a,c,d,e);gb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Zf.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw Lb("numfmt",
a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||C(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:u;e.$validate()})}if(d.max||d.ngMax){var k;e.$validators.max=function(a){return e.$isEmpty(a)||C(k)||a<=k};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));k=Y(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,
c){var d=a||c;return e.$isEmpty(d)||Xf.test(d)}},email:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},radio:function(a,c,d,e){C(d.name)&&c.attr("name",++kb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,k){var l=sd(k,a,"ngTrueValue",d.ngTrueValue,!0),
m=sd(k,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ga(a,l)});e.$parsers.push(function(a){return a?l:m})},hidden:H,button:H,submit:H,reset:H,file:H},wc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,k){k[0]&&(Bd[Q(h.type)]||Bd.text)(f,g,h,k[0],
c,a,d,e)}}}}],ib="ng-valid",td="ng-invalid",Qa="ng-pristine",Jb="ng-dirty",vd="ng-pending",ag=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,k,l,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=
!1;this.$error={};this.$$success={};this.$pending=u;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,t=p,s=q,N=null,n=this;this.$$setOptions=function(a){if((n.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);B(d)&&(d=c(a));return d};s=function(a,c){B(p(a))?g(a,{$$$p:n.$modelValue}):q(a,n.$modelValue)}}else if(!p.assign)throw Lb("nonassign",d.ngModel,va(e));};this.$render=H;this.$isEmpty=function(a){return C(a)||""===a||null===a||a!==
a};var v=e.inheritedData("$formController")||Ib,w=0;qd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Qa)};this.$setDirty=function(){n.$dirty=!0;n.$pristine=!1;g.removeClass(e,Qa);g.addClass(e,Jb);v.$setDirty()};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=
!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(N);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){if(!Y(n.$modelValue)||!isNaN(n.$modelValue)){var a=n.$$rawModelValue,c=n.$valid,d=n.$modelValue,e=n.$options&&n.$options.allowInvalid;n.$$runValidators(n.$error[n.$$parserName||"parse"]?!1:u,a,n.$$lastCommittedViewValue,function(f){e||c===f||(n.$modelValue=f?a:u,n.$modelValue!==d&&n.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d,e){function f(){var a=!0;r(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(r(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;r(n.$asyncValidators,function(f,g){var k=f(c,d);if(!k||!B(k.then))throw Lb("$asyncValidators",k);h(g,u);a.push(k.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?l.all(a).then(function(){k(e)},H):k(!0)}function h(a,c){m===w&&n.$setValidity(a,c)}function k(a){m===w&&e(a)}w++;var m=w;(function(a){var c=
n.$$parserName||"parse";if(a===u)h(c,null);else if(h(c,a),!a)return r(n.$validators,function(a,c){h(c,null)}),r(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():k(!1):k(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(N);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=a,n.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=n.$$lastCommittedViewValue,d=C(c)?u:!0;if(d)for(var e=
0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),C(c)){d=!1;break}Y(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=t(a));var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;n.$$rawModelValue=c;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,n.$$lastCommittedViewValue,function(a){g||(n.$modelValue=a?c:u,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,n.$modelValue);r(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(N);d?N=h(function(){n.$commitViewValue()},d):k.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==n.$modelValue){n.$modelValue=n.$$rawModelValue=c;for(var d=
n.$formatters,e=d.length,f=c;e--;)f=d[e](f);n.$viewValue!==f&&(n.$viewValue=n.$$lastCommittedViewValue=f,n.$render(),n.$$runValidators(u,c,f,H))}return c})}],te=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:ag,priority:1,compile:function(c){c.addClass(Qa).addClass("ng-untouched").addClass(ib);return{pre:function(a,c,f,g){var h=g[0],k=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);k.$addControl(h);f.$observe("name",function(a){h.$name!==a&&k.$$renameControl(h,
a)});a.$on("$destroy",function(){k.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],ve=ca({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},xc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){z(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw A("ngPattern")("noregexp",g,a,va(c));f=a||u;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||C(f)||f.test(a)}}}}},Ac=function(){return{restrict:"A",
require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=$(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=$(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},ue=function(){return{restrict:"A",priority:100,require:"ngModel",
link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?P(f):f;e.$parsers.push(function(a){if(!C(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?P(a):a)});return c}});e.$formatters.push(function(a){return x(a)?a.join(f):u});e.$isEmpty=function(a){return!a||!a.length}}}},bg=/^(true|false|\d+)$/,we=function(){return{restrict:"A",priority:100,compile:function(a,c){return bg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,
function(a){f.$set("value",a)})}}}},xe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=P(this.$options.updateOn.replace($f,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Xd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,
f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],Zd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],Yd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});
d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],$d=ic("",!0),be=ic("Odd",0),ae=ic("Even",1),ce=Ia({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),de=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Bc={},cg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=wa("ng-"+a);Bc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};cg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ge=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,l;c.$watch(e.ngIf,function(c){c?k||g(function(c,f){k=f;c[c.length++]=X.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=qb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],he=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ha.noop,compile:function(f,g){var h=g.ngInclude||g.src,k=g.onload||"",l=g.autoscroll;return function(f,g,q,r,s){var u=0,n,v,w,K=function(){v&&(v.remove(),v=null);n&&(n.$destroy(),
n=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(l)||l&&!f.$eval(l)||c()},q=++u;e?(a(e,!0).then(function(a){if(q===u){var c=f.$new();r.template=a;a=s(c,function(a){K();d.enter(a,null,g).then(h)});n=c;w=a;n.$emit("$includeContentLoaded",e);f.$eval(k)}},function(){q===u&&(K(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(K(),r.template=null)})}}}}],ye=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Ec(f.template,X).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ie=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),je=Ia({terminal:!0,priority:1E3}),ke=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function k(a){g.text(a||"")}var l=
h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(m)||{},t={},m=c.startSymbol(),s=c.endSymbol(),u=m+l+"-"+p+s,n=ha.noop,v;r(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){t[e]=c(a.replace(d,u))});f.$watch(l,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===v||d&&isNaN(v)||(n(),n=f.$watch(t[c],k),v=c)})}}}],le=["$parse","$animate",function(a,c){var d=A("ngRepeat"),e=function(a,c,d,e,l,m,p){a[d]=
e;l&&(a[l]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=X.createComment(" end ngRepeat: "+h+" "),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw d("iexp",h);var m=l[1],p=l[2],q=l[3],t=l[4],l=m.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
if(!l)throw d("iidexp",m);var s=l[3]||l[1],y=l[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var n,v,w,A,E={$id:Ma};t?n=a(t):(w=function(a,c){return Ma(c)},A=function(a){return a});return function(a,f,g,l,m){n&&(v=function(c,d,e){y&&(E[y]=c);E[s]=d;E.$index=e;return n(a,E)});var t=ia();a.$watchCollection(p,function(g){var l,n,p=f[0],F,E=ia(),C,H,G,T,B,x,z;q&&(a[q]=g);if(Ra(g))B=g,n=v||
w;else{n=v||A;B=[];for(z in g)g.hasOwnProperty(z)&&"$"!=z.charAt(0)&&B.push(z);B.sort()}C=B.length;z=Array(C);for(l=0;l<C;l++)if(H=g===B?l:B[l],G=g[H],T=n(H,G,l),t[T])x=t[T],delete t[T],E[T]=x,z[l]=x;else{if(E[T])throw r(z,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,T,G);z[l]={id:T,scope:u,clone:u};E[T]=!0}for(F in t){x=t[F];T=qb(x.clone);c.leave(T);if(T[0].parentNode)for(l=0,n=T.length;l<n;l++)T[l].$$NG_REMOVED=!0;x.scope.$destroy()}for(l=0;l<C;l++)if(H=g===B?l:B[l],G=g[H],x=z[l],x.scope){F=
p;do F=F.nextSibling;while(F&&F.$$NG_REMOVED);x.clone[0]!=F&&c.move(qb(x.clone),null,D(p));p=x.clone[x.clone.length-1];e(x.scope,l,s,G,y,H,C)}else m(function(a,d){x.scope=d;var f=k.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(p));p=f;x.clone=a;E[x.id]=x;e(x.scope,l,s,G,y,H,C)});t=E})}}}}],me=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],fe=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ne=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),oe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],l=[],m=function(a,c){return function(){a.splice(c,
1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=qb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=X.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],pe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),qe=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),se=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw A("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),Td=["$templateCache",function(a){return{restrict:"E",
terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],dg=A("ngOptions"),re=ca({restrict:"A",terminal:!0}),Ud=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:H};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,
c,d){var k=this,l={},m=e,p;k.databound=d.ngModel;k.init=function(a,c,d){m=a;p=d};k.addOption=function(c,d){La(c,'"option value"');l[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};k.removeOption=function(a){this.hasOption(a)&&(delete l[a],m.$viewValue===a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};k.hasOption=function(a){return l.hasOwnProperty(a)};
c.$on("$destroy",function(){k.renderUnknownOption=H})}],link:function(e,g,h,k){function l(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(E.parent()&&E.remove(),c.val(a),""===a&&n.prop("selected",!0)):C(a)&&n?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){E.parent()&&E.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new cb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ga(e,
d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){U[B]=d;G&&(U[G]=c);return a(e,U)}function k(a){var c;if(t)if(L&&x(a)){c=new cb([]);for(var d=0;d<a.length;d++)c.put(h(L,null,a[d]),!0)}else c=new cb(a);else L&&(a=h(L,null,a));return function(d,e){var f;f=L?L:C?C:z;return t?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(n),
v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function n(){v=!1;var a={"":[]},c=[""],d,l,p,s,u;p=g.$viewValue;s=O(e)||[];var C=G?Object.keys(s).sort():s,x,B,D,z,S={};u=k(p);var P=!1,V,X;Q={};for(z=0;D=C.length,z<D;z++){x=z;if(G&&(x=C[z],"$"===x.charAt(0)))continue;B=s[x];d=h(J,x,B)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=u(x,B);P=P||d;B=h(E,x,B);B=y(B)?B:"";X=L?L(e,U):G?C[z]:z;L&&(Q[X]=x);l.push({id:X,label:B,selected:d})}t||(A||null===p?a[""].unshift({id:"",label:"",selected:!P}):P||a[""].unshift({id:"?",
label:"",selected:!0}));x=0;for(C=c.length;x<C;x++){d=c[x];l=a[d];R.length<=x?(p={element:H.clone().attr("label",d),label:l.label},s=[p],R.push(s),f.append(p.element)):(s=R[x],p=s[0],p.label!=d&&p.element.attr("label",p.label=d));P=null;z=0;for(D=l.length;z<D;z++)d=l[z],(u=s[z+1])?(P=u.element,u.label!==d.label&&(m(S,u.label,!1),m(S,d.label,!0),P.text(u.label=d.label),P.prop("label",u.label)),u.id!==d.id&&P.val(u.id=d.id),P[0].selected!==d.selected&&(P.prop("selected",u.selected=d.selected),Pa&&P.prop("selected",
u.selected))):(""===d.id&&A?V=A:(V=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),s.push(u={element:V,label:d.label,id:d.id,selected:d.selected}),m(S,d.label,!0),P?P.after(V):p.element.append(V),P=V);for(z++;s.length>z;)d=s.pop(),m(S,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();for(z=1;z<l.length;++z)m(S,l[z].label,!1);l[0].element.remove()}r(S,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var p;if(!(p=s.match(d)))throw dg("iexp",
s,va(f));var E=c(p[2]||p[1]),B=p[4]||p[6],D=/ as /.test(p[0])&&p[1],C=D?c(D):null,G=p[5],J=c(p[3]||""),z=c(p[2]?p[1]:B),O=c(p[7]),L=p[8]?c(p[8]):null,Q={},R=[[{element:f,label:""}]],U={};A&&(a(A)(e),A.removeClass("ng-scope"),A.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=O(e)||[],c;if(t)c=[],r(f.val(),function(d){d=L?Q[d]:d;c.push("?"===d?u:""===d?null:h(C?C:z,d,a[d]))});else{var d=L?Q[f.val()]:f.val();c="?"===d?u:""===d?null:h(C?C:z,d,a[d])}g.$setViewValue(c);n()})});g.$render=
n;e.$watchCollection(O,l);e.$watchCollection(function(){var a=O(e),c;if(a&&x(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(E,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(E,d,a[d]));return c},l);t&&e.$watchCollection(function(){return g.$modelValue},l)}if(k[1]){var q=k[0];k=k[1];var t=h.multiple,s=h.ngOptions,A=!1,n,v=!1,w=D(X.createElement("option")),H=D(X.createElement("optgroup")),E=w.clone();h=0;for(var B=g.children(),G=B.length;h<G;h++)if(""===B[h].value){n=A=B.eq(h);
break}q.init(k,A,E);t&&(k.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,k):t?m(e,g,k):l(e,g,k,q)}}}}],Wd=["$interpolate",function(a){var c={addOption:H,removeOption:H};return{restrict:"E",priority:100,compile:function(d,e){if(C(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var l=d.parent(),m=l.data("$selectController")||l.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,
d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Vd=ca({restrict:"E",terminal:!1});U.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Ld(),Nd(ha),D(X).ready(function(){Hd(X,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,k,q){'use strict';k.module("ngAria",["ng"]).provider("$aria",function(){function a(a,e,b){return function(f,d,h){var l=h.$normalize(e);c[l]&&!h[l]&&f.$watch(h[a],function(a){b&&(a=!a);d.attr(e,a)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaMultiline:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0};this.config=function(a){c=k.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow",
"aria-hidden",!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",!1)}]).directive("ngModel",["$aria",function(a){function c(c,b,f){return a.config(b)&&!f.attr(c)}function g(a,b){var c=a.type,d=a.role;return"checkbox"===(c||d)||"menuitemcheckbox"===d?"checkbox":"radio"===(c||d)||"menuitemradio"===d?"radio":"range"===c||"progressbar"===d||"slider"===d?"range":"textbox"===(c||d)||"TEXTAREA"===b[0].nodeName?"multiline":""}return{restrict:"A",require:"?ngModel",
link:function(e,b,f,d){function h(){return d.$modelValue}function l(){return m?(m=!1,function(a){a=a===f.value;b.attr("aria-checked",a);b.attr("tabindex",0-!a)}):function(a){b.attr("aria-checked",a===f.value)}}function k(a){b.attr("aria-checked",!!a)}var n=g(f,b),m=c("tabindex","tabindex",b);switch(n){case "radio":case "checkbox":c("aria-checked","ariaChecked",b)&&e.$watch(h,"radio"===n?l():k);break;case "range":a.config("ariaValue")&&(f.min&&!b.attr("aria-valuemin")&&b.attr("aria-valuemin",f.min),
f.max&&!b.attr("aria-valuemax")&&b.attr("aria-valuemax",f.max),b.attr("aria-valuenow")||e.$watch(h,function(a){b.attr("aria-valuenow",a)}));break;case "multiline":c("aria-multiline","ariaMultiline",b)&&b.attr("aria-multiline",!0)}m&&b.attr("tabindex",0);d.$validators.required&&c("aria-required","ariaRequired",b)&&e.$watch(function(){return d.$error.required},function(a){b.attr("aria-required",!!a)});c("aria-invalid","ariaInvalid",b)&&e.$watch(function(){return d.$invalid},function(a){b.attr("aria-invalid",
!!a)})}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled")}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(a,c,g,e){c.attr("aria-live")||c.attr("aria-live","assertive")}}}).directive("ngClick",["$aria",function(a){return{restrict:"A",link:function(c,g,e){a.config("tabindex")&&!g.attr("tabindex")&&g.attr("tabindex",0);if(a.config("bindKeypress")&&!g.attr("ng-keypress"))g.on("keypress",function(a){32!==a.keyCode&&
13!==a.keyCode||c.$eval(e.ngClick)})}}}]).directive("ngDblclick",["$aria",function(a){return function(c,g,e){a.config("tabindex")&&!g.attr("tabindex")&&g.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,C,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?C.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){C.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,C){return function(g){return f(function(){g()})}}]).config(["$provide","$animateProvider",function(X,C){function g(f){for(var n=0;n<f.length;n++){var g=f[n];if(1==g.nodeType)return g}}
function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,da=C.$$selectors,aa=f.isArray,ea=f.isString,ga=f.isObject,r={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,H,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}function D(a){var c,b=N.defer();
b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function I(a){if(ga(a))return a.tempClasses&&ea(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],l=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===e?(b||"addClass"==c.event)&&
l.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+l.length&&[f.join(" "),l.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(da[""]));for(var d=0;d<a.length;d++){var f=a[d],k=da[f];k&&!b[f]&&(c.push(M.get(k)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,fn:b}),J.push({event:a,fn:c}),
!0}function k(c,l,w){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(l){(l[f]||t)();if(++m<E.length)break a;l=null}w()}};switch(c.event){case "setClass":l.push(c.fn(a,e,A,p,d));break;case "animate":l.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":l.push(c.fn(a,e||b,p,d));break;case "removeClass":l.push(c.fn(a,A||b,p,d));break;default:l.push(c.fn(a,p,d))}});l&&0===l.length&&w()}var l=a[0];if(l){d&&(d.to=d.to||{},d.from=d.from||{});var e,A;aa(b)&&(e=
b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var w="setClass"==c,E=w||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(x(p)){var ca=t,m=[],J=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&w&&(h(a,"addClass"),h(a,"removeClass"))});return{node:l,event:c,className:b,isClassBased:E,isSetClassOperation:w,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){ca=a;k(J,m,function(){ca=t;a()})},after:function(a){g=
a;k(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),ca(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function G(a,c,b,d,h,k,l,e){function A(e){var l="$animate:"+e;J&&J[l]&&0<J[l].length&&H(function(){b.triggerHandler(l,{event:a,className:c})})}function w(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,k())}function g(){if(!g.hasBeenRun){m&&m.applyStyles();g.hasBeenRun=!0;l&&l.tempClasses&&n(l.tempClasses,function(a){u.removeClass(b,
a)});var w=b.data("$$ngAnimateState");w&&(m&&m.isClassBased?B(b,c):(H(function(){var e=b.data("$$ngAnimateState")||{};fa==e.index&&B(b,c,a)}),b.data("$$ngAnimateState",w)));A("close");e()}}var m=U(b,a,c,l);if(!m)return p(),w(),E(),g(),t;a=m.event;c=m.className;var J=f.element._data(m.node),J=J&&J.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),w(),E(),g(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==q.event?
(s.push(q),B(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),B(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};B(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),w(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),B(a,"ng-leave"))});
u.addClass(b,"ng-animate");l&&l.tempClasses&&n(l.tempClasses,function(a){u.addClass(b,a)});var fa=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:fa,totalActive:s});w();m.before(function(e){var l=b.data("$$ngAnimateState");e=e||!l||!l.active[c]||m.isClassBased&&l.active[c].event!=a;p();!0===e?g():(E(),m.after(g))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),n(a,function(a){a=
f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function B(a,c){if(ba(a,y))r.disabled||(r.running=!1,r.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(r.disabled)return!0;if(ba(a,y))return r.running;var b,d,g;do{if(0===c.length)break;var k=ba(c,y),l=k?r:c.data("$$ngAnimateState")||
{};if(l.disabled)return!0;k&&(g=!0);!1!==b&&(k=c.data("$$ngAnimateChildren"),f.isDefined(k)&&(b=k));d=d||l.running||l.last&&!l.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",r);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){r.running=!1})}))}),K=0,V=C.classNameFilter(),x=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,c,b,d,h){d=d||"ng-inline-animate";
h=I(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return G("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=I(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return G("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=I(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return G("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,c,b,d){d=I(d);a=f.element(a);
c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return G("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=I(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,k=a.data("$$animateClasses"),l=!!k;k||(k={classes:{}});h=k.classes;c=aa(c)?c:c.split(" ");n(c,function(a){a&&a.length&&(h[a]=
!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(l)return d&&k.options&&(k.options=f.extend(k.options||{},d)),k.promise;a.data("$$animateClasses",k={classes:h,options:d});return k.promise=D(function(e){var l=a.parent(),b=g(a),c=b.parentNode;if(!c||c.$$NG_REMOVED||b.$$NG_REMOVED)e();else{b=a.data("$$animateClasses");a.removeData("$$animateClasses");var c=a.data("$$ngAnimateState")||{},d=S(a,b,c.active);return d?G("setClass",d,a,l,null,function(){d[0]&&O.$$addClassImmediately(a,
d[0]);d[1]&&O.$$removeClassImmediately(a,d[1])},b.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)B(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);C.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,C,M,Y){function y(){b||(b=Y(function(){c=[];b=null;x={}}))}function H(a,e){b&&b();c.push(e);b=Y(function(){n(c,
function(a){a()});c=[];b=null;x={}})}function P(a,e){var b=g(a);a=f.element(b);k.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(k);k=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?x[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);
0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(x[e]=b)}return b}function Q(a){var e=0;a=ea(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+"-"+g(e).getAttribute("class");var p=f+" "+c,h=x[p]?++x[p].total:
0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!x[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},k=Z(e,p);f=k.transitionDuration;k=k.animationDuration;if(b&&0===f&&0===k)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<k&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||[]});p=g(e);c&&(I(p,!0),d&&e.css(d));
b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,k);u.removeClass(e,t);z&&M.cancel(z);G(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-H,0)>=C&&b>=x&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&a){var k="",t="";n(b.split(" "),function(a,
b){var e=(0<b?" ":"")+a;k+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var y=0;0<v.animationDelay&&0===v.animationDuration&&(y=v.animationDelay*q,s.push(B+"animation-play-state"));r=Math.round(100*Math.max(r,y))/100}r||(u.addClass(e,k),a.blockTransition&&I(m,!1));var F=Z(e,a.cacheKey+" "+k),x=Math.max(F.transitionDuration,F.animationDuration);if(0===x)u.removeClass(e,k),G(e,b),c();else{!r&&
d&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),C=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var H=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+x)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&I(m,!1);0<F.animationDuration&&(m.style[K+"PlayState"]="");u.addClass(e,k);u.removeClass(e,t);d&&(0===
F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function I(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&G(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);G(b,c);d()}function U(a,b,c,d,f){var g=S(a,b,c,f.from);if(g){var h=g;H(b,function(){h=T(a,b,c,d,f.to)});
return function(a){(h||t)(a)}}y();d()}function G(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var B="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(B="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):(z="transition",$="transitionend");N.onanimationend===
W&&N.onwebkitanimationend!==W?(B="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var x={},a=0,c=[],b,d=null,h=0,k=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",b,c)},beforeSetClass:function(a,b,c,d,f){f=f||{};b=q(c,
"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return H(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return H(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return H(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",a,q(b,"-add"),c,d.to)},removeClass:function(a,
b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.map
/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.6.1
 */
angular.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.content","material.components.dialog","material.components.divider","material.components.icon","material.components.list","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.textField","material.components.toolbar","material.components.toast","material.components.tooltip","material.components.whiteframe"]),function(){"use strict";function e(){if("undefined"==typeof Hammer)throw new Error("ngMaterial requires HammerJS to be preloaded.")}function t(e){function t(e){return e.debounce=function(t){var n,r,i,o;return function(){n=arguments,o=this,i=t,r||(r=!0,e(function(){i.apply(o,n),r=!1}))}},e}e.decorator("$$rAF",["$delegate","$rootScope",t])}angular.module("material.core",[]).run(e).config(t),t.$inject=["$provide"]}(),function(){"use strict";function e(e,t){function n(e){return r?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var r=/webkit/i.test(t.vendorPrefix);return{KEY_CODE:{ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40},CSS:{TRANSITIONEND:"transitionend"+(r?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(r?" webkitAnimationEnd":""),TRANSFORM:n("transform"),TRANSITION:n("transition"),TRANSITION_DURATION:n("transitionDuration"),ANIMATION_PLAY_STATE:n("animationPlayState"),ANIMATION_DURATION:n("animationDuration"),ANIMATION_NAME:n("animationName"),ANIMATION_TIMING:n("animationTimingFunction"),ANIMATION_DIRECTION:n("animationDirection")},MEDIA:{sm:"(max-width: 600px)","gt-sm":"(min-width: 600px)",md:"(min-width: 600px) and (max-width: 960px)","gt-md":"(min-width: 960px)",lg:"(min-width: 960px) and (max-width: 1200px)","gt-lg":"(min-width: 1200px)"}}}angular.module("material.core").factory("$mdConstant",e),e.$inject=["$$rAF","$sniffer"]}(),function(){"use strict";var e=["0","0","0"];angular.module("material.core").factory("$mdUtil",["$cacheFactory",function(t){function n(e,t){function n(){return[].concat($)}function r(){return $.length}function i(e){return $.length&&e>-1&&e<$.length}function o(e){return e?i(d(e)+1):!1}function a(e){return e?i(d(e)-1):!1}function c(e){return i(e)?$[e]:null}function l(e,t){return $.filter(function(n){return n[e]===t})}function u(e,t){return e?(angular.isNumber(t)||(t=$.length),$.splice(t,0,e),d(e)):-1}function s(e){m(e)&&$.splice(d(e),1)}function d(e){return $.indexOf(e)}function m(e){return e&&d(e)>-1}function f(e,n){if(n=n||v,m(e)){var r=d(e)+1,o=i(r)?$[r]:t?h():null;return n(o)?o:f(o,n)}return null}function p(e,n){if(n=n||v,m(e)){var r=d(e)-1,o=i(r)?$[r]:t?g():null;return n(o)?o:p(o,n)}return null}function h(){return $.length?$[0]:null}function g(){return $.length?$[$.length-1]:null}var v=function(){return!0};t=!!t;var $=e||[];return{items:n,count:r,inRange:i,contains:m,indexOf:d,itemAt:c,findBy:l,add:u,remove:s,first:h,last:g,next:f,previous:p,hasPrevious:a,hasNext:o}}function r(e,n){var r=t(e,n),i={};return r._put=r.put,r.put=function(e,t){return i[e]=!0,r._put(e,t)},r._remove=r.remove,r.remove=function(e){return delete i[e],r._remove(e)},r.keys=function(){return Object.keys(i)},r}var i;return i={now:window.performance?angular.bind(window.performance,window.performance.now):Date.now,iterator:n,cacheFactory:r,debounce:function(e,t,n){var r;return function(){var i=this,o=arguments;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,o)},t),n&&!r&&e.apply(i,o)}},throttle:function(e,t){var n;return function(){var r=this,o=arguments,a=i.now();(!n||n-a>t)&&(e.apply(r,o),n=a)}},nextUid:function(){for(var t,n=e.length;n;){if(n--,t=e[n].charCodeAt(0),57==t)return e[n]="A",e.join("");if(90!=t)return e[n]=String.fromCharCode(t+1),e.join("");e[n]="0"}return e.unshift("0"),e.join("")},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}}}}]),angular.element.prototype.focus=angular.element.prototype.focus||function(){return this.length&&this[0].focus(),this},angular.element.prototype.blur=angular.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){"use strict";function e(e,t,n){function r(e,n,r){var i=e[0];i.hasAttribute(n)||a(i,n)||(r=angular.isString(r)&&r.trim()||"",r.length?e.attr(n,r):t.warn('ARIA: Attribute "',n,'", required for accessibility, is missing on node:',i))}function i(t,n,i){e(function(){r(t,n,i())})}function o(e,t){i(e,t,function(){return e.text().trim()})}function a(e,t){function r(e){var t=e.currentStyle?e.currentStyle:n.getComputedStyle(e);return"none"===t.display}var i=e.hasChildNodes(),o=!1;if(i)for(var a=e.childNodes,c=0;c<a.length;c++){var l=a[c];1===l.nodeType&&l.hasAttribute(t)&&(r(l)||(o=!0))}return o}return{expect:r,expectAsync:i,expectWithText:o}}angular.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window"]}(),function(){"use strict";function e(e,t,n,r,i,o){this.compile=function(a){var c=a.templateUrl,l=a.template||"",u=a.controller,s=a.controllerAs,d=a.resolve||{},m=a.locals||{},f=a.transformTemplate||angular.identity,p=a.bindToController;return angular.forEach(d,function(e,t){d[t]=angular.isString(e)?n.get(e):n.invoke(e)}),angular.extend(d,m),d.$template=c?t.get(c,{cache:o}).then(function(e){return e.data}):e.when(l),e.all(d).then(function(e){var t=f(e.$template),n=angular.element("<div>").html(t.trim()).contents(),o=r(n);return{locals:e,element:n,link:function(t){if(e.$scope=t,u){var r=i(u,e);p&&angular.extend(r,e),n.data("$ngControllerController",r),n.children().data("$ngControllerController",r),s&&(t[s]=r)}return o(t)}}})}}angular.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),function(){"use strict";function e(){function e(e){function t(e){return o.optionsFactory=e.options,o.methods=(e.methods||[]).concat(i),a}function n(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return o.presets[t]={methods:n.methods.concat(i),optionsFactory:n.options,argOption:n.argOption},a}function r(t,n,r){function i(e){return e&&e._options&&(e=e._options),u.show(angular.extend({},l,e))}function a(t,n){var i={};return i[e]=s,r.invoke(t||function(){return n},{},i)}var c,l,u=t(),s={hide:u.hide,cancel:u.cancel,show:i};return c=o.methods||[],l=a(o.optionsFactory,{}),angular.forEach(o.presets,function(e,t){function n(e){this._options=angular.extend({},r,e)}var r=a(e.optionsFactory,{}),i=(e.methods||[]).concat(c);angular.extend(r,{$type:t}),angular.forEach(i,function(e){n.prototype[e]=function(t){return this._options[e]=t,this}}),s[t]=function(t){return arguments.length&&e.argOption&&!angular.isObject(t)&&!angular.isArray(t)?(new n)[e.argOption](t):new n(t)}}),s}var i=["onHide","onShow","onRemove"],o={presets:{}},a={setDefaults:t,addPreset:n,$get:r};return a.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),r.$inject=["$$interimElement","$animate","$injector"],a}function t(e,t,n,r,i,o,a,c){return function(){function l(e){f.length&&m.cancel();var t=new d(e);return f.push(t),t.show().then(function(){return t.deferred.promise})}function u(e){var n=f.shift();return n&&n.remove().then(function(){n.deferred.resolve(e)}),n?n.deferred.promise:t.when(e)}function s(e){var n=f.shift();return n&&n.remove().then(function(){n.deferred.reject(e)}),n?n.deferred.promise:t.reject(e)}function d(l){var u,s,d;return l=l||{},l=angular.extend({scope:l.scope||n.$new(l.isolateScope),onShow:function(e,t,n){return o.enter(t,n.parent)},onRemove:function(e,n){return n&&o.leave(n)||t.when()}},l),u={options:l,deferred:t.defer(),show:function(){return a.compile(l).then(function(n){function o(){l.hideDelay&&(s=r(m.cancel,l.hideDelay))}angular.extend(n.locals,u.options),angular.isString(l.parent)?l.parent=angular.element(e[0].querySelector(l.parent)):l.parent||(l.parent=i.find("body"),l.parent.length||(l.parent=i)),d=n.link(l.scope),l.themable&&c(d);var a=l.onShow(l.scope,d,l);return t.when(a).then(function(){(l.onComplete||angular.noop)(l.scope,d,l),o()})})},cancelTimeout:function(){s&&(r.cancel(s),s=void 0)},remove:function(){u.cancelTimeout();var e=l.onRemove(l.scope,d,l);return t.when(e).then(function(){l.scope.$destroy()})}}}var m,f=[];return m={show:l,hide:u,cancel:s}}}return e.$get=t,t.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$mdCompiler","$mdTheming"],e}angular.module("material.core").provider("$$interimElement",e)}(),function(){"use strict";function e(e){return{controller:angular.noop,link:function(t,n,r){r.hasOwnProperty("mdInkRippleCheckbox")?e.attachCheckboxBehavior(t,n):e.attachButtonBehavior(t,n)}}}function t(e,t){function n(e,t,n){return o(e,t,angular.extend({isFAB:t.hasClass("md-fab"),isMenuItem:t.hasClass("md-menu-item"),center:!1,dimBackground:!0},n))}function r(e,t,n){return o(e,t,angular.extend({center:!0,dimBackground:!1},n))}function i(e,t,n){return o(e,t,angular.extend({center:!1,dimBackground:!0,outline:!0},n))}function o(n,r,i){function o(e){function t(e){var t="#"===e.charAt(0)?e.substr(1):e,n=t.length/3,r=t.substr(0,n),i=t.substr(n,n),o=t.substr(2*n);return 1===n&&(r+=r,i+=i,o+=o),"rgba("+parseInt(r,16)+","+parseInt(i,16)+","+parseInt(o,16)+",0.1)"}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}if(e)return 0===e.indexOf("rgba")?e:0===e.indexOf("rgb")?n(e):0===e.indexOf("#")?t(e):void 0}function a(e,n){p.splice(p.indexOf(e),1),0===p.length&&s&&s.css({backgroundColor:""}),t(function(){e.remove()},n,!1)}function c(e){var t=p.indexOf(e),n=h[t]||{},r=p.length>1?!1:v,o=p.length>1?!1:$;r||n.animating||o?e.addClass("md-ripple-visible"):e&&(e.removeClass("md-ripple-visible"),i.outline&&e.css({width:d+"px",height:d+"px",marginLeft:-1*d+"px",marginTop:-1*d+"px"}),a(e,i.outline?450:650))}function l(n,a){function l(e){var t=angular.element('<div class="md-ripple" data-counter="'+f++ +'">');return p.unshift(t),h.unshift({animating:!0}),v.append(t),e&&t.css(e),t}function u(e,t){var n,r,o,a=v.prop("offsetWidth"),c=v.prop("offsetHeight");return i.isMenuItem?r=Math.sqrt(Math.pow(a,2)+Math.pow(c,2)):i.outline?(o=b.getBoundingClientRect(),e-=o.left,t-=o.top,a=Math.max(e,a-e),c=Math.max(t,c-t),r=2*Math.sqrt(Math.pow(a,2)+Math.pow(c,2))):(n=i.isFAB?1.1:.8,r=Math.max(a,c)*n),r}function m(e,t,n){function r(e){return e.replace("rgba","rgb").replace(/,[^\)\,]+\)/,")")}var o,a={backgroundColor:r(S),borderColor:r(S),width:e+"px",height:e+"px"};return i.outline?(a.width=0,a.height=0):a.marginLeft=a.marginTop=e*-.5+"px",i.center?a.left=a.top="50%":(o=b.getBoundingClientRect(),a.left=Math.round((t-o.left)/v.prop("offsetWidth")*100)+"%",a.top=Math.round((n-o.top)/v.prop("offsetHeight")*100)+"%"),a}function g(){if(s)return s;var e=s=angular.element('<div class="md-ripple-container">');return r.append(e),e}S=o(r.attr("md-ink-ripple"))||o(e.getComputedStyle(i.colorElement[0]).color||"rgb(0, 0, 0)");var v=g(),$=u(n,a),C=m($,n,a),T=l(C),k=p.indexOf(T),w=h[k]||{};return d=$,w.animating=!0,t(function(){i.dimBackground&&v.css({backgroundColor:S}),T.addClass("md-ripple-placed md-ripple-scaled"),i.outline?T.css({borderWidth:.5*$+"px",marginLeft:$*-.5+"px",marginTop:$*-.5+"px"}):T.css({left:"50%",top:"50%"}),c(T),t(function(){w.animating=!1,c(T)},i.outline?450:225,!1)},0,!1),T}function u(e){function n(){var e=b.parentNode;return!(b.hasAttribute("disabled")||e&&e.hasAttribute("disabled"))}var r,i;e.eventType===Hammer.INPUT_START&&e.isFirst&&n()?(r=l(e.center.x,e.center.y),$=!0):e.eventType===Hammer.INPUT_END&&e.isFinal&&($=!1,i=p.length-1,r=p[i],t(function(){c(r)},0,!1))}if(r.controller("mdNoInk"))return angular.noop;i=angular.extend({colorElement:r,mousedown:!0,hover:!0,focus:!0,center:!1,mousedownPauseTime:150,dimBackground:!1,outline:!1,isFAB:!1,isMenuItem:!1},i);var s,d,m=r.controller("mdInkRipple")||{},f=0,p=[],h=[],g=r.attr("md-highlight"),v=!1,$=!1,b=r[0],C=new Hammer(b),S=o(r.attr("md-ink-ripple"))||o(e.getComputedStyle(i.colorElement[0]).color||"rgb(0, 0, 0)");return i.mousedown&&C.on("hammer.input",u),m.createRipple=l,g&&n.$watch(g,function(e){v=e,v&&!p.length&&t(function(){l(0,0)},0,!1),angular.forEach(p,c)}),function(){C.destroy(),s&&s.remove()}}return{attachButtonBehavior:n,attachCheckboxBehavior:r,attachTabBehavior:i,attach:o}}function n(){return function(){return{controller:angular.noop}}}angular.module("material.core").factory("$mdInkRipple",t).directive("mdInkRipple",e).directive("mdNoInk",n()).directive("mdNoBar",n()).directive("mdNoStretch",n()),e.$inject=["$mdInkRipple"],t.$inject=["$window","$timeout"]}(),function(){"use strict";function e(){function e(e){function r(t,n){void 0===n&&(n=t,t=void 0),void 0===t&&(t=e),r.inherit(n,n)}return r.inherit=function(r,i){function o(e){var t=r.data("$mdThemeName");t&&r.removeClass("md-"+t+"-theme"),r.addClass("md-"+e+"-theme"),r.data("$mdThemeName",e)}var a=i.controller("mdTheme"),c=r.attr("md-theme-watch");if((n||angular.isDefined(c))&&"false"!=c){var l=e.$watch(function(){return a&&a.$mdTheme||t},o);r.on("$destroy",l)}else{var u=a&&a.$mdTheme||t;o(u)}},r}var t="default",n=!1;return{setDefaultTheme:function(e){t=e},alwaysWatchTheme:function(e){n=e},$get:["$rootScope",e]}}function t(e){return{priority:100,link:{pre:function(t,n,r){var i={$setTheme:function(e){i.$mdTheme=e}};n.data("$mdThemeController",i),i.$setTheme(e(r.mdTheme)(t)),r.$observe("mdTheme",i.$setTheme)}}}}function n(e){return e}angular.module("material.core").directive("mdTheme",t).directive("mdThemable",n).provider("$mdTheming",e),t.$inject=["$interpolate"],n.$inject=["$mdTheming"]}(),function(){"use strict";function e(e){return e}angular.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",e),e.$inject=["$mdTheming"]}(),function(){"use strict";function e(){return{restrict:"E"}}function t(e){function t(e,t,n,r,i,o,a,c){function l(r,l,u){d=i('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(r),d.on("click touchstart",function(){n(a.cancel)}),o.inherit(d,u.parent),e.enter(d,u.parent,null);var m=new s(l);return u.bottomSheet=m,u.targetEvent&&angular.element(u.targetEvent.target).blur(),o.inherit(m.element,u.parent),e.enter(m.element,u.parent).then(function(){var e=angular.element(l[0].querySelector("button")||l[0].querySelector("a")||l[0].querySelector("[ng-click]"));e.focus(),u.escapeToClose&&(u.rootElementKeyupCallback=function(e){e.keyCode===t.KEY_CODE.ESCAPE&&n(a.cancel)},c.on("keyup",u.rootElementKeyupCallback))})}function u(t,n,r){var i=r.bottomSheet;return e.leave(d),e.leave(i.element).then(function(){i.cleanup(),r.targetEvent&&angular.element(r.targetEvent.target).focus()})}function s(e){function r(n){n.preventDefault(),p=n.target,s=c(n),f=e.css(t.CSS.TRANSITION_DURATION),e.css(t.CSS.TRANSITION_DURATION,"0s")}function i(r){e.css(t.CSS.TRANSITION_DURATION,f);var i=c(r);Math.abs(i-s)<5&&r.target==p?angular.element(r.target).triggerHandler("click"):m>v?n(a.cancel):l(void 0)}function o(e){var t=c(e),n=t-s;m=t-d,d=t,n=u(n),l(n+h)}function c(e){var t=e.touches&&e.touches.length?e.touches[0]:e.changedTouches[0];return t.clientY}function l(n){null===n||void 0===n?e.css(t.CSS.TRANSFORM,""):e.css(t.CSS.TRANSFORM,"translate3d(0, "+n+"px, 0)")}function u(e){if(0>e&&-h+g>e){e=-e;var t=h-g;e=Math.max(-h,-Math.min(h-5,t+g*(e-t)/h)-e/50)}return e}var s,d,m,f,p,h=80,g=20,v=10;return e=e.eq(0),e.on("touchstart",r).on("touchmove",o).on("touchend",i),{element:e,cleanup:function(){e.off("touchstart",r).off("touchmove",o).off("touchend",i)}}}var d;return{themable:!0,targetEvent:null,onShow:l,onRemove:u,escapeToClose:!0}}return t.$inject=["$animate","$mdConstant","$timeout","$$rAF","$compile","$mdTheming","$mdBottomSheet","$rootElement"],e("$mdBottomSheet").setDefaults({options:t})}angular.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",t),t.$inject=["$$interimElementProvider"]}(),function(){"use strict";function e(e,t,n){function r(e){return angular.isDefined(e.href)||angular.isDefined(e.ngHref)}function i(e,t){return r(t)?'<a class="md-button" ng-transclude></a>':'<button class="md-button" ng-transclude></button>'}function o(i,o,a){var c=o[0];t(o),e.attachButtonBehavior(i,o);var l=c.textContent.trim();l||n.expect(o,"aria-label"),r(a)&&i.$watch(a.ngDisabled,function(e){o.attr("tabindex",e?-1:0)})}return{restrict:"E",replace:!0,transclude:!0,template:i,link:o}}angular.module("material.components.button",["material.core"]).directive("mdButton",e),e.$inject=["$mdInkRipple","$mdTheming","$mdAria"]}(),function(){"use strict";function e(e){return{restrict:"E",link:function(t,n){e(n)}}}angular.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"]}(),function(){"use strict";function e(e,t,n,r,i){function o(t,o){return o.type="checkbox",o.tabIndex=0,t.attr("role",o.type),function(o,c,l,u){function s(e){e.which===r.KEY_CODE.SPACE&&(e.preventDefault(),d(e))}function d(e){c[0].hasAttribute("disabled")||o.$apply(function(){f=!f,u.$setViewValue(f,e&&e.type),u.$render()})}function m(){f=u.$viewValue,f?c.addClass(a):c.removeClass(a)}var f=!1;i(c),u=u||{$setViewValue:function(e){this.$viewValue=e},$parsers:[],$formatters:[]},n.expectWithText(t,"aria-label"),e.link.pre(o,{on:angular.noop,0:{}},l,[u]),c.on("click",d),c.on("keypress",s),u.$render=m}}e=e[0];var a="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:o}}angular.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdInkRipple","$mdAria","$mdConstant","$mdTheming"]}(),function(){"use strict";function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,n){e(n),t.$broadcast("$mdContentLoaded",n)}}}angular.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),function(){"use strict";function e(e,t){return{restrict:"E",link:function(n,r){t(r),e(function(){var e=r[0].querySelector("md-content");e&&e.scrollHeight>e.clientHeight&&r.addClass("md-content-overflow")})}}}function t(e){function t(e){return{template:['<md-dialog aria-label="{{dialog.label}}">',"<md-content>","<h2>{{ dialog.title }}</h2>","<p>{{ dialog.content }}</p>","</md-content>",'<div class="md-actions">','<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()">',"{{ dialog.cancel }}","</md-button>",'<md-button ng-click="dialog.hide()" class="md-primary">',"{{ dialog.ok }}","</md-button>","</div>","</md-dialog>"].join(""),controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0}}function n(e,t,n,r,i,o,a,c,l,u,s,d){function m(n,i,o){function a(){var e=i[0].querySelector(".dialog-close");if(!e){var t=i[0].querySelectorAll(".md-actions button");e=t[t.length-1]}return angular.element(e)}o.parent=angular.element(o.parent),o.popInTarget=angular.element((o.targetEvent||{}).target);var u=a();return p(i.find("md-dialog")),o.hasBackdrop&&(o.backdrop=angular.element('<md-backdrop class="md-dialog-backdrop md-opaque">'),l.inherit(o.backdrop,o.parent),r.enter(o.backdrop,o.parent)),h(i,o.parent,o.popInTarget.length&&o.popInTarget).then(function(){o.escapeToClose&&(o.rootElementKeyupCallback=function(t){t.keyCode===c.KEY_CODE.ESCAPE&&e(d.cancel)},t.on("keyup",o.rootElementKeyupCallback)),o.clickOutsideToClose&&(o.dialogClickOutsideCallback=function(t){t.target===i[0]&&e(d.cancel)},i.on("click",o.dialogClickOutsideCallback)),u.focus()})}function f(e,n,i){return i.backdrop&&r.leave(i.backdrop),i.escapeToClose&&t.off("keyup",i.rootElementKeyupCallback),i.clickOutsideToClose&&n.off("click",i.dialogClickOutsideCallback),g(n,i.parent,i.popInTarget.length&&i.popInTarget).then(function(){i.scope.$destroy(),n.remove(),i.popInTarget&&i.popInTarget.focus()})}function p(e){e.attr({role:"dialog"});var t=e.find("md-content");0===t.length&&(t=e),i.expectAsync(e,"aria-label",function(){var e=t.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")})}function h(e,t,n){var r=e.find("md-dialog");return t.append(e),v(r,n),u(function(){r.addClass("transition-in").css(c.CSS.TRANSFORM,"")}),$(r)}function g(e,t,n){var r=e.find("md-dialog");return r.addClass("transition-out").removeClass("transition-in"),v(r,n),$(r)}function v(e,t){if(t){var n=t[0].getBoundingClientRect(),r=e[0].getBoundingClientRect(),i=Math.min(.5,n.width/r.width),o=Math.min(.5,n.height/r.height);e.css(c.CSS.TRANSFORM,"translate3d("+(-r.left+n.left+n.width/2-r.width/2)+"px,"+(-r.top+n.top+n.height/2-r.height/2)+"px,0) scale("+i+","+o+")")}}function $(e){function t(r){r.target===e[0]&&(e.off(c.CSS.TRANSITIONEND,t),n.resolve())}var n=s.defer();return e.on(c.CSS.TRANSITIONEND,t),n.promise}return{hasBackdrop:!0,isolateScope:!0,onShow:m,onRemove:f,clickOutsideToClose:!0,escapeToClose:!0,targetEvent:null,transformTemplate:function(e){return'<div class="md-dialog-container">'+e+"</div>"}}}return t.$inject=["$mdDialog"],n.$inject=["$timeout","$rootElement","$compile","$animate","$mdAria","$document","$mdUtil","$mdConstant","$mdTheming","$$rAF","$q","$mdDialog"],e("$mdDialog").setDefaults({methods:["hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent"],options:n}).addPreset("alert",{methods:["title","content","ariaLabel","ok"],options:t}).addPreset("confirm",{methods:["title","content","ariaLabel","ok","cancel"],options:t})}angular.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",t),e.$inject=["$$rAF","$mdTheming"],t.$inject=["$$interimElementProvider"]}(),function(){"use strict";function e(){}function t(t){return{restrict:"E",link:t,controller:[e]}}angular.module("material.components.divider",["material.core"]).directive("mdDivider",t),t.$inject=["$mdTheming"]}(),function(){"use strict";function e(){return{restrict:"E",template:'<object class="md-icon"></object>',compile:function(e,t){var n=angular.element(e[0].children[0]);angular.isDefined(t.icon)&&n.attr("data",t.icon)}}}angular.module("material.components.icon",["material.core"]).directive("mdIcon",e)}(),function(){"use strict";function e(){return{restrict:"E",link:function(e,t){t.attr({role:"list"})}}}function t(){return{restrict:"E",link:function(e,t){t.attr({role:"listitem"})}}}angular.module("material.components.list",["material.core"]).directive("mdList",e).directive("mdItem",t)}(),function(){"use strict";function e(e,t,n){function r(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),i}function i(e,r,i){n(r);var l,u,s,d,m=r[0],f=m.querySelectorAll(".md-fill, .md-mask.md-full"),p=m.querySelectorAll(".md-fill.md-fix"),h=i.mdDiameter||48,g=h/48;m.style[t.CSS.TRANSFORM]="scale("+g.toString()+")",i.$observe("value",function(e){for(u=o(e),s=a[u],d=c[u],r.attr("aria-valuenow",u),l=0;l<f.length;l++)f[l].style[t.CSS.TRANSFORM]=s;for(l=0;l<p.length;l++)p[l].style[t.CSS.TRANSFORM]=d})}function o(e){return e>100?100:0>e?0:Math.ceil(e||0)}for(var a=new Array(101),c=new Array(101),l=0;101>l;l++){var u=l/100,s=Math.floor(180*u);a[l]="rotate("+s.toString()+"deg)",c[l]="rotate("+(2*s).toString()+"deg)"}return{restrict:"E",template:'<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',compile:r}}angular.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"]}(),function(){"use strict";function e(e,n,r){function i(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),o}function o(i,o,c){r(o);var l=o[0].querySelector(".md-bar1").style,u=o[0].querySelector(".md-bar2").style,s=angular.element(o[0].querySelector(".md-container"));c.$observe("value",function(e){if("query"!=c.mdMode){var r=a(e);o.attr("aria-valuenow",r),u[n.CSS.TRANSFORM]=t[r]}}),c.$observe("mdBufferValue",function(e){l[n.CSS.TRANSFORM]=t[a(e)]}),e(function(){s.addClass("md-ready")})}function a(e){return e>100?100:0>e?0:Math.ceil(e||0)}return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i}}angular.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$$rAF","$mdConstant","$mdTheming"];var t=function(){function e(e){var t=e/100,n=(e-100)/2;return"translateX("+n.toString()+"%) scale("+t.toString()+", 1)"}for(var t=new Array(101),n=0;101>n;n++)t[n]=e(n);return t}()}(),function(){"use strict";function e(e,t,n){function r(e,r,i,o){function a(e){e.keyCode===t.KEY_CODE.LEFT_ARROW||e.keyCode===t.KEY_CODE.UP_ARROW?(e.preventDefault(),c.selectPrevious()):(e.keyCode===t.KEY_CODE.RIGHT_ARROW||e.keyCode===t.KEY_CODE.DOWN_ARROW)&&(e.preventDefault(),c.selectNext())}n(r);var c=o[0],l=o[1]||{$setViewValue:angular.noop};c.init(l),r.attr({role:"radiogroup",tabIndex:r.attr("tabindex")||"0"}).on("keydown",a)}function i(e){this._radioButtonRenderFns=[],this.$element=e}function o(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=angular.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return a(this.$element,1)},selectPrevious:function(){return a(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function a(t,n){var r=e.iterator(Array.prototype.slice.call(t[0].querySelectorAll("md-radio-button")),!0);if(r.count()){var i=t[0].querySelector("md-radio-button.md-checked"),o=r[0>n?"previous":"next"](i)||r.first();angular.element(o).triggerHandler("click")}}return i.prototype=o(),{restrict:"E",controller:["$element",i],require:["mdRadioGroup","?ngModel"],link:r}}function t(e,t,n){function r(r,o,a,c){function l(e){o[0].hasAttribute("disabled")||r.$apply(function(){c.setViewValue(a.value,e&&e.type)})}function u(){var e=c.getViewValue()===a.value;e!==d&&(d=e,o.attr("aria-checked",e),e?(o.addClass(i),c.setActiveDescendant(o.attr("id"))):o.removeClass(i))}function s(n,r){function i(){return a.id||"radio_"+t.nextUid()}r.ariaId=i(),n.attr({id:r.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var d;n(o),s(o,r),c.add(u),a.$observe("value",u),o.on("click",l).on("$destroy",function(){c.remove(u)})}var i="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:r}}angular.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",t),e.$inject=["$mdUtil","$mdConstant","$mdTheming"],t.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),function(){"use strict";function e(e,t,n,r,i,o){var a=this;a.destroy=o.register(a,n.mdComponentId),a.isOpen=function(){return!!e.isOpen},a.toggle=function(){e.isOpen=!e.isOpen},a.open=function(){e.isOpen=!0},a.close=function(){e.isOpen=!1}}function t(e){return function(t){var n=e.get(t);return n||e.notFoundError(t),{isOpen:function(){return n&&n.isOpen()},toggle:function(){n&&n.toggle()},open:function(){n&&n.open()},close:function(){n&&n.close()}}}}function n(e,t,n,r,i,o,a){function c(c,l,u,s){function d(e){var n=l.parent();n[e?"on":"off"]("keydown",m),t[e?"enter":"leave"](h,n),h[e?"on":"off"]("click",f),t[e?"removeClass":"addClass"](l,"md-closed").then(function(){c.isOpen&&l.focus()})}function m(e){e.keyCode===i.KEY_CODE.ESCAPE&&(f(),e.preventDefault(),e.stopPropagation())}function f(){e(function(){s.close()})}var p=n(u.mdIsLockedOpen),h=o('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(c);a.inherit(h,l),l.on("$destroy",s.destroy),c.$watch("isOpen",d),c.$watch(function(){return p(c.$parent,{$media:r})},function(e){l.toggleClass("md-locked-open",!!e),h.toggleClass("md-locked-open",!!e)})}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),c}}}function r(e,t,n,r){function i(e){e=o(e);var t;return angular.isDefined(t=l.get(e))?t:a(e)}function o(e){return r.MEDIA[e]||("("!=e.charAt(0)?"("+e+")":e)}function a(t){return l.put(t,!!e.matchMedia(t).matches)}function c(){var t=l.keys();if(t.length){for(var r=0,i=t.length;i>r;r++)l.put(t[r],!!e.matchMedia(t[r]).matches);n(angular.noop)}}var l=t.cacheFactory("$mdMedia",{capacity:15});return angular.element(e).on("resize",c),i}function i(e){var t=[];return{notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return t},get:function(e){var n,r,i;for(n=0,r=t.length;r>n;n++)if(i=t[n],i.$$mdHandle===e)return i;return null},register:function(e,n){return e.$$mdHandle=n,t.push(e),function(){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}}angular.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",t).directive("mdSidenav",n).controller("$mdSidenavController",e).factory("$mdMedia",r).factory("$mdComponentRegistry",i),e.$inject=["$scope","$element","$attrs","$timeout","$mdSidenav","$mdComponentRegistry"],t.$inject=["$mdComponentRegistry"],n.$inject=["$timeout","$animate","$parse","$mdMedia","$mdConstant","$compile","$mdTheming"],r.$inject=["$window","$mdUtil","$timeout","$mdConstant"],i.$inject=["$log"]}(),function(){"use strict";function e(e){function n(t,n,r,i){e(n);var o=i[0]||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]},a=i[1];a.init(o)}return{scope:{},require:["?ngModel","mdSlider"],controller:t,template:'<div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div>',link:n}}function t(e,t,n,r,i,o,a,c){this.init=function(l){function u(){h(),b(),p()}function s(e){V=parseFloat(e),t.attr("aria-valuemin",e),u()
}function d(e){U=parseFloat(e),t.attr("aria-valuemax",e),u()}function m(e){L=parseFloat(e),p()}function f(e){t.attr("aria-disabled",!!e)}function p(){if(angular.isDefined(n.mdDiscrete)){var e=Math.floor((U-V)/L);W||(W=angular.element('<canvas style="position:absolute;">'),K=W[0].getContext("2d"),K.fillStyle="black",j.append(W));var t=g();W[0].width=t.width,W[0].height=t.height;for(var r,i=0;e>=i;i++)r=Math.floor(t.width*(i/e)),K.fillRect(r-1,0,2,t.height)}}function h(){Y=F[0].getBoundingClientRect()}function g(){return P(),Y}function v(n){if(!t[0].hasAttribute("disabled")){var r;n.keyCode===c.KEY_CODE.LEFT_ARROW?r=-L:n.keyCode===c.KEY_CODE.RIGHT_ARROW&&(r=L),r&&((n.metaKey||n.ctrlKey||n.altKey)&&(r*=4),n.preventDefault(),n.stopPropagation(),e.$evalAsync(function(){$(l.$viewValue+r)}))}}function $(e){l.$setViewValue(C(S(e)))}function b(){isNaN(l.$viewValue)&&(l.$viewValue=l.$modelValue);var n=(l.$viewValue-V)/(U-V);e.modelValue=l.$viewValue,t.attr("aria-valuenow",l.$viewValue),T(n),D.text(l.$viewValue)}function C(e){return angular.isNumber(e)?Math.max(V,Math.min(U,e)):void 0}function S(e){return angular.isNumber(e)?Math.round(e/L)*L:void 0}function T(e){_.css("width",100*e+"%"),M.css(c.CSS.TRANSFORM,"translate3d("+g().width*e+"px,0,0)"),t.toggleClass("md-min",0===e)}function k(e){z||e.eventType!==Hammer.INPUT_START||t[0].hasAttribute("disabled")?z&&e.eventType===Hammer.INPUT_END&&(z&&G&&x(e),z=!1,t.removeClass("panning active")):(z=!0,t.addClass("active"),t[0].focus(),h(),y(e),e.srcEvent.stopPropagation())}function w(){z&&t.addClass("panning")}function y(e){z&&(G?E(e.center.x):A(e.center.x),e.preventDefault(),e.srcEvent.stopPropagation())}function x(e){if(G&&!t[0].hasAttribute("disabled")){var n=O(R(e.center.x)),i=C(S(n));T(I(i)),r(function(){$(i)}),e.preventDefault(),e.srcEvent.stopPropagation()}}function A(t){e.$evalAsync(function(){$(O(R(t)))})}function E(e){var t=O(R(e)),n=C(S(t));T(R(e)),D.text(n)}function R(e){return Math.max(0,Math.min(1,(e-Y.left)/Y.width))}function O(e){return V+e*(U-V)}function I(e){return(e-V)/(U-V)}var N=angular.element(t[0].querySelector(".md-thumb")),D=angular.element(t[0].querySelector(".md-thumb-text")),M=N.parent(),F=angular.element(t[0].querySelector(".md-track-container")),_=angular.element(t[0].querySelector(".md-track-fill")),j=angular.element(t[0].querySelector(".md-track-ticks")),P=a.throttle(h,5e3);n.min?n.$observe("min",s):s(0),n.max?n.$observe("max",d):d(100),n.step?n.$observe("step",m):m(1);var B=angular.noop;n.ngDisabled&&(B=e.$parent.$watch(n.ngDisabled,f)),o.expect(t,"aria-label"),t.attr("tabIndex",0),t.attr("role","slider"),t.on("keydown",v);var H=new Hammer(t[0],{recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]});H.on("hammer.input",k),H.on("panstart",w),H.on("pan",y),H.on("panend",x),setTimeout(u);var q=r.debounce(u);angular.element(i).on("resize",q),e.$on("$destroy",function(){angular.element(i).off("resize",q),H.destroy(),B()}),l.$render=b,l.$viewChangeListeners.push(b),l.$formatters.push(C),l.$formatters.push(S);var V,U,L,W,K,Y={};h();var z=!1,G=angular.isDefined(n.mdDiscrete);this._onInput=k,this._onPanStart=w,this._onPan=y}}angular.module("material.components.slider",["material.core"]).directive("mdSlider",e),e.$inject=["$mdTheming"],t.$inject=["$scope","$element","$attrs","$$rAF","$window","$mdAria","$mdUtil","$mdConstant"]}(),function(){"use strict";function e(e,t,n,r,i){function o(e){function n(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),d.parent().prepend(n.clone),m(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),m()}}function i(){f.items.forEach(o),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=d.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}l(e)}function o(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==d[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px")}function a(){var e=d.prop("scrollTop"),t=e>(a.prevScrollTop||0);a.prevScrollTop=e,0===e?l(null):t&&f.next?f.next.top-e<=0?l(f.next):f.current&&(f.next.top-e<=f.next.height?s(f.current,f.next.top-f.next.height-e):s(f.current,null)):!t&&f.current&&(e<f.current.top&&l(f.prev),f.current&&f.next&&(e>=f.next.top-f.current.height?s(f.current,f.next.top-e-f.current.height):s(f.current,null)))}function l(e){if(f.current!==e){f.current&&(s(f.current,null),u(f.current,null)),e&&u(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],u(f.next,"next"),u(f.prev,"prev")}}function u(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function s(e,n){e&&(null===n||void 0===n?e.translateY&&(e.translateY=null,e.clone.css(t.CSS.TRANSFORM,"")):(e.translateY=n,e.clone.css(t.CSS.TRANSFORM,"translate3d("+e.left+"px,"+n+"px,0)")))}var d=e.$element,m=r.debounce(i);c(d),d.on("$scrollstart",m),d.on("$scroll",a);var f;return f={prev:null,current:null,next:null,items:[],add:n,refreshElements:i}}function a(){var t,n=angular.element("<div>");e[0].body.appendChild(n[0]);for(var r=["sticky","-webkit-sticky"],i=0;i<r.length;++i)if(n.css({position:r[i],top:0,"z-index":2}),n.css("position")==r[i]){t=r[i];break}return n.remove(),t}function c(e){function t(){+i.now()-o>a?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),r(t))}var n,o,a=200;e.on("scroll touchmove",function(){n||(n=!0,r(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),o=+i.now()})}var l=a();return function(e,t,n){var r=t.controller("mdContent");if(r)if(l)t.css({position:l,top:0,"z-index":2});else{var i=r.$element.data("$$sticky");i||(i=o(r),r.$element.data("$$sticky",i));var a=i.add(t,n||t.clone());e.$on("$destroy",a)}}}angular.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$document","$mdConstant","$compile","$$rAF","$mdUtil"]}(),function(){"use strict";function e(e,t,n){return{restrict:"E",replace:!0,transclude:!0,template:'<h2 class="md-subheader"><span class="md-subheader-content"></span></h2>',compile:function(r,i,o){var a=r[0].outerHTML;return function(r,i){function c(e){return angular.element(e[0].querySelector(".md-subheader-content"))}n(i),o(r,function(e){c(i).append(e)}),o(r,function(o){var l=t(angular.element(a))(r);n(l),c(l).append(o),e(r,i,l)})}}}}angular.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming"]}(),function(){"use strict";function e(){return function(e,t){return t||(t="swipeleft swiperight"),function(n,r,i){function o(t){t.srcEvent.stopPropagation(),angular.isFunction(r)&&e.$apply(function(){r(t)})}function a(){return l.on(t,o),function(){l.off(t)}}function c(e,t){var n=t.indexOf("pan")>-1,r=t.indexOf("swipe")>-1;return n&&e.push([Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]),r&&e.push([Hammer.Swipe,{direction:Hammer.DIRECTION_HORIZONTAL}]),e}var l=new Hammer(n[0],{recognizers:c([],t)});return i||a(),e.$on("$destroy",function(){l.destroy()}),a}}}function t(e,t){return{restrict:"A",link:r(e,t,"SwipeLeft")}}function n(e,t){return{restrict:"A",link:r(e,t,"SwipeRight")}}function r(e,t,n){return function(r,i,o){var a=n.toLowerCase(),c="md"+n,l=e(o[c])||angular.noop,u=t(r,a),s=function(e){l(r,e)};u(i,function(e){e.type==a&&s()})}}angular.module("material.components.swipe",[]).factory("$mdSwipe",e).directive("mdSwipeLeft",t).directive("mdSwipeRight",n),t.$inject=["$parse","$mdSwipe"],n.$inject=["$parse","$mdSwipe"]}(),function(){"use strict";function e(e,t,n){function r(e,t){var r=angular.element(e[0].querySelector(".md-switch-thumb")),o=i.compile(r,t);return function(e,t,i,a){return n(t),o(e,r,i,a)}}var i=e[0],o=t[0];return{restrict:"E",transclude:!0,template:'<div class="md-switch-bar"></div><div class="md-switch-thumb">'+o.template+"</div>",require:"?ngModel",compile:r}}angular.module("material.components.switch",["material.core","material.components.checkbox","material.components.radioButton"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","mdRadioButtonDirective","$mdTheming"]}(),function(){"use strict";angular.module("material.components.tabs",["material.core"])}(),function(){"use strict";function e(e,t,n){return{restrict:"E",replace:!0,scope:{fid:"@?mdFid",label:"@?",value:"=ngModel"},compile:function(r,i){return angular.isUndefined(i.mdFid)&&(i.mdFid=t.nextUid()),{pre:function(e,t,r){var i=n(r.ngDisabled);e.isDisabled=function(){return i(e.$parent)},e.inputType=r.type||"text"},post:e}},template:'<md-input-group tabindex="-1"> <label for="{{fid}}" >{{label}}</label> <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input></md-input-group>'}}function t(){return{restrict:"CE",controller:["$element",function(e){this.setFocused=function(t){e.toggleClass("md-input-focused",!!t)},this.setHasValue=function(t){e.toggleClass("md-input-has-value",t)}}]}}function n(){return{restrict:"E",replace:!0,template:"<input >",require:["^?mdInputGroup","?ngModel"],link:function(e,t,n,r){function i(e){return e=angular.isUndefined(e)?t.val():e,angular.isDefined(e)&&null!==e&&""!==e.toString().trim()}if(r[0]){var o=r[0],a=r[1];e.$watch(e.isDisabled,function(e){t.attr("aria-disabled",!!e),t.attr("tabindex",!!e)}),t.attr("type",n.type||t.parent().attr("type")||"text"),a&&a.$formatters.push(function(e){return o.setHasValue(i(e)),e}),t.on("input",function(){o.setHasValue(i())}).on("focus",function(){o.setFocused(!0)}).on("blur",function(){o.setFocused(!1),o.setHasValue(i())}),e.$on("$destroy",function(){o.setFocused(!1),o.setHasValue(!1)})}}}}angular.module("material.components.textField",["material.core"]).directive("mdInputGroup",t).directive("mdInput",n).directive("mdTextFloat",e),e.$inject=["$mdTheming","$mdUtil","$parse"],n.$inject=["$mdUtil"]}(),function(){"use strict";function e(e,t,n,r){return{restrict:"E",controller:angular.noop,link:function(i,o,a){function c(){function r(t,n){o.parent()[0]===n.parent()[0]&&(s&&s.off("scroll",p),n.on("scroll",p),n.attr("scroll-shrink","true"),s=n,e(c))}function c(){u=o.prop("offsetHeight"),s.css("margin-top",-u*f+"px"),l()}function l(e){var n=e?e.target.scrollTop:m;h(),d=Math.min(u/f,Math.max(0,d+n-m)),o.css(t.CSS.TRANSFORM,"translate3d(0,"+-d*f+"px,0)"),s.css(t.CSS.TRANSFORM,"translate3d(0,"+(u-d)*f+"px,0)"),m=n}var u,s,d=0,m=0,f=a.mdShrinkSpeedFactor||.5,p=e.debounce(l),h=n.debounce(c,5e3);i.$on("$mdContentLoaded",r)}r(o),angular.isDefined(a.mdScrollShrink)&&c()}}}angular.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming"]}(),function(){"use strict";function e(){return{restrict:"E"}}function t(e){function t(e,t,n,r,i){function o(r,o,a){o.addClass(a.position.split(" ").map(function(e){return"md-"+e}).join(" ")),a.parent.addClass(c(a.position));var l=n(r,"swipeleft swiperight");return a.detachSwipe=l(o,function(t){o.addClass("md-"+t.type),e(i.cancel)}),t.enter(o,a.parent)}function a(e,n,r){return r.detachSwipe(),r.parent.removeClass(c(r.position)),t.leave(n)}function c(e){return"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom")}return{onShow:o,onRemove:a,position:"bottom left",themable:!0,hideDelay:3e3}}return t.$inject=["$timeout","$animate","$mdSwipe","$mdTheming","$mdToast"],e("$mdToast").setDefaults({methods:["position","hideDelay","capsule"],options:t}).addPreset("simple",{argOption:"content",methods:["content","action","highlightAction"],options:["$mdToast",function(e){return{template:["<md-toast ng-class=\"{'md-capsule': toast.capsule}\">","<span flex>{{ toast.content }}</span>",'<md-button ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-action\': toast.highlightAction}">',"{{toast.action}}","</md-button>","</md-toast>"].join(""),controller:function(){this.resolve=function(){e.hide()}},controllerAs:"toast",bindToController:!0}}]})}angular.module("material.components.toast",["material.core","material.components.swipe","material.components.button"]).directive("mdToast",e).provider("$mdToast",t),t.$inject=["$$interimElementProvider"]}(),function(){"use strict";function e(e,t,n,r,i,o){function a(a,s,d,m){function f(t){f.value=!!t,f.queued||(t?(f.queued=!0,e(function(){a.visible=f.value,f.queued=!1},c)):e(function(){a.visible=!1}))}function p(){s.removeClass("md-hide"),v.attr("aria-describedby",s.attr("id")),u.append(s),n(function(){n(function(){g(),a.visible&&s.addClass("md-show")})})}function h(){s.removeClass("md-show").addClass("md-hide"),v.removeAttr("aria-describedby"),e(function(){a.visible||s.detach()},200,!1)}function g(){var e=s[0].getBoundingClientRect(),n=v[0].getBoundingClientRect();m&&(n.top+=m.$element.prop("scrollTop"),n.left+=m.$element.prop("scrollLeft"));var r="bottom",i={left:n.left+n.width/2-e.width/2,top:n.top+n.height};i.left=Math.min(i.left,t.innerWidth-e.width-l),i.left=Math.max(i.left,l),i.top+e.height>t.innerHeight&&(i.top=n.top-e.height,r="top"),s.css({top:i.top+"px",left:i.left+"px"}),s.attr("width-32",Math.ceil(e.width/32)),s.attr("md-direction",r)}o(s);var v=s.parent();s.detach(),s.attr("role","tooltip"),s.attr("id",d.id||"tooltip_"+i.nextUid()),v.on("focus mouseenter touchstart",function(){f(!0)}),v.on("blur mouseleave touchend touchcancel",function(){r.activeElement!==v[0]&&f(!1)}),a.$watch("visible",function(e){e?p():h()});var $=n.debounce(function(){a.visible&&g()});angular.element(t).on("resize",$),a.$on("$destroy",function(){a.visible=!1,s.remove(),angular.element(t).off("resize",$)})}var c=400,l=8,u=angular.element(document.body);return{restrict:"E",transclude:!0,require:"^?mdContent",template:'<div class="md-background"></div><div class="md-content" ng-transclude></div>',scope:{visible:"=?mdVisible"},link:a}}angular.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming"]}(),function(){"use strict";angular.module("material.components.whiteframe",[])}(),function(){"use strict";function e(e,t,n,r){function i(t,n,i,o){function a(){var i=u.selected(),o=!i||u.count()<2||1===(t.pagination||{}).itemsPerPage;if(n.css("display",o?"none":"block"),!o){var a=u.count(),l=1/a,s=u.indexOf(i);n.css(e.CSS.TRANSFORM,"scaleX("+l+") translate3d("+100*s+"%,0,0)"),n.addClass("md-ink-bar-grow"),c&&r.cancel(c),c=r(function(){n.removeClass("md-ink-bar-grow")},250,!1)}}var c,l=o[0],u=o[1];l||(u.inkBarElement=n,t.$watch(u.selected,a),t.$on("$mdTabsChanged",a))}return{restrict:"E",require:["^?mdNoBar","^mdTabs"],link:i}}angular.module("material.components.tabs").directive("mdTabsInkBar",e),e.$inject=["$mdConstant","$window","$$rAF","$timeout"]}(),function(){"use strict";function e(e,t,n,r,i){function o(o,l,u,s){function d(e,t){if(e){var n=g(e);b.active&&n!==b.page?(t&&t.element.blur(),v(n).then(function(){e.element.focus()})):e.element.focus()}}function m(e){if(e)if(b.active){var t=g(e);v(t)}else C()}function f(e){var t,n=b.page+e;if(!s.selected()||g(s.selected())!==n){var r;0>e?(r=(n+1)*b.itemsPerPage,t=s.previous(s.itemAt(r))):(r=n*b.itemsPerPage-1,t=s.next(s.itemAt(r)))}v(n).then(function(){t&&t.element.focus()}),t&&s.select(t)}function p(){var e=l.find("md-tab"),t=l.parent().prop("clientWidth")-c,n=t&&a*s.count()>t,r=n!==b.active;if(0>=t&&(n=!1,r=!0),b.active=n,n){b.pagesCount=Math.ceil(a*s.count()/t),b.itemsPerPage=Math.max(1,Math.floor(s.count()/b.pagesCount)),b.tabWidth=t/b.itemsPerPage,$.css("width",b.tabWidth*s.count()+"px"),e.css("width",b.tabWidth+"px");var o=g(s.selected());v(o)}else r&&i(function(){$.css("width",""),e.css("width",""),h(0),b.page=-1})}function h(t){function n(t){t.target===$[0]&&($.off(e.CSS.TRANSITIONEND,n),i.resolve())}if(s.pagingOffset===t)return r.when();var i=r.defer();return s.$$pagingOffset=t,$.css(e.CSS.TRANSFORM,"translate3d("+t+"px,0,0)"),$.on(e.CSS.TRANSITIONEND,n),i.promise}function g(e){var t=s.indexOf(e);return-1===t?0:Math.floor(t/b.itemsPerPage)}function v(e){if(e!==b.page){var t=b.pagesCount;return 0>e&&(e=0),e>t&&(e=t),b.hasPrev=e>0,b.hasNext=(e+1)*b.itemsPerPage<s.count(),b.page=e,i(function(){o.$broadcast("$mdTabsPaginationChanged")}),h(-e*b.itemsPerPage*b.tabWidth)}}var $=l.children(),b=o.pagination={page:-1,active:!1,clickNext:function(){f(1)},clickPrevious:function(){f(-1)}};p();var C=n.debounce(p);o.$on("$mdTabsChanged",C),angular.element(t).on("resize",C),o.$on("$destroy",function(){angular.element(t).off("resize",C)}),o.$watch(s.selected,m),o.$watch(function(){return s.tabToFocus},d)}var a=96,c=64;return{restrict:"A",require:"^mdTabs",link:o}}angular.module("material.components.tabs").directive("mdTabsPagination",e),e.$inject=["$mdConstant","$window","$$rAF","$$q","$timeout"]}(),function(){"use strict";function e(e,t,n,r,i,o,a){function c(){return f(e.$parent)}function l(t){m.content.length&&(m.contentContainer.append(m.content),m.contentScope=e.$parent.$new(),t.append(m.contentContainer),r(m.contentContainer)(m.contentScope),o.disconnectScope(m.contentScope))}function u(){m.hammertime.destroy(),i.leave(m.contentContainer).then(function(){m.contentScope&&m.contentScope.$destroy(),m.contentScope=null})}function s(){o.reconnectScope(m.contentScope),m.hammertime.on("swipeleft swiperight",e.onSwipe),t.addClass("active"),t.attr("aria-selected",!0),t.attr("tabIndex",0),i.removeClass(m.contentContainer,"ng-hide"),e.onSelect()}function d(){o.disconnectScope(m.contentScope),m.hammertime.off("swipeleft swiperight",e.onSwipe),t.removeClass("active"),t.attr("aria-selected",!1),t.attr("tabIndex",-1),i.addClass(m.contentContainer,"ng-hide"),e.onDeselect()}var m=this;m.contentContainer=angular.element('<div class="md-tab-content ng-hide">'),m.hammertime=new Hammer(m.contentContainer[0]),m.element=t,m.isDisabled=c,m.onAdd=l,m.onRemove=u,m.onSelect=s,m.onDeselect=d;var f=a(n.ngDisabled)}angular.module("material.components.tabs").controller("$mdTab",e),e.$inject=["$scope","$element","$attrs","$compile","$animate","$mdUtil","$parse"]}(),function(){"use strict";function e(e,t,n,r,i){function o(n,o){var a=n.find("md-tab-label");a.length?a.remove():a=angular.isDefined(o.label)?angular.element("<md-tab-label>").html(o.label):angular.element("<md-tab-label>").append(n.contents().remove());var c=n.contents().remove();return function(n,o,l,u){function s(){var e=a.clone();o.append(e),t(e)(n.$parent),$.content=c.clone()}function d(){n.$apply(function(){b.select($),b.focus($)})}function m(e){e.keyCode==i.KEY_CODE.SPACE||e.keyCode==i.KEY_CODE.ENTER?(o.triggerHandler("click"),e.preventDefault()):e.keyCode===i.KEY_CODE.LEFT_ARROW?n.$evalAsync(function(){b.focus(b.previous($))}):e.keyCode===i.KEY_CODE.RIGHT_ARROW&&n.$evalAsync(function(){b.focus(b.next($))})}function f(e){n.$apply(function(){"swipeleft"===e.type?b.select(b.next()):b.select(b.previous())})}function p(){n.$watch("$parent.$index",function(e){b.move($,e)})}function h(){function e(e){var t=b.selected()===$;e&&!t?b.select($):!e&&t&&b.deselect($)}var t=n.$parent.$watch("!!("+l.mdActive+")",e);n.$on("$destroy",t)}function g(){function e(e){o.attr("aria-disabled",e);var t=b.selected()===$;t&&e&&b.select(b.next()||b.previous())}n.$watch($.isDisabled,e)}function v(){var e=l.id||"tab_"+r.nextUid();if(o.attr({id:e,role:"tab",tabIndex:-1}),c.length){var t="content_"+e;o.attr("aria-controls")||o.attr("aria-controls",t),$.contentContainer.attr({id:t,role:"tabpanel","aria-labelledby":e})}}var $=u[0],b=u[1];s(),v();var C=e.attachTabBehavior(n,o,{colorElement:b.inkBarElement});b.add($),n.$on("$destroy",function(){C(),b.remove($)}),angular.isDefined(l.ngClick)||o.on("click",d),o.on("keydown",m),n.onSwipe=f,angular.isNumber(n.$parent.$index)&&p(),angular.isDefined(l.mdActive)&&h(),g()}}return{restrict:"E",require:["mdTab","^mdTabs"],controller:"$mdTab",scope:{onSelect:"&mdOnSelect",onDeselect:"&mdOnDeselect",label:"@"},compile:o}}angular.module("material.components.tabs").directive("mdTab",e),e.$inject=["$mdInkRipple","$compile","$mdAria","$mdUtil","$mdConstant"]}(),function(){"use strict";function e(e,t,n){function r(){return p.itemAt(e.selectedIndex)}function i(t,n){f.add(t,n),t.onAdd(p.contentArea),-1!==e.selectedIndex&&angular.isNumber(e.selectedIndex)&&e.selectedIndex!==p.indexOf(t)||p.select(t),e.$broadcast("$mdTabsChanged")}function o(t,n){f.contains(t)&&(n||p.selected()===t&&(f.count()>1?p.select(p.previous()||p.next()):p.deselect(t)),f.remove(t),t.onRemove(),e.$broadcast("$mdTabsChanged"))}function a(t,n){var r=p.selected()===t;f.remove(t),f.add(t,n),r&&p.select(t),e.$broadcast("$mdTabsChanged")}function c(t){!t||t.isSelected||t.isDisabled()||f.contains(t)&&(p.deselect(p.selected()),e.selectedIndex=p.indexOf(t),t.isSelected=!0,t.onSelect())}function l(e){p.tabToFocus=e}function u(t){t&&t.isSelected&&f.contains(t)&&(e.selectedIndex=-1,t.isSelected=!1,t.onDeselect())}function s(e,t){return f.next(e||p.selected(),t||m)}function d(e,t){return f.previous(e||p.selected(),t||m)}function m(e){return e&&!e.isDisabled()}var f=n.iterator([],!1),p=this;p.$element=t,p.scope=e,p.contentArea=angular.element(t[0].querySelector(".md-tabs-content")),p.inRange=f.inRange,p.indexOf=f.indexOf,p.itemAt=f.itemAt,p.count=f.count,p.selected=r,p.add=i,p.remove=o,p.move=a,p.select=c,p.focus=l,p.deselect=u,p.next=s,p.previous=d,e.$on("$destroy",function(){p.deselect(p.selected());for(var e=f.count()-1;e>=0;e--)p.remove(f[e],!0)})}angular.module("material.components.tabs").controller("$mdTabs",e),e.$inject=["$scope","$element","$mdUtil"]}(),function(){"use strict";function e(e,t){function n(e,n,r,i,o){function a(){n.attr({role:"tablist"})}function c(){e.$watch("selectedIndex",function(e,t){if(i.deselect(i.itemAt(t)),i.inRange(e)){var n=i.itemAt(e);n&&n.isDisabled()&&(n=e>t?i.next(n):i.previous(n)),i.select(n)}})}t(n),a(),c(),o(e.$parent,function(e){angular.element(n[0].querySelector(".md-header-items")).append(e)})}return{restrict:"E",controller:"$mdTabs",require:"mdTabs",transclude:!0,scope:{selectedIndex:"=?mdSelected"},template:'<section class="md-header" ng-class="{\'md-paginating\': pagination.active}"><button class="md-paginator md-prev" ng-if="pagination.active && pagination.hasPrev" ng-click="pagination.clickPrevious()" aria-hidden="true"></button><div class="md-header-items-container" md-tabs-pagination><div class="md-header-items"><md-tabs-ink-bar></md-tabs-ink-bar><md-tabs-ink-bar class="md-ink-bar-delayed"></md-tabs-ink-bar></div></div><button class="md-paginator md-next" ng-if="pagination.active && pagination.hasNext" ng-click="pagination.clickNext()" aria-hidden="true"></button></section><section class="md-tabs-content"></section>',link:n}}angular.module("material.components.tabs").directive("mdTabs",e),e.$inject=["$parse","$mdTheming"]}();
/*
 AngularJS v1.3.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,d,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),f=r.current;m=y(b,function(b){g.enter(b,null,m||c).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=f.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,h,g){return{restrict:"ECA",priority:-400,link:function(a,c){var b=g.current,f=b.locals;c.html(f.$template);var y=d(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));y(a)}}}p=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,c){return d.extend(Object.create(a),
c)}function h(a,d){var b=d.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;g.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&h(a,b));if(a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=d.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,c,b,f,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&d.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(t(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),f.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,c;d.forEach(a,function(b,e){a[e]=d.isString(b)?h.get(b):h.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),c=x.getTrustedResourceUrl(c),d.isDefined(c)&&(e.loadedTemplateUrl=c,b=p(c)));d.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;d.forEach(g,function(f,g){var q;if(q=!b){var h=c.path();q=f.keys;var l={};if(f.regexp)if(h=f.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(f,{params:d.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),function(c){f.current.pathParams[c]||(b[c]=a[c])});a=d.extend({},this.current.params,a);c.path(t(this.current.$$route.originalPath,a));c.search(d.extend({},c.search(),b))}else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",
m);return s}]});var B=d.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null===n?0/0:+n}function e(n){return!isNaN(n)}function r(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function u(n){return n.length}function i(n){for(var t=1;n*t%1;)t*=10;return t}function o(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function a(){this._=Object.create(null)}function c(n){return(n+="")===da||n[0]===ma?ma+n:n}function l(n){return(n+="")[0]===ma?n.slice(1):n}function s(n){return c(n)in this._}function f(n){return(n=c(n))in this._&&delete this._[n]}function h(){var n=[];for(var t in this._)n.push(l(t));return n}function g(){var n=0;for(var t in this._)++n;return n}function p(){for(var n in this._)return!1;return!0}function v(){this._=Object.create(null)}function d(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function m(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=ya.length;r>e;++e){var u=ya[e]+t;if(u in n)return u}}function y(){}function M(){}function x(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new a;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function b(){ta.event.preventDefault()}function _(){for(var n,t=ta.event;n=t.sourceEvent;)t=n;return t}function w(n){for(var t=new M,e=0,r=arguments.length;++e<r;)t[arguments[e]]=x(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=ta.event;u.target=n,ta.event=u,t[u.type].apply(e,r)}finally{ta.event=i}}},t}function S(n){return xa(n,ka),n}function k(n){return"function"==typeof n?n:function(){return ba(n,this)}}function E(n){return"function"==typeof n?n:function(){return _a(n,this)}}function A(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ta.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function N(n){return n.trim().replace(/\s+/g," ")}function C(n){return new RegExp("(?:^|\\s+)"+ta.requote(n)+"(?:\\s+|$)","g")}function z(n){return(n+"").trim().split(/^|\s+/)}function q(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=z(n).map(L);var u=n.length;return"function"==typeof t?r:e}function L(n){var t=C(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",N(u+" "+n))):e.setAttribute("class",N(u.replace(t," ")))}}function T(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function R(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function D(n){return"function"==typeof n?n:(n=ta.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function P(){var n=this.parentNode;n&&n.removeChild(this)}function U(n){return{__data__:n}}function j(n){return function(){return Sa(this,n)}}function F(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function H(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function O(n){return xa(n,Aa),n}function Y(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function I(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,ra(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+ta.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=Z;a>0&&(n=n.slice(0,a));var l=Ca.get(n);return l&&(n=l,c=V),a?t?u:r:t?y:i}function Z(n,t){return function(e){var r=ta.event;ta.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ta.event=r}}}function V(n,t){var e=Z(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function X(){var n=".dragsuppress-"+ ++qa,t="click"+n,e=ta.select(oa).on("touchmove"+n,b).on("dragstart"+n,b).on("selectstart"+n,b);if(za){var r=ia.style,u=r[za];r[za]="none"}return function(i){if(e.on(n,null),za&&(r[za]=u),i){var o=function(){e.on(t,null)};e.on(t,function(){b(),o()},!0),setTimeout(o,0)}}}function $(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>La&&(oa.scrollX||oa.scrollY)){e=ta.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();La=!(u.f||u.e),e.remove()}return La?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function B(){return ta.event.changedTouches[0].identifier}function W(){return ta.event.target}function J(){return oa}function G(n){return n>0?1:0>n?-1:0}function K(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function Q(n){return n>1?0:-1>n?Da:Math.acos(n)}function nt(n){return n>1?ja:-1>n?-ja:Math.asin(n)}function tt(n){return((n=Math.exp(n))-1/n)/2}function et(n){return((n=Math.exp(n))+1/n)/2}function rt(n){return((n=Math.exp(2*n))-1)/(n+1)}function ut(n){return(n=Math.sin(n/2))*n}function it(){}function ot(n,t,e){return this instanceof ot?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ot?new ot(n.h,n.s,n.l):xt(""+n,bt,ot):new ot(n,t,e)}function at(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new dt(u(n+120),u(n),u(n-120))}function ct(n,t,e){return this instanceof ct?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof ct?new ct(n.h,n.c,n.l):n instanceof st?ht(n.l,n.a,n.b):ht((n=_t((n=ta.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new ct(n,t,e)}function lt(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new st(e,Math.cos(n*=Fa)*t,Math.sin(n)*t)}function st(n,t,e){return this instanceof st?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof st?new st(n.l,n.a,n.b):n instanceof ct?lt(n.h,n.c,n.l):_t((n=dt(n)).r,n.g,n.b):new st(n,t,e)}function ft(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=gt(u)*Ja,r=gt(r)*Ga,i=gt(i)*Ka,new dt(vt(3.2404542*u-1.5371385*r-.4985314*i),vt(-.969266*u+1.8760108*r+.041556*i),vt(.0556434*u-.2040259*r+1.0572252*i))}function ht(n,t,e){return n>0?new ct(Math.atan2(e,t)*Ha,Math.sqrt(t*t+e*e),n):new ct(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n,t,e){return this instanceof dt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof dt?new dt(n.r,n.g,n.b):xt(""+n,dt,at):new dt(n,t,e)}function mt(n){return new dt(n>>16,255&n>>8,255&n)}function yt(n){return mt(n)+""}function Mt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function xt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(St(u[0]),St(u[1]),St(u[2]))}return(i=tc.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function bt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new ot(r,u,c)}function _t(n,t,e){n=wt(n),t=wt(t),e=wt(e);var r=pt((.4124564*n+.3575761*t+.1804375*e)/Ja),u=pt((.2126729*n+.7151522*t+.072175*e)/Ga),i=pt((.0193339*n+.119192*t+.9503041*e)/Ka);return st(116*u-16,500*(r-u),200*(u-i))}function wt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function St(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function kt(n){return"function"==typeof n?n:function(){return n}}function Et(n){return n}function At(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Nt(t,e,n,r)}}function Nt(n,t,e,r){function u(){var n,t=c.status;if(!t&&zt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=ta.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!oa.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=ta.event;ta.event=n;try{o.progress.call(i,c)}finally{ta.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ra(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},ta.rebind(i,o,"on"),null==r?i:i.get(Ct(r))}function Ct(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function zt(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qt(){var n=Lt(),t=Tt()-n;t>24?(isFinite(t)&&(clearTimeout(ic),ic=setTimeout(qt,t)),uc=0):(uc=1,ac(qt))}function Lt(){var n=Date.now();for(oc=ec;oc;)n>=oc.t&&(oc.f=oc.c(n-oc.t)),oc=oc.n;return n}function Tt(){for(var n,t=ec,e=1/0;t;)t.f?t=n?n.n=t.n:ec=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return rc=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*va(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:Et;return function(n){var e=lc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=sc.get(g)||Ut;var M=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>p){var c=ta.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!l&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ft(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new hc(e-1)),1),e}function i(n,e){return t(n=new hc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{hc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{hc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ht(n);return c.floor=c,c.round=Ht(r),c.ceil=Ht(u),c.offset=Ht(i),c.range=a,n}function Ht(n){return function(t,e){try{hc=jt;var r=new jt;return r._=t,n(r,e)._}finally{hc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=pc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=N[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&hc!==jt,o=new(i?jt:hc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(0|r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=C[o in pc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,N.c.toString(),t,r)}function c(n,t,r){return e(n,N.x.toString(),t,r)}function l(n,t,r){return e(n,N.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{hc=jt;var t=new hc;return t._=n,r(t)}finally{hc=Date}}var r=t(n);return e.parse=function(n){try{hc=jt;var t=r.parse(n);return t&&t._}finally{hc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var M=ta.map(),x=It(v),b=Zt(v),_=It(d),w=Zt(d),S=It(m),k=Zt(m),E=It(y),A=Zt(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var N={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Yt(n.getDate(),t,2)},e:function(n,t){return Yt(n.getDate(),t,2)},H:function(n,t){return Yt(n.getHours(),t,2)},I:function(n,t){return Yt(n.getHours()%12||12,t,2)},j:function(n,t){return Yt(1+fc.dayOfYear(n),t,3)},L:function(n,t){return Yt(n.getMilliseconds(),t,3)},m:function(n,t){return Yt(n.getMonth()+1,t,2)},M:function(n,t){return Yt(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Yt(n.getSeconds(),t,2)},U:function(n,t){return Yt(fc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Yt(fc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Yt(n.getFullYear()%100,t,2)},Y:function(n,t){return Yt(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},C={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:s,S:re,U:Xt,w:Vt,W:$t,x:c,X:l,y:Wt,Y:Bt,Z:Jt,"%":oe};return t}function Yt(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function It(n){return new RegExp("^(?:"+n.map(ta.requote).join("|")+")","i")}function Zt(n){for(var t=new a,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Xt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function $t(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Wt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Jt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){vc.lastIndex=0;var r=vc.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=0|va(t)/60,u=va(t)%60;return e+Yt(r,"0",2)+Yt(u,"0",2)}function oe(n,t,e){dc.lastIndex=0;var r=dc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function le(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function se(n,t){n&&xc.hasOwnProperty(n.type)&&xc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=Fa,t=t*Fa/2+Da/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);_c.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;wc.point=function(o,a){wc.point=n,r=(t=o)*Fa,u=Math.cos(a=(e=a)*Fa/2+Da/4),i=Math.sin(a)},wc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Me(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function xe(n){return[Math.atan2(n[1],n[0]),nt(n[2])]}function be(n,t){return va(n[0]-t[0])<Ta&&va(n[1]-t[1])<Ta}function _e(n,t){n*=Fa;var e=Math.cos(t*=Fa);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++Sc,Ec+=(n-Ec)/Sc,Ac+=(t-Ac)/Sc,Nc+=(e-Nc)/Sc}function Se(){function n(n,u){n*=Fa;var i=Math.cos(u*=Fa),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);kc+=l,Cc+=l*(t+(t=o)),zc+=l*(e+(e=a)),qc+=l*(r+(r=c)),we(t,e,r)}var t,e,r;Dc.point=function(u,i){u*=Fa;var o=Math.cos(i*=Fa);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Dc.point=n,we(t,e,r)}}function ke(){Dc.point=_e}function Ee(){function n(n,t){n*=Fa;var e=Math.cos(t*=Fa),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-Q(g)/h,v=Math.atan2(h,g);Lc+=p*l,Tc+=p*s,Rc+=p*f,kc+=v,Cc+=v*(r+(r=o)),zc+=v*(u+(u=a)),qc+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;Dc.point=function(o,a){t=o,e=a,Dc.point=n,o*=Fa;var c=Math.cos(a*=Fa);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},Dc.lineEnd=function(){n(t,e),Dc.lineEnd=ke,Dc.point=_e}}function Ae(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ne(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(be(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new qe(e,n,null,!0),l=new qe(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new qe(r,n,null,!1),l=new qe(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),ze(i),ze(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function ze(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function qe(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Le(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Te))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=ta.merge(g);var n=Fe(m,p);g.length?(b||(i.polygonStart(),b=!0),Ce(g,De,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Re(),x=t(M),b=!1;return y}}function Te(n){return n.length>1}function Re(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:y,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function De(n,t){return((n=n.x)[0]<0?n[1]-ja-Ta:ja-n[1])-((t=t.x)[0]<0?t[1]-ja-Ta:ja-t[1])}function Pe(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Da:-Da,c=va(i-e);va(c-Da)<Ta?(n.point(e,r=(r+o)/2>0?ja:-ja),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Da&&(va(e-u)<Ta&&(e-=u*Ta),va(i-a)<Ta&&(i-=a*Ta),r=Ue(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Ue(n,t,e,r){var u,i,o=Math.sin(n-e);return va(o)>Ta?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function je(n,t,e,r){var u;if(null==n)u=e*ja,r.point(-Da,u),r.point(0,u),r.point(Da,u),r.point(Da,0),r.point(Da,-u),r.point(0,-u),r.point(-Da,-u),r.point(-Da,0),r.point(-Da,u);else if(va(n[0]-t[0])>Ta){var i=n[0]<t[0]?Da:-Da;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Fe(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;_c.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+Da/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+Da/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>Da,k=p*M;if(_c.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*Pa:b,S^h>=e^m>=e){var E=de(pe(f),pe(n));Me(E);var A=de(u,E);Me(A);var N=(S^b>=0?-1:1)*nt(A[2]);(r>N||r===N&&(E[0]||E[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Ta>i||Ta>i&&0>_c)^1&o}function He(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Da:-Da),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(be(e,g)||be(p,g))&&(p[0]+=Ta,p[1]+=Ta,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&be(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),M=m*m-y*(ve(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=ye(d,(-m-x)/y);if(me(b,p),b=xe(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=va(A-Da)<Ta,C=N||Ta>A;if(!N&&k>E&&(_=k,k=E,E=_),C?N?k+E>0^b[1]<(va(b[0]-w)<Ta?k:E):k<=b[1]&&b[1]<=E:A>Da^(w<=b[0]&&b[0]<=S)){var z=ye(d,(-m+x)/y);return me(z,p),[b,xe(z)]}}}function u(t,e){var r=o?n:Da-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=va(i)>Ta,c=gr(n,6*Fa);return Le(t,e,c,o?[0,-n]:[-Da,n-Da])}function Oe(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Ye(n,t,e,r){function u(r,u){return va(r[0]-n)<Ta?u>0?0:3:va(r[0]-e)<Ta?u>0?2:1:va(r[1]-t)<Ta?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&K(l,i,n)>0&&++t:i[1]<=r&&K(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=0/0}function g(){v&&(p(y,M),x&&w&&A.rejoin(),v.push(A.buffer())),C.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Uc,Math.min(Uc,n)),t=Math.max(-Uc,Math.min(Uc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};N(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,E=a,A=Re(),N=Oe(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=ta.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return C}}function Ie(n){var t=0,e=Da/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Da/180,e=n[1]*Da/180):[180*(t/Da),180*(e/Da)]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,nt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){Fc+=u*n-r*t,r=n,u=t}var t,e,r,u;Zc.point=function(i,o){Zc.point=n,t=r=i,e=u=o},Zc.lineEnd=function(){n(t,e)}}function Xe(n,t){Hc>n&&(Hc=n),n>Yc&&(Yc=n),Oc>t&&(Oc=t),t>Ic&&(Ic=t)}function $e(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function We(n,t){Ec+=n,Ac+=t,++Nc}function Je(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);Cc+=o*(t+n)/2,zc+=o*(e+r)/2,qc+=o,We(t=n,e=r)}var t,e;Xc.point=function(r,u){Xc.point=n,We(t=r,e=u)}}function Ge(){Xc.point=We}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);Cc+=o*(r+n)/2,zc+=o*(u+t)/2,qc+=o,o=u*n-r*t,Lc+=o*(r+n),Tc+=o*(u+t),Rc+=3*o,We(r=n,u=t)}var t,e,r,u;Xc.point=function(i,o){Xc.point=n,We(t=r=i,e=u=o)},Xc.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Pa)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:y};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(M,x,y,b,_,w,M=o[0],x=o[1],y=e,b=i[0],_=i[1],w=i[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=a+g,_=c+p,w=l+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),E=va(va(w)-1)<Ta||va(r-h)<Ta?(r+h)/2:Math.atan2(_,b),A=n(E,k),N=A[0],C=A[1],z=N-t,q=C-e,L=M*z-y*q;
(L*L/x>i||va((y*z+M*q)/x-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,N,C,E,b/=S,_/=S,w,d,m),m.point(N,C),u(N,C,E,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Fa),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Ha,e*Ha])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*Fa,n[1]*Fa),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Ha,n[1]*Ha]}function r(){a=Ae(o=lr(m,y,M),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,M=0,x=Pc,b=Et,_=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=or(x(o,f(b(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(x=null==n?(_=n,Pc):He((_=+n)*Fa),u()):_},t.clipExtent=function(n){return arguments.length?(w=n,b=n?Ye(n[0][0],n[0][1],n[1][0],n[1][1]):Et,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Fa,d=n[1]%360*Fa,r()):[v*Ha,d*Ha]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Fa,y=n[1]%360*Fa,M=n.length>2?n[2]%360*Fa:0,r()):[m*Ha,y*Ha,M*Ha]},ta.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*Fa,e*Fa)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>Da?n-Pa:-Da>n?n+Pa:n,t]}function lr(n,t,e){return n?t||e?Ae(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function sr(n){return function(t,e){return t+=n,[t>Da?t-Pa:-Da>t?t+Pa:t,e]}}function fr(n){var t=sr(n);return t.invert=sr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),nt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),nt(s*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*Pa)):(u=n+o*Pa,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=xe([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function pr(n,t){var e=pe(t);e[0]-=n,Me(e);var r=Q(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Ta)%(2*Math.PI)}function vr(n,t,e){var r=ta.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=ta.range(n,t-Ta,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function Mr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(ut(r-t)+u*o*ut(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ha,Math.atan2(o,Math.sqrt(r*r+u*u))*Ha]}:function(){return[n*Ha,t*Ha]};return p.distance=h,p}function xr(){function n(n,u){var i=Math.sin(u*=Fa),o=Math.cos(u),a=va((n*=Fa)-t),c=Math.cos(a);$c+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Bc.point=function(u,i){t=u*Fa,e=Math.sin(i*=Fa),r=Math.cos(i),Bc.point=n},Bc.lineEnd=function(){Bc.point=Bc.lineEnd=y}}function br(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function _r(n,t){function e(n,t){o>0?-ja+Ta>t&&(t=-ja+Ta):t>ja-Ta&&(t=ja-Ta);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Da/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=G(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-ja]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return va(u)<Ta?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-G(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(Da/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Da*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(Da/4+t/2)),-n]}function Ar(n){return n[0]}function Nr(n){return n[1]}function Cr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&K(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function zr(n,t){return n[0]-t[0]||n[1]-t[1]}function qr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Lr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function Tr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=ol.pop()||new Rr;return t.site=n,t}function Pr(n){Xr(n),rl.remove(n),ol.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&va(e-c.circle.x)<Ta&&va(r-c.circle.cy)<Ta;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),Xr(c);for(var l=o;l.circle&&va(e-l.circle.x)<Ta&&va(r-l.circle.cy)<Ta;)o=l.N,a.push(l),Pr(l),l=o;a.push(l),Xr(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Kr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Jr(c.site,l.site,null,u),Vr(c),Vr(l)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=rl._;a;)if(r=Fr(a,o)-i,r>Ta)a=a.L;else{if(u=i-Hr(a,o),!(u>Ta)){r>-Ta?(t=a.P,e=a):u>-Ta?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(rl.insert(t,c),t||e){if(t===e)return Xr(t),e=Dr(t.site),rl.insert(c,e),c.edge=e.edge=Jr(t.site,c.site),Vr(t),Vr(e),void 0;if(!e)return c.edge=Jr(t.site,c.site),void 0;Xr(t),Xr(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};Kr(e.edge,l,p,x),c.edge=Jr(l,n,null,x),e.edge=Jr(n,p,null,x),Vr(t),Vr(e)}}function Fr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Hr(n,t){var e=n.N;if(e)return Fr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Yr(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=el,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(va(r-t)>Ta||va(u-e)>Ta)&&(a.splice(o,0,new Qr(Gr(i.site,s,va(r-f)<Ta&&p-u>Ta?{x:f,y:va(t-f)<Ta?e:p}:va(u-p)<Ta&&h-r>Ta?{x:va(e-p)<Ta?t:h,y:p}:va(r-h)<Ta&&u-g>Ta?{x:h,y:va(t-h)<Ta?e:g}:va(u-g)<Ta&&r-f>Ta?{x:va(e-g)<Ta?t:f,y:g}:null),i.site,null)),++c)}function Ir(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-Ra)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=al.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=il._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}il.insert(y,m),y||(ul=m)}}}}function Xr(n){var t=n.circle;t&&(t.P||(ul=t.N),il.remove(t),al.push(t),tu(t),n.circle=null)}function $r(n){for(var t,e=tl,r=Oe(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||va(t.a.x-t.b.x)<Ta&&va(t.a.y-t.b.y)<Ta)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Wr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Jr(n,t,e,r){var u=new Wr(n,t);return tl.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),el[n.i].edges.push(new Qr(u,n,t)),el[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Wr(n,null);return r.a=t,r.b=e,tl.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for(tl=[],el=new Array(n.length),rl=new nu,il=new nu;;)if(u=ul,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(el[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&($r(t),Yr(t));var o={cells:el,edges:tl};return rl=il=tl=el=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function lu(n){return n.y}function su(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t,e,r,u,i,o){var a,c=1/0;return function l(n,s,f,h,g){if(!(s>i||f>o||r>h||u>g)){if(p=n.point){var p,v=t-p[0],d=e-p[1],m=v*v+d*d;if(c>m){var y=Math.sqrt(c=m);r=t-y,u=e-y,i=t+y,o=e+y,a=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:l(n,s,f,x,b);break;case 1:l(n,x,f,h,b);break;case 2:l(n,s,b,x,g);break;case 3:l(n,x,b,h,g)}}}(n,r,u,i,o),a}function gu(n,t){n=ta.rgb(n),t=ta.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+Mt(Math.round(e+i*n))+Mt(Math.round(r+o*n))+Mt(Math.round(u+a*n))}}function pu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=mu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function vu(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function du(n,t){var e,r,u,i=ll.lastIndex=sl.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=ll.exec(n))&&(r=sl.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:vu(e,r)})),i=sl.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function mu(n,t){for(var e,r=ta.interpolators.length;--r>=0&&!(e=ta.interpolators[r](n,t)););return e}function yu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(mu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function Mu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function bu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function wu(n){return n*n*n}function Su(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function ku(n){return function(t){return Math.pow(t,n)}}function Eu(n){return 1-Math.cos(n*ja)}function Au(n){return Math.pow(2,10*(n-1))}function Nu(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Pa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Pa/t)}}function zu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function qu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=ta.hcl(n),t=ta.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return lt(e+i*n,r+o*n,u+a*n)+""}}function Tu(n,t){n=ta.hsl(n),t=ta.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return at(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){n=ta.lab(n),t=ta.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ft(e+i*n,r+o*n,u+a*n)+""}}function Du(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Pu(n){var t=[n.a,n.b],e=[n.c,n.d],r=ju(t),u=Uu(t,e),i=ju(Fu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ha,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ha:0}function Uu(n,t){return n[0]*t[0]+n[1]*t[1]}function ju(n){var t=Math.sqrt(Uu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Fu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Hu(n,t){var e,r=[],u=[],i=ta.transform(n),o=ta.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:vu(a[0],c[0])},{i:3,x:vu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:vu(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:vu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:vu(g[0],p[0])},{i:e-2,x:vu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Ou(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Yu(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Iu(n){for(var t=n.source,e=n.target,r=Vu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Zu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Vu(n,t){if(n===t)return n;for(var e=Zu(n),r=Zu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Xu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Bu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Wu(n){n.fixed&=-5}function Ju(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Gu(n,t){return ta.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ri,n}function Ku(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Qu(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function ni(n){return n.children}function ti(n){return n.value}function ei(n,t){return t.value-n.value}function ri(n){return ta.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ui(n){return n.x}function ii(n){return n.y}function oi(n,t,e){n.y0=t,n.y=e}function ai(n){return ta.range(n.length)}function ci(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function li(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function si(n){return n.reduce(fi,0)}function fi(n,t){return n+t[1]}function hi(n,t){return gi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function gi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function pi(n){return[ta.min(n),ta.max(n)]}function vi(n,t){return n.value-t.value}function di(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function mi(n,t){n._pack_next=t,t._pack_prev=n}function yi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Mi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(xi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],wi(r,u,i),t(i),di(r,i),r._pack_prev=i,di(i,u),u=r._pack_next,o=3;l>o;o++){wi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(yi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!yi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?mi(r,u=a):mi(r=c,u),o--):(di(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(bi)}}function xi(n){n._pack_next=n._pack_prev=n}function bi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,e,r)}function wi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function Si(n,t){return n.parent==t.parent?1:2}function ki(n){var t=n.children;return t.length?t[0]:n.t}function Ei(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ai(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ni(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Ci(n,t,e){return n.a.parent===t.parent?n.a:e}function zi(n){return 1+ta.max(n,function(n){return n.y})}function qi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,e=n.children;return e&&(t=e.length)?Ti(e[t-1]):n}function Ri(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Di(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Pi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ui(n){return n.rangeExtent?n.rangeExtent():Pi(n.range())}function ji(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Fi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Hi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:bl}function Oi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=ta.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Yi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Oi:ji,c=r?Yu:Ou;return o=u(n,t,c,e),a=u(t,n,c,mu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Du)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Xi(n,t)},i.tickFormat=function(t,e){return $i(n,t,e)},i.nice=function(t){return Zi(n,t),u()},i.copy=function(){return Yi(n,t,e,r)},u()}function Ii(n,t){return ta.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Zi(n,t){return Fi(n,Hi(Vi(n,t)[2]))}function Vi(n,t){null==t&&(t=10);var e=Pi(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Xi(n,t){return ta.range.apply(ta,Vi(n,t))}function $i(n,t,e){var r=Vi(n,t);if(e){var u=lc.exec(e);if(u.shift(),"s"===u[8]){var i=ta.formatPrefix(Math.max(va(r[0]),va(r[1])));return u[7]||(u[7]="."+Bi(i.scale(r[2]))),u[8]="f",e=ta.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Wi(u[8],r)),e=u.join("")}else e=",."+Bi(r[2])+"f";return ta.format(e)}function Bi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Wi(n,t){var e=Bi(t[2]);return n in _l?Math.abs(e-Bi(Math.max(va(t[0]),va(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Ji(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Fi(r.map(u),e?Math:Sl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Pi(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return wl;arguments.length<2?t=wl:"function"!=typeof t&&(t=ta.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Ji(n.copy(),t,e,r)},Ii(o,n)}function Gi(n,t,e){function r(t){return n(u(t))}var u=Ki(t),i=Ki(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Xi(e,n)},r.tickFormat=function(n,t){return $i(e,n,t)},r.nice=function(n){return r.domain(Zi(e,n))},r.exponent=function(o){return arguments.length?(u=Ki(t=o),i=Ki(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Gi(n.copy(),t,e)},Ii(r,n)}function Ki(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Qi(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return ta.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new a;for(var i,o=-1,c=r.length;++o<c;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=(c+l)/2,0):(l-c)/(n.length-1+a);return i=r(c+s*a/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=n.length<2?(c=l=Math.round((c+l)/2),0):0|(l-c)/(n.length-1+a);return i=r(c+Math.round(s*a/2+(l-c-(n.length-1+a)*s)/2),s),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c));return i=r(s+Math.round((f-s-(n.length-a)*h)/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Pi(t.a[0])},e.copy=function(){return Qi(n,t)},e.domain(n)}function no(r,u){function i(){var n=0,t=u.length;for(a=[];++n<t;)a[n-1]=ta.quantile(r,n/t);return o}function o(n){return isNaN(n=+n)?void 0:u[ta.bisect(a,n)]}var a;return o.domain=function(u){return arguments.length?(r=u.map(t).filter(e).sort(n),i()):r},o.range=function(n){return arguments.length?(u=n,i()):u},o.quantiles=function(){return a},o.invertExtent=function(n){return n=u.indexOf(n),0>n?[0/0,0/0]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},o.copy=function(){return no(r,u)},i()}function to(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return to(n,t,e)},u()}function eo(n,t){function e(e){return e>=e?t[ta.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return eo(n,t)},e}function ro(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Xi(n,t)},t.tickFormat=function(t,e){return $i(n,t,e)},t.copy=function(){return ro(n)},t}function uo(){return 0}function io(n){return n.innerRadius}function oo(n){return n.outerRadius}function ao(n){return n.startAngle}function co(n){return n.endAngle}function lo(n){return n&&n.padAngle}function so(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function fo(n,t,e,r,u){var i=n[0]-t[0],o=n[1]-t[1],a=(u?r:-r)/Math.sqrt(i*i+o*o),c=a*o,l=-a*i,s=n[0]+c,f=n[1]+l,h=t[0]+c,g=t[1]+l,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(M*M*y-x*x),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,E=_-p,A=w-v,N=S-p,C=k-v;return E*E+A*A>N*N+C*C&&(_=S,w=k),[[_-c,w-l],[_*e/M,w*e/M]]}function ho(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=kt(e),p=kt(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Ar,r=Nr,u=Ne,i=go,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=zl.get(n)||go).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function go(n){return n.join("L")}function po(n){return go(n)+"Z"}function vo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function mo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function yo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function Mo(n,t){return n.length<4?go(n):n[1]+_o(n.slice(1,-1),wo(n,t))}function xo(n,t){return n.length<3?go(n):n[0]+_o((n.push(n[0]),n),wo([n[n.length-2]].concat(n,[n[1]]),t))}function bo(n,t){return n.length<3?go(n):n[0]+_o(n,wo(n,t))}function _o(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return go(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function wo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function So(n){if(n.length<3)return go(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",No(Tl,o),",",No(Tl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Co(c,o,a);return n.pop(),c.push("L",r),c.join("")}function ko(n){if(n.length<4)return go(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(No(Tl,i)+","+No(Tl,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),Co(e,i,o);return e.join("")}function Eo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[No(Tl,o),",",No(Tl,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Co(t,o,a);return t.join("")}function Ao(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return So(n)}function No(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Co(n,t,e){n.push("C",No(ql,t),",",No(ql,e),",",No(Ll,t),",",No(Ll,e),",",No(Tl,t),",",No(Tl,e))}function zo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function qo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=zo(u,i);++t<e;)r[t]=(o+(o=zo(u=i,i=n[t+1])))/2;return r[t]=o,r}function Lo(n){for(var t,e,r,u,i=[],o=qo(n),a=-1,c=n.length-1;++a<c;)t=zo(n[a],n[a+1]),va(t)<Ta?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function To(n){return n.length<3?go(n):n[0]+_o(n,Lo(n))}function Ro(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-ja,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Do(n){function t(t){function c(){v.push("M",a(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=kt(e),b=kt(u),_=e===r?function(){return g}:kt(r),w=u===i?function(){return p}:kt(i);++y<M;)o.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Nr,o=Ne,a=go,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=zl.get(n)||go).key,l=a.reverse||a,s=a.closed?"M":"L",t):c
},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Po(n){return n.radius}function Uo(n){return[n.x,n.y]}function jo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-ja;return[e*Math.cos(r),e*Math.sin(r)]}}function Fo(){return 64}function Ho(){return"circle"}function Oo(n){var t=Math.sqrt(n/Da);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Yo(n){return function(){var t,e;(t=this[n])&&(e=t[t.active])&&(--t.count?(delete t[t.active],t.active+=.5):delete this[n],e.event&&e.event.interrupt.call(this,this.__data__,e.index))}}function Io(n,t,e){return xa(n,Hl),n.namespace=t,n.id=e,n}function Zo(n,t,e,r){var u=n.id,i=n.namespace;return H(n,"function"==typeof e?function(n,o,a){n[i][u].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Vo(n){return null==n&&(n=""),function(){this.textContent=n}}function Xo(n){return null==n?"__transition__":"__transition_"+n+"__"}function $o(n,t,e,r,u){var i=n[e]||(n[e]={active:0,count:0}),o=i[r];if(!o){var c=u.time;o=i[r]={tween:new a,time:c,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++i.count,ta.timer(function(u){function a(e){if(i.active>r)return s();var u=i[i.active];u&&(--i.count,delete i[i.active],u.event&&u.event.interrupt.call(n,n.__data__,u.index)),i.active=r,o.event&&o.event.start.call(n,n.__data__,t),o.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&v.push(r)}),h=o.ease,f=o.duration,ta.timer(function(){return p.c=l(e||1)?Ne:l,1},0,c)}function l(e){if(i.active!==r)return 1;for(var u=e/f,a=h(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,n.__data__,t),s()):void 0}function s(){return--i.count?delete i[r]:delete n[e],1}var f,h,g=o.delay,p=oc,v=[];return p.t=g+c,u>=g?a(u-g):(p.c=a,void 0)},0,c)}}function Bo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Wo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Jo(n){return n.toISOString()}function Go(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=ta.bisect(Wl,u);return i==Wl.length?[t.year,Vi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Wl[i-1]<Wl[i]/u?i-1:i]:[Kl,Vi(n,e)[2]]}return r.invert=function(t){return Ko(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ko)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Ko(+e+1),t).length}var i=r.domain(),o=Pi(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Fi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Ko(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Ko(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Pi(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Ko(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Go(n.copy(),t,e)},Ii(r,n)}function Ko(n){return new Date(n)}function Qo(n){return JSON.parse(n.responseText)}function na(n){var t=ua.createRange();return t.selectNode(ua.body),t.createContextualFragment(n.responseText)}var ta={version:"3.5.2"};Date.now||(Date.now=function(){return+new Date});var ea=[].slice,ra=function(n){return ea.call(n)},ua=document,ia=ua.documentElement,oa=window;try{ra(ia.childNodes)[0].nodeType}catch(aa){ra=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{ua.createElement("div").style.setProperty("opacity",0,"")}catch(ca){var la=oa.Element.prototype,sa=la.setAttribute,fa=la.setAttributeNS,ha=oa.CSSStyleDeclaration.prototype,ga=ha.setProperty;la.setAttribute=function(n,t){sa.call(this,n,t+"")},la.setAttributeNS=function(n,t,e){fa.call(this,n,t,e+"")},ha.setProperty=function(n,t,e){ga.call(this,n,t+"",e)}}ta.ascending=n,ta.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},ta.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},ta.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},ta.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},ta.sum=function(n,t){var r,u=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)e(r=+n[o])&&(u+=r);else for(;++o<i;)e(r=+t.call(n,n[o],o))&&(u+=r);return u},ta.mean=function(n,r){var u,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)e(u=t(n[a]))?i+=u:--c;else for(;++a<o;)e(u=t(r.call(n,n[a],a)))?i+=u:--c;return c?i/c:void 0},ta.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},ta.median=function(r,u){var i,o=[],a=r.length,c=-1;if(1===arguments.length)for(;++c<a;)e(i=t(r[c]))&&o.push(i);else for(;++c<a;)e(i=t(u.call(r,r[c],c)))&&o.push(i);return o.length?ta.quantile(o.sort(n),.5):void 0},ta.variance=function(n,r){var u,i,o=n.length,a=0,c=0,l=-1,s=0;if(1===arguments.length)for(;++l<o;)e(u=t(n[l]))&&(i=u-a,a+=i/++s,c+=i*(u-a));else for(;++l<o;)e(u=t(r.call(n,n[l],l)))&&(i=u-a,a+=i/++s,c+=i*(u-a));return s>1?c/(s-1):void 0},ta.deviation=function(){var n=ta.variance.apply(this,arguments);return n?Math.sqrt(n):n};var pa=r(n);ta.bisectLeft=pa.left,ta.bisect=ta.bisectRight=pa.right,ta.bisector=function(t){return r(1===t.length?function(e,r){return n(t(e),r)}:t)},ta.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=0|Math.random()*i--,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},ta.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ta.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},ta.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=ta.min(arguments,u),e=new Array(t);++n<t;)for(var r,i=-1,o=e[n]=new Array(r);++i<r;)o[i]=arguments[i][n];return e},ta.transpose=function(n){return ta.zip.apply(ta,n)},ta.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ta.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ta.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ta.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var va=Math.abs;ta.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,u=[],o=i(va(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)u.push(r/o);else for(;(r=n+e*++a)<t;)u.push(r/o);return u},ta.map=function(n,t){var e=new a;if(n instanceof a)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var o in n)e.set(o,n[o]);return e};var da="__proto__",ma="\x00";o(a,{has:s,get:function(n){return this._[c(n)]},set:function(n,t){return this._[c(n)]=t},remove:f,keys:h,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:l(t),value:this._[t]});return n},size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t),this._[t])}}),ta.nest=function(){function n(t,o,c){if(c>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,v=i[c++],d=new a;++g<p;)(h=d.get(l=v(s=o[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(ta.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},ta.set=function(n){var t=new v;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},o(v,{has:s,add:function(n){return this._[c(n+="")]=!0,n},remove:f,values:h,size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t))}}),ta.behavior={},ta.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=d(n,t,t[e]);return n};var ya=["webkit","ms","moz","Moz","o","O"];ta.dispatch=function(){for(var n=new M,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=x(n);return n},M.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ta.event=null,ta.requote=function(n){return n.replace(Ma,"\\$&")};var Ma=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,xa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ba=function(n,t){return t.querySelector(n)},_a=function(n,t){return t.querySelectorAll(n)},wa=ia.matches||ia[m(ia,"matchesSelector")],Sa=function(n,t){return wa.call(n,t)};"function"==typeof Sizzle&&(ba=function(n,t){return Sizzle(n,t)[0]||null},_a=Sizzle,Sa=Sizzle.matchesSelector),ta.selection=function(){return Na};var ka=ta.selection.prototype=[];ka.select=function(n){var t,e,r,u,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return S(i)},ka.selectAll=function(n){var t,e,r=[];n=E(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=ra(n.call(e,e.__data__,a,u))),t.parentNode=e);return S(r)};var Ea={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ta.ns={prefix:Ea,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),Ea.hasOwnProperty(e)?{space:Ea[e],local:n}:n}},ka.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ta.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(A(t,n[t]));return this}return this.each(A(n,t))},ka.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=z(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!C(n[u]).test(t))return!1;return!0}for(t in n)this.each(q(t,n[t]));return this}return this.each(q(n,t))},ka.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(T(e,n[e],t));return this}if(2>r)return oa.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(T(n,t,e))},ka.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},ka.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ka.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ka.append=function(n){return n=D(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ka.insert=function(n,t){return n=D(n),t=k(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ka.remove=function(){return this.each(P)},ka.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new a,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=U(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=U(i);for(;f>r;++r)p[r]=U(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),l.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var c=O([]),l=S([]),s=S([]);if("function"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return l.enter=function(){return c},l.exit=function(){return s},l},ka.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ka.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=j(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return S(u)},ka.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},ka.sort=function(n){n=F.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},ka.each=function(n){return H(this,function(t,e,r){n.call(t,t.__data__,e,r)})},ka.call=function(n){var t=ra(arguments);return n.apply(t[0]=this,t),this},ka.empty=function(){return!this.node()},ka.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},ka.size=function(){var n=0;return H(this,function(){++n}),n};var Aa=[];ta.selection.enter=O,ta.selection.enter.prototype=Aa,Aa.append=ka.append,Aa.empty=ka.empty,Aa.node=ka.node,Aa.call=ka.call,Aa.size=ka.size,Aa.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return S(o)},Aa.insert=function(n,t){return arguments.length<2&&(t=Y(this)),ka.insert.call(this,n,t)},ta.select=function(n){var t=["string"==typeof n?ba(n,ua):n];return t.parentNode=ia,S([t])},ta.selectAll=function(n){var t=ra("string"==typeof n?_a(n,ua):n);return t.parentNode=ia,S([t])};var Na=ta.select(ia);ka.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(I(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(I(n,t,e))};var Ca=ta.map({mouseenter:"mouseover",mouseleave:"mouseout"});Ca.forEach(function(n){"on"+n in ua&&Ca.remove(n)});var za="onselectstart"in ua?null:m(ia.style,"userSelect"),qa=0;ta.mouse=function(n){return $(n,_())};var La=/WebKit/.test(oa.navigator.userAgent)?-1:0;ta.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=_().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return $(n,r)},ta.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&ta.event.target===f),g({type:"dragend"}))}var l,s=this,f=ta.event.target,h=s.parentNode,g=e.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=ta.select(u()).on(i+d,a).on(o+d,c),y=X(),M=t(h,v);r?(l=r.apply(s,arguments),l=[l.x-M[0],l.y-M[1]]):l=[0,0],g({type:"dragstart"})}}var e=w(n,"drag","dragstart","dragend"),r=null,u=t(y,ta.mouse,J,"mousemove","mouseup"),i=t(B,ta.touch,W,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},ta.rebind(n,e,"on")},ta.touches=function(n,t){return arguments.length<2&&(t=_().touches),t?ra(t).map(function(t){var e=$(n,t);return e.identifier=t.identifier,e}):[]};var Ta=1e-6,Ra=Ta*Ta,Da=Math.PI,Pa=2*Da,Ua=Pa-Ta,ja=Da/2,Fa=Da/180,Ha=180/Da,Oa=Math.SQRT2,Ya=2,Ia=4;ta.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=et(v),o=i/(Ya*h)*(e*rt(Oa*t+v)-tt(v));return[r+o*l,u+o*s,i*e/et(Oa*t+v)]}return[r+n*l,u+n*s,i*Math.exp(Oa*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Ia*f)/(2*i*Ya*h),p=(c*c-i*i-Ia*f)/(2*c*Ya*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Oa;return e.duration=1e3*y,e},ta.behavior.zoom=function(){function n(n){n.on(z,s).on(Xa+".zoom",h).on("dblclick.zoom",g).on(T,f)}function t(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function e(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function r(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=e(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function i(t,e,i,o){t.__chart__={x:k.x,y:k.y,k:k.k},r(Math.pow(2,o)),u(v=e,i),t=ta.select(t),N>0&&(t=t.transition().duration(N)),t.call(n.event)}function o(){x&&x.domain(M.range().map(function(n){return(n-k.x)/k.k}).map(M.invert)),S&&S.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function a(n){C++||n({type:"zoomstart"})}function c(n){o(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function l(n){--C||n({type:"zoomend"}),v=null}function s(){function n(){s=1,u(ta.mouse(r),h),c(o)}function e(){f.on(q,null).on(L,null),g(s&&ta.event.target===i),l(o)}var r=this,i=ta.event.target,o=R.of(r,arguments),s=0,f=ta.select(oa).on(q,n).on(L,e),h=t(ta.mouse(r)),g=X();Fl.call(r),a(o)}function f(){function n(){var n=ta.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=t(n))}),n}function e(){var t=ta.event.target;ta.select(t).on(x,o).on(_,h),w.push(t);for(var e=ta.event.changedTouches,r=0,u=e.length;u>r;++r)d[e[r].identifier]=null;var a=n(),c=Date.now();if(1===a.length){if(500>c-y){var l=a[0];i(p,l,d[l.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),b()}y=c}else if(a.length>1){var l=a[0],s=a[1],f=l[0]-s[0],g=l[1]-s[1];m=f*f+g*g}}function o(){var n,t,e,i,o=ta.touches(p);Fl.call(p);for(var a=0,l=o.length;l>a;++a,i=null)if(e=o[a],i=d[e.identifier]){if(t)break;n=e,t=i}if(i){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*g)}y=null,u(n,t),c(v)}function h(){if(ta.event.touches.length){for(var t=ta.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}ta.selectAll(w).on(M,null),S.on(z,s).on(T,f),E(),l(v)}var g,p=this,v=R.of(p,arguments),d={},m=0,M=".zoom-"+ta.event.changedTouches[0].identifier,x="touchmove"+M,_="touchend"+M,w=[],S=ta.select(p),E=X();e(),a(v),S.on(z,null).on(T,e)}function h(){var n=R.of(this,arguments);m?clearTimeout(m):(p=t(v=d||ta.mouse(this)),Fl.call(this),a(n)),m=setTimeout(function(){m=null,l(n)},50),b(),r(Math.pow(2,.002*Za())*k.k),u(v,p),c(n)}function g(){var n=ta.mouse(this),e=Math.log(k.k)/Math.LN2;i(this,n,t(n),ta.event.shiftKey?Math.ceil(e)-1:Math.floor(e)+1)}var p,v,d,m,y,M,x,_,S,k={x:0,y:0,k:1},E=[960,500],A=Va,N=250,C=0,z="mousedown.zoom",q="mousemove.zoom",L="mouseup.zoom",T="touchstart.zoom",R=w(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=R.of(this,arguments),t=k;Ul?ta.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},a(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=v?v[0]:e/2,i=v?v[1]:r/2,o=ta.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:u-r[0]*a,y:i-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){l(n)}).each("end.zoom",function(){l(n)}):(this.__chart__=k,a(n),c(n),l(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},o(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:+t},o(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Va:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(d=t&&[+t[0],+t[1]],n):d},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(N=+t,n):N},n.x=function(t){return arguments.length?(x=t,M=t.copy(),k={x:0,y:0,k:1},n):x},n.y=function(t){return arguments.length?(S=t,_=t.copy(),k={x:0,y:0,k:1},n):S},ta.rebind(n,R,"on")};var Za,Va=[0,1/0],Xa="onwheel"in ua?(Za=function(){return-ta.event.deltaY*(ta.event.deltaMode?120:1)},"wheel"):"onmousewheel"in ua?(Za=function(){return ta.event.wheelDelta},"mousewheel"):(Za=function(){return-ta.event.detail},"MozMousePixelScroll");ta.color=it,it.prototype.toString=function(){return this.rgb()+""},ta.hsl=ot;var $a=ot.prototype=new it;$a.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,this.l/n)},$a.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,n*this.l)},$a.rgb=function(){return at(this.h,this.s,this.l)},ta.hcl=ct;var Ba=ct.prototype=new it;Ba.brighter=function(n){return new ct(this.h,this.c,Math.min(100,this.l+Wa*(arguments.length?n:1)))},Ba.darker=function(n){return new ct(this.h,this.c,Math.max(0,this.l-Wa*(arguments.length?n:1)))},Ba.rgb=function(){return lt(this.h,this.c,this.l).rgb()},ta.lab=st;var Wa=18,Ja=.95047,Ga=1,Ka=1.08883,Qa=st.prototype=new it;Qa.brighter=function(n){return new st(Math.min(100,this.l+Wa*(arguments.length?n:1)),this.a,this.b)},Qa.darker=function(n){return new st(Math.max(0,this.l-Wa*(arguments.length?n:1)),this.a,this.b)},Qa.rgb=function(){return ft(this.l,this.a,this.b)},ta.rgb=dt;var nc=dt.prototype=new it;nc.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new dt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new dt(u,u,u)},nc.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new dt(n*this.r,n*this.g,n*this.b)},nc.hsl=function(){return bt(this.r,this.g,this.b)},nc.toString=function(){return"#"+Mt(this.r)+Mt(this.g)+Mt(this.b)};var tc=ta.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});tc.forEach(function(n,t){tc.set(n,mt(t))}),ta.functor=kt,ta.xhr=At(Et),ta.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Nt(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new v,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},ta.csv=ta.dsv(",","text/csv"),ta.tsv=ta.dsv("	","text/tab-separated-values");var ec,rc,uc,ic,oc,ac=oa[m(oa,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ta.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};rc?rc.n=i:ec=i,rc=i,uc||(ic=clearTimeout(ic),uc=1,ac(qt))},ta.timer.flush=function(){Lt(),Tt()},ta.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var cc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);ta.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=ta.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),cc[8+e/3]};var lc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,sc=ta.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ta.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),fc=ta.time={},hc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){gc.setUTCDate.apply(this._,arguments)},setDay:function(){gc.setUTCDay.apply(this._,arguments)},setFullYear:function(){gc.setUTCFullYear.apply(this._,arguments)},setHours:function(){gc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){gc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){gc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){gc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){gc.setUTCSeconds.apply(this._,arguments)},setTime:function(){gc.setTime.apply(this._,arguments)}};var gc=Date.prototype;fc.year=Ft(function(n){return n=fc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),fc.years=fc.year.range,fc.years.utc=fc.year.utc.range,fc.day=Ft(function(n){var t=new hc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),fc.days=fc.day.range,fc.days.utc=fc.day.utc.range,fc.dayOfYear=function(n){var t=fc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=fc[n]=Ft(function(n){return(n=fc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=fc.year(n).getDay();return Math.floor((fc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});fc[n+"s"]=e.range,fc[n+"s"].utc=e.utc.range,fc[n+"OfYear"]=function(n){var e=fc.year(n).getDay();return Math.floor((fc.dayOfYear(n)+(e+t)%7)/7)}}),fc.week=fc.sunday,fc.weeks=fc.sunday.range,fc.weeks.utc=fc.sunday.utc.range,fc.weekOfYear=fc.sundayOfYear;var pc={"-":"",_:" ",0:"0"},vc=/^\s*\d+/,dc=/^%/;ta.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var mc=ta.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ta.format=mc.numberFormat,ta.geo={},ce.prototype={s:0,t:0,add:function(n){le(n,this.t,yc),le(yc.s,this.s,this),this.s?this.t+=yc.t:this.s=yc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var yc=new ce;ta.geo.stream=function(n,t){n&&Mc.hasOwnProperty(n.type)?Mc[n.type](n,t):se(n,t)};var Mc={Feature:function(n,t){se(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)se(e[r].geometry,t)}},xc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])
},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)se(e[r],t)}};ta.geo.area=function(n){return bc=0,ta.geo.stream(n,wc),bc};var bc,_c=new ce,wc={sphere:function(){bc+=4*Da},point:y,lineStart:y,lineEnd:y,polygonStart:function(){_c.reset(),wc.lineStart=ge},polygonEnd:function(){var n=2*_c;bc+=0>n?4*Da+n:n,wc.lineStart=wc.lineEnd=wc.point=y}};ta.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*Fa,e*Fa]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);Me(o),o=xe(o);var c=t-p,l=c>0?1:-1,v=o[0]*Ha*l,d=va(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Ha;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Ha;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=va(r)>180?r+(r>0?360:-360):r}else v=n,d=e;wc.point(n,e),t(n,e)}function i(){wc.lineStart()}function o(){u(v,d),wc.lineEnd(),va(y)>Ta&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=o,y=0,wc.polygonStart()},polygonEnd:function(){wc.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>_c?(s=-(h=180),f=-(g=90)):y>Ta?g=90:-Ta>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],ta.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),ta.geo.centroid=function(n){Sc=kc=Ec=Ac=Nc=Cc=zc=qc=Lc=Tc=Rc=0,ta.geo.stream(n,Dc);var t=Lc,e=Tc,r=Rc,u=t*t+e*e+r*r;return Ra>u&&(t=Cc,e=zc,r=qc,Ta>kc&&(t=Ec,e=Ac,r=Nc),u=t*t+e*e+r*r,Ra>u)?[0/0,0/0]:[Math.atan2(e,t)*Ha,nt(r/Math.sqrt(u))*Ha]};var Sc,kc,Ec,Ac,Nc,Cc,zc,qc,Lc,Tc,Rc,Dc={sphere:y,point:_e,lineStart:Se,lineEnd:ke,polygonStart:function(){Dc.lineStart=Ee},polygonEnd:function(){Dc.lineStart=Se}},Pc=Le(Ne,Pe,je,[-Da,-Da/2]),Uc=1e9;ta.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Ye(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ta.geo.conicEqualArea=function(){return Ie(Ze)}).raw=Ze,ta.geo.albers=function(){return ta.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ta.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=ta.geo.albers(),o=ta.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ta.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Ta,f+.12*l+Ta],[s-.214*l-Ta,f+.234*l-Ta]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Ta,f+.166*l+Ta],[s-.115*l-Ta,f+.234*l-Ta]]).stream(c).point,n},n.scale(1070)};var jc,Fc,Hc,Oc,Yc,Ic,Zc={point:y,lineStart:y,lineEnd:y,polygonStart:function(){Fc=0,Zc.lineStart=Ve},polygonEnd:function(){Zc.lineStart=Zc.lineEnd=Zc.point=y,jc+=va(Fc/2)}},Vc={point:Xe,lineStart:y,lineEnd:y,polygonStart:y,polygonEnd:y},Xc={point:We,lineStart:Je,lineEnd:Ge,polygonStart:function(){Xc.lineStart=Ke},polygonEnd:function(){Xc.point=We,Xc.lineStart=Je,Xc.lineEnd=Ge}};ta.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),ta.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return jc=0,ta.geo.stream(n,u(Zc)),jc},n.centroid=function(n){return Ec=Ac=Nc=Cc=zc=qc=Lc=Tc=Rc=0,ta.geo.stream(n,u(Xc)),Rc?[Lc/Rc,Tc/Rc]:qc?[Cc/qc,zc/qc]:Nc?[Ec/Nc,Ac/Nc]:[0/0,0/0]},n.bounds=function(n){return Yc=Ic=-(Hc=Oc=1/0),ta.geo.stream(n,u(Vc)),[[Hc,Oc],[Yc,Ic]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):Et,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new $e:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(ta.geo.albersUsa()).context(null)},ta.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ta.geo.projection=ur,ta.geo.projectionMutator=ir,(ta.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,ta.geo.rotation=function(n){function t(t){return t=n(t[0]*Fa,t[1]*Fa),t[0]*=Ha,t[1]*=Ha,t}return n=lr(n[0]%360*Fa,n[1]*Fa,n.length>2?n[2]*Fa:0),t.invert=function(t){return t=n.invert(t[0]*Fa,t[1]*Fa),t[0]*=Ha,t[1]*=Ha,t},t},cr.invert=ar,ta.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=lr(-n[0]*Fa,-n[1]*Fa,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ha,n[1]*=Ha}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*Fa,u*Fa),n):t},n.precision=function(r){return arguments.length?(e=gr(t*Fa,(u=+r)*Fa),n):u},n.angle(90)},ta.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Fa,u=n[1]*Fa,i=t[1]*Fa,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},ta.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ta.range(Math.ceil(i/d)*d,u,d).map(h).concat(ta.range(Math.ceil(l/m)*m,c,m).map(g)).concat(ta.range(Math.ceil(r/p)*p,e,p).filter(function(n){return va(n%d)>Ta}).map(s)).concat(ta.range(Math.ceil(a/v)*v,o,v).filter(function(n){return va(n%m)>Ta}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=vr(a,o,90),f=dr(r,e,y),h=vr(l,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Ta],[180,90-Ta]]).minorExtent([[-180,-80-Ta],[180,80+Ta]])},ta.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return ta.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},ta.geo.interpolate=function(n,t){return Mr(n[0]*Fa,n[1]*Fa,t[0]*Fa,t[1]*Fa)},ta.geo.length=function(n){return $c=0,ta.geo.stream(n,Bc),$c};var $c,Bc={sphere:y,point:y,lineStart:xr,lineEnd:y,polygonStart:y,polygonEnd:y},Wc=br(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ta.geo.azimuthalEqualArea=function(){return ur(Wc)}).raw=Wc;var Jc=br(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},Et);(ta.geo.azimuthalEquidistant=function(){return ur(Jc)}).raw=Jc,(ta.geo.conicConformal=function(){return Ie(_r)}).raw=_r,(ta.geo.conicEquidistant=function(){return Ie(wr)}).raw=wr;var Gc=br(function(n){return 1/n},Math.atan);(ta.geo.gnomonic=function(){return ur(Gc)}).raw=Gc,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-ja]},(ta.geo.mercator=function(){return kr(Sr)}).raw=Sr;var Kc=br(function(){return 1},Math.asin);(ta.geo.orthographic=function(){return ur(Kc)}).raw=Kc;var Qc=br(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ta.geo.stereographic=function(){return ur(Qc)}).raw=Qc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-ja]},(ta.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Er,ta.geom={},ta.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=kt(e),i=kt(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(zr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=Cr(a),s=Cr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Ar,r=Nr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ta.geom.polygon=function(n){return xa(n,nl),n};var nl=ta.geom.polygon.prototype=[];nl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},nl.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},nl.clip=function(n){for(var t,e,r,u,i,o,a=Tr(n),c=-1,l=this.length-Tr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],qr(o,s,u)?(qr(i,s,u)||n.push(Lr(i,o,s,u)),n.push(o)):qr(i,s,u)&&n.push(Lr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var tl,el,rl,ul,il,ol=[],al=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ir),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},ta.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ta)*Ta,y:Math.round(o(n,t)/Ta)*Ta,i:t}})}var r=Ar,u=Nr,i=r,o=u,a=cl;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Ir),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=kt(r=n),t):r},t.y=function(n){return arguments.length?(o=kt(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?cl:n,t):a===cl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===cl?null:a&&a[1]},t)};var cl=[[-1e6,-1e6],[1e6,1e6]];ta.geom.delaunay=function(n){return ta.geom.voronoi().triangles(n)},ta.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(va(c-e)+va(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=su()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,M=kt(a),x=kt(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=su();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},k.find=function(n){return hu(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Ar,c=Nr;return(o=arguments.length)?(a=cu,c=lu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},ta.interpolateRgb=gu,ta.interpolateObject=pu,ta.interpolateNumber=vu,ta.interpolateString=du;var ll=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sl=new RegExp(ll.source,"g");ta.interpolate=mu,ta.interpolators=[function(n,t){var e=typeof t;return("string"===e?tc.has(t)||/^(#|rgb\(|hsl\()/.test(t)?gu:du:t instanceof it?gu:Array.isArray(t)?yu:"object"===e&&isNaN(t)?pu:vu)(n,t)}],ta.interpolateArray=yu;var fl=function(){return Et},hl=ta.map({linear:fl,poly:ku,quad:function(){return _u},cubic:function(){return wu},sin:function(){return Eu},exp:function(){return Au},circle:function(){return Nu},elastic:Cu,back:zu,bounce:function(){return qu}}),gl=ta.map({"in":Et,out:xu,"in-out":bu,"out-in":function(n){return bu(xu(n))}});ta.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=hl.get(e)||fl,r=gl.get(r)||Et,Mu(r(e.apply(null,ea.call(arguments,1))))},ta.interpolateHcl=Lu,ta.interpolateHsl=Tu,ta.interpolateLab=Ru,ta.interpolateRound=Du,ta.transform=function(n){var t=ua.createElementNS(ta.ns.prefix.svg,"g");return(ta.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Pu(e?e.matrix:pl)})(n)},Pu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var pl={a:1,b:0,c:0,d:1,e:0,f:0};ta.interpolateTransform=Hu,ta.layout={},ta.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Iu(n[e]));return t}},ta.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=ta.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(ta.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Pa-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ta.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=ta.event.x,n.py=ta.event.y,a.resume()}var e,r,u,i,o,a={},c=ta.dispatch("start","tick","end"),l=[1,1],s=.9,f=vl,h=dl,g=-30,p=ml,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,M,x,b=m.length,_=y.length;for(e=0;_>e;++e)a=y[e],f=a.source,h=a.target,M=h.x-f.x,x=h.y-f.y,(p=M*M+x*x)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,M*=p,x*=p,h.x-=M*(d=f.weight/(h.weight+f.weight)),h.y-=x*d,f.x+=M*(d=1-d),f.y+=x*d);if((d=r*v)&&(M=l[0]/2,x=l[1]/2,e=-1,d))for(;++e<b;)a=m[e],a.x+=(M-a.x)*d,a.y+=(x-a.y)*d;if(g)for(Ju(t=ta.geom.quadtree(m),r,o),e=-1;++e<b;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<b;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),ta.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;l>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=y.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=ta.behavior.drag().origin(Et).on("dragstart.force",Xu).on("drag.force",t).on("dragend.force",$u)),arguments.length?(this.on("mouseover.force",Bu).on("mouseout.force",Wu).call(e),void 0):e},ta.rebind(a,c,"on")};var vl=20,dl=1,ml=1/0;ta.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Qu(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ei,e=ni,r=ti;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Ku(t,function(n){n.children&&(n.value=0)}),Qu(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ta.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=ta.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Gu(e,r)},ta.layout.pie=function(){function n(o){var a,c=o.length,l=o.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/c,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=(f-c*g)/ta.sum(l),v=ta.range(c),d=[];return null!=e&&v.sort(e===yl?function(n,t){return l[t]-l[n]}:function(n,t){return e(o[n],o[t])}),v.forEach(function(n){d[n]={data:o[n],value:a=l[n],startAngle:s,endAngle:s+=a*p+g,padAngle:h}}),d}var t=Number,e=yl,r=0,u=Pa,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var yl={};ta.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=ta.permute(l,f),s=ta.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=Et,e=ai,r=ci,u=oi,i=ui,o=ii;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Ml.get(t)||ai,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:xl.get(t)||ci,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var Ml=ta.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(li),i=n.map(si),o=ta.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return ta.range(n.length).reverse()},"default":ai}),xl=ta.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ci});ta.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[ta.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=pi,u=hi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=kt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return gi(n,t)}:kt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ta.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Qu(a,function(n){n.r=+s(n.value)}),Qu(a,Mi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;Qu(a,function(n){n.r+=f}),Qu(a,Mi),Qu(a,function(n){n.r-=f})}return _i(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=ta.layout.hierarchy().sort(vi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Gu(n,e)},ta.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(Qu(h,e),h.parent.m=-h.z,Ku(h,r),l)Ku(f,i);else{var g=f,p=f,v=f;Ku(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Ku(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ni(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=Ei(o),u=ki(u),o&&u;)c=ki(c),i=Ei(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ai(Ci(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!Ei(i)&&(i.t=o,i.m+=f-s),u&&!ki(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=ta.layout.hierarchy().sort(null).value(null),a=Si,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Gu(n,o)},ta.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;Qu(c,function(n){var t=n.children;t&&t.length?(n.x=qi(t),n.y=zi(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Li(c),f=Ti(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Qu(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=ta.layout.hierarchy().sort(null).value(null),e=Si,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Gu(n,t)},ta.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=ta.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Ri,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ri(t):Di(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Di(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ri:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h
},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Gu(i,a)},ta.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=ta.random.normal.apply(ta,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ta.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ta.scale={};var bl={floor:Et,ceil:Et};ta.scale.linear=function(){return Yi([0,1],[0,1],mu,!1)};var _l={s:1,g:1,p:1,r:1,e:1};ta.scale.log=function(){return Ji(ta.scale.linear().domain([0,1]),10,!0,[1,10])};var wl=ta.format(".0e"),Sl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ta.scale.pow=function(){return Gi(ta.scale.linear(),1,[0,1])},ta.scale.sqrt=function(){return ta.scale.pow().exponent(.5)},ta.scale.ordinal=function(){return Qi([],{t:"range",a:[[]]})},ta.scale.category10=function(){return ta.scale.ordinal().range(kl)},ta.scale.category20=function(){return ta.scale.ordinal().range(El)},ta.scale.category20b=function(){return ta.scale.ordinal().range(Al)},ta.scale.category20c=function(){return ta.scale.ordinal().range(Nl)};var kl=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(yt),El=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(yt),Al=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(yt),Nl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(yt);ta.scale.quantile=function(){return no([],[])},ta.scale.quantize=function(){return to(0,1,[0,1])},ta.scale.threshold=function(){return eo([.5],[0,1])},ta.scale.identity=function(){return ro([0,1])},ta.svg={},ta.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),l=Math.max(0,+r.apply(this,arguments)),s=o.apply(this,arguments)-ja,f=a.apply(this,arguments)-ja,h=Math.abs(f-s),g=s>f?0:1;if(n>l&&(p=l,l=n,n=p),h>=Ua)return t(l,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,E=0,A=0,N=[];if((m=(+c.apply(this,arguments)||0)/2)&&(d=i===Cl?Math.sqrt(n*n+l*l):+i.apply(this,arguments),g||(A*=-1),l&&(A=nt(d/l*Math.sin(m))),n&&(E=nt(d/n*Math.sin(m)))),l){y=l*Math.cos(s+A),M=l*Math.sin(s+A),x=l*Math.cos(f-A),b=l*Math.sin(f-A);var C=Math.abs(f-s-2*A)<=Da?0:1;if(A&&so(y,M,x,b)===g^C){var z=(s+f)/2;y=l*Math.cos(z),M=l*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-E),w=n*Math.sin(f-E),S=n*Math.cos(s+E),k=n*Math.sin(s+E);var q=Math.abs(s-f+2*E)<=Da?0:1;if(E&&so(_,w,S,k)===1-g^q){var L=(s+f)/2;_=n*Math.cos(L),w=n*Math.sin(L),S=k=null}}else _=w=0;if((p=Math.min(Math.abs(l-n)/2,+u.apply(this,arguments)))>.001){v=l>n^g?0:1;var T=null==S?[_,w]:null==x?[y,M]:Lr([y,M],[S,k],[x,b],[_,w]),R=y-T[0],D=M-T[1],P=x-T[0],U=b-T[1],j=1/Math.sin(Math.acos((R*P+D*U)/(Math.sqrt(R*R+D*D)*Math.sqrt(P*P+U*U)))/2),F=Math.sqrt(T[0]*T[0]+T[1]*T[1]);if(null!=x){var H=Math.min(p,(l-F)/(j+1)),O=fo(null==S?[_,w]:[S,k],[y,M],l,H,g),Y=fo([x,b],[_,w],l,H,g);p===H?N.push("M",O[0],"A",H,",",H," 0 0,",v," ",O[1],"A",l,",",l," 0 ",1-g^so(O[1][0],O[1][1],Y[1][0],Y[1][1]),",",g," ",Y[1],"A",H,",",H," 0 0,",v," ",Y[0]):N.push("M",O[0],"A",H,",",H," 0 1,",v," ",Y[0])}else N.push("M",y,",",M);if(null!=S){var I=Math.min(p,(n-F)/(j-1)),Z=fo([y,M],[S,k],n,-I,g),V=fo([_,w],null==x?[y,M]:[x,b],n,-I,g);p===I?N.push("L",V[0],"A",I,",",I," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^so(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",I,",",I," 0 0,",v," ",Z[0]):N.push("L",V[0],"A",I,",",I," 0 0,",v," ",Z[0])}else N.push("L",_,",",w)}else N.push("M",y,",",M),null!=x&&N.push("A",l,",",l," 0 ",C,",",g," ",x,",",b),N.push("L",_,",",w),null!=S&&N.push("A",n,",",n," 0 ",q,",",1-g," ",S,",",k);return N.push("Z"),N.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=io,r=oo,u=uo,i=Cl,o=ao,a=co,c=lo;return n.innerRadius=function(t){return arguments.length?(e=kt(t),n):e},n.outerRadius=function(t){return arguments.length?(r=kt(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=kt(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==Cl?Cl:kt(t),n):i},n.startAngle=function(t){return arguments.length?(o=kt(t),n):o},n.endAngle=function(t){return arguments.length?(a=kt(t),n):a},n.padAngle=function(t){return arguments.length?(c=kt(t),n):c},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-ja;return[Math.cos(t)*n,Math.sin(t)*n]},n};var Cl="auto";ta.svg.line=function(){return ho(Et)};var zl=ta.map({linear:go,"linear-closed":po,step:vo,"step-before":mo,"step-after":yo,basis:So,"basis-open":ko,"basis-closed":Eo,bundle:Ao,cardinal:bo,"cardinal-open":Mo,"cardinal-closed":xo,monotone:To});zl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var ql=[0,2/3,1/3,0],Ll=[0,1/3,2/3,0],Tl=[0,1/6,2/3,1/6];ta.svg.line.radial=function(){var n=ho(Ro);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},mo.reverse=yo,yo.reverse=mo,ta.svg.area=function(){return Do(Et)},ta.svg.area.radial=function(){var n=Do(Ro);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ta.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)-ja,s=l.call(n,u,r)-ja;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Da)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Po,c=ao,l=co;return n.radius=function(t){return arguments.length?(a=kt(t),n):a},n.source=function(t){return arguments.length?(i=kt(t),n):i},n.target=function(t){return arguments.length?(o=kt(t),n):o},n.startAngle=function(t){return arguments.length?(c=kt(t),n):c},n.endAngle=function(t){return arguments.length?(l=kt(t),n):l},n},ta.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=Uo;return n.source=function(e){return arguments.length?(t=kt(e),n):t},n.target=function(t){return arguments.length?(e=kt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ta.svg.diagonal.radial=function(){var n=ta.svg.diagonal(),t=Uo,e=n.projection;return n.projection=function(n){return arguments.length?e(jo(t=n)):t},n},ta.svg.symbol=function(){function n(n,r){return(Rl.get(t.call(this,n,r))||Oo)(e.call(this,n,r))}var t=Ho,e=Fo;return n.type=function(e){return arguments.length?(t=kt(e),n):t},n.size=function(t){return arguments.length?(e=kt(t),n):e},n};var Rl=ta.map({circle:Oo,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Pl)),e=t*Pl;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Dl),e=t*Dl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Dl),e=t*Dl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ta.svg.symbolTypes=Rl.keys();var Dl=Math.sqrt(3),Pl=Math.tan(30*Fa);ka.transition=function(n){for(var t,e,r=Ul||++Ol,u=Xo(n),i=[],o=jl||{time:Date.now(),ease:Su,delay:0,duration:250},a=-1,c=this.length;++a<c;){i.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(e=l[s])&&$o(e,s,u,r,o),t.push(e)}return Io(i,u,r)},ka.interrupt=function(n){return this.each(null==n?Fl:Yo(Xo(n)))};var Ul,jl,Fl=Yo(Xo()),Hl=[],Ol=0;Hl.call=ka.call,Hl.empty=ka.empty,Hl.node=ka.node,Hl.size=ka.size,ta.transition=function(n,t){return n&&n.transition?Ul?n.transition(t):n:Na.transition(n)},ta.transition.prototype=Hl,Hl.select=function(n){var t,e,r,u=this.id,i=this.namespace,o=[];n=k(n);for(var a=-1,c=this.length;++a<c;){o.push(t=[]);for(var l=this[a],s=-1,f=l.length;++s<f;)(r=l[s])&&(e=n.call(r,r.__data__,s,a))?("__data__"in r&&(e.__data__=r.__data__),$o(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Io(o,i,u)},Hl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=this.namespace,c=[];n=E(n);for(var l=-1,s=this.length;++l<s;)for(var f=this[l],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[a][o],e=n.call(r,r.__data__,h,l),c.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&$o(u,p,a,o,i),t.push(u)}return Io(c,a,o)},Hl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=j(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Io(u,this.namespace,this.id)},Hl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):H(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Hl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Hu:mu,a=ta.ns.qualify(n);return Zo(this,"attr."+n,t,a.local?i:u)},Hl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=ta.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Hl.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=oa.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=mu(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Zo(this,"style."+n,t,u)},Hl.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,oa.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Hl.text=function(n){return Zo(this,"text",n,Vo)},Hl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Hl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ta.ease.apply(ta,arguments)),H(this,function(r){r[e][t].ease=n}))},Hl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:H(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Hl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:H(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Hl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=jl,i=Ul;try{Ul=e,H(this,function(t,u,i){jl=t[r][e],n.call(t,t.__data__,u,i)})}finally{jl=u,Ul=i}}else H(this,function(u){var i=u[r][e];(i.event||(i.event=ta.dispatch("start","end","interrupt"))).on(n,t)});return this},Hl.transition=function(){for(var n,t,e,r,u=this.id,i=++Ol,o=this.namespace,a=[],c=0,l=this.length;l>c;c++){a.push(n=[]);for(var t=this[c],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[o][u],$o(e,s,o,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Io(a,o,i)},ta.svg.axis=function(){function n(n){n.each(function(){var n,l=ta.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):Et:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ta),d=ta.transition(p.exit()).style("opacity",Ta).remove(),m=ta.transition(p.order()).style("opacity",1),y=Math.max(u,0)+o,M=Ui(f),x=l.selectAll(".domain").data([0]),b=(x.enter().append("path").attr("class","domain"),ta.transition(x));v.append("line"),v.append("text");var _,w,S,k,E=v.select("line"),A=m.select("line"),N=p.select("text").text(g),C=v.select("text"),z=m.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Bo,_="x",S="y",w="x2",k="y2",N.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),b.attr("d","M"+M[0]+","+q*i+"V0H"+M[1]+"V"+q*i)):(n=Wo,_="y",S="x",w="y2",k="x2",N.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),b.attr("d","M"+q*i+","+M[0]+"H0V"+M[1]+"H"+q*i)),E.attr(k,q*u),C.attr(S,q*y),A.attr(w,0).attr(k,q*u),z.attr(_,0).attr(S,q*y),f.rangeBand){var L=f,T=L.rangeBand()/2;s=f=function(n){return L(n)+T}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=ta.scale.linear(),r=Yl,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Il?t+"":Yl,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Yl="bottom",Il={top:1,right:1,bottom:1,left:1};ta.svg.brush=function(){function n(i){i.each(function(){var i=ta.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,Et);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Zl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var s,f=ta.transition(i),h=ta.transition(o);c&&(s=Ui(c),h.attr("x",s[0]).attr("width",s[1]-s[0]),e(f)),l&&(s=Ui(l),h.attr("y",s[0]).attr("height",s[1]-s[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==ta.event.keyCode&&(N||(y=null,z[0]-=s[1],z[1]-=f[1],N=2),b())}function p(){32==ta.event.keyCode&&2==N&&(z[0]+=s[1],z[1]+=f[1],N=0,b())}function v(){var n=ta.mouse(x),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),N||(ta.event.altKey?(y||(y=[(s[0]+s[1])/2,(f[0]+f[1])/2]),z[0]=s[+(n[0]<y[0])],z[1]=f[+(n[1]<y[1])]):y=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,l,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:N?"move":"resize"}))}function d(n,t,e){var r,u,a=Ui(t),c=a[0],l=a[1],p=z[e],v=e?f:s,d=v[1]-v[0];return N&&(c-=p,l-=d+p),r=(e?g:h)?Math.max(c,Math.min(l,n[e])):n[e],N?u=(r+=p)+d:(y&&(p=Math.max(c,Math.min(l,2*y[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ta.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),C(),w({type:"brushend"})}var y,M,x=this,_=ta.select(ta.event.target),w=a.of(x,arguments),S=ta.select(x),k=_.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&l,N=_.classed("extent"),C=X(),z=ta.mouse(x),q=ta.select(oa).on("keydown.brush",u).on("keyup.brush",p);if(ta.event.changedTouches?q.on("touchmove.brush",v).on("touchend.brush",m):q.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),N)z[0]=s[0]-z[0],z[1]=f[0]-z[1];else if(k){var L=+/w$/.test(k),T=+/^n/.test(k);M=[s[1-L]-z[0],f[1-T]-z[1]],z[0]=s[L],z[1]=f[T]}else ta.event.altKey&&(y=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),ta.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=w(n,"brushstart","brush","brushend"),c=null,l=null,s=[0,0],f=[0,0],h=!0,g=!0,p=Vl[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:s,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Ul?ta.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,s=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=yu(s,t.x),r=yu(f,t.y);return i=o=null,function(u){s=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Vl[!c<<1|!l],n):c},n.y=function(t){return arguments.length?(l=t,p=Vl[!c<<1|!l],n):l},n.clamp=function(t){return arguments.length?(c&&l?(h=!!t[0],g=!!t[1]):c?h=!!t:l&&(g=!!t),n):c&&l?[h,g]:c?h:l?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],l&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=s[0]||r!=s[1])&&(s=[e,r])),l&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],l.invert&&(u=l(u),a=l(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),l&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],l.invert&&(u=l.invert(u),a=l.invert(a)),u>a&&(h=u,u=a,a=h))),c&&l?[[e,u],[r,a]]:c?[e,r]:l&&[u,a])},n.clear=function(){return n.empty()||(s=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!l&&f[0]==f[1]},ta.rebind(n,a,"on")};var Zl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Vl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Xl=fc.format=mc.timeFormat,$l=Xl.utc,Bl=$l("%Y-%m-%dT%H:%M:%S.%LZ");Xl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Jo:Bl,Jo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Jo.toString=Bl.toString,fc.second=Ft(function(n){return new hc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),fc.seconds=fc.second.range,fc.seconds.utc=fc.second.utc.range,fc.minute=Ft(function(n){return new hc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),fc.minutes=fc.minute.range,fc.minutes.utc=fc.minute.utc.range,fc.hour=Ft(function(n){var t=n.getTimezoneOffset()/60;return new hc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),fc.hours=fc.hour.range,fc.hours.utc=fc.hour.utc.range,fc.month=Ft(function(n){return n=fc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),fc.months=fc.month.range,fc.months.utc=fc.month.utc.range;var Wl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Jl=[[fc.second,1],[fc.second,5],[fc.second,15],[fc.second,30],[fc.minute,1],[fc.minute,5],[fc.minute,15],[fc.minute,30],[fc.hour,1],[fc.hour,3],[fc.hour,6],[fc.hour,12],[fc.day,1],[fc.day,2],[fc.week,1],[fc.month,1],[fc.month,3],[fc.year,1]],Gl=Xl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ne]]),Kl={range:function(n,t,e){return ta.range(Math.ceil(n/e)*e,+t,e).map(Ko)},floor:Et,ceil:Et};Jl.year=fc.year,fc.scale=function(){return Go(ta.scale.linear(),Jl,Gl)};var Ql=Jl.map(function(n){return[n[0].utc,n[1]]}),ns=$l.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ne]]);Ql.year=fc.year.utc,fc.scale.utc=function(){return Go(ta.scale.linear(),Ql,ns)},ta.text=At(function(n){return n.responseText}),ta.json=function(n,t){return Nt(n,"application/json",Qo,t)},ta.html=function(n,t){return Nt(n,"text/html",na,t)},ta.xml=At(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(ta):"object"==typeof module&&module.exports&&(module.exports=ta),this.d3=ta}();
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js.js -->\n<script src=\"bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"bower_components/angular/angular.min.js\"></script>\n<script src=\"bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js.js -->\n<script src=\"bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"bower_components/angular/angular.min.js\"></script>\n<script src=\"bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", "pink");
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d[scope.presentation.color.field]);
		                   		return scope.presentation.color[d[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d[scope.presentation.color.field]);
		                   		return scope.presentation.color[d[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d.data[scope.presentation.color.field]);
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d.data[scope.presentation.color.field]);
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n  <div layout=\"column\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d.data[scope.presentation.color.field]);
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n  <div layout=\"column\">\n <div layout=\"column\" ng-repeat=\"site in sites\" flex=\"25\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d.data[scope.presentation.color.field]);
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d.data[scope.presentation.color.field]);
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d.data[scope.presentation.color.field]);
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d.data[scope.presentation.color.field]);
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		console.log(scope.presentation.color);
		                   		console.log(d.data[scope.presentation.color.field]);
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata')
		                			st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = '<img src="'+st+'/>' + (st ? '<br/>' : '') +d +' : '+data[d];
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = '<img src="'+st+'/>' + (st ? '<br/>' : '') +d +' : '+data[d];
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = '<img src="'+st+'"/>' + (st ? '<br/>' : '') +d +' : '+data[d];
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = '<img src="'+st+'"/>' + (st ? '<br/>' : '') +d +' : '+data[d];
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img src="'+d+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img src="'+d+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img src="'+d+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img src="'+d+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						console.log(newVal);
   						/*areas =  svg.selectAll("path")
		                   .data(json.features)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
		                   });*/
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						console.log(newVal);
   						/*areas =  svg.selectAll("path")
		                   .data(json.features)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
		                   });*/
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
            var path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						console.log(newVal);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						console.log(newVal);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						console.log(newVal);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						console.log(newVal);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.geometry = JSON.parse(newVal.geometry);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.geometry = JSON.parse(newVal.geometry);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.geometry = JSON.parse(newVal.geometry);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.geometry = JSON.parse(newVal.geometry);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   						}); 
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   						}); 
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("path")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("pathareas")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("pathareas")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)
		                   .attr("title",function(d){
		                   		return d.properties['Nom de la commune'];
		                   })
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("pathareas")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)		       
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("pathareas")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)		       
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("pathareas")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)		       
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("pathareas")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)		       
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("pathareas")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)		       
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});
var app = angular.module('breizh-emeraude', [
	'ngMaterial',
	'ngRoute'
]);

app.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		}).when('/demarche', {
			templateUrl: 'views/demarche.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
angular.module("breizh-emeraude").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html>\n<head>\n<title>Breizh Emeraude</title>\n<meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\" />\n<style>canvas { width: 100%; height: 100% }</style>\n<!-- build:css main.css -->\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/angular-material.min.css\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"../bower_components/angular-material/themes/grey-theme.css\">\n<link rel=\"stylesheet\" href=\"main.css\">\n<!-- endbuild -->\n</head>\n<body>\n<div ng-app=\"breizh-emeraude\" md-theme=\"grey\">\n<div ng-view=\"main\"></div>\n</div>\n<!-- build:js breizh-emeraude.js -->\n<script src=\"../bower_components/jquery/dist/jquery.min.js\"></script>\n<script src=\"../bower_components/angular/angular.min.js\"></script>\n<script src=\"../bower_components/angular-aria/angular-aria.min.js\"></script>\n<script src=\"../bower_components/angular-animate/angular-animate.min.js\"></script>\n<script src=\"../bower_components/hammerjs/hammer.min.js\"></script>\n<script src=\"../bower_components/angular-material/angular-material.min.js\"></script>\n<script src=\"../bower_components/angular-route/angular-route.min.js\"></script>\n<script src=\"../bower_components/d3/d3.min.js\"></script>\n<script src=\"breizh-emeraude.js\"></script>\n<!-- endbuild -->\n</body>\n</html>");
$templateCache.put("views/main.html"," <div layout=\"row\">\n <div layout=\"column\" flex=\"25\">\n <div layout=\"column\" ng-repeat=\"site in sites\">\n 	<md-toolbar>\n    <h1 class=\"md-toolbar-tools\">\n      <span>{{site.name}}</span>\n    </h1>\n  </md-toolbar>\n   <div  layout=\"column\" ng-repeat=\"category in site.categories\">\n 	<md-toolbar>\n    <h2 class=\"md-toolbar-tools\">\n      <span>{{category.name}}</span>\n    </h2>\n  </md-toolbar>\n  <md-content layout=\"column\" >\n\n    <md-button ng-repeat=\"dataset in category.datasets\" ng-click=\"getData(site.url+dataset.id,dataset);\">\n{{dataset.name}}\n    </md-button>\n      \n  </md-content>\n </div>\n </div>\n </div>\n<div flex=\"75\">\n<map-emeraude data=\"data\" presentation=\"presentation\">\n\n</map-emeraude>\n</div>\n </div>\n  \n");}]);
angular.module('breizh-emeraude').controller('mainController',function($scope, $http){
	$http.get('data/datasets.json').then(function(results){
		$scope.sites = results.data;
	});

	$scope.getData = function(url,presentation){
		$scope.presentation = presentation;
		$http.get(url+'?$top=1000'+(presentation.tailUrl?presentation.tailUrl:'')).then(function(results){
			$scope.data = results.data.d.results;
		});
		
	};
});
angular.module('breizh-emeraude').directive('mapEmeraude', function($http) {
	return {
		restrict: 'E',
		replace: false,
		transclude: false,
		template: '<div id="mapEmerald"></div>',
		scope: {
			data:'=',
			presentation:'='
		},
		link: function(scope, element) {
			 //Width and height
            var w = 800;
            var h = 500;

   			var communes = {};
   			var projection, path;
   			var areas;
            //Create SVG element
            var svg = d3.select("#mapEmerald")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);

            var tooltip = d3.select("body")
				.append("div")  // declare the tooltip div 
				.attr("class", "tooltip")              // apply the 'tooltip' class
				.style("visibility", 'hidden');

   			scope.$watch('data',function(newVal){
   				console.log(scope.presentation);
   				console.log(newVal);
   				if(scope.presentation){
   					var point = scope.presentation.point;
   					if(scope.presentation.area){
   						if(areas) areas.remove();
   						newVal.forEach(function(v){
   							v.geometry = JSON.parse(v.geometry);
   							v.type = "Feature";
   						}); 
   						console.log(newVal);
   						areas =  svg.selectAll("pathareas")
		                   .data(newVal)
		                   .enter()
		                   .append("path")
		                   .attr("d", path)		       
		                   .style("fill", function(d){
		                   		return "blue";
		                   });
   					}
   					if(point){
   					   	var points = [];
						newVal.filter(function(c){
							return communes[c[scope.presentation.insee]];
						}).forEach(function(v){
	   						var lat, lon,radius;
	   						if(point.type =="2fields"){
	   							lat = v[point.lat];
	   							lon = v[point.lon];
	   							radius = v[point.radius];
	   							if(lat && lon)
		   							points.push({
		   								coordinates:projection([lon, lat]),
		   								radius:radius,
		   								data:v
		   							});
	   							
	   						}
	   					});
	   					console.log(points);
	   					svg.selectAll("circle").remove();
	   				var p = svg.selectAll("points")
		                   .data(points)
		                   .enter()
		                   .append("circle")
		                   .attr("cx", function(d){return d.coordinates[0]})
		                   .attr("cy", function(d){return d.coordinates[1]})
		                   .attr("r", function(d){if(!point.radius) return 10; return d.radius ? parseFloat(d.radius)/2 : 1})
		                   .attr("title",function(d){
		                   		return d.data;
		                   })
		                   .style("stroke","black")
		                   .style("fill", function(d){
		                   	if(!scope.presentation.color) return "orange";
		                   	else{
		                   		return scope.presentation.color[d.data[scope.presentation.color.field].toLowerCase()];
		                   	}
		                   });
		                p.on("mouseenter", function(obj) {
		                	var data = obj.data;
		                	var st = '';
		                	for(var d in data){
		                		if(d != '__metadata'){
		                			if(scope.presentation.fields && scope.presentation.fields[d] && scope.presentation.fields[d] == 'img')
		                				st = st + (st ? '<br/>' : '') + '<img width="100px" src="'+data[d]+'"/>';
		                			else
		                				st = st + (st ? '<br/>' : '') +d +' : '+data[d];
		                		}
		                	}			
							tooltip	.html(st)	 
								.style("visibility", 'visible')
								.style("left", (d3.event.pageX) + "px")			 
								.style("top", (d3.event.pageY - 28) + "px");
							});
		                p.on("mouseleave", function(d) {	
							tooltip.style("visibility", 'hidden');
						});
		   					
   					}
   				}
   			});

            //Load in GeoJSON data
            d3.json("data/breizh-emeraude.geojson", function(json) {
            	json.features.forEach(function(c){
            		communes[c.properties['CODE INSEE']] = c
            	});
            	 var center = d3.geo.centroid(json)
            	          //Define map projection
             projection= d3.geo.mercator()
                                   .translate([w/2, h/2])
                                   .scale([30000])
                                   .center(center);

            //Define path generator
              path = d3.geo.path()
                             .projection(projection);
                //Bind data and create one path per GeoJSON feature
                svg.selectAll("path")
                   .data(json.features)
                   .enter()
                   .append("path")
                   .attr("d", path)
                   .attr("title",function(d){
                   		return d.properties['Nom de la commune'];
                   })
                   .style("fill", function(d){
                   		return d3.hsl(120, 0.4, 0.7-parseFloat(d.properties['Densité'])/500);
                   });

            });

		}
	};
});