"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[31],{3886:function(t,e,n){var i=n(8700),r=n(6343),o=n(3175);class a{session_documents(t){let e={action_name:"getsessiondocuments",method:"GET",url:(0,i.A)().endpoint_url()+"online/getsessiondocuments/?"+r.A.add_token_as_parameter()};t&&(e.url+="&user_uploaded=true");let n=new o.A;return n.prepare_params(e).handle_response().catch((t=>{throw t}))}get_session_document(t){let e={action_name:"getsessiondocument",method:"GET",url:(0,i.A)().endpoint_url()+"online/getsessiondocument/"+t+"/?"+r.A.add_token_as_parameter()},n=new o.A;return n.prepare_params(e).handle_response().catch((t=>{throw t}))}get_session_document_preview(t,e){let n={action_name:"getsessiondocument",method:"GET",url:(0,i.A)().endpoint_url()+"online/getsessiondocument/"+t+"/?"+r.A.add_token_as_parameter()};n.url+="&filters=thumbnail&thumbnail_mode=outbound&thumbnail_width="+e+"&thumbnail_height="+e;let a=new o.A;return a.prepare_params(n).handle_response().catch((t=>{throw t}))}upload_session_document(t){let e={action_name:"createsessiondocument",method:"POST",body:t,content_type:null,url:(0,i.A)().endpoint_url()+"online/createsessiondocument/?"+r.A.add_token_as_parameter()},n=new o.A;return n.prepare_params(e).handle_response().catch((t=>{throw t}))}delete_session_document(t){let e={action_name:"delete-uploaded-session-documents",method:"DELETE",url:(0,i.A)().endpoint_url()+"online/delete-uploaded-session-documents/?id="+t+r.A.add_token_as_parameter()},n=new o.A;return n.prepare_params(e).handle_response().catch((t=>{throw t}))}}e.A=new a},1937:function(t,e,n){n.d(e,{A:function(){return x}});var i=n(641),r=n(33),o=n(3751);const a={class:"input-group multiple",ref:"multiple_reference"},s=["id","name"],l={class:"multiple_dropdown"},u={class:"m-2"},c={class:"form-check my-2"},d=["id","name","onUpdate:modelValue","disabled"],p=["for"];function h(t,e,n,h,f,m){return(0,i.uX)(),(0,i.CE)("div",a,[(0,i.Lk)("p",{id:n.field_id,name:n.field_id,onClick:e[0]||(e[0]=(...t)=>m.open_dropdown&&m.open_dropdown(...t)),class:"form-control multiple_input"},(0,r.v_)(m.display_selected),9,s),(0,i.bo)((0,i.Lk)("div",l,[(0,i.Lk)("div",null,[(0,i.Lk)("span",{onClick:e[1]||(e[1]=(...t)=>m.set_all&&m.set_all(...t))}," Všetko "),(0,i.Lk)("span",{onClick:e[2]||(e[2]=(...t)=>m.set_none&&m.set_none(...t))}," Nič "),(0,i.Lk)("span",{onClick:e[3]||(e[3]=(...t)=>m.accept&&m.accept(...t)),class:"accept"}," Potvrdiť ")]),(0,i.Lk)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(f.options,((t,e)=>((0,i.uX)(),(0,i.CE)("div",c,[(0,i.bo)((0,i.Lk)("input",{id:n.field_id+"-"+e,name:n.field_id+"-"+e,"onUpdate:modelValue":t=>f.options[e].checked=t,disabled:m.is_disabled,type:"checkbox",class:"form-check-input"},null,8,d),[[o.lH,f.options[e].checked]]),(0,i.Lk)("label",{for:n.field_id+"-"+e,class:"form-check-label"},(0,r.v_)(t.label),9,p)])))),256))])],512),[[o.aG,f.opened]])],512)}n(4114);var f=n(3177),m=n(8700),v=n(6343),g={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],data(){return{opened:!1,delimiter:",",options:{}}},created(){let t="";t=void 0!==this.emit_name?(0,f.A)().get_user_input(this.field_id):(0,f.A)().get_form_value(this.field_id);let e=t?.split(this.delimiter)||[];for(let n in this.field_data.enum){if(!this.field_data.enum.hasOwnProperty(n))continue;let t=this.field_data.enum[n];this.options[n]={value:v.A.first_key(t),label:v.A.first_value(t),checked:e.indexOf(v.A.first_key(t))>-1}}},methods:{open_dropdown(){this.opened=!0,document.addEventListener("click",this.clicked_outside,!1)},clicked_outside(t){const e=this.$refs.multiple_reference.contains(t.target);e||(document.removeEventListener("click",this.clicked_outside,!1),this.accept())},set_all(){if(!this.is_disabled)for(let t in this.options)this.options.hasOwnProperty(t)&&(this.options[t].checked=!0)},set_none(){if(!this.is_disabled)for(let t in this.options)this.options.hasOwnProperty(t)&&(this.options[t].checked=!1)},accept(){this.opened=!1;let t=[];for(let e in this.options)this.options.hasOwnProperty(e)&&this.options[e].checked&&t.push(this.options[e].value);t=t.join(this.delimiter),(0,f.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}},computed:{is_disabled(){return(0,m.A)().is_read_only()},display_selected(){let t=[];for(let e in this.options)this.options.hasOwnProperty(e)&&this.options[e].checked&&t.push(this.options[e].label);return 0===t.length?this.field_data.placeholder:t.join(", ")}},watch:{}},_=n(6262);const b=(0,_.A)(g,[["render",h]]);var x=b},2329:function(t,e,n){n.d(e,{A:function(){return _t}});var i=n(641);const r={class:"slider_scope"},o=["id"];function a(t,e,n,a,s,l){return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.Lk)("div",{id:n.field_id,ref:"slider"},null,8,o)])}var s,l,u=n(3177);function c(t){return d(t)&&"function"===typeof t.from}function d(t){return"object"===typeof t&&"function"===typeof t.to}function p(t){t.parentElement.removeChild(t)}function h(t){return null!==t&&void 0!==t}function f(t){t.preventDefault()}function m(t){return t.filter((function(t){return!this[t]&&(this[t]=!0)}),{})}function v(t,e){return Math.round(t/e)*e}function g(t,e){var n=t.getBoundingClientRect(),i=t.ownerDocument,r=i.documentElement,o=A(i);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(o.x=0),e?n.top+o.y-r.clientTop:n.left+o.x-r.clientLeft}function _(t){return"number"===typeof t&&!isNaN(t)&&isFinite(t)}function b(t,e,n){n>0&&(w(t,e),setTimeout((function(){k(t,e)}),n))}function x(t){return Math.max(Math.min(t,100),0)}function S(t){return Array.isArray(t)?t:[t]}function y(t){t=String(t);var e=t.split(".");return e.length>1?e[1].length:0}function w(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function k(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function E(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function A(t){var e=void 0!==window.pageXOffset,n="CSS1Compat"===(t.compatMode||""),i=e?window.pageXOffset:n?t.documentElement.scrollLeft:t.body.scrollLeft,r=e?window.pageYOffset:n?t.documentElement.scrollTop:t.body.scrollTop;return{x:i,y:r}}function C(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function N(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(n){}return t}function P(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function V(t,e){return 100/(e-t)}function U(t,e,n){return 100*e/(t[n+1]-t[n])}function L(t,e){return U(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function O(t,e){return e*(t[1]-t[0])/100+t[0]}function M(t,e){var n=1;while(t>=e[n])n+=1;return n}function D(t,e,n){if(n>=t.slice(-1)[0])return 100;var i=M(n,t),r=t[i-1],o=t[i],a=e[i-1],s=e[i];return a+L([r,o],n)/V(a,s)}function j(t,e,n){if(n>=100)return t.slice(-1)[0];var i=M(n,e),r=t[i-1],o=t[i],a=e[i-1],s=e[i];return O([r,o],(n-a)*V(a,s))}function z(t,e,n,i){if(100===i)return i;var r=M(i,t),o=t[r-1],a=t[r];return n?i-o>(a-o)/2?a:o:e[r-1]?t[r-1]+v(i-t[r-1],e[r-1]):i}(function(t){t["Range"]="range",t["Steps"]="steps",t["Positions"]="positions",t["Count"]="count",t["Values"]="values"})(s||(s={})),function(t){t[t["None"]=-1]="None",t[t["NoValue"]=0]="NoValue",t[t["LargeValue"]=1]="LargeValue",t[t["SmallValue"]=2]="SmallValue"}(l||(l={}));var H=function(){function t(t,e,n){var i;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[n||!1],this.xNumSteps=[!1],this.snap=e;var r=[];for(Object.keys(t).forEach((function(e){r.push([S(t[e]),e])})),r.sort((function(t,e){return t[0][0]-e[0][0]})),i=0;i<r.length;i++)this.handleEntryPoint(r[i][1],r[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i])}return t.prototype.getDistance=function(t){for(var e=[],n=0;n<this.xNumSteps.length-1;n++)e[n]=U(this.xVal,t,n);return e},t.prototype.getAbsoluteDistance=function(t,e,n){var i,r=0;if(t<this.xPct[this.xPct.length-1])while(t>this.xPct[r+1])r++;else t===this.xPct[this.xPct.length-1]&&(r=this.xPct.length-2);n||t!==this.xPct[r+1]||r++,null===e&&(e=[]);var o=1,a=e[r],s=0,l=0,u=0,c=0;i=n?(t-this.xPct[r])/(this.xPct[r+1]-this.xPct[r]):(this.xPct[r+1]-t)/(this.xPct[r+1]-this.xPct[r]);while(a>0)s=this.xPct[r+1+c]-this.xPct[r+c],e[r+c]*o+100-100*i>100?(l=s*i,o=(a-100*i)/e[r+c],i=1):(l=e[r+c]*s/100*o,o=0),n?(u-=l,this.xPct.length+c>=1&&c--):(u+=l,this.xPct.length-c>=1&&c++),a=e[r+c]*o;return t+u},t.prototype.toStepping=function(t){return t=D(this.xVal,this.xPct,t),t},t.prototype.fromStepping=function(t){return j(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=z(this.xPct,this.xSteps,this.snap,t),t},t.prototype.getDefaultStep=function(t,e,n){var i=M(t,this.xPct);return(100===t||e&&t===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/n},t.prototype.getNearbySteps=function(t){var e=M(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(y);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){var n;if(n="min"===t?0:"max"===t?100:parseFloat(t),!_(n)||!_(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(n),this.xVal.push(e[0]);var i=Number(e[1]);n?this.xSteps.push(!isNaN(i)&&i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){if(e)if(this.xVal[t]!==this.xVal[t+1]){this.xSteps[t]=U([this.xVal[t],this.xVal[t+1]],e,0)/V(this.xPct[t],this.xPct[t+1]);var n=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),r=this.xVal[t]+this.xNumSteps[t]*i;this.xHighestCompleteStep[t]=r}else this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t]},t}(),F={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},T={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},X={tooltips:".__tooltips",aria:".__aria"};function R(t,e){if(!_(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function I(t,e){if(!_(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function $(t,e){if(!_(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function B(t,e){if(!_(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function q(t,e){if("object"!==typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new H(e,t.snap||!1,t.singleStep)}function G(t,e){if(e=S(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function Y(t,e){if("boolean"!==typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function K(t,e){if("boolean"!==typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function Q(t,e){if("number"!==typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function W(t,e){var n,i=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(n=1;n<t.handles;n++)i.push(e);i.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");i=e}t.connect=i}function J(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Z(t,e){if(!_(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function tt(t,e){if(!_(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function et(t,e){var n;if(!_(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!_(e[0])&&!_(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],n=0;n<t.spectrum.xNumSteps.length-1;n++)if(t.padding[0][n]<0||t.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=e[0]+e[1],r=t.spectrum.xVal[0],o=t.spectrum.xVal[t.spectrum.xVal.length-1];if(i/(o-r)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function nt(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function it(t,e){if("string"!==typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=e.indexOf("tap")>=0,i=e.indexOf("drag")>=0,r=e.indexOf("fixed")>=0,o=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,s=e.indexOf("unconstrained")>=0,l=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(r){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Z(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:n||o,drag:i,dragAll:l,smoothSteps:u,fixed:r,snap:o,hover:a,unconstrained:s}}function rt(t,e){if(!1!==e)if(!0===e||d(e)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(e)}else{if(e=S(e),e.length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach((function(t){if("boolean"!==typeof t&&!d(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})),t.tooltips=e}}function ot(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function at(t,e){if(!d(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function st(t,e){if(!c(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");t.format=e}function lt(t,e){if("boolean"!==typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function ut(t,e){t.documentElement=e}function ct(t,e){if("string"!==typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function dt(t,e){if("object"!==typeof e)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"===typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach((function(n){t.cssClasses[n]=t.cssPrefix+e[n]}))):t.cssClasses=e}function pt(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:F,format:F},n={step:{r:!1,t:R},keyboardPageMultiplier:{r:!1,t:I},keyboardMultiplier:{r:!1,t:$},keyboardDefaultStep:{r:!1,t:B},start:{r:!0,t:G},connect:{r:!0,t:W},direction:{r:!0,t:nt},snap:{r:!1,t:Y},animate:{r:!1,t:K},animationDuration:{r:!1,t:Q},range:{r:!0,t:q},orientation:{r:!1,t:J},margin:{r:!1,t:Z},limit:{r:!1,t:tt},padding:{r:!1,t:et},behaviour:{r:!0,t:it},ariaFormat:{r:!1,t:at},format:{r:!1,t:st},tooltips:{r:!1,t:rt},keyboardSupport:{r:!0,t:lt},documentElement:{r:!1,t:ut},cssPrefix:{r:!0,t:ct},cssClasses:{r:!0,t:dt},handleAttributes:{r:!1,t:ot}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:T,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(n).forEach((function(r){if(h(t[r])||void 0!==i[r])n[r].t(e,h(t[r])?t[r]:i[r]);else if(n[r].r)throw new Error("noUiSlider: '"+r+"' is required.")})),e.pips=t.pips;var r=document.createElement("div"),o=void 0!==r.style.msTransform,a=void 0!==r.style.transform;e.transformRule=a?"transform":o?"msTransform":"webkitTransform";var s=[["left","top"],["right","bottom"]];return e.style=s[e.dir][e.ort],e}function ht(t,e,n){var i,r,o,a,u,c=C(),d=P(),v=d&&N(),_=t,y=e.spectrum,V=[],U=[],L=[],O=0,M={},D=t.ownerDocument,j=e.documentElement||D.documentElement,z=D.body,H="rtl"===D.dir||1===e.ort?0:100;function F(t,e){var n=D.createElement("div");return e&&w(n,e),t.appendChild(n),n}function T(t,n){var i=F(t,e.cssClasses.origin),r=F(i,e.cssClasses.handle);if(F(r,e.cssClasses.touchArea),r.setAttribute("data-handle",String(n)),e.keyboardSupport&&(r.setAttribute("tabindex","0"),r.addEventListener("keydown",(function(t){return gt(t,n)}))),void 0!==e.handleAttributes){var o=e.handleAttributes[n];Object.keys(o).forEach((function(t){r.setAttribute(t,o[t])}))}return r.setAttribute("role","slider"),r.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),0===n?w(r,e.cssClasses.handleLower):n===e.handles-1&&w(r,e.cssClasses.handleUpper),i.handle=r,i}function R(t,n){return!!n&&F(t,e.cssClasses.connect)}function I(t,n){var i=F(n,e.cssClasses.connects);r=[],o=[],o.push(R(i,t[0]));for(var a=0;a<e.handles;a++)r.push(T(n,a)),L[a]=a,o.push(R(i,t[a+1]))}function $(t){w(t,e.cssClasses.target),0===e.dir?w(t,e.cssClasses.ltr):w(t,e.cssClasses.rtl),0===e.ort?w(t,e.cssClasses.horizontal):w(t,e.cssClasses.vertical);var n=getComputedStyle(t).direction;return w(t,"rtl"===n?e.cssClasses.textDirectionRtl:e.cssClasses.textDirectionLtr),F(t,e.cssClasses.base)}function B(t,n){return!(!e.tooltips||!e.tooltips[n])&&F(t.firstChild,e.cssClasses.tooltip)}function q(){return _.hasAttribute("disabled")}function G(t){var e=r[t];return e.hasAttribute("disabled")}function Y(t){null!==t&&void 0!==t?(r[t].setAttribute("disabled",""),r[t].handle.removeAttribute("tabindex")):(_.setAttribute("disabled",""),r.forEach((function(t){t.handle.removeAttribute("tabindex")})))}function K(t){null!==t&&void 0!==t?(r[t].removeAttribute("disabled"),r[t].handle.setAttribute("tabindex","0")):(_.removeAttribute("disabled"),r.forEach((function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")})))}function Q(){u&&(St("update"+X.tooltips),u.forEach((function(t){t&&p(t)})),u=null)}function W(){Q(),u=r.map(B),bt("update"+X.tooltips,(function(t,n,i){if(u&&e.tooltips&&!1!==u[n]){var r=t[n];!0!==e.tooltips[n]&&(r=e.tooltips[n].to(i[n])),u[n].innerHTML=r}}))}function J(){St("update"+X.aria),bt("update"+X.aria,(function(t,n,i,o,a){L.forEach((function(t){var n=r[t],o=wt(U,t,0,!0,!0,!0),s=wt(U,t,100,!0,!0,!0),l=a[t],u=String(e.ariaFormat.to(i[t]));o=y.fromStepping(o).toFixed(1),s=y.fromStepping(s).toFixed(1),l=y.fromStepping(l).toFixed(1),n.children[0].setAttribute("aria-valuemin",o),n.children[0].setAttribute("aria-valuemax",s),n.children[0].setAttribute("aria-valuenow",l),n.children[0].setAttribute("aria-valuetext",u)}))}))}function Z(t){if(t.mode===s.Range||t.mode===s.Steps)return y.xVal;if(t.mode===s.Count){if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");var e=t.values-1,n=100/e,i=[];while(e--)i[e]=e*n;return i.push(100),tt(i,t.stepped)}return t.mode===s.Positions?tt(t.values,t.stepped):t.mode===s.Values?t.stepped?t.values.map((function(t){return y.fromStepping(y.getStep(y.toStepping(t)))})):t.values:[]}function tt(t,e){return t.map((function(t){return y.fromStepping(e?y.getStep(t):t)}))}function et(t){function e(t,e){return Number((t+e).toFixed(7))}var n=Z(t),i={},r=y.xVal[0],o=y.xVal[y.xVal.length-1],a=!1,u=!1,c=0;return n=m(n.slice().sort((function(t,e){return t-e}))),n[0]!==r&&(n.unshift(r),a=!0),n[n.length-1]!==o&&(n.push(o),u=!0),n.forEach((function(r,o){var d,p,h,f,m,v,g,_,b,x,S=r,w=n[o+1],k=t.mode===s.Steps;for(k&&(d=y.xNumSteps[o]),d||(d=w-S),void 0===w&&(w=S),d=Math.max(d,1e-7),p=S;p<=w;p=e(p,d)){for(f=y.toStepping(p),m=f-c,_=m/(t.density||1),b=Math.round(_),x=m/b,h=1;h<=b;h+=1)v=c+h*x,i[v.toFixed(5)]=[y.fromStepping(v),0];g=n.indexOf(p)>-1?l.LargeValue:k?l.SmallValue:l.NoValue,!o&&a&&p!==w&&(g=0),p===w&&u||(i[f.toFixed(5)]=[p,g]),c=f}})),i}function nt(t,n,i){var r,o,a=D.createElement("div"),s=(r={},r[l.None]="",r[l.NoValue]=e.cssClasses.valueNormal,r[l.LargeValue]=e.cssClasses.valueLarge,r[l.SmallValue]=e.cssClasses.valueSub,r),u=(o={},o[l.None]="",o[l.NoValue]=e.cssClasses.markerNormal,o[l.LargeValue]=e.cssClasses.markerLarge,o[l.SmallValue]=e.cssClasses.markerSub,o),c=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],d=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];function p(t,n){var i=n===e.cssClasses.value,r=i?c:d,o=i?s:u;return n+" "+r[e.ort]+" "+o[t]}function h(t,r,o){if(o=n?n(r,o):o,o!==l.None){var s=F(a,!1);s.className=p(o,e.cssClasses.marker),s.style[e.style]=t+"%",o>l.NoValue&&(s=F(a,!1),s.className=p(o,e.cssClasses.value),s.setAttribute("data-value",String(r)),s.style[e.style]=t+"%",s.innerHTML=String(i.to(r)))}}return w(a,e.cssClasses.pips),w(a,0===e.ort?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){h(e,t[e][0],t[e][1])})),a}function it(){a&&(p(a),a=null)}function rt(t){it();var e=et(t),n=t.filter,i=t.format||{to:function(t){return String(Math.round(t))}};return a=_.appendChild(nt(e,n,i)),a}function ot(){var t=i.getBoundingClientRect(),n="offset"+["Width","Height"][e.ort];return 0===e.ort?t.width||i[n]:t.height||i[n]}function at(t,n,i,r){var o=function(o){var a=st(o,r.pageOffset,r.target||n);return!!a&&(!(q()&&!r.doNotReject)&&(!(E(_,e.cssClasses.tap)&&!r.doNotReject)&&(!(t===c.start&&void 0!==a.buttons&&a.buttons>1)&&((!r.hover||!a.buttons)&&(v||a.preventDefault(),a.calcPoint=a.points[e.ort],void i(a,r))))))},a=[];return t.split(" ").forEach((function(t){n.addEventListener(t,o,!!v&&{passive:!0}),a.push([t,o])})),a}function st(t,e,n){var i=0===t.type.indexOf("touch"),r=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),a=0,s=0;if(0===t.type.indexOf("MSPointer")&&(o=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(i){var l=function(e){var i=e.target;return i===n||n.contains(i)||t.composed&&t.composedPath().shift()===n};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;a=u[0].pageX,s=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;a=c.pageX,s=c.pageY}}return e=e||A(D),(r||o)&&(a=t.clientX+e.x,s=t.clientY+e.y),t.pageOffset=e,t.points=[a,s],t.cursor=r||o,t}function lt(t){var n=t-g(i,e.ort),r=100*n/ot();return r=x(r),e.dir?100-r:r}function ut(t){var e=100,n=!1;return r.forEach((function(i,r){if(!G(r)){var o=U[r],a=Math.abs(o-t),s=100===a&&100===e,l=a<e,u=a<=e&&t>o;(l||u||s)&&(n=r,e=a)}})),n}function ct(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&ht(t,e)}function dt(t,n){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==n.buttonsProperty)return ht(t,n);var i=(e.dir?-1:1)*(t.calcPoint-n.startCalcPoint),r=100*i/n.baseSize;Et(i>0,r,n.locations,n.handleNumbers,n.connect)}function ht(t,n){n.handle&&(k(n.handle,e.cssClasses.active),O-=1),n.listeners.forEach((function(t){j.removeEventListener(t[0],t[1])})),0===O&&(k(_,e.cssClasses.drag),Nt(),t.cursor&&(z.style.cursor="",z.removeEventListener("selectstart",f))),e.events.smoothSteps&&(n.handleNumbers.forEach((function(t){Pt(t,U[t],!0,!0,!1,!1)})),n.handleNumbers.forEach((function(t){yt("update",t)}))),n.handleNumbers.forEach((function(t){yt("change",t),yt("set",t),yt("end",t)}))}function ft(t,n){if(!n.handleNumbers.some(G)){var i;if(1===n.handleNumbers.length){var o=r[n.handleNumbers[0]];i=o.children[0],O+=1,w(i,e.cssClasses.active)}t.stopPropagation();var a=[],s=at(c.move,j,dt,{target:t.target,handle:i,connect:n.connect,listeners:a,startCalcPoint:t.calcPoint,baseSize:ot(),pageOffset:t.pageOffset,handleNumbers:n.handleNumbers,buttonsProperty:t.buttons,locations:U.slice()}),l=at(c.end,j,ht,{target:t.target,handle:i,listeners:a,doNotReject:!0,handleNumbers:n.handleNumbers}),u=at("mouseout",j,ct,{target:t.target,handle:i,listeners:a,doNotReject:!0,handleNumbers:n.handleNumbers});a.push.apply(a,s.concat(l,u)),t.cursor&&(z.style.cursor=getComputedStyle(t.target).cursor,r.length>1&&w(_,e.cssClasses.drag),z.addEventListener("selectstart",f,!1)),n.handleNumbers.forEach((function(t){yt("start",t)}))}}function mt(t){t.stopPropagation();var n=lt(t.calcPoint),i=ut(n);!1!==i&&(e.events.snap||b(_,e.cssClasses.tap,e.animationDuration),Pt(i,n,!0,!0),Nt(),yt("slide",i,!0),yt("update",i,!0),e.events.snap?ft(t,{handleNumbers:[i]}):(yt("change",i,!0),yt("set",i,!0)))}function vt(t){var e=lt(t.calcPoint),n=y.getStep(e),i=y.fromStepping(n);Object.keys(M).forEach((function(t){"hover"===t.split(".")[0]&&M[t].forEach((function(t){t.call(Xt,i)}))}))}function gt(t,n){if(q()||G(n))return!1;var i=["Left","Right"],r=["Down","Up"],o=["PageDown","PageUp"],a=["Home","End"];e.dir&&!e.ort?i.reverse():e.ort&&!e.dir&&(r.reverse(),o.reverse());var s,l=t.key.replace("Arrow",""),u=l===o[0],c=l===o[1],d=l===r[0]||l===i[0]||u,p=l===r[1]||l===i[1]||c,h=l===a[0],f=l===a[1];if(!d&&!p&&!h&&!f)return!0;if(t.preventDefault(),p||d){var m=d?0:1,v=zt(n),g=v[m];if(null===g)return!1;!1===g&&(g=y.getDefaultStep(U[n],d,e.keyboardDefaultStep)),g*=c||u?e.keyboardPageMultiplier:e.keyboardMultiplier,g=Math.max(g,1e-7),g*=d?-1:1,s=V[n]+g}else s=f?e.spectrum.xVal[e.spectrum.xVal.length-1]:e.spectrum.xVal[0];return Pt(n,y.toStepping(s),!0,!0),yt("slide",n),yt("update",n),yt("change",n),yt("set",n),!1}function _t(t){t.fixed||r.forEach((function(t,e){at(c.start,t.children[0],ft,{handleNumbers:[e]})})),t.tap&&at(c.start,i,mt,{}),t.hover&&at(c.move,i,vt,{hover:!0}),t.drag&&o.forEach((function(n,i){if(!1!==n&&0!==i&&i!==o.length-1){var a=r[i-1],s=r[i],l=[n],u=[a,s],d=[i-1,i];w(n,e.cssClasses.draggable),t.fixed&&(l.push(a.children[0]),l.push(s.children[0])),t.dragAll&&(u=r,d=L),l.forEach((function(t){at(c.start,t,ft,{handles:u,handleNumbers:d,connect:n})}))}}))}function bt(t,e){M[t]=M[t]||[],M[t].push(e),"update"===t.split(".")[0]&&r.forEach((function(t,e){yt("update",e)}))}function xt(t){return t===X.aria||t===X.tooltips}function St(t){var e=t&&t.split(".")[0],n=e?t.substring(e.length):t;Object.keys(M).forEach((function(t){var i=t.split(".")[0],r=t.substring(i.length);e&&e!==i||n&&n!==r||xt(r)&&n!==r||delete M[t]}))}function yt(t,n,i){Object.keys(M).forEach((function(r){var o=r.split(".")[0];t===o&&M[r].forEach((function(t){t.call(Xt,V.map(e.format.to),n,V.slice(),i||!1,U.slice(),Xt)}))}))}function wt(t,n,i,o,a,s,l){var u;return r.length>1&&!e.events.unconstrained&&(o&&n>0&&(u=y.getAbsoluteDistance(t[n-1],e.margin,!1),i=Math.max(i,u)),a&&n<r.length-1&&(u=y.getAbsoluteDistance(t[n+1],e.margin,!0),i=Math.min(i,u))),r.length>1&&e.limit&&(o&&n>0&&(u=y.getAbsoluteDistance(t[n-1],e.limit,!1),i=Math.min(i,u)),a&&n<r.length-1&&(u=y.getAbsoluteDistance(t[n+1],e.limit,!0),i=Math.max(i,u))),e.padding&&(0===n&&(u=y.getAbsoluteDistance(0,e.padding[0],!1),i=Math.max(i,u)),n===r.length-1&&(u=y.getAbsoluteDistance(100,e.padding[1],!0),i=Math.min(i,u))),l||(i=y.getStep(i)),i=x(i),!(i===t[n]&&!s)&&i}function kt(t,n){var i=e.ort;return(i?n:t)+", "+(i?t:n)}function Et(t,n,i,r,o){var a=i.slice(),s=r[0],l=e.events.smoothSteps,u=[!t,t],c=[t,!t];r=r.slice(),t&&r.reverse(),r.length>1?r.forEach((function(t,e){var i=wt(a,t,a[t]+n,u[e],c[e],!1,l);!1===i?n=0:(n=i-a[t],a[t]=i)})):u=c=[!0];var d=!1;r.forEach((function(t,e){d=Pt(t,i[t]+n,u[e],c[e],!1,l)||d})),d&&(r.forEach((function(t){yt("update",t),yt("slide",t)})),void 0!=o&&yt("drag",s))}function At(t,n){return e.dir?100-t-n:t}function Ct(t,n){U[t]=n,V[t]=y.fromStepping(n);var i=At(n,0)-H,o="translate("+kt(i+"%","0")+")";r[t].style[e.transformRule]=o,Vt(t),Vt(t+1)}function Nt(){L.forEach((function(t){var e=U[t]>50?-1:1,n=3+(r.length+e*t);r[t].style.zIndex=String(n)}))}function Pt(t,e,n,i,r,o){return r||(e=wt(U,t,e,n,i,!1,o)),!1!==e&&(Ct(t,e),!0)}function Vt(t){if(o[t]){var n=0,i=100;0!==t&&(n=U[t-1]),t!==o.length-1&&(i=U[t]);var r=i-n,a="translate("+kt(At(n,r)+"%","0")+")",s="scale("+kt(r/100,"1")+")";o[t].style[e.transformRule]=a+" "+s}}function Ut(t,n){return null===t||!1===t||void 0===t?U[n]:("number"===typeof t&&(t=String(t)),t=e.format.from(t),!1!==t&&(t=y.toStepping(t)),!1===t||isNaN(t)?U[n]:t)}function Lt(t,n,i){var r=S(t),o=void 0===U[0];n=void 0===n||n,e.animate&&!o&&b(_,e.cssClasses.tap,e.animationDuration),L.forEach((function(t){Pt(t,Ut(r[t],t),!0,!1,i)}));var a=1===L.length?0:1;if(o&&y.hasNoSize()&&(i=!0,U[0]=0,L.length>1)){var s=100/(L.length-1);L.forEach((function(t){U[t]=t*s}))}for(;a<L.length;++a)L.forEach((function(t){Pt(t,U[t],!0,!0,i)}));Nt(),L.forEach((function(t){yt("update",t),null!==r[t]&&n&&yt("set",t)}))}function Ot(t){Lt(e.start,t)}function Mt(t,e,n,i){if(t=Number(t),!(t>=0&&t<L.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Pt(t,Ut(e,t),!0,!0,i),yt("update",t),n&&yt("set",t)}function Dt(t){if(void 0===t&&(t=!1),t)return 1===V.length?V[0]:V.slice(0);var n=V.map(e.format.to);return 1===n.length?n[0]:n}function jt(){St(X.aria),St(X.tooltips),Object.keys(e.cssClasses).forEach((function(t){k(_,e.cssClasses[t])}));while(_.firstChild)_.removeChild(_.firstChild);delete _.noUiSlider}function zt(t){var n=U[t],i=y.getNearbySteps(n),r=V[t],o=i.thisStep.step,a=null;if(e.snap)return[r-i.stepBefore.startValue||null,i.stepAfter.startValue-r||null];!1!==o&&r+o>i.stepAfter.startValue&&(o=i.stepAfter.startValue-r),a=r>i.thisStep.startValue?i.thisStep.step:!1!==i.stepBefore.step&&r-i.stepBefore.highestStep,100===n?o=null:0===n&&(a=null);var s=y.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}function Ht(){return L.map(zt)}function Ft(t,i){var r=Dt(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(e){void 0!==t[e]&&(n[e]=t[e])}));var a=pt(n);o.forEach((function(n){void 0!==t[n]&&(e[n]=a[n])})),y=a.spectrum,e.margin=a.margin,e.limit=a.limit,e.padding=a.padding,e.pips?rt(e.pips):it(),e.tooltips?W():Q(),U=[],Lt(h(t.start)?t.start:r,i)}function Tt(){i=$(_),I(e.connect,i),_t(e.events),Lt(e.start),e.pips&&rt(e.pips),e.tooltips&&W(),J()}Tt();var Xt={destroy:jt,steps:Ht,on:bt,off:St,get:Dt,set:Lt,setHandle:Mt,reset:Ot,disable:Y,enable:K,__moveHandles:function(t,e,n){Et(t,e,U,n)},options:n,updateOptions:Ft,target:_,removePips:it,removeTooltips:Q,getPositions:function(){return U.slice()},getTooltips:function(){return u},getOrigins:function(){return r},pips:rt};return Xt}function ft(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=pt(e),i=ht(t,n,e);return t.noUiSlider=i,i}var mt={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed"],data(){return{}},created(){},methods:{changed(){let t=this.$refs.slider.noUiSlider.get();(0,u.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}},computed:{},mounted(){let t=this.field_data.value||"",e=this.field_data.wrapper_attrs.split("value").join(""),n=e.match(/min="(.*?)"/)?.[0].replace('min="',"").replace('"',"")||0,i=e.match(/max="(.*?)"/)?.[0].replace('max="',"").replace('"',"")||100,r=e.match(/step="(.*?)"/)?.[0].replace('step="',"").replace('"',"")||1;ft(this.$refs.slider,{start:t,connect:!0,tooltips:[!0],step:parseInt(r,10),range:{min:parseInt(n,10),max:parseInt(i,10)},format:{to:function(t){return t},from:function(t){return t}}}),this.$refs.slider.noUiSlider.on("change",(()=>{this.changed()}))},watch:{}},vt=n(6262);const gt=(0,vt.A)(mt,[["render",a],["__scopeId","data-v-645a2917"]]);var _t=gt},5387:function(t,e,n){n.d(e,{A:function(){return f}});var i=n(641),r=n(33),o=n(3751);const a=["id","name","disabled"],s=["for"];function l(t,e,n,l,u,c){return(0,i.uX)(),(0,i.CE)("div",{class:(0,r.C4)(["form-check",c.checkbox_layout])},[(0,i.bo)((0,i.Lk)("input",{id:n.field_id,name:n.field_id,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),"true-value":"1","false-value":"0",disabled:c.is_disabled,type:"checkbox",class:"form-check-input"},null,8,a),[[o.lH,c.value]]),(0,i.Lk)("label",{for:n.field_id,class:"form-check-label"},(0,r.v_)(n.field_data.label),9,s)],2)}var u=n(3177),c=n(8700),d={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],data(){return{}},created(){},methods:{},computed:{checkbox_layout(){return"horizontal"===this.field_data.type_settings?.chb_layout?"form-check-inline":"blank"===this.field_data.type_settings?.chb_layout?"input-button-blank":""},is_disabled(){return(0,c.A)().is_read_only()||this.field_data.type_settings?.disabled},value:{get(){return void 0!==this.emit_name?(0,u.A)().get_user_input(this.field_id):(0,u.A)().get_form_value(this.field_id)},set(t){(0,u.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}}},watch:{}},p=n(6262);const h=(0,p.A)(d,[["render",l]]);var f=h},4871:function(t,e,n){n.d(e,{A:function(){return c}});var i=n(641),r=n(33);const o=["id","name"];function a(t,e,n,a,s,l){return(0,i.uX)(),(0,i.CE)("p",{id:n.field_id,name:n.field_id},(0,r.v_)(n.in_product?n.field_data.label:n.field_data.value),9,o)}var s={props:{field_id:String,field_data:Object,in_product:Boolean},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{},watch:{}},l=n(6262);const u=(0,l.A)(s,[["render",a]]);var c=u},6546:function(t,e,n){n.d(e,{A:function(){return g}});var i=n(641),r=n(33),o=n(3751);const a=["id","name","disabled"],s=["value"];function l(t,e,n,l,u,c){return(0,i.bo)(((0,i.uX)(),(0,i.CE)("select",{id:n.field_id,name:n.field_id,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),disabled:c.is_disabled,class:"form-control"},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.field_data.enum,((t,e)=>((0,i.uX)(),(0,i.CE)("option",{value:c.option_value(t)},(0,r.v_)(c.option_label(t)),9,s)))),256))],8,a)),[[o.u1,c.value]])}var u=n(3177),c=n(8700);let d={props:{},components:{},emits:[],data(){return{combined:{auto_typ:"auto_typ_2",havarijne_auto_typ:"havarijne_auto_typ2",cestovne_krajina:"cestovne_uzemna_platnost"}}},created(){this.change_combined_input()},methods:{change_combined_input(){let t={1:{1:"1",2:"20",3:"33",4:"35"},2:{1:"1",2:"2",3:"20"},7:{1:"51",2:"210",3:"1001"}},e=(0,c.A)().product_group_id();t[e]?.[this.cached_dynamic_combo]!==this.value&&""!==this.cached_dynamic_combo&&(this.value=t[e]?.[this.cached_dynamic_combo]||"")}},computed:{cached_dynamic_combo(){return this.combined.hasOwnProperty(this.field_id)?(0,u.A)().get_form_value(this.combined[this.field_id]):""}},watch:{cached_dynamic_combo(){this.change_combined_input()}}};var p=d,h=n(6343),f={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],mixins:[p],data(){return{loading:!1}},created(){},methods:{option_value(t){return h.A.enum_value(t)},option_label(t){return h.A.enum_label(t)}},computed:{is_disabled(){return(0,c.A)().is_read_only()||!0===this.loading||this.field_data.type_settings?.disabled},value:{get(){return void 0!==this.emit_name?(0,u.A)().get_user_input(this.field_id):(0,u.A)().get_form_value(this.field_id)},set(t){(0,u.A)().set_form_value(this.field_id,t,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}}},watch:{}},m=n(6262);const v=(0,m.A)(f,[["render",l]]);var g=v},2095:function(t,e,n){n.d(e,{A:function(){return m}});var i=n(641),r=n(33);const o={key:0},a={key:1},s={key:2},l={key:3},u=["innerHTML"];function c(t,e,n,c,d,p){return n.tooltip_text?((0,i.uX)(),(0,i.CE)("div",{key:0,class:(0,r.C4)(["ttip",p.tooltip_class])},["info"===n.tooltip_type?((0,i.uX)(),(0,i.CE)("b",o,"?")):"warning"===n.tooltip_type?((0,i.uX)(),(0,i.CE)("b",a,"!")):"cost"===n.tooltip_type?((0,i.uX)(),(0,i.CE)("span",s," (€)")):((0,i.uX)(),(0,i.CE)("b",l,"bad tooltip type")),(0,i.Lk)("div",{class:(0,r.C4)([p.tooltip_width_class,"ttip_text"])},[(0,i.Lk)("span",{innerHTML:p.tooltip_breakpoint?p.tooltip_preview:n.tooltip_text},null,8,u),p.tooltip_breakpoint?((0,i.uX)(),(0,i.CE)("span",{key:0,onClick:e[0]||(e[0]=(...t)=>p.open_ttip_modal&&p.open_ttip_modal(...t)),class:"d-block text-end text-decoration-underline",style:{cursor:"pointer"}},"Čítať viac...")):(0,i.Q3)("",!0)],2)],2)):(0,i.Q3)("",!0)}var d=n(2873),p={props:{tooltip_text:String,tooltip_type:String},components:{},emits:[],data(){return{}},created(){},methods:{open_ttip_modal(){let t={info:"Nápoveda",warning:"Upozornenie",cost:"Info"};(0,d.A)().store_modal_data({title:t[this.tooltip_type],content:this.tooltip_text}),(0,d.A)().open_it("Acceptance_modal")}},computed:{tooltip_width_class(){let t=this.tooltip_text.length;return t<30?"shortest":t<40?"shorter":t<55?"short":""},tooltip_class(){let t={info:"",warning:"pr_warning",cost:"ttip-top"};return t[this.tooltip_type]},tooltip_breakpoint(){let t="warning"===this.tooltip_type?330:500;return this.tooltip_text?.length>t},tooltip_preview(){let t=this.tooltip_text.slice(0,290);return t=t.split(" ").slice(0,-1).join(" "),t+" ..."}},watch:{}},h=n(6262);const f=(0,h.A)(p,[["render",c]]);var m=f}}]);