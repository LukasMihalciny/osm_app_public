"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[697],{1937:function(t,e,i){i.d(e,{A:function(){return x}});var n=i(641),r=i(33),o=i(3751);const a={class:"input-group multiple",ref:"multiple_reference"},s=["id","name"],l={class:"multiple_dropdown"},u={class:"m-2"},c={class:"form-check my-2"},d=["id","name","onUpdate:modelValue","disabled"],p=["for"];function h(t,e,i,h,f,m){return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.Lk)("p",{id:i.field_id,name:i.field_id,onClick:e[0]||(e[0]=(...t)=>m.open_dropdown&&m.open_dropdown(...t)),class:"form-control multiple_input"},(0,r.v_)(m.display_selected),9,s),(0,n.bo)((0,n.Lk)("div",l,[(0,n.Lk)("div",null,[(0,n.Lk)("span",{onClick:e[1]||(e[1]=(...t)=>m.set_all&&m.set_all(...t))}," Všetko "),(0,n.Lk)("span",{onClick:e[2]||(e[2]=(...t)=>m.set_none&&m.set_none(...t))}," Nič "),(0,n.Lk)("span",{onClick:e[3]||(e[3]=(...t)=>m.accept&&m.accept(...t)),class:"accept"}," Potvrdiť ")]),(0,n.Lk)("div",u,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(f.options,((t,e)=>((0,n.uX)(),(0,n.CE)("div",c,[(0,n.bo)((0,n.Lk)("input",{id:i.field_id+"-"+e,name:i.field_id+"-"+e,"onUpdate:modelValue":t=>f.options[e].checked=t,disabled:m.is_disabled,type:"checkbox",class:"form-check-input"},null,8,d),[[o.lH,f.options[e].checked]]),(0,n.Lk)("label",{for:i.field_id+"-"+e,class:"form-check-label"},(0,r.v_)(t.label),9,p)])))),256))])],512),[[o.aG,f.opened]])],512)}i(4114);var f=i(3177),m=i(8700),v=i(6343),g={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],data(){return{opened:!1,delimiter:",",options:{}}},created(){let t="";t=void 0!==this.emit_name?(0,f.A)().get_user_input(this.field_id):(0,f.A)().get_form_value(this.field_id);let e=t?.split(this.delimiter)||[];for(let i in this.field_data.enum){if(!this.field_data.enum.hasOwnProperty(i))continue;let t=this.field_data.enum[i];this.options[i]={value:v.A.first_key(t),label:v.A.first_value(t),checked:e.indexOf(v.A.first_key(t))>-1}}},methods:{open_dropdown(){this.opened=!0,document.addEventListener("click",this.clicked_outside,!1)},clicked_outside(t){const e=this.$refs.multiple_reference.contains(t.target);e||(document.removeEventListener("click",this.clicked_outside,!1),this.accept())},set_all(){if(!this.is_disabled)for(let t in this.options)this.options.hasOwnProperty(t)&&(this.options[t].checked=!0)},set_none(){if(!this.is_disabled)for(let t in this.options)this.options.hasOwnProperty(t)&&(this.options[t].checked=!1)},accept(){this.opened=!1;let t=[];for(let e in this.options)this.options.hasOwnProperty(e)&&this.options[e].checked&&t.push(this.options[e].value);t=t.join(this.delimiter),(0,f.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}},computed:{is_disabled(){return(0,m.A)().is_read_only()},display_selected(){let t=[];for(let e in this.options)this.options.hasOwnProperty(e)&&this.options[e].checked&&t.push(this.options[e].label);return 0===t.length?this.field_data.placeholder:t.join(", ")}},watch:{}},b=i(6262);const _=(0,b.A)(g,[["render",h]]);var x=_},1322:function(t,e,i){i.d(e,{A:function(){return bt}});var n=i(641);const r={class:"slider_scope"},o=["id"];function a(t,e,i,a,s,l){return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("div",{id:i.field_id,ref:"slider"},null,8,o)])}var s,l,u=i(3177);function c(t){return d(t)&&"function"===typeof t.from}function d(t){return"object"===typeof t&&"function"===typeof t.to}function p(t){t.parentElement.removeChild(t)}function h(t){return null!==t&&void 0!==t}function f(t){t.preventDefault()}function m(t){return t.filter((function(t){return!this[t]&&(this[t]=!0)}),{})}function v(t,e){return Math.round(t/e)*e}function g(t,e){var i=t.getBoundingClientRect(),n=t.ownerDocument,r=n.documentElement,o=C(n);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),e?i.top+o.y-r.clientTop:i.left+o.x-r.clientLeft}function b(t){return"number"===typeof t&&!isNaN(t)&&isFinite(t)}function _(t,e,i){i>0&&(w(t,e),setTimeout((function(){k(t,e)}),i))}function x(t){return Math.max(Math.min(t,100),0)}function S(t){return Array.isArray(t)?t:[t]}function y(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function w(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function k(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function E(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function C(t){var e=void 0!==window.pageXOffset,i="CSS1Compat"===(t.compatMode||""),n=e?window.pageXOffset:i?t.documentElement.scrollLeft:t.body.scrollLeft,r=e?window.pageYOffset:i?t.documentElement.scrollTop:t.body.scrollTop;return{x:n,y:r}}function A(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function N(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(i){}return t}function P(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function V(t,e){return 100/(e-t)}function U(t,e,i){return 100*e/(t[i+1]-t[i])}function L(t,e){return U(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function O(t,e){return e*(t[1]-t[0])/100+t[0]}function M(t,e){var i=1;while(t>=e[i])i+=1;return i}function D(t,e,i){if(i>=t.slice(-1)[0])return 100;var n=M(i,t),r=t[n-1],o=t[n],a=e[n-1],s=e[n];return a+L([r,o],i)/V(a,s)}function j(t,e,i){if(i>=100)return t.slice(-1)[0];var n=M(i,e),r=t[n-1],o=t[n],a=e[n-1],s=e[n];return O([r,o],(i-a)*V(a,s))}function z(t,e,i,n){if(100===n)return n;var r=M(n,t),o=t[r-1],a=t[r];return i?n-o>(a-o)/2?a:o:e[r-1]?t[r-1]+v(n-t[r-1],e[r-1]):n}(function(t){t["Range"]="range",t["Steps"]="steps",t["Positions"]="positions",t["Count"]="count",t["Values"]="values"})(s||(s={})),function(t){t[t["None"]=-1]="None",t[t["NoValue"]=0]="NoValue",t[t["LargeValue"]=1]="LargeValue",t[t["SmallValue"]=2]="SmallValue"}(l||(l={}));var H=function(){function t(t,e,i){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.snap=e;var r=[];for(Object.keys(t).forEach((function(e){r.push([S(t[e]),e])})),r.sort((function(t,e){return t[0][0]-e[0][0]})),n=0;n<r.length;n++)this.handleEntryPoint(r[n][1],r[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}return t.prototype.getDistance=function(t){for(var e=[],i=0;i<this.xNumSteps.length-1;i++)e[i]=U(this.xVal,t,i);return e},t.prototype.getAbsoluteDistance=function(t,e,i){var n,r=0;if(t<this.xPct[this.xPct.length-1])while(t>this.xPct[r+1])r++;else t===this.xPct[this.xPct.length-1]&&(r=this.xPct.length-2);i||t!==this.xPct[r+1]||r++,null===e&&(e=[]);var o=1,a=e[r],s=0,l=0,u=0,c=0;n=i?(t-this.xPct[r])/(this.xPct[r+1]-this.xPct[r]):(this.xPct[r+1]-t)/(this.xPct[r+1]-this.xPct[r]);while(a>0)s=this.xPct[r+1+c]-this.xPct[r+c],e[r+c]*o+100-100*n>100?(l=s*n,o=(a-100*n)/e[r+c],n=1):(l=e[r+c]*s/100*o,o=0),i?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),a=e[r+c]*o;return t+u},t.prototype.toStepping=function(t){return t=D(this.xVal,this.xPct,t),t},t.prototype.fromStepping=function(t){return j(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=z(this.xPct,this.xSteps,this.snap,t),t},t.prototype.getDefaultStep=function(t,e,i){var n=M(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/i},t.prototype.getNearbySteps=function(t){var e=M(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(y);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var i;if(i="min"===t?0:"max"===t?100:parseFloat(t),!b(i)||!b(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(i),this.xVal.push(e[0]);var n=Number(e[1]);i?this.xSteps.push(!isNaN(n)&&n):isNaN(n)||(this.xSteps[0]=n),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=U([this.xVal[t],this.xVal[t+1]],e,0)/V(this.xPct[t],this.xPct[t+1]);var i=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],n=Math.ceil(Number(i.toFixed(3))-1),r=this.xVal[t]+this.xNumSteps[t]*n;this.xHighestCompleteStep[t]=r}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),F={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},X={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},R={tooltips:".__tooltips",aria:".__aria"};function T(t,e){if(!b(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function I(t,e){if(!b(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function $(t,e){if(!b(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function B(t,e){if(!b(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function q(t,e){if("object"!==typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new H(e,t.snap||!1,t.singleStep)}function Y(t,e){if(e=S(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function K(t,e){if("boolean"!==typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function Q(t,e){if("boolean"!==typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function G(t,e){if("number"!==typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function W(t,e){var i,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(i=1;i<t.handles;i++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function J(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Z(t,e){if(!b(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function tt(t,e){if(!b(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function et(t,e){var i;if(!b(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!b(e[0])&&!b(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],i=0;i<t.spectrum.xNumSteps.length-1;i++)if(t.padding[0][i]<0||t.padding[1][i]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],r=t.spectrum.xVal[0],o=t.spectrum.xVal[t.spectrum.xVal.length-1];if(n/(o-r)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function it(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function nt(t,e){if("string"!==typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var i=e.indexOf("tap")>=0,n=e.indexOf("drag")>=0,r=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,s=e.indexOf("unconstrained")>=0,l=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(r){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Z(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:i||o,drag:n,dragAll:l,smoothSteps:u,fixed:r,snap:o,hover:a,unconstrained:s}}function rt(t,e){if(!1!==e)if(!0===e||d(e)){t.tooltips=[];for(var i=0;i<t.handles;i++)t.tooltips.push(e)}else{if(e=S(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!==typeof t&&!d(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function ot(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function at(t,e){if(!d(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function st(t,e){if(!c(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function lt(t,e){if("boolean"!==typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function ut(t,e){t.documentElement=e}function ct(t,e){if("string"!==typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function dt(t,e){if("object"!==typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"===typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(i){t.cssClasses[i]=t.cssPrefix+e[i]}))):t.cssClasses=e}function pt(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:F,format:F},i={step:{r:!1,t:T},keyboardPageMultiplier:{r:!1,t:I},keyboardMultiplier:{r:!1,t:$},keyboardDefaultStep:{r:!1,t:B},start:{r:!0,t:Y},connect:{r:!0,t:W},direction:{r:!0,t:it},snap:{r:!1,t:K},animate:{r:!1,t:Q},animationDuration:{r:!1,t:G},range:{r:!0,t:q},orientation:{r:!1,t:J},margin:{r:!1,t:Z},limit:{r:!1,t:tt},padding:{r:!1,t:et},behaviour:{r:!0,t:nt},ariaFormat:{r:!1,t:at},format:{r:!1,t:st},tooltips:{r:!1,t:rt},keyboardSupport:{r:!0,t:lt},documentElement:{r:!1,t:ut},cssPrefix:{r:!0,t:ct},cssClasses:{r:!0,t:dt},handleAttributes:{r:!1,t:ot}},n={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:X,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(i).forEach((function(r){if(h(t[r])||void 0!==n[r])i[r].t(e,h(t[r])?t[r]:n[r]);else if(i[r].r)throw new Error("noUiSlider: '"+r+"' is required.")})),e.pips=t.pips;var r=document.createElement("div"),o=void 0!==r.style.msTransform,a=void 0!==r.style.transform;e.transformRule=a?"transform":o?"msTransform":"webkitTransform";var s=[["left","top"],["right","bottom"]];return e.style=s[e.dir][e.ort],e}function ht(t,e,i){var n,r,o,a,u,c=A(),d=P(),v=d&&N(),b=t,y=e.spectrum,V=[],U=[],L=[],O=0,M={},D=t.ownerDocument,j=e.documentElement||D.documentElement,z=D.body,H="rtl"===D.dir||1===e.ort?0:100;function F(t,e){var i=D.createElement("div");return e&&w(i,e),t.appendChild(i),i}function X(t,i){var n=F(t,e.cssClasses.origin),r=F(n,e.cssClasses.handle);if(F(r,e.cssClasses.touchArea),r.setAttribute("data-handle",String(i)),e.keyboardSupport&&(r.setAttribute("tabindex","0"),r.addEventListener("keydown",(function(t){return gt(t,i)}))),void 0!==e.handleAttributes){var o=e.handleAttributes[i];Object.keys(o).forEach((function(t){r.setAttribute(t,o[t])}))}return r.setAttribute("role","slider"),r.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),0===i?w(r,e.cssClasses.handleLower):i===e.handles-1&&w(r,e.cssClasses.handleUpper),n.handle=r,n}function T(t,i){return!!i&&F(t,e.cssClasses.connect)}function I(t,i){var n=F(i,e.cssClasses.connects);r=[],o=[],o.push(T(n,t[0]));for(var a=0;a<e.handles;a++)r.push(X(i,a)),L[a]=a,o.push(T(n,t[a+1]))}function $(t){w(t,e.cssClasses.target),0===e.dir?w(t,e.cssClasses.ltr):w(t,e.cssClasses.rtl),0===e.ort?w(t,e.cssClasses.horizontal):w(t,e.cssClasses.vertical);var i=getComputedStyle(t).direction;return w(t,"rtl"===i?e.cssClasses.textDirectionRtl:e.cssClasses.textDirectionLtr),F(t,e.cssClasses.base)}function B(t,i){return!(!e.tooltips||!e.tooltips[i])&&F(t.firstChild,e.cssClasses.tooltip)}function q(){return b.hasAttribute("disabled")}function Y(t){var e=r[t];return e.hasAttribute("disabled")}function K(t){null!==t&&void 0!==t?(r[t].setAttribute("disabled",""),r[t].handle.removeAttribute("tabindex")):(b.setAttribute("disabled",""),r.forEach((function(t){t.handle.removeAttribute("tabindex")})))}function Q(t){null!==t&&void 0!==t?(r[t].removeAttribute("disabled"),r[t].handle.setAttribute("tabindex","0")):(b.removeAttribute("disabled"),r.forEach((function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")})))}function G(){u&&(St("update"+R.tooltips),u.forEach((function(t){t&&p(t)})),u=null)}function W(){G(),u=r.map(B),_t("update"+R.tooltips,(function(t,i,n){if(u&&e.tooltips&&!1!==u[i]){var r=t[i];!0!==e.tooltips[i]&&(r=e.tooltips[i].to(n[i])),u[i].innerHTML=r}}))}function J(){St("update"+R.aria),_t("update"+R.aria,(function(t,i,n,o,a){L.forEach((function(t){var i=r[t],o=wt(U,t,0,!0,!0,!0),s=wt(U,t,100,!0,!0,!0),l=a[t],u=String(e.ariaFormat.to(n[t]));o=y.fromStepping(o).toFixed(1),s=y.fromStepping(s).toFixed(1),l=y.fromStepping(l).toFixed(1),i.children[0].setAttribute("aria-valuemin",o),i.children[0].setAttribute("aria-valuemax",s),i.children[0].setAttribute("aria-valuenow",l),i.children[0].setAttribute("aria-valuetext",u)}))}))}function Z(t){if(t.mode===s.Range||t.mode===s.Steps)return y.xVal;if(t.mode===s.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");var e=t.values-1,i=100/e,n=[];while(e--)n[e]=e*i;return n.push(100),tt(n,t.stepped)}return t.mode===s.Positions?tt(t.values,t.stepped):t.mode===s.Values?t.stepped?t.values.map((function(t){return y.fromStepping(y.getStep(y.toStepping(t)))})):t.values:[]}function tt(t,e){return t.map((function(t){return y.fromStepping(e?y.getStep(t):t)}))}function et(t){function e(t,e){return Number((t+e).toFixed(7))}var i=Z(t),n={},r=y.xVal[0],o=y.xVal[y.xVal.length-1],a=!1,u=!1,c=0;return i=m(i.slice().sort((function(t,e){return t-e}))),i[0]!==r&&(i.unshift(r),a=!0),i[i.length-1]!==o&&(i.push(o),u=!0),i.forEach((function(r,o){var d,p,h,f,m,v,g,b,_,x,S=r,w=i[o+1],k=t.mode===s.Steps;for(k&&(d=y.xNumSteps[o]),d||(d=w-S),void 0===w&&(w=S),d=Math.max(d,1e-7),p=S;p<=w;p=e(p,d)){for(f=y.toStepping(p),m=f-c,b=m/(t.density||1),_=Math.round(b),x=m/_,h=1;h<=_;h+=1)v=c+h*x,n[v.toFixed(5)]=[y.fromStepping(v),0];g=i.indexOf(p)>-1?l.LargeValue:k?l.SmallValue:l.NoValue,!o&&a&&p!==w&&(g=0),p===w&&u||(n[f.toFixed(5)]=[p,g]),c=f}})),n}function it(t,i,n){var r,o,a=D.createElement("div"),s=(r={},r[l.None]="",r[l.NoValue]=e.cssClasses.valueNormal,r[l.LargeValue]=e.cssClasses.valueLarge,r[l.SmallValue]=e.cssClasses.valueSub,r),u=(o={},o[l.None]="",o[l.NoValue]=e.cssClasses.markerNormal,o[l.LargeValue]=e.cssClasses.markerLarge,o[l.SmallValue]=e.cssClasses.markerSub,o),c=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],d=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];function p(t,i){var n=i===e.cssClasses.value,r=n?c:d,o=n?s:u;return i+" "+r[e.ort]+" "+o[t]}function h(t,r,o){if(o=i?i(r,o):o,o!==l.None){var s=F(a,!1);s.className=p(o,e.cssClasses.marker),s.style[e.style]=t+"%",o>l.NoValue&&(s=F(a,!1),s.className=p(o,e.cssClasses.value),s.setAttribute("data-value",String(r)),s.style[e.style]=t+"%",s.innerHTML=String(n.to(r)))}}return w(a,e.cssClasses.pips),w(a,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){h(e,t[e][0],t[e][1])})),a}function nt(){a&&(p(a),a=null)}function rt(t){nt();var e=et(t),i=t.filter,n=t.format||{to:function(t){return String(Math.round(t))}};return a=b.appendChild(it(e,i,n)),a}function ot(){var t=n.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return 0===e.ort?t.width||n[i]:t.height||n[i]}function at(t,i,n,r){var o=function(o){var a=st(o,r.pageOffset,r.target||i);return!!a&&(!(q()&&!r.doNotReject)&&(!(E(b,e.cssClasses.tap)&&!r.doNotReject)&&(!(t===c.start&&void 0!==a.buttons&&a.buttons>1)&&((!r.hover||!a.buttons)&&(v||a.preventDefault(),a.calcPoint=a.points[e.ort],void n(a,r))))))},a=[];return t.split(" ").forEach((function(t){i.addEventListener(t,o,!!v&&{passive:!0}),a.push([t,o])})),a}function st(t,e,i){var n=0===t.type.indexOf("touch"),r=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),a=0,s=0;if(0===t.type.indexOf("MSPointer")&&(o=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(n){var l=function(e){var n=e.target;return n===i||i.contains(n)||t.composed&&t.composedPath().shift()===i};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;a=u[0].pageX,s=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;a=c.pageX,s=c.pageY}}return e=e||C(D),(r||o)&&(a=t.clientX+e.x,s=t.clientY+e.y),t.pageOffset=e,t.points=[a,s],t.cursor=r||o,t}function lt(t){var i=t-g(n,e.ort),r=100*i/ot();return r=x(r),e.dir?100-r:r}function ut(t){var e=100,i=!1;return r.forEach((function(n,r){if(!Y(r)){var o=U[r],a=Math.abs(o-t),s=100===a&&100===e,l=a<e,u=a<=e&&t>o;(l||u||s)&&(i=r,e=a)}})),i}function ct(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&ht(t,e)}function dt(t,i){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==i.buttonsProperty)return ht(t,i);var n=(e.dir?-1:1)*(t.calcPoint-i.startCalcPoint),r=100*n/i.baseSize;Et(n>0,r,i.locations,i.handleNumbers,i.connect)}function ht(t,i){i.handle&&(k(i.handle,e.cssClasses.active),O-=1),i.listeners.forEach((function(t){j.removeEventListener(t[0],t[1])})),0===O&&(k(b,e.cssClasses.drag),Nt(),t.cursor&&(z.style.cursor="",z.removeEventListener("selectstart",f))),e.events.smoothSteps&&(i.handleNumbers.forEach((function(t){Pt(t,U[t],!0,!0,!1,!1)})),i.handleNumbers.forEach((function(t){yt("update",t)}))),i.handleNumbers.forEach((function(t){yt("change",t),yt("set",t),yt("end",t)}))}function ft(t,i){if(!i.handleNumbers.some(Y)){var n;if(1===i.handleNumbers.length){var o=r[i.handleNumbers[0]];n=o.children[0],O+=1,w(n,e.cssClasses.active)}t.stopPropagation();var a=[],s=at(c.move,j,dt,{target:t.target,handle:n,connect:i.connect,listeners:a,startCalcPoint:t.calcPoint,baseSize:ot(),pageOffset:t.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:t.buttons,locations:U.slice()}),l=at(c.end,j,ht,{target:t.target,handle:n,listeners:a,doNotReject:!0,handleNumbers:i.handleNumbers}),u=at("mouseout",j,ct,{target:t.target,handle:n,listeners:a,doNotReject:!0,handleNumbers:i.handleNumbers});a.push.apply(a,s.concat(l,u)),t.cursor&&(z.style.cursor=getComputedStyle(t.target).cursor,r.length>1&&w(b,e.cssClasses.drag),z.addEventListener("selectstart",f,!1)),i.handleNumbers.forEach((function(t){yt("start",t)}))}}function mt(t){t.stopPropagation();var i=lt(t.calcPoint),n=ut(i);!1!==n&&(e.events.snap||_(b,e.cssClasses.tap,e.animationDuration),Pt(n,i,!0,!0),Nt(),yt("slide",n,!0),yt("update",n,!0),e.events.snap?ft(t,{handleNumbers:[n]}):(yt("change",n,!0),yt("set",n,!0)))}function vt(t){var e=lt(t.calcPoint),i=y.getStep(e),n=y.fromStepping(i);Object.keys(M).forEach((function(t){"hover"===t.split(".")[0]&&M[t].forEach((function(t){t.call(Rt,n)}))}))}function gt(t,i){if(q()||Y(i))return!1;var n=["Left","Right"],r=["Down","Up"],o=["PageDown","PageUp"],a=["Home","End"];e.dir&&!e.ort?n.reverse():e.ort&&!e.dir&&(r.reverse(),o.reverse());var s,l=t.key.replace("Arrow",""),u=l===o[0],c=l===o[1],d=l===r[0]||l===n[0]||u,p=l===r[1]||l===n[1]||c,h=l===a[0],f=l===a[1];if(!d&&!p&&!h&&!f)return!0;if(t.preventDefault(),p||d){var m=d?0:1,v=zt(i),g=v[m];if(null===g)return!1;!1===g&&(g=y.getDefaultStep(U[i],d,e.keyboardDefaultStep)),g*=c||u?e.keyboardPageMultiplier:e.keyboardMultiplier,g=Math.max(g,1e-7),g*=d?-1:1,s=V[i]+g}else s=f?e.spectrum.xVal[e.spectrum.xVal.length-1]:e.spectrum.xVal[0];return Pt(i,y.toStepping(s),!0,!0),yt("slide",i),yt("update",i),yt("change",i),yt("set",i),!1}function bt(t){t.fixed||r.forEach((function(t,e){at(c.start,t.children[0],ft,{handleNumbers:[e]})})),t.tap&&at(c.start,n,mt,{}),t.hover&&at(c.move,n,vt,{hover:!0}),t.drag&&o.forEach((function(i,n){if(!1!==i&&0!==n&&n!==o.length-1){var a=r[n-1],s=r[n],l=[i],u=[a,s],d=[n-1,n];w(i,e.cssClasses.draggable),t.fixed&&(l.push(a.children[0]),l.push(s.children[0])),t.dragAll&&(u=r,d=L),l.forEach((function(t){at(c.start,t,ft,{handles:u,handleNumbers:d,connect:i})}))}}))}function _t(t,e){M[t]=M[t]||[],M[t].push(e),"update"===t.split(".")[0]&&r.forEach((function(t,e){yt("update",e)}))}function xt(t){return t===R.aria||t===R.tooltips}function St(t){var e=t&&t.split(".")[0],i=e?t.substring(e.length):t;Object.keys(M).forEach((function(t){var n=t.split(".")[0],r=t.substring(n.length);e&&e!==n||i&&i!==r||xt(r)&&i!==r||delete M[t]}))}function yt(t,i,n){Object.keys(M).forEach((function(r){var o=r.split(".")[0];t===o&&M[r].forEach((function(t){t.call(Rt,V.map(e.format.to),i,V.slice(),n||!1,U.slice(),Rt)}))}))}function wt(t,i,n,o,a,s,l){var u;return r.length>1&&!e.events.unconstrained&&(o&&i>0&&(u=y.getAbsoluteDistance(t[i-1],e.margin,!1),n=Math.max(n,u)),a&&i<r.length-1&&(u=y.getAbsoluteDistance(t[i+1],e.margin,!0),n=Math.min(n,u))),r.length>1&&e.limit&&(o&&i>0&&(u=y.getAbsoluteDistance(t[i-1],e.limit,!1),n=Math.min(n,u)),a&&i<r.length-1&&(u=y.getAbsoluteDistance(t[i+1],e.limit,!0),n=Math.max(n,u))),e.padding&&(0===i&&(u=y.getAbsoluteDistance(0,e.padding[0],!1),n=Math.max(n,u)),i===r.length-1&&(u=y.getAbsoluteDistance(100,e.padding[1],!0),n=Math.min(n,u))),l||(n=y.getStep(n)),n=x(n),!(n===t[i]&&!s)&&n}function kt(t,i){var n=e.ort;return(n?i:t)+", "+(n?t:i)}function Et(t,i,n,r,o){var a=n.slice(),s=r[0],l=e.events.smoothSteps,u=[!t,t],c=[t,!t];r=r.slice(),t&&r.reverse(),r.length>1?r.forEach((function(t,e){var n=wt(a,t,a[t]+i,u[e],c[e],!1,l);!1===n?i=0:(i=n-a[t],a[t]=n)})):u=c=[!0];var d=!1;r.forEach((function(t,e){d=Pt(t,n[t]+i,u[e],c[e],!1,l)||d})),d&&(r.forEach((function(t){yt("update",t),yt("slide",t)})),void 0!=o&&yt("drag",s))}function Ct(t,i){return e.dir?100-t-i:t}function At(t,i){U[t]=i,V[t]=y.fromStepping(i);var n=Ct(i,0)-H,o="translate("+kt(n+"%","0")+")";r[t].style[e.transformRule]=o,Vt(t),Vt(t+1)}function Nt(){L.forEach((function(t){var e=U[t]>50?-1:1,i=3+(r.length+e*t);r[t].style.zIndex=String(i)}))}function Pt(t,e,i,n,r,o){return r||(e=wt(U,t,e,i,n,!1,o)),!1!==e&&(At(t,e),!0)}function Vt(t){if(o[t]){var i=0,n=100;0!==t&&(i=U[t-1]),t!==o.length-1&&(n=U[t]);var r=n-i,a="translate("+kt(Ct(i,r)+"%","0")+")",s="scale("+kt(r/100,"1")+")";o[t].style[e.transformRule]=a+" "+s}}function Ut(t,i){return null===t||!1===t||void 0===t?U[i]:("number"===typeof t&&(t=String(t)),t=e.format.from(t),!1!==t&&(t=y.toStepping(t)),!1===t||isNaN(t)?U[i]:t)}function Lt(t,i,n){var r=S(t),o=void 0===U[0];i=void 0===i||i,e.animate&&!o&&_(b,e.cssClasses.tap,e.animationDuration),L.forEach((function(t){Pt(t,Ut(r[t],t),!0,!1,n)}));var a=1===L.length?0:1;if(o&&y.hasNoSize()&&(n=!0,U[0]=0,L.length>1)){var s=100/(L.length-1);L.forEach((function(t){U[t]=t*s}))}for(;a<L.length;++a)L.forEach((function(t){Pt(t,U[t],!0,!0,n)}));Nt(),L.forEach((function(t){yt("update",t),null!==r[t]&&i&&yt("set",t)}))}function Ot(t){Lt(e.start,t)}function Mt(t,e,i,n){if(t=Number(t),!(t>=0&&t<L.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Pt(t,Ut(e,t),!0,!0,n),yt("update",t),i&&yt("set",t)}function Dt(t){if(void 0===t&&(t=!1),t)return 1===V.length?V[0]:V.slice(0);var i=V.map(e.format.to);return 1===i.length?i[0]:i}function jt(){St(R.aria),St(R.tooltips),Object.keys(e.cssClasses).forEach((function(t){k(b,e.cssClasses[t])}));while(b.firstChild)b.removeChild(b.firstChild);delete b.noUiSlider}function zt(t){var i=U[t],n=y.getNearbySteps(i),r=V[t],o=n.thisStep.step,a=null;if(e.snap)return[r-n.stepBefore.startValue||null,n.stepAfter.startValue-r||null];!1!==o&&r+o>n.stepAfter.startValue&&(o=n.stepAfter.startValue-r),a=r>n.thisStep.startValue?n.thisStep.step:!1!==n.stepBefore.step&&r-n.stepBefore.highestStep,100===i?o=null:0===i&&(a=null);var s=y.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}function Ht(){return L.map(zt)}function Ft(t,n){var r=Dt(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(e){void 0!==t[e]&&(i[e]=t[e])}));var a=pt(i);o.forEach((function(i){void 0!==t[i]&&(e[i]=a[i])})),y=a.spectrum,e.margin=a.margin,e.limit=a.limit,e.padding=a.padding,e.pips?rt(e.pips):nt(),e.tooltips?W():G(),U=[],Lt(h(t.start)?t.start:r,n)}function Xt(){n=$(b),I(e.connect,n),bt(e.events),Lt(e.start),e.pips&&rt(e.pips),e.tooltips&&W(),J()}Xt();var Rt={destroy:jt,steps:Ht,on:_t,off:St,get:Dt,set:Lt,setHandle:Mt,reset:Ot,disable:K,enable:Q,__moveHandles:function(t,e,i){Et(t,e,U,i)},options:i,updateOptions:Ft,target:b,removePips:nt,removeTooltips:G,getPositions:function(){return U.slice()},getTooltips:function(){return u},getOrigins:function(){return r},pips:rt};return Rt}function ft(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var i=pt(e),n=ht(t,i,e);return t.noUiSlider=n,n}var mt={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed"],data(){return{}},created(){},methods:{changed(){let t=this.$refs.slider.noUiSlider.get();(0,u.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}},computed:{},mounted(){let t=this.field_data.value||"",e=this.field_data.wrapper_attrs.split("value").join(""),i=e.match(/min="(.*?)"/)?.[0].replace('min="',"").replace('"',"")||0,n=e.match(/max="(.*?)"/)?.[0].replace('max="',"").replace('"',"")||100,r=e.match(/step="(.*?)"/)?.[0].replace('step="',"").replace('"',"")||1;ft(this.$refs.slider,{start:t,connect:!0,tooltips:[!0],step:parseInt(r,10),range:{min:parseInt(i,10),max:parseInt(n,10)},format:{to:function(t){return t},from:function(t){return t}}}),this.$refs.slider.noUiSlider.on("change",(()=>{this.changed()}))},watch:{}},vt=i(6262);const gt=(0,vt.A)(mt,[["render",a],["__scopeId","data-v-11e806ba"]]);var bt=gt},5387:function(t,e,i){i.d(e,{A:function(){return f}});var n=i(641),r=i(33),o=i(3751);const a=["id","name","disabled"],s=["for"];function l(t,e,i,l,u,c){return(0,n.uX)(),(0,n.CE)("div",{class:(0,r.C4)(["form-check",c.checkbox_layout])},[(0,n.bo)((0,n.Lk)("input",{id:i.field_id,name:i.field_id,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),"true-value":"1","false-value":"0",disabled:c.is_disabled,type:"checkbox",class:"form-check-input"},null,8,a),[[o.lH,c.value]]),(0,n.Lk)("label",{for:i.field_id,class:"form-check-label"},(0,r.v_)(i.field_data.label),9,s)],2)}var u=i(3177),c=i(8700),d={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],data(){return{}},created(){},methods:{},computed:{checkbox_layout(){return"horizontal"===this.field_data.type_settings?.chb_layout?"form-check-inline":"blank"===this.field_data.type_settings?.chb_layout?"input-button-blank":""},is_disabled(){return(0,c.A)().is_read_only()||this.field_data.type_settings?.disabled},value:{get(){return void 0!==this.emit_name?(0,u.A)().get_user_input(this.field_id):(0,u.A)().get_form_value(this.field_id)},set(t){(0,u.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}}},watch:{}},p=i(6262);const h=(0,p.A)(d,[["render",l]]);var f=h},7229:function(t,e,i){i.d(e,{A:function(){return c}});var n=i(641),r=i(33);const o=["id","name"];function a(t,e,i,a,s,l){return(0,n.uX)(),(0,n.CE)("p",{id:i.field_id,name:i.field_id},(0,r.v_)(i.in_product?i.field_data.label:i.field_data.value),9,o)}var s={props:{field_id:String,field_data:Object,in_product:Boolean},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{},watch:{}},l=i(6262);const u=(0,l.A)(s,[["render",a]]);var c=u},6546:function(t,e,i){i.d(e,{A:function(){return g}});var n=i(641),r=i(33),o=i(3751);const a=["id","name","disabled"],s=["value"];function l(t,e,i,l,u,c){return(0,n.bo)(((0,n.uX)(),(0,n.CE)("select",{id:i.field_id,name:i.field_id,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),disabled:c.is_disabled,class:"form-control"},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.field_data.enum,((t,e)=>((0,n.uX)(),(0,n.CE)("option",{value:c.option_value(t)},(0,r.v_)(c.option_label(t)),9,s)))),256))],8,a)),[[o.u1,c.value]])}var u=i(3177),c=i(8700);let d={props:{},components:{},emits:[],data(){return{combined:{auto_typ:"auto_typ_2",havarijne_auto_typ:"havarijne_auto_typ2",cestovne_krajina:"cestovne_uzemna_platnost"}}},created(){this.change_combined_input()},methods:{change_combined_input(){let t={1:{1:"1",2:"20",3:"33",4:"35"},2:{1:"1",2:"2",3:"20"},7:{1:"51",2:"210",3:"1001"}},e=(0,c.A)().product_group_id();t[e]?.[this.cached_dynamic_combo]!==this.value&&""!==this.cached_dynamic_combo&&(this.value=t[e]?.[this.cached_dynamic_combo]||"")}},computed:{cached_dynamic_combo(){return this.combined.hasOwnProperty(this.field_id)?(0,u.A)().get_form_value(this.combined[this.field_id]):""}},watch:{cached_dynamic_combo(){this.change_combined_input()}}};var p=d,h=i(6343),f={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],mixins:[p],data(){return{loading:!1}},created(){},methods:{option_value(t){return h.A.enum_value(t)},option_label(t){return h.A.enum_label(t)}},computed:{is_disabled(){return(0,c.A)().is_read_only()||!0===this.loading||this.field_data.type_settings?.disabled},value:{get(){return void 0!==this.emit_name?(0,u.A)().get_user_input(this.field_id):(0,u.A)().get_form_value(this.field_id)},set(t){(0,u.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}}},watch:{}},m=i(6262);const v=(0,m.A)(f,[["render",l]]);var g=v},2095:function(t,e,i){i.d(e,{A:function(){return m}});var n=i(641),r=i(33);const o={key:0},a={key:1},s={key:2},l={key:3},u=["innerHTML"];function c(t,e,i,c,d,p){return i.tooltip_text?((0,n.uX)(),(0,n.CE)("div",{key:0,class:(0,r.C4)(["ttip",p.tooltip_class])},["info"===i.tooltip_type?((0,n.uX)(),(0,n.CE)("b",o,"?")):"warning"===i.tooltip_type?((0,n.uX)(),(0,n.CE)("b",a,"!")):"cost"===i.tooltip_type?((0,n.uX)(),(0,n.CE)("span",s," (€)")):((0,n.uX)(),(0,n.CE)("b",l,"bad tooltip type")),(0,n.Lk)("div",{class:(0,r.C4)([p.tooltip_width_class,"ttip_text"])},[(0,n.Lk)("span",{innerHTML:p.tooltip_breakpoint?p.tooltip_preview:i.tooltip_text},null,8,u),p.tooltip_breakpoint?((0,n.uX)(),(0,n.CE)("span",{key:0,onClick:e[0]||(e[0]=(...t)=>p.open_ttip_modal&&p.open_ttip_modal(...t)),class:"d-block text-end text-decoration-underline",style:{cursor:"pointer"}},"Čítať viac...")):(0,n.Q3)("",!0)],2)],2)):(0,n.Q3)("",!0)}var d=i(2873),p={props:{tooltip_text:String,tooltip_type:String},components:{},emits:[],data(){return{}},created(){},methods:{open_ttip_modal(){let t={info:"Nápoveda",warning:"Upozornenie",cost:"Info"};(0,d.A)().store_modal_data({title:t[this.tooltip_type],content:this.tooltip_text}),(0,d.A)().open_it("Acceptance_modal")}},computed:{tooltip_width_class(){let t=this.tooltip_text.length;return t<30?"shortest":t<40?"shorter":t<55?"short":""},tooltip_class(){let t={info:"",warning:"pr_warning",cost:"ttip-top"};return t[this.tooltip_type]},tooltip_breakpoint(){let t="warning"===this.tooltip_type?330:500;return this.tooltip_text?.length>t},tooltip_preview(){let t=this.tooltip_text.slice(0,290);return t=t.split(" ").slice(0,-1).join(" "),t+" ..."}},watch:{}},h=i(6262);const f=(0,h.A)(p,[["render",c]]);var m=f}}]);