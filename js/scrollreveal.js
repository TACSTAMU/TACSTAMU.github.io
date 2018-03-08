/**
 * ScrollReveal
 * ------------
 * Version : 3.3.6
 * Website : scrollrevealjs.org
 * Repo    : github.com/jlmakes/scrollreveal.js
 * Author  : Julian Lloyd (@jlmakes)
 */
(function(){function h(a){if("undefined"===typeof this||Object.getPrototypeOf(this)!==h.prototype)return new h(a);d=this;d.version="3.3.6";d.tools=new g;d.isSupported()?(d.tools.extend(d.defaults,a||{}),d.defaults.container=r(d.defaults),d.store={elements:{},containers:[]},d.sequences={},d.history=[],d.uid=0,d.initialized=!1):"undefined"!==typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser.");return d}function r(a){if(a&&a.container){if("string"===typeof a.container)return window.document.documentElement.querySelector(a.container);
if(d.tools.isNode(a.container))return a.container;console.log('ScrollReveal: invalid container "'+a.container+'" provided.');console.log("ScrollReveal: falling back to default container.")}return d.defaults.container}function t(a,b){var c=a.config;return"-webkit-transition: "+a.styles.computed.transition+"-webkit-transform "+c.duration/1E3+"s "+c.easing+" "+b/1E3+"s, opacity "+c.duration/1E3+"s "+c.easing+" "+b/1E3+"s; transition: "+a.styles.computed.transition+"transform "+c.duration/1E3+"s "+c.easing+
" "+b/1E3+"s, opacity "+c.duration/1E3+"s "+c.easing+" "+b/1E3+"s; "}function u(a){var b=a.config,c=a.styles.transform;var d="top"===b.origin||"left"===b.origin?/^-/.test(b.distance)?b.distance.substr(1):"-"+b.distance:b.distance;parseInt(b.distance)&&(c.initial+=" translate"+b.axis+"("+d+")",c.target+=" translate"+b.axis+"(0)");b.scale&&(c.initial+=" scale("+b.scale+")",c.target+=" scale(1)");b.rotate.x&&(c.initial+=" rotateX("+b.rotate.x+"deg)",c.target+=" rotateX(0)");b.rotate.y&&(c.initial+=" rotateY("+
b.rotate.y+"deg)",c.target+=" rotateY(0)");b.rotate.z&&(c.initial+=" rotateZ("+b.rotate.z+"deg)",c.target+=" rotateZ(0)");c.initial+="; opacity: "+b.opacity+";";c.target+="; opacity: "+a.styles.computed.opacity+";"}function v(){if(d.isSupported()){w();for(var a=0;a<d.store.containers.length;a++)d.store.containers[a].addEventListener("scroll",p),d.store.containers[a].addEventListener("resize",p);d.initialized||(window.addEventListener("scroll",p),window.addEventListener("resize",p),d.initialized=!0)}return d}
function p(){z(w)}function A(){var a,b,c,k;d.tools.forOwn(d.sequences,function(e){k=d.sequences[e];a=!1;for(e=0;e<k.elemIds.length;e++)c=k.elemIds[e],b=d.store.elements[c],q(b)&&!a&&(a=!0);k.active=a})}function w(){var a,b;A();d.tools.forOwn(d.store.elements,function(c){b=d.store.elements[c];c=b.config.useDelay;a="always"===c||"onload"===c&&!d.initialized||"once"===c&&!b.seen;c=b;if(c.sequence){var k=d.sequences[c.sequence.id];c=k.active&&!k.blocked&&!c.revealing&&!c.disabled}else c=q(c)&&!c.revealing&&
!c.disabled;c?(b.config.beforeReveal(b.domEl),a?b.domEl.setAttribute("style",b.styles.inline+b.styles.transform.target+b.styles.transition.delayed):b.domEl.setAttribute("style",b.styles.inline+b.styles.transform.target+b.styles.transition.instant),x("reveal",b,a),b.revealing=!0,b.seen=!0,b.sequence&&B(b,a)):(c=b,c=c.sequence?!d.sequences[c.sequence.id].active&&c.config.reset&&c.revealing&&!c.disabled:!q(c)&&c.config.reset&&c.revealing&&!c.disabled,c&&(b.config.beforeReset(b.domEl),b.domEl.setAttribute("style",
b.styles.inline+b.styles.transform.initial+b.styles.transition.instant),x("reset",b),b.revealing=!1))})}function B(a,b){var c=0,k=0,e=d.sequences[a.sequence.id];e.blocked=!0;b&&"onload"===a.config.useDelay&&(k=a.config.delay);a.sequence.timer&&(c=Math.abs(a.sequence.timer.started-new Date),window.clearTimeout(a.sequence.timer));a.sequence.timer={started:new Date};a.sequence.timer.clock=window.setTimeout(function(){e.blocked=!1;a.sequence.timer=null;p()},Math.abs(e.interval)+k-c)}function x(a,b,c){var d=
0,e=0,l="after";switch(a){case "reveal":e=b.config.duration;c&&(e+=b.config.delay);l+="Reveal";break;case "reset":e=b.config.duration,l+="Reset"}b.timer&&(d=Math.abs(b.timer.started-new Date),window.clearTimeout(b.timer.clock));b.timer={started:new Date};b.timer.clock=window.setTimeout(function(){b.config[l](b.domEl);b.timer=null},e-d)}function y(a){var b=0,c=0,d=a.offsetHeight,e=a.offsetWidth;do isNaN(a.offsetTop)||(b+=a.offsetTop),isNaN(a.offsetLeft)||(c+=a.offsetLeft),a=a.offsetParent;while(a);
return{top:b,left:c,height:d,width:e}}function q(a){var b,c=y(a.domEl);var d=a.config.container;var e=d.clientWidth;d=d.clientHeight;if((b=a.config.container)&&b!==window.document.documentElement){var l=y(b);var h=b.scrollLeft+l.left;b=b.scrollTop+l.top}else h=window.pageXOffset,b=window.pageYOffset;l=a.config.viewFactor;var n=c.height,g=c.width,f=c.top;c=c.left;var m=b+a.config.viewOffset.top,p=h+a.config.viewOffset.left;e=h-a.config.viewOffset.right+e;return f+n*l<b-a.config.viewOffset.bottom+d&&
f+n-n*l>m&&c+g*l<e&&c+g-g*l>p||"fixed"===window.getComputedStyle(a.domEl).position}function g(){}var d;h.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(a){},beforeReset:function(a){},afterReveal:function(a){},afterReset:function(a){}};h.prototype.isSupported=
function(){var a=document.documentElement.style;return"WebkitTransition"in a&&"WebkitTransform"in a||"transition"in a&&"transform"in a};h.prototype.reveal=function(a,b,c,h){var e;if(void 0!==b&&"number"===typeof b)c=b,b={};else if(void 0===b||null===b)b={};var l=r(b);var g="string"===typeof a?Array.prototype.slice.call(l.querySelectorAll(a)):d.tools.isNode(a)?[a]:d.tools.isNodeList(a)?Array.prototype.slice.call(a):[];if(!g.length)return console.log('ScrollReveal: reveal on "'+a+'" failed, no elements found.'),
d;if(c&&"number"===typeof c){var n=++d.uid;n=d.sequences[n]={id:n,interval:c,elemIds:[],active:!1}}for(var k=0;k<g.length;k++){(e=g[k].getAttribute("data-sr-id"))?e=d.store.elements[e]:(e={id:++d.uid,domEl:g[k],seen:!1,revealing:!1},e.domEl.setAttribute("data-sr-id",e.id));n&&(e.sequence={id:n.id,index:n.elemIds.length},n.elemIds.push(e.id));var f=e,m=b;m.container&&(m.container=l);f.config=f.config?d.tools.extendClone(f.config,m):d.tools.extendClone(d.defaults,m);f.config.axis="top"===f.config.origin||
"bottom"===f.config.origin?"Y":"X";f=e;m=window.getComputedStyle(f.domEl);f.styles||(f.styles={transition:{},transform:{},computed:{}},f.styles.inline=f.domEl.getAttribute("style")||"",f.styles.inline+="; visibility: visible; ",f.styles.computed.opacity=m.opacity,f.styles.computed.transition=m.transition&&"all 0s ease 0s"!==m.transition?m.transition+", ":"");f.styles.transition.instant=t(f,0);f.styles.transition.delayed=t(f,f.config.delay);f.styles.transform.initial=" -webkit-transform:";f.styles.transform.target=
" -webkit-transform:";u(f);f.styles.transform.initial+="transform:";f.styles.transform.target+="transform:";u(f);f=e;(m=f.config.container)&&-1===d.store.containers.indexOf(m)&&d.store.containers.push(f.config.container);d.store.elements[f.id]=f;d.tools.isMobile()&&!e.config.mobile||!d.isSupported()?(e.domEl.setAttribute("style",e.styles.inline),e.disabled=!0):e.revealing||e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.initial)}!h&&d.isSupported()&&(d.history.push({target:a,config:b,
interval:c}),d.initTimeout&&window.clearTimeout(d.initTimeout),d.initTimeout=window.setTimeout(v,0));return d};h.prototype.sync=function(){if(d.history.length&&d.isSupported()){for(var a=0;a<d.history.length;a++){var b=d.history[a];d.reveal(b.target,b.config,b.interval,!0)}v()}else console.log("ScrollReveal: sync failed, no reveals found.");return d};g.prototype.isObject=function(a){return null!==a&&"object"===typeof a&&a.constructor===Object};g.prototype.isNode=function(a){return"object"===typeof window.Node?
a instanceof window.Node:a&&"object"===typeof a&&"number"===typeof a.nodeType&&"string"===typeof a.nodeName};g.prototype.isNodeList=function(a){var b=Object.prototype.toString.call(a),c=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"===typeof window.NodeList?a instanceof window.NodeList:a&&"object"===typeof a&&c.test(b)&&"number"===typeof a.length&&(0===a.length||this.isNode(a[0]))};g.prototype.forOwn=function(a,b){if(this.isObject(a))for(var c in a)a.hasOwnProperty(c)&&b(c);else throw new TypeError('Expected "object", but received "'+
typeof a+'".');};g.prototype.extend=function(a,b){this.forOwn(b,function(c){this.isObject(b[c])?(a[c]&&this.isObject(a[c])||(a[c]={}),this.extend(a[c],b[c])):a[c]=b[c]}.bind(this));return a};g.prototype.extendClone=function(a,b){return this.extend(this.extend({},a),b)};g.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};var z=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||
function(a){window.setTimeout(a,1E3/60)};"function"===typeof define&&"object"===typeof define.amd&&define.amd?define(function(){return h}):"undefined"!==typeof module&&module.exports?module.exports=h:window.ScrollReveal=h})();