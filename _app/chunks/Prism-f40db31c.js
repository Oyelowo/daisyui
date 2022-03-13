import{ag as Q,S as ue,i as oe,s as ge,U as ce,e as Z,k as de,c as W,a as X,d as I,m as fe,f as pe,b as L,g as M,I as he,V as me,W as ve,X as be,q as ye,o as Fe,u as Ae,P as we,H as xe,l as N,F as ke,t as _e,h as Se,j as Ee}from"./vendor-eca5a9d7.js";window.Prism&&console.warn("Prism has already been initiated. Please ensure that svelte-prism is imported first.");window.Prism=window.Prism||{};window.Prism.manual=!0;var te={exports:{}};(function(m){var f=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(l){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,w={},i={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof b?new b(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++v}),a.__id},clone:function a(e,n){n=n||{};var r,s;switch(i.util.type(e)){case"Object":if(s=i.util.objId(e),n[s])return n[s];r={},n[s]=r;for(var o in e)e.hasOwnProperty(o)&&(r[o]=a(e[o],n));return r;case"Array":return s=i.util.objId(e),n[s]?n[s]:(r=[],n[s]=r,e.forEach(function(p,u){r[u]=a(p,n)}),r);default:return e}},getLanguage:function(a){for(;a;){var e=c.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(c,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(r){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==a)return e[n]}return null}},isActive:function(a,e,n){for(var r="no-"+e;a;){var s=a.classList;if(s.contains(e))return!0;if(s.contains(r))return!1;a=a.parentElement}return!!n}},languages:{plain:w,plaintext:w,text:w,txt:w,extend:function(a,e){var n=i.util.clone(i.languages[a]);for(var r in e)n[r]=e[r];return n},insertBefore:function(a,e,n,r){r=r||i.languages;var s=r[a],o={};for(var p in s)if(s.hasOwnProperty(p)){if(p==e)for(var u in n)n.hasOwnProperty(u)&&(o[u]=n[u]);n.hasOwnProperty(p)||(o[p]=s[p])}var F=r[a];return r[a]=o,i.languages.DFS(i.languages,function(_,T){T===F&&_!=a&&(this[_]=o)}),o},DFS:function a(e,n,r,s){s=s||{};var o=i.util.objId;for(var p in e)if(e.hasOwnProperty(p)){n.call(e,p,e[p],r||p);var u=e[p],F=i.util.type(u);F==="Object"&&!s[o(u)]?(s[o(u)]=!0,a(u,n,null,s)):F==="Array"&&!s[o(u)]&&(s[o(u)]=!0,a(u,n,p,s))}}},plugins:{},highlightAll:function(a,e){i.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,n){var r={callback:n,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),i.hooks.run("before-all-elements-highlight",r);for(var s=0,o;o=r.elements[s++];)i.highlightElement(o,e===!0,r.callback)},highlightElement:function(a,e,n){var r=i.util.getLanguage(a),s=i.languages[r];i.util.setLanguage(a,r);var o=a.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(o,r);var p=a.textContent,u={element:a,language:r,grammar:s,code:p};function F(T){u.highlightedCode=T,i.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i.hooks.run("after-highlight",u),i.hooks.run("complete",u),n&&n.call(u.element)}if(i.hooks.run("before-sanity-check",u),o=u.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!u.code){i.hooks.run("complete",u),n&&n.call(u.element);return}if(i.hooks.run("before-highlight",u),!u.grammar){F(i.util.encode(u.code));return}if(e&&l.Worker){var _=new Worker(i.filename);_.onmessage=function(T){F(T.data)},_.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else F(i.highlight(u.code,u.grammar,u.language))},highlight:function(a,e,n){var r={code:a,grammar:e,language:n};if(i.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=i.tokenize(r.code,r.grammar),i.hooks.run("after-tokenize",r),b.stringify(i.util.encode(r.tokens),r.language)},tokenize:function(a,e){var n=e.rest;if(n){for(var r in n)e[r]=n[r];delete e.rest}var s=new E;return d(s,s.head,a),C(a,s,e,s.head,0),x(s)},hooks:{all:{},add:function(a,e){var n=i.hooks.all;n[a]=n[a]||[],n[a].push(e)},run:function(a,e){var n=i.hooks.all[a];if(!(!n||!n.length))for(var r=0,s;s=n[r++];)s(e)}},Token:b};l.Prism=i;function b(a,e,n,r){this.type=a,this.content=e,this.alias=n,this.length=(r||"").length|0}b.stringify=function a(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(F){r+=a(F,n)}),r}var s={type:e.type,content:a(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},o=e.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(s.classes,o):s.classes.push(o)),i.hooks.run("wrap",s);var p="";for(var u in s.attributes)p+=" "+u+'="'+(s.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+p+">"+s.content+"</"+s.tag+">"};function y(a,e,n,r){a.lastIndex=e;var s=a.exec(n);if(s&&r&&s[1]){var o=s[1].length;s.index+=o,s[0]=s[0].slice(o)}return s}function C(a,e,n,r,s,o){for(var p in n)if(!(!n.hasOwnProperty(p)||!n[p])){var u=n[p];u=Array.isArray(u)?u:[u];for(var F=0;F<u.length;++F){if(o&&o.cause==p+","+F)return;var _=u[F],T=_.inside,Y=!!_.lookbehind,J=!!_.greedy,re=_.alias;if(J&&!_.pattern.global){var se=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,se+"g")}for(var V=_.pattern||_,S=r.next,$=s;S!==e.tail&&!(o&&$>=o.reach);$+=S.value.length,S=S.next){var D=S.value;if(e.length>a.length)return;if(!(D instanceof b)){var O=1,P;if(J){if(P=y(V,$,a,Y),!P||P.index>=a.length)break;var R=P.index,ie=P.index+P[0].length,j=$;for(j+=S.value.length;R>=j;)S=S.next,j+=S.value.length;if(j-=S.value.length,$=j,S.value instanceof b)continue;for(var z=S;z!==e.tail&&(j<ie||typeof z.value=="string");z=z.next)O++,j+=z.value.length;O--,D=a.slice($,j),P.index-=$}else if(P=y(V,0,D,Y),!P)continue;var R=P.index,H=P[0],G=D.slice(0,R),K=D.slice(R+H.length),U=$+D.length;o&&U>o.reach&&(o.reach=U);var q=S.prev;G&&(q=d(e,q,G),$+=G.length),g(e,q,O);var le=new b(p,T?i.tokenize(H,T):H,re,H);if(S=d(e,q,le),K&&d(e,S,K),O>1){var B={cause:p+","+F,reach:U};C(a,e,n,S.prev,$,B),o&&B.reach>o.reach&&(o.reach=B.reach)}}}}}}function E(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function d(a,e,n){var r=e.next,s={value:n,prev:e,next:r};return e.next=s,r.prev=s,a.length++,s}function g(a,e,n){for(var r=e.next,s=0;s<n&&r!==a.tail;s++)r=r.next;e.next=r,r.prev=e,a.length-=s}function x(a){for(var e=[],n=a.head.next;n!==a.tail;)e.push(n.value),n=n.next;return e}if(!l.document)return l.addEventListener&&(i.disableWorkerMessageHandler||l.addEventListener("message",function(a){var e=JSON.parse(a.data),n=e.language,r=e.code,s=e.immediateClose;l.postMessage(i.highlight(r,i.languages[n],n)),s&&l.close()},!1)),i;var A=i.util.currentScript();A&&(i.filename=A.src,A.hasAttribute("data-manual")&&(i.manual=!0));function h(){i.manual||i.highlightAll()}if(!i.manual){var k=document.readyState;k==="loading"||k==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return i}(f);m.exports&&(m.exports=t),typeof Q!="undefined"&&(Q.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(c,v){var w={};w["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[v]},w.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:w}};i["language-"+v]={pattern:/[\s\S]+/,inside:t.languages[v]};var b={};b[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:i},t.languages.insertBefore("markup","cdata",b)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(l,c){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:t.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(l){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var v=l.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading\u2026",c=function(A,h){return"\u2716 Error "+A+" while fetching file: "+h},v="\u2716 Error: File does not exist or is empty",w={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",b="loading",y="loaded",C="failed",E="pre[data-src]:not(["+i+'="'+y+'"]):not(['+i+'="'+b+'"])';function d(A,h,k){var a=new XMLHttpRequest;a.open("GET",A,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?h(a.responseText):a.status>=400?k(c(a.status,a.statusText)):k(v))},a.send(null)}function g(A){var h=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(h){var k=Number(h[1]),a=h[2],e=h[3];return a?e?[k,Number(e)]:[k,void 0]:[k,k]}}t.hooks.add("before-highlightall",function(A){A.selector+=", "+E}),t.hooks.add("before-sanity-check",function(A){var h=A.element;if(h.matches(E)){A.code="",h.setAttribute(i,b);var k=h.appendChild(document.createElement("CODE"));k.textContent=l;var a=h.getAttribute("data-src"),e=A.language;if(e==="none"){var n=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=w[n]||n}t.util.setLanguage(k,e),t.util.setLanguage(h,e);var r=t.plugins.autoloader;r&&r.loadLanguages(e),d(a,function(s){h.setAttribute(i,y);var o=g(h.getAttribute("data-range"));if(o){var p=s.split(/\r\n?|\n/g),u=o[0],F=o[1]==null?p.length:o[1];u<0&&(u+=p.length),u=Math.max(0,Math.min(u-1,p.length)),F<0&&(F+=p.length),F=Math.max(0,Math.min(F,p.length)),s=p.slice(u,F).join(`
`),h.hasAttribute("data-start")||h.setAttribute("data-start",String(u+1))}k.textContent=s,t.highlightElement(k)},function(s){h.setAttribute(i,C),k.textContent=s})}}),t.plugins.fileHighlight={highlight:function(h){for(var k=(h||document).querySelectorAll(E),a=0,e;e=k[a++];)t.highlightElement(e)}};var x=!1;t.fileHighlight=function(){x||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),x=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(te);var ne=te.exports;const ee="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+ee+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+ee+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",m=>{m.type==="entity"&&(m.attributes.title=m.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(f,t){const l={};l["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;const c={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};c["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};const v={};v[f]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,f),"i"),lookbehind:!0,greedy:!0,inside:c},Prism.languages.insertBefore("svelte","cdata",v)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");function Pe(m){let f,t;return{c(){f=new xe,t=N(),this.h()},l(l){f=ke(l),t=N(),this.h()},h(){f.a=t},m(l,c){f.m(m[2],l,c),M(l,t,c)},p(l,c){c&4&&f.p(l[2])},d(l){l&&I(t),l&&f.d()}}}function $e(m){let f;return{c(){f=_e(m[2])},l(t){f=Se(t,m[2])},m(t,l){M(t,f,l)},p(t,l){l&4&&Ee(f,t[2])},d(t){t&&I(f)}}}function Ce(m){let f,t,l,c,v,w,i;const b=m[6].default,y=ce(b,m,m[5],null);function C(g,x){return g[0]==="none"?$e:Pe}let E=C(m),d=E(m);return{c(){f=Z("code"),y&&y.c(),t=de(),l=Z("pre"),c=Z("code"),d.c(),this.h()},l(g){f=W(g,"CODE",{style:!0});var x=X(f);y&&y.l(x),x.forEach(I),t=fe(g),l=W(g,"PRE",{class:!0,"command-line":!0,"data-output":!0});var A=X(l);c=W(A,"CODE",{class:!0});var h=X(c);d.l(h),h.forEach(I),A.forEach(I),this.h()},h(){pe(f,"display","none"),L(c,"class",v="language-"+m[0]),L(l,"class",w="language-"+m[0]),L(l,"command-line",""),L(l,"data-output","2-17")},m(g,x){M(g,f,x),y&&y.m(f,null),m[7](f),M(g,t,x),M(g,l,x),he(l,c),d.m(c,null),i=!0},p(g,[x]){y&&y.p&&(!i||x&32)&&me(y,b,g,g[5],i?be(b,g[5],x,null):ve(g[5]),null),E===(E=C(g))&&d?d.p(g,x):(d.d(1),d=E(g),d&&(d.c(),d.m(c,null))),(!i||x&1&&v!==(v="language-"+g[0]))&&L(c,"class",v),(!i||x&1&&w!==(w="language-"+g[0]))&&L(l,"class",w)},i(g){i||(ye(y,g),i=!0)},o(g){Fe(y,g),i=!1},d(g){g&&I(f),y&&y.d(g),m[7](null),g&&I(t),g&&I(l),d.d()}}}const ae=ne,De=ne.highlightElement,Te={transform:m=>m};function je(m,f,t){let{$$slots:l={},$$scope:c}=f,{language:v="javascript"}=f,{source:w=""}=f,{transform:i=d=>d}=f,b,y;function C(){const d=ae.languages[v];let g=w||b.textContent;g=Te.transform(g),g=i(g),t(2,y=v==="none"?g:ae.highlight(g,d,v))}Ae(()=>{C()});function E(d){we[d?"unshift":"push"](()=>{b=d,t(1,b)})}return m.$$set=d=>{"language"in d&&t(0,v=d.language),"source"in d&&t(3,w=d.source),"transform"in d&&t(4,i=d.transform),"$$scope"in d&&t(5,c=d.$$scope)},[v,b,y,w,i,c,l,E]}class Le extends ue{constructor(f){super();oe(this,f,je,Ce,ge,{language:0,source:3,transform:4})}}export{Le as default,Te as globalConfig,De as highlight,ae as prism};
