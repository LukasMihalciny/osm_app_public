"use strict";(self["webpackChunkosmapp_webpack_2107x"]=self["webpackChunkosmapp_webpack_2107x"]||[]).push([[984],{1937:function(t,e,n){n.d(e,{A:function(){return x}});var i=n(641),r=n(33),o=n(3751);const a={class:"input-group multiple",ref:"multiple_reference"},s=["id","name"],l={class:"multiple_dropdown"},u={class:"m-2"},c={class:"form-check my-2"},d=["id","name","onUpdate:modelValue","disabled"],p=["for"];function h(t,e,n,h,f,m){return(0,i.uX)(),(0,i.CE)("div",a,[(0,i.Lk)("p",{id:n.field_id,name:n.field_id,onClick:e[0]||(e[0]=(...t)=>m.open_dropdown&&m.open_dropdown(...t)),class:"form-control multiple_input"},(0,r.v_)(m.display_selected),9,s),(0,i.bo)((0,i.Lk)("div",l,[(0,i.Lk)("div",null,[(0,i.Lk)("span",{onClick:e[1]||(e[1]=(...t)=>m.set_all&&m.set_all(...t))}," Všetko "),(0,i.Lk)("span",{onClick:e[2]||(e[2]=(...t)=>m.set_none&&m.set_none(...t))}," Nič "),(0,i.Lk)("span",{onClick:e[3]||(e[3]=(...t)=>m.accept&&m.accept(...t)),class:"accept"}," Potvrdiť ")]),(0,i.Lk)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(f.options,((t,e)=>((0,i.uX)(),(0,i.CE)("div",c,[(0,i.bo)((0,i.Lk)("input",{id:n.field_id+"-"+e,name:n.field_id+"-"+e,"onUpdate:modelValue":t=>f.options[e].checked=t,disabled:m.is_disabled,type:"checkbox",class:"form-check-input"},null,8,d),[[o.lH,f.options[e].checked]]),(0,i.Lk)("label",{for:n.field_id+"-"+e,class:"form-check-label"},(0,r.v_)(t.label),9,p)])))),256))])],512),[[o.aG,f.opened]])],512)}n(4114);var f=n(3177),m=n(8700),v=n(6343),g={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],data(){return{opened:!1,delimiter:",",options:{}}},created(){let t="";t=void 0!==this.emit_name?(0,f.A)().get_user_input(this.field_id):(0,f.A)().get_form_value(this.field_id);let e=t?.split(this.delimiter)||[];for(let n in this.field_data.enum){if(!this.field_data.enum.hasOwnProperty(n))continue;let t=this.field_data.enum[n];this.options[n]={value:v.A.first_key(t),label:v.A.first_value(t),checked:e.indexOf(v.A.first_key(t))>-1}}},methods:{open_dropdown(){this.opened=!0,document.addEventListener("click",this.clicked_outside,!1)},clicked_outside(t){const e=this.$refs.multiple_reference.contains(t.target);e||(document.removeEventListener("click",this.clicked_outside,!1),this.accept())},set_all(){if(!this.is_disabled)for(let t in this.options)this.options.hasOwnProperty(t)&&(this.options[t].checked=!0)},set_none(){if(!this.is_disabled)for(let t in this.options)this.options.hasOwnProperty(t)&&(this.options[t].checked=!1)},accept(){this.opened=!1;let t=[];for(let e in this.options)this.options.hasOwnProperty(e)&&this.options[e].checked&&t.push(this.options[e].value);t=t.join(this.delimiter),(0,f.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}},computed:{is_disabled(){return(0,m.A)().is_read_only()},display_selected(){let t=[];for(let e in this.options)this.options.hasOwnProperty(e)&&this.options[e].checked&&t.push(this.options[e].label);return 0===t.length?this.field_data.placeholder:t.join(", ")}},watch:{}},b=n(6262);const _=(0,b.A)(g,[["render",h]]);var x=_},2329:function(t,e,n){n.d(e,{A:function(){return bt}});var i=n(641);const r={class:"slider_scope"},o=["id"];function a(t,e,n,a,s,l){return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("div",{id:n.field_id,ref:"slider"},null,8,o)])}var s,l,u=n(3177);function c(t){return d(t)&&"function"===typeof t.from}function d(t){return"object"===typeof t&&"function"===typeof t.to}function p(t){t.parentElement.removeChild(t)}function h(t){return null!==t&&void 0!==t}function f(t){t.preventDefault()}function m(t){return t.filter((function(t){return!this[t]&&(this[t]=!0)}),{})}function v(t,e){return Math.round(t/e)*e}function g(t,e){var n=t.getBoundingClientRect(),i=t.ownerDocument,r=i.documentElement,o=C(i);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),e?n.top+o.y-r.clientTop:n.left+o.x-r.clientLeft}function b(t){return"number"===typeof t&&!isNaN(t)&&isFinite(t)}function _(t,e,n){n>0&&(w(t,e),setTimeout((function(){k(t,e)}),n))}function x(t){return Math.max(Math.min(t,100),0)}function S(t){return Array.isArray(t)?t:[t]}function y(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function w(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function k(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function E(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function C(t){var e=void 0!==window.pageXOffset,n="CSS1Compat"===(t.compatMode||""),i=e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,r=e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop;return{x:i,y:r}}function A(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function N(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(n){}return t}function P(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function V(t,e){return 100/(e-t)}function U(t,e,n){return 100*e/(t[n+1]-t[n])}function L(t,e){return U(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function O(t,e){return e*(t[1]-t[0])/100+t[0]}function M(t,e){var n=1;while(t>=e[n])n+=1;return n}function D(t,e,n){if(n>=t.slice(-1)[0])return 100;var i=M(n,t),r=t[i-1],o=t[i],a=e[i-1],s=e[i];return a+L([r,o],n)/V(a,s)}function j(t,e,n){if(n>=100)return t.slice(-1)[0];var i=M(n,e),r=t[i-1],o=t[i],a=e[i-1],s=e[i];return O([r,o],(n-a)*V(a,s))}function z(t,e,n,i){if(100===i)return i;var r=M(i,t),o=t[r-1],a=t[r];return n?i-o>(a-o)/2?a:o:e[r-1]?t[r-1]+v(i-t[r-1],e[r-1]):i}(function(t){t["Range"]="range",t["Steps"]="steps",t["Positions"]="positions",t["Count"]="count",t["Values"]="values"})(s||(s={})),function(t){t[t["None"]=-1]="None",t[t["NoValue"]=0]="NoValue",t[t["LargeValue"]=1]="LargeValue",t[t["SmallValue"]=2]="SmallValue"}(l||(l={}));var H=function(){function t(t,e,n){var i;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[n||!1],this.xNumSteps=[!1],this.snap=e;var r=[];for(Object.keys(t).forEach((function(e){r.push([S(t[e]),e])})),r.sort((function(t,e){return t[0][0]-e[0][0]})),i=0;i<r.length;i++)this.handleEntryPoint(r[i][1],r[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i])}return t.prototype.getDistance=function(t){for(var e=[],n=0;n<this.xNumSteps.length-1;n++)e[n]=U(this.xVal,t,n);return e},t.prototype.getAbsoluteDistance=function(t,e,n){var i,r=0;if(t<this.xPct[this.xPct.length-1])while(t>this.xPct[r+1])r++;else t===this.xPct[this.xPct.length-1]&&(r=this.xPct.length-2);n||t!==this.xPct[r+1]||r++,null===e&&(e=[]);var o=1,a=e[r],s=0,l=0,u=0,c=0;i=n?(t-this.xPct[r])/(this.xPct[r+1]-this.xPct[r]):(this.xPct[r+1]-t)/(this.xPct[r+1]-this.xPct[r]);while(a>0)s=this.xPct[r+1+c]-this.xPct[r+c],e[r+c]*o+100-100*i>100?(l=s*i,o=(a-100*i)/e[r+c],i=1):(l=e[r+c]*s/100*o,o=0),n?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),a=e[r+c]*o;return t+u},t.prototype.toStepping=function(t){return t=D(this.xVal,this.xPct,t),t},t.prototype.fromStepping=function(t){return j(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=z(this.xPct,this.xSteps,this.snap,t),t},t.prototype.getDefaultStep=function(t,e,n){var i=M(t,this.xPct);return(100===t||e&&t===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/n},t.prototype.getNearbySteps=function(t){var e=M(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(y);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var n;if(n="min"===t?0:"max"===t?100:parseFloat(t),!b(n)||!b(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(n),this.xVal.push(e[0]);var i=Number(e[1]);n?this.xSteps.push(!isNaN(i)&&i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=U([this.xVal[t],this.xVal[t+1]],e,0)/V(this.xPct[t],this.xPct[t+1]);var n=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),r=this.xVal[t]+this.xNumSteps[t]*i;this.xHighestCompleteStep[t]=r}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),F={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},X={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},R={tooltips:".__tooltips",aria:".__aria"};function T(t,e){if(!b(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function I(t,e){if(!b(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function $(t,e){if(!b(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function B(t,e){if(!b(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function q(t,e){if("object"!==typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new H(e,t.snap||!1,t.singleStep)}function Y(t,e){if(e=S(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function K(t,e){if("boolean"!==typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function Q(t,e){if("boolean"!==typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function G(t,e){if("number"!==typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function W(t,e){var n,i=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(n=1;n<t.handles;n++)i.push(e);i.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");i=e}t.connect=i}function J(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Z(t,e){if(!b(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function tt(t,e){if(!b(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function et(t,e){var n;if(!b(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!b(e[0])&&!b(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=e[0]+e[1],r=t.spectrum.xVal[0],o=t.spectrum.xVal[t.spectrum.xVal.length-1];if(i/(o-r)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function nt(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function it(t,e){if("string"!==typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,i=e.indexOf("drag")>=0,r=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,s=e.indexOf("unconstrained")>=0,l=e.indexOf("invert-connects")>=0,u=e.indexOf("drag-all")>=0,c=e.indexOf("smooth-steps")>=0;if(r){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Z(t,t.start[1]-t.start[0])}if(l&&2!==t.handles)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(s&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||o,drag:i,dragAll:u,smoothSteps:c,fixed:r,snap:o,hover:a,unconstrained:s,invertConnects:l}}function rt(t,e){if(!1!==e)if(!0===e||d(e)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(e)}else{if(e=S(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!==typeof t&&!d(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function ot(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function at(t,e){if(!d(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function st(t,e){if(!c(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function lt(t,e){if("boolean"!==typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function ut(t,e){t.documentElement=e}function ct(t,e){if("string"!==typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function dt(t,e){if("object"!==typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"===typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(n){t.cssClasses[n]=t.cssPrefix+e[n]}))):t.cssClasses=e}function pt(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:F,format:F},n={step:{r:!1,t:T},keyboardPageMultiplier:{r:!1,t:I},keyboardMultiplier:{r:!1,t:$},keyboardDefaultStep:{r:!1,t:B},start:{r:!0,t:Y},connect:{r:!0,t:W},direction:{r:!0,t:nt},snap:{r:!1,t:K},animate:{r:!1,t:Q},animationDuration:{r:!1,t:G},range:{r:!0,t:q},orientation:{r:!1,t:J},margin:{r:!1,t:Z},limit:{r:!1,t:tt},padding:{r:!1,t:et},behaviour:{r:!0,t:it},ariaFormat:{r:!1,t:at},format:{r:!1,t:st},tooltips:{r:!1,t:rt},keyboardSupport:{r:!0,t:lt},documentElement:{r:!1,t:ut},cssPrefix:{r:!0,t:ct},cssClasses:{r:!0,t:dt},handleAttributes:{r:!1,t:ot}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:X,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach((function(r){if(h(t[r])||void 0!==i[r])n[r].t(e,h(t[r])?t[r]:i[r]);else if(n[r].r)throw new Error("noUiSlider: '"+r+"' is required.")})),e.pips=t.pips;var r=document.createElement("div"),o=void 0!==r.style.msTransform,a=void 0!==r.style.transform;e.transformRule=a?"transform":o?"msTransform":"webkitTransform";var s=[["left","top"],["right","bottom"]];return e.style=s[e.dir][e.ort],e}function ht(t,e,n){var i,r,o,a,u,c,d=A(),v=P(),b=v&&N(),y=t,V=e.spectrum,U=[],L=[],O=[],M=0,D={},j=!1,z=t.ownerDocument,H=e.documentElement||z.documentElement,F=z.body,X="rtl"===z.dir||1===e.ort?0:100;function T(t,e){var n=z.createElement("div");return e&&w(n,e),t.appendChild(n),n}function I(t,n){var i=T(t,e.cssClasses.origin),r=T(i,e.cssClasses.handle);if(T(r,e.cssClasses.touchArea),r.setAttribute("data-handle",String(n)),e.keyboardSupport&&(r.setAttribute("tabindex","0"),r.addEventListener("keydown",(function(t){return xt(t,n)}))),void 0!==e.handleAttributes){var o=e.handleAttributes[n];Object.keys(o).forEach((function(t){r.setAttribute(t,o[t])}))}return r.setAttribute("role","slider"),r.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),0===n?w(r,e.cssClasses.handleLower):n===e.handles-1&&w(r,e.cssClasses.handleUpper),i.handle=r,i}function $(t,n){return!!n&&T(t,e.cssClasses.connect)}function B(t,n){r=T(n,e.cssClasses.connects),o=[],a=[],a.push($(r,t[0]));for(var i=0;i<e.handles;i++)o.push(I(n,i)),O[i]=i,a.push($(r,t[i+1]))}function q(t){w(t,e.cssClasses.target),0===e.dir?w(t,e.cssClasses.ltr):w(t,e.cssClasses.rtl),0===e.ort?w(t,e.cssClasses.horizontal):w(t,e.cssClasses.vertical);var n=getComputedStyle(t).direction;return w(t,"rtl"===n?e.cssClasses.textDirectionRtl:e.cssClasses.textDirectionLtr),T(t,e.cssClasses.base)}function Y(t,n){return!(!e.tooltips||!e.tooltips[n])&&T(t.firstChild,e.cssClasses.tooltip)}function K(){return y.hasAttribute("disabled")}function Q(t){var e=o[t];return e.hasAttribute("disabled")}function G(t){null!==t&&void 0!==t?(o[t].setAttribute("disabled",""),o[t].handle.removeAttribute("tabindex")):(y.setAttribute("disabled",""),o.forEach((function(t){t.handle.removeAttribute("tabindex")})))}function J(t){null!==t&&void 0!==t?(o[t].removeAttribute("disabled"),o[t].handle.setAttribute("tabindex","0")):(y.removeAttribute("disabled"),o.forEach((function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")})))}function Z(){c&&(kt("update"+R.tooltips),c.forEach((function(t){t&&p(t)})),c=null)}function tt(){Z(),c=o.map(Y),yt("update"+R.tooltips,(function(t,n,i){if(c&&e.tooltips&&!1!==c[n]){var r=t[n];!0!==e.tooltips[n]&&(r=e.tooltips[n].to(i[n])),c[n].innerHTML=r}}))}function et(){kt("update"+R.aria),yt("update"+R.aria,(function(t,n,i,r,a){O.forEach((function(t){var n=o[t],r=Ct(L,t,0,!0,!0,!0),s=Ct(L,t,100,!0,!0,!0),l=a[t],u=String(e.ariaFormat.to(i[t]));r=V.fromStepping(r).toFixed(1),s=V.fromStepping(s).toFixed(1),l=V.fromStepping(l).toFixed(1),n.children[0].setAttribute("aria-valuemin",r),n.children[0].setAttribute("aria-valuemax",s),n.children[0].setAttribute("aria-valuenow",l),n.children[0].setAttribute("aria-valuetext",u)}))}))}function nt(t){if(t.mode===s.Range||t.mode===s.Steps)return V.xVal;if(t.mode===s.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");var e=t.values-1,n=100/e,i=[];while(e--)i[e]=e*n;return i.push(100),it(i,t.stepped)}return t.mode===s.Positions?it(t.values,t.stepped):t.mode===s.Values?t.stepped?t.values.map((function(t){return V.fromStepping(V.getStep(V.toStepping(t)))})):t.values:[]}function it(t,e){return t.map((function(t){return V.fromStepping(e?V.getStep(t):t)}))}function rt(t){function e(t,e){return Number((t+e).toFixed(7))}var n=nt(t),i={},r=V.xVal[0],o=V.xVal[V.xVal.length-1],a=!1,u=!1,c=0;return n=m(n.slice().sort((function(t,e){return t-e}))),n[0]!==r&&(n.unshift(r),a=!0),n[n.length-1]!==o&&(n.push(o),u=!0),n.forEach((function(r,o){var d,p,h,f,m,v,g,b,_,x,S=r,y=n[o+1],w=t.mode===s.Steps;for(w&&(d=V.xNumSteps[o]),d||(d=y-S),void 0===y&&(y=S),d=Math.max(d,1e-7),p=S;p<=y;p=e(p,d)){for(f=V.toStepping(p),m=f-c,b=m/(t.density||1),_=Math.round(b),x=m/_,h=1;h<=_;h+=1)v=c+h*x,i[v.toFixed(5)]=[V.fromStepping(v),0];g=n.indexOf(p)>-1?l.LargeValue:w?l.SmallValue:l.NoValue,!o&&a&&p!==y&&(g=0),p===y&&u||(i[f.toFixed(5)]=[p,g]),c=f}})),i}function ot(t,n,i){var r,o,a=z.createElement("div"),s=(r={},r[l.None]="",r[l.NoValue]=e.cssClasses.valueNormal,r[l.LargeValue]=e.cssClasses.valueLarge,r[l.SmallValue]=e.cssClasses.valueSub,r),u=(o={},o[l.None]="",o[l.NoValue]=e.cssClasses.markerNormal,o[l.LargeValue]=e.cssClasses.markerLarge,o[l.SmallValue]=e.cssClasses.markerSub,o),c=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],d=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];function p(t,n){var i=n===e.cssClasses.value,r=i?c:d,o=i?s:u;return n+" "+r[e.ort]+" "+o[t]}function h(t,r,o){if(o=n?n(r,o):o,o!==l.None){var s=T(a,!1);s.className=p(o,e.cssClasses.marker),s.style[e.style]=t+"%",o>l.NoValue&&(s=T(a,!1),s.className=p(o,e.cssClasses.value),s.setAttribute("data-value",String(r)),s.style[e.style]=t+"%",s.innerHTML=String(i.to(r)))}}return w(a,e.cssClasses.pips),w(a,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){h(e,t[e][0],t[e][1])})),a}function at(){u&&(p(u),u=null)}function st(t){at();var e=rt(t),n=t.filter,i=t.format||{to:function(t){return String(Math.round(t))}};return u=y.appendChild(ot(e,n,i)),u}function lt(){var t=i.getBoundingClientRect(),n="offset"+["Width","Height"][e.ort];return 0===e.ort?t.width||i[n]:t.height||i[n]}function ut(t,n,i,r){var o=function(o){var a=ct(o,r.pageOffset,r.target||n);return!!a&&(!(K()&&!r.doNotReject)&&(!(E(y,e.cssClasses.tap)&&!r.doNotReject)&&(!(t===d.start&&void 0!==a.buttons&&a.buttons>1)&&((!r.hover||!a.buttons)&&(b||a.preventDefault(),a.calcPoint=a.points[e.ort],void i(a,r))))))},a=[];return t.split(" ").forEach((function(t){n.addEventListener(t,o,!!b&&{passive:!0}),a.push([t,o])})),a}function ct(t,e,n){var i=0===t.type.indexOf("touch"),r=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),a=0,s=0;if(0===t.type.indexOf("MSPointer")&&(o=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(i){var l=function(e){var i=e.target;return i===n||n.contains(i)||t.composed&&t.composedPath().shift()===n};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;a=u[0].pageX,s=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;a=c.pageX,s=c.pageY}}return e=e||C(z),(r||o)&&(a=t.clientX+e.x,s=t.clientY+e.y),t.pageOffset=e,t.points=[a,s],t.cursor=r||o,t}function dt(t){var n=t-g(i,e.ort),r=100*n/lt();return r=x(r),e.dir?100-r:r}function ht(t){var e=100,n=!1;return o.forEach((function(i,r){if(!Q(r)){var o=L[r],a=Math.abs(o-t),s=100===a&&100===e,l=a<e,u=a<=e&&t>o;(l||u||s)&&(n=r,e=a)}})),n}function ft(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&vt(t,e)}function mt(t,n){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==n.buttonsProperty)return vt(t,n);var i=(e.dir?-1:1)*(t.calcPoint-n.startCalcPoint),r=100*i/n.baseSize;Nt(i>0,r,n.locations,n.handleNumbers,n.connect)}function vt(t,n){n.handle&&(k(n.handle,e.cssClasses.active),M-=1),n.listeners.forEach((function(t){H.removeEventListener(t[0],t[1])})),0===M&&(k(y,e.cssClasses.drag),Ut(),t.cursor&&(F.style.cursor="",F.removeEventListener("selectstart",f))),e.events.smoothSteps&&(n.handleNumbers.forEach((function(t){Lt(t,L[t],!0,!0,!1,!1)})),n.handleNumbers.forEach((function(t){Et("update",t)}))),n.handleNumbers.forEach((function(t){Et("change",t),Et("set",t),Et("end",t)}))}function gt(t,n){if(!n.handleNumbers.some(Q)){var i;if(1===n.handleNumbers.length){var r=o[n.handleNumbers[0]];i=r.children[0],M+=1,w(i,e.cssClasses.active)}t.stopPropagation();var a=[],s=ut(d.move,H,mt,{target:t.target,handle:i,connect:n.connect,listeners:a,startCalcPoint:t.calcPoint,baseSize:lt(),pageOffset:t.pageOffset,handleNumbers:n.handleNumbers,buttonsProperty:t.buttons,locations:L.slice()}),l=ut(d.end,H,vt,{target:t.target,handle:i,listeners:a,doNotReject:!0,handleNumbers:n.handleNumbers}),u=ut("mouseout",H,ft,{target:t.target,handle:i,listeners:a,doNotReject:!0,handleNumbers:n.handleNumbers});a.push.apply(a,s.concat(l,u)),t.cursor&&(F.style.cursor=getComputedStyle(t.target).cursor,o.length>1&&w(y,e.cssClasses.drag),F.addEventListener("selectstart",f,!1)),n.handleNumbers.forEach((function(t){Et("start",t)}))}}function bt(t){t.stopPropagation();var n=dt(t.calcPoint),i=ht(n);!1!==i&&(e.events.snap||_(y,e.cssClasses.tap,e.animationDuration),Lt(i,n,!0,!0),Ut(),Et("slide",i,!0),Et("update",i,!0),e.events.snap?gt(t,{handleNumbers:[i]}):(Et("change",i,!0),Et("set",i,!0)))}function _t(t){var e=dt(t.calcPoint),n=V.getStep(e),i=V.fromStepping(n);Object.keys(D).forEach((function(t){"hover"===t.split(".")[0]&&D[t].forEach((function(t){t.call(qt,i)}))}))}function xt(t,n){if(K()||Q(n))return!1;var i=["Left","Right"],r=["Down","Up"],o=["PageDown","PageUp"],a=["Home","End"];e.dir&&!e.ort?i.reverse():e.ort&&!e.dir&&(r.reverse(),o.reverse());var s,l=t.key.replace("Arrow",""),u=l===o[0],c=l===o[1],d=l===r[0]||l===i[0]||u,p=l===r[1]||l===i[1]||c,h=l===a[0],f=l===a[1];if(!d&&!p&&!h&&!f)return!0;if(t.preventDefault(),p||d){var m=d?0:1,v=Xt(n),g=v[m];if(null===g)return!1;!1===g&&(g=V.getDefaultStep(L[n],d,e.keyboardDefaultStep)),g*=c||u?e.keyboardPageMultiplier:e.keyboardMultiplier,g=Math.max(g,1e-7),g*=d?-1:1,s=U[n]+g}else s=f?e.spectrum.xVal[e.spectrum.xVal.length-1]:e.spectrum.xVal[0];return Lt(n,V.toStepping(s),!0,!0),Et("slide",n),Et("update",n),Et("change",n),Et("set",n),!1}function St(t){t.fixed||o.forEach((function(t,e){ut(d.start,t.children[0],gt,{handleNumbers:[e]})})),t.tap&&ut(d.start,i,bt,{}),t.hover&&ut(d.move,i,_t,{hover:!0}),t.drag&&a.forEach((function(n,i){if(!1!==n&&0!==i&&i!==a.length-1){var r=o[i-1],s=o[i],l=[n],u=[r,s],c=[i-1,i];w(n,e.cssClasses.draggable),t.fixed&&(l.push(r.children[0]),l.push(s.children[0])),t.dragAll&&(u=o,c=O),l.forEach((function(t){ut(d.start,t,gt,{handles:u,handleNumbers:c,connect:n})}))}}))}function yt(t,e){D[t]=D[t]||[],D[t].push(e),"update"===t.split(".")[0]&&o.forEach((function(t,e){Et("update",e)}))}function wt(t){return t===R.aria||t===R.tooltips}function kt(t){var e=t&&t.split(".")[0],n=e?t.substring(e.length):t;Object.keys(D).forEach((function(t){var i=t.split(".")[0],r=t.substring(i.length);e&&e!==i||n&&n!==r||wt(r)&&n!==r||delete D[t]}))}function Et(t,n,i){Object.keys(D).forEach((function(r){var o=r.split(".")[0];t===o&&D[r].forEach((function(t){t.call(qt,U.map(e.format.to),n,U.slice(),i||!1,L.slice(),qt)}))}))}function Ct(t,n,i,r,a,s,l){var u;return o.length>1&&!e.events.unconstrained&&(r&&n>0&&(u=V.getAbsoluteDistance(t[n-1],e.margin,!1),i=Math.max(i,u)),a&&n<o.length-1&&(u=V.getAbsoluteDistance(t[n+1],e.margin,!0),i=Math.min(i,u))),o.length>1&&e.limit&&(r&&n>0&&(u=V.getAbsoluteDistance(t[n-1],e.limit,!1),i=Math.min(i,u)),a&&n<o.length-1&&(u=V.getAbsoluteDistance(t[n+1],e.limit,!0),i=Math.max(i,u))),e.padding&&(0===n&&(u=V.getAbsoluteDistance(0,e.padding[0],!1),i=Math.max(i,u)),n===o.length-1&&(u=V.getAbsoluteDistance(100,e.padding[1],!0),i=Math.min(i,u))),l||(i=V.getStep(i)),i=x(i),!(i===t[n]&&!s)&&i}function At(t,n){var i=e.ort;return(i?n:t)+", "+(i?t:n)}function Nt(t,n,i,r,o){var a=i.slice(),s=r[0],l=e.events.smoothSteps,u=[!t,t],c=[t,!t];r=r.slice(),t&&r.reverse(),r.length>1?r.forEach((function(t,e){var i=Ct(a,t,a[t]+n,u[e],c[e],!1,l);!1===i?n=0:(n=i-a[t],a[t]=i)})):u=c=[!0];var d=!1;r.forEach((function(t,e){d=Lt(t,i[t]+n,u[e],c[e],!1,l)||d})),d&&(r.forEach((function(t){Et("update",t),Et("slide",t)})),void 0!=o&&Et("drag",s))}function Pt(t,n){return e.dir?100-t-n:t}function Vt(t,n){L[t]=n,U[t]=V.fromStepping(n);var i=Pt(n,0)-X,r="translate("+At(i+"%","0")+")";if(o[t].style[e.transformRule]=r,e.events.invertConnects&&L.length>1){var a=L.every((function(t,e,n){return 0===e||t>=n[e-1]}));if(j!==!a)return void $t()}Ot(t),Ot(t+1),j&&(Ot(t-1),Ot(t+2))}function Ut(){O.forEach((function(t){var e=L[t]>50?-1:1,n=3+(o.length+e*t);o[t].style.zIndex=String(n)}))}function Lt(t,e,n,i,r,o){return r||(e=Ct(L,t,e,n,i,!1,o)),!1!==e&&(Vt(t,e),!0)}function Ot(t){if(a[t]){var n=L.slice();j&&n.sort((function(t,e){return t-e}));var i=0,r=100;0!==t&&(i=n[t-1]),t!==a.length-1&&(r=n[t]);var o=r-i,s="translate("+At(Pt(i,o)+"%","0")+")",l="scale("+At(o/100,"1")+")";a[t].style[e.transformRule]=s+" "+l}}function Mt(t,n){return null===t||!1===t||void 0===t?L[n]:("number"===typeof t&&(t=String(t)),t=e.format.from(t),!1!==t&&(t=V.toStepping(t)),!1===t||isNaN(t)?L[n]:t)}function Dt(t,n,i){var r=S(t),o=void 0===L[0];n=void 0===n||n,e.animate&&!o&&_(y,e.cssClasses.tap,e.animationDuration),O.forEach((function(t){Lt(t,Mt(r[t],t),!0,!1,i)}));var a=1===O.length?0:1;if(o&&V.hasNoSize()&&(i=!0,L[0]=0,O.length>1)){var s=100/(O.length-1);O.forEach((function(t){L[t]=t*s}))}for(;a<O.length;++a)O.forEach((function(t){Lt(t,L[t],!0,!0,i)}));Ut(),O.forEach((function(t){Et("update",t),null!==r[t]&&n&&Et("set",t)}))}function jt(t){Dt(e.start,t)}function zt(t,e,n,i){if(t=Number(t),!(t>=0&&t<O.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Lt(t,Mt(e,t),!0,!0,i),Et("update",t),n&&Et("set",t)}function Ht(t){if(void 0===t&&(t=!1),t)return 1===U.length?U[0]:U.slice(0);var n=U.map(e.format.to);return 1===n.length?n[0]:n}function Ft(){kt(R.aria),kt(R.tooltips),Object.keys(e.cssClasses).forEach((function(t){k(y,e.cssClasses[t])}));while(y.firstChild)y.removeChild(y.firstChild);delete y.noUiSlider}function Xt(t){var n=L[t],i=V.getNearbySteps(n),r=U[t],o=i.thisStep.step,a=null;if(e.snap)return[r-i.stepBefore.startValue||null,i.stepAfter.startValue-r||null];!1!==o&&r+o>i.stepAfter.startValue&&(o=i.stepAfter.startValue-r),a=r>i.thisStep.startValue?i.thisStep.step:!1!==i.stepBefore.step&&r-i.stepBefore.highestStep,100===n?o=null:0===n&&(a=null);var s=V.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}function Rt(){return O.map(Xt)}function Tt(t,i){var r=Ht(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];o.forEach((function(e){void 0!==t[e]&&(n[e]=t[e])}));var a=pt(n);o.forEach((function(n){void 0!==t[n]&&(e[n]=a[n])})),V=a.spectrum,e.margin=a.margin,e.limit=a.limit,e.padding=a.padding,e.pips?st(e.pips):at(),e.tooltips?tt():Z(),L=[],Dt(h(t.start)?t.start:r,i),t.connect&&It()}function It(){while(r.firstChild)r.removeChild(r.firstChild);for(var t=0;t<=e.handles;t++)a[t]=$(r,e.connect[t]),Ot(t);St({drag:e.events.drag,fixed:!0})}function $t(){j=!j,W(e,e.connect.map((function(t){return!t}))),It()}function Bt(){i=q(y),B(e.connect,i),St(e.events),Dt(e.start),e.pips&&st(e.pips),e.tooltips&&tt(),et()}Bt();var qt={destroy:Ft,steps:Rt,on:yt,off:kt,get:Ht,set:Dt,setHandle:zt,reset:jt,disable:G,enable:J,__moveHandles:function(t,e,n){Nt(t,e,L,n)},options:n,updateOptions:Tt,target:y,removePips:at,removeTooltips:Z,getPositions:function(){return L.slice()},getTooltips:function(){return c},getOrigins:function(){return o},pips:st};return qt}function ft(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=pt(e),i=ht(t,n,e);return t.noUiSlider=i,i}var mt={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed"],data(){return{}},created(){},methods:{changed(){let t=this.$refs.slider.noUiSlider.get();(0,u.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}},computed:{},mounted(){let t=this.field_data.value||"",e=this.field_data.wrapper_attrs.split("value").join(""),n=e.match(/min="(.*?)"/)?.[0].replace('min="',"").replace('"',"")||0,i=e.match(/max="(.*?)"/)?.[0].replace('max="',"").replace('"',"")||100,r=e.match(/step="(.*?)"/)?.[0].replace('step="',"").replace('"',"")||1;ft(this.$refs.slider,{start:t,connect:!0,tooltips:[!0],step:parseInt(r,10),range:{min:parseInt(n,10),max:parseInt(i,10)},format:{to:function(t){return t},from:function(t){return t}}}),this.$refs.slider.noUiSlider.on("change",(()=>{this.changed()}))},watch:{}},vt=n(6262);const gt=(0,vt.A)(mt,[["render",a],["__scopeId","data-v-645a2917"]]);var bt=gt},5387:function(t,e,n){n.d(e,{A:function(){return f}});var i=n(641),r=n(33),o=n(3751);const a=["id","name","disabled"],s=["for"];function l(t,e,n,l,u,c){return(0,i.uX)(),(0,i.CE)("div",{class:(0,r.C4)(["form-check",c.checkbox_layout])},[(0,i.bo)((0,i.Lk)("input",{id:n.field_id,name:n.field_id,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),"true-value":"1","false-value":"0",disabled:c.is_disabled,type:"checkbox",class:"form-check-input"},null,8,a),[[o.lH,c.value]]),(0,i.Lk)("label",{for:n.field_id,class:"form-check-label"},(0,r.v_)(n.field_data.label),9,s)],2)}var u=n(3177),c=n(8700),d={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],data(){return{}},created(){},methods:{},computed:{checkbox_layout(){return"horizontal"===this.field_data.type_settings?.chb_layout?"form-check-inline":"blank"===this.field_data.type_settings?.chb_layout?"input-button-blank":""},is_disabled(){return(0,c.A)().is_read_only()||this.field_data.type_settings?.disabled},value:{get(){return void 0!==this.emit_name?(0,u.A)().get_user_input(this.field_id):(0,u.A)().get_form_value(this.field_id)},set(t){(0,u.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}}},watch:{}},p=n(6262);const h=(0,p.A)(d,[["render",l]]);var f=h},4871:function(t,e,n){n.d(e,{A:function(){return c}});var i=n(641),r=n(33);const o=["id","name"];function a(t,e,n,a,s,l){return(0,i.uX)(),(0,i.CE)("p",{id:n.field_id,name:n.field_id},(0,r.v_)(n.in_product?n.field_data.label:n.field_data.value),9,o)}var s={props:{field_id:String,field_data:Object,in_product:Boolean},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{},watch:{}},l=n(6262);const u=(0,l.A)(s,[["render",a]]);var c=u},6546:function(t,e,n){n.d(e,{A:function(){return g}});var i=n(641),r=n(33),o=n(3751);const a=["id","name","disabled"],s=["value"];function l(t,e,n,l,u,c){return(0,i.bo)(((0,i.uX)(),(0,i.CE)("select",{id:n.field_id,name:n.field_id,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),disabled:c.is_disabled,class:"form-control"},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.field_data.enum,((t,e)=>((0,i.uX)(),(0,i.CE)("option",{value:c.option_value(t)},(0,r.v_)(c.option_label(t)),9,s)))),256))],8,a)),[[o.u1,c.value]])}var u=n(3177),c=n(8700);let d={props:{},components:{},emits:[],data(){return{combined:{auto_typ:"auto_typ_2",havarijne_auto_typ:"havarijne_auto_typ2",cestovne_krajina:"cestovne_uzemna_platnost"}}},created(){this.change_combined_input()},methods:{change_combined_input(){let t={1:{1:"1",2:"20",3:"33",4:"35"},2:{1:"1",2:"2",3:"20"},7:{1:"51",2:"210",3:"1001"}},e=(0,c.A)().product_group_id();t[e]?.[this.cached_dynamic_combo]!==this.value&&""!==this.cached_dynamic_combo&&(this.value=t[e]?.[this.cached_dynamic_combo]||"")}},computed:{cached_dynamic_combo(){return this.combined.hasOwnProperty(this.field_id)?(0,u.A)().get_form_value(this.combined[this.field_id]):""}},watch:{cached_dynamic_combo(){this.change_combined_input()}}};var p=d,h=n(6343),f={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],mixins:[p],data(){return{loading:!1}},created(){},methods:{option_value(t){return h.A.enum_value(t)},option_label(t){return h.A.enum_label(t)}},computed:{is_disabled(){return(0,c.A)().is_read_only()||!0===this.loading||this.field_data.type_settings?.disabled},value:{get(){return void 0!==this.emit_name?(0,u.A)().get_user_input(this.field_id):(0,u.A)().get_form_value(this.field_id)},set(t){(0,u.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}}},watch:{}},m=n(6262);const v=(0,m.A)(f,[["render",l]]);var g=v},2095:function(t,e,n){n.d(e,{A:function(){return m}});var i=n(641),r=n(33);const o={key:0},a={key:1},s={key:2},l={key:3},u=["innerHTML"];function c(t,e,n,c,d,p){return n.tooltip_text?((0,i.uX)(),(0,i.CE)("div",{key:0,class:(0,r.C4)(["ttip",p.tooltip_class])},["info"===n.tooltip_type?((0,i.uX)(),(0,i.CE)("b",o,"?")):"warning"===n.tooltip_type?((0,i.uX)(),(0,i.CE)("b",a,"!")):"cost"===n.tooltip_type?((0,i.uX)(),(0,i.CE)("span",s," (€)")):((0,i.uX)(),(0,i.CE)("b",l,"bad tooltip type")),(0,i.Lk)("div",{class:(0,r.C4)([p.tooltip_width_class,"ttip_text"])},[(0,i.Lk)("span",{innerHTML:p.tooltip_breakpoint?p.tooltip_preview:n.tooltip_text},null,8,u),p.tooltip_breakpoint?((0,i.uX)(),(0,i.CE)("span",{key:0,onClick:e[0]||(e[0]=(...t)=>p.open_ttip_modal&&p.open_ttip_modal(...t)),class:"d-block text-end text-decoration-underline",style:{cursor:"pointer"}},"Čítať viac...")):(0,i.Q3)("",!0)],2)],2)):(0,i.Q3)("",!0)}var d=n(2873),p={props:{tooltip_text:String,tooltip_type:String},components:{},emits:[],data(){return{}},created(){},methods:{open_ttip_modal(){let t={info:"Nápoveda",warning:"Upozornenie",cost:"Info"};(0,d.A)().store_modal_data({title:t[this.tooltip_type],content:this.tooltip_text}),(0,d.A)().open_it("Acceptance_modal")}},computed:{tooltip_width_class(){let t=this.tooltip_text.length;return t<30?"shortest":t<40?"shorter":t<55?"short":""},tooltip_class(){let t={info:"",warning:"pr_warning",cost:"ttip-top"};return t[this.tooltip_type]},tooltip_breakpoint(){let t="warning"===this.tooltip_type?330:500;return this.tooltip_text?.length>t},tooltip_preview(){let t=this.tooltip_text.slice(0,290);return t=t.split(" ").slice(0,-1).join(" "),t+" ..."}},watch:{}},h=n(6262);const f=(0,h.A)(p,[["render",c]]);var m=f}}]);