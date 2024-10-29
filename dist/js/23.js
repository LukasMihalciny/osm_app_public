"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[23],{3175:function(e,t,a){var i=a(1114),s=a(8700),n=a(2873),r=a(5833),o=a(2754),c=a(3177);class _{constructor(){(0,i.A)(this,"params",{}),(0,i.A)(this,"headers",{}),(0,i.A)(this,"auth_fails",0),(0,i.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,o.A)().get_abort_signal(),headers:{"x-user-scope":(0,s.A)().give_api_scope(),Authorization:(0,s.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,s.A)().get_backend_type(),t=(0,s.A)().get_endpoint_type(),a={php_wrapper:"/authorize_frontend/?endpoint="+t+"&receiver="+(0,c.A)().get_receiver(),np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/"};if(a.hasOwnProperty(e)){let t=window.location.origin+a[e];return fetch(t).then((e=>e.json())).then((e=>!!e&&((0,s.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+t+"&receiver="+(0,c.A)().get_receiver();return fetch(e).then((e=>e.json())).then((e=>((0,s.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,s.A)().myport_access_token_promise().then((e=>!1!==e&&((0,s.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,n.A)().open_it("Clearance"),e;if(503===e.status)return(0,s.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,n.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let t=(new Date).toLocaleString(),a=(0,s.A)().get_session_token(),i=(0,s.A)().current_step();return(0,r.A)().set_last_request(this.headers,this.params,t,a,i,e),(0,s.A)().change_step(404),(0,n.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,t)=>{let a=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),i={};fetch(this.params.url,this.headers).then((e=>{i=e;let t=e.headers.get("content-type");return-1===t.indexOf("json")?{response:"not in json format"}:e.json()})).then((t=>{i.result=t,e(i)})).catch((e=>{"AbortError"===e.name?(clearTimeout(a),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}t.A=_},5254:function(e,t,a){var i=a(8700),s=a(3175);class n{car_data_search(e,t){let a={action_name:"car-data-search",method:"GET",url:(0,i.A)().endpoint_url()+"api/car-data-search/?"+e+"="+t},n=new s.A;return n.prepare_params(a).handle_response().catch((e=>{throw e}))}ico_info(e){let t="node_red"===(0,i.A)().get_run_mode()?(0,i.A)().get_flow_id():(0,i.A)().product_group_id(),a={action_name:"ico-info",method:"GET",url:(0,i.A)().endpoint_url()+"online/ico-info/"+e+"/?type="+t},n=new s.A;return n.prepare_params(a).handle_response().catch((e=>{throw e}))}car_valuation_options(e){let t={action_name:"car-valuation-options",method:"GET",url:(0,i.A)().endpoint_url()+"api/car-valuation-options/?"+e},a=new s.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}car_valuation_price(e){let t={action_name:"car-valuation-price",method:"GET",url:(0,i.A)().endpoint_url()+"api/car-valuation-price/?"+e},a=new s.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new n},6273:function(e,t,a){a.d(t,{A:function(){return g}});var i=a(641),s=a(33),n=a(3751);const r=["id","name","placeholder","disabled","maxlength","minlength"];function o(e,t,a,o,c,_){return(0,i.bo)(((0,i.uX)(),(0,i.CE)("input",{id:a.field_id,name:a.field_id,"onUpdate:modelValue":t[0]||(t[0]=e=>_.value=e),placeholder:a.field_data.placeholder,disabled:a.field_data.type_settings?.disabled||c.cena_disable,onBlur:t[1]||(t[1]=(...e)=>_.transform_value&&_.transform_value(...e)),onKeydown:t[2]||(t[2]=(...e)=>_.prevent_letters_in_float&&_.prevent_letters_in_float(...e)),maxlength:_.html_attributes(!0),minlength:_.html_attributes(!1),type:"text",class:(0,s.C4)(["form-control",_.transform_class])},null,42,r)),[[n.Jo,_.value,void 0,{lazy:!0}]])}var c=a(3177),_=a(6343);let l={props:{},components:{},emits:[],data(){return{dynamic:{majetok_podlazie:"majetok_poschodie"}}},created(){},methods:{},computed:{dynamic_parent(){return this.dynamic.hasOwnProperty(this.field_id)?(0,c.A)().get_form_value(this.dynamic[this.field_id]):null}},watch:{dynamic_parent(){isNaN(this.dynamic_parent)||""===this.dynamic_parent?this.value="":this.value=parseInt(this.dynamic_parent,10)+1}}};var h=l,d=(a(4979),a(1678),a(5254));let u={props:{},components:{},emits:[],data(){return{watched_id:"havarijne_auto_vybava",cena_id:"havarijne_auto_cena",vyroba_id:"havarijne_rokvyroby",cena_date:"havarijne_auto_registracia",cena_required:["havarijne_auto_znacka","havarijne_auto_model","havarijne_vykon","havarijne_auto_vin","havarijne_palivo"],cena_optional:["havarijne_objem","havarijne_hmotnost","havarijne_rokvyroby","havarijne_auto_prevodovka","havarijne_auto_registracia","havarijne_auto_pocet_sedadiel","havarijne_auto_karoseria"],stanovenie_id:"havarijne_auto_cena_stanovenie"}},created(){this.cena_request()},methods:{cena_request(){if(null===this.cached_listener)return;let e=structuredClone(this.cached_listener),t=(0,c.A)().get_form_value(this.vyroba_id);if(""===e||""===t)return void(this.cena_disable=!1);this.cena_disable=!0;let a,i={},s=this.cena_required.length;for(a=0;a<s;a++)if(i[this.cena_required[a]]=(0,c.A)().get_form_value(this.cena_required[a]),""===i[this.cena_required[a]])return;for(s=this.cena_optional.length,a=0;a<s;a++){let e=(0,c.A)().get_form_value(this.cena_optional[a]);""!==e&&void 0!==e&&(this.cena_optional[a]===this.cena_date&&(e=_.A.format_car_request_date(e)),i[this.cena_optional[a]]=e)}i[this.watched_id]=e,i=_.A.serialize_object(i),d.A.car_valuation_price(i).then((e=>{200===e.status&&(this.value=e.result.data?.[0]?.[this.cena_id])}))}},computed:{cached_listener(){return this.field_id!==this.cena_id?null:(0,c.A)().get_form_value(this.watched_id)},cached_stanovenie(){return this.field_id!==this.cena_id?null:(0,c.A)().get_form_value(this.stanovenie_id)}},watch:{cached_listener(){this.cena_request()},cached_stanovenie(){"2"===this.cached_stanovenie&&(this.cena_disable=!1,(0,c.A)().delete_form_value(this.watched_id))}}};var p=u,m={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed"],mixins:[h,p],data(){return{cena_disable:!1}},created(){},methods:{transform_value(){if("string"===typeof this.value&&this.value!==this.value.trim()&&(this.value=this.value.trim()),"uppercase"===this.field_data.type_settings?.transform?this.value=this.value.toUpperCase():"capitalize"===this.field_data.type_settings?.transform&&(this.value=this.value.charAt(0).toUpperCase()+this.value.slice(1)),"int"===this.field_data.value_type&&(this.value=_.A.keep_only_numbers(this.value)),"dec"===this.field_data.value_type){let e=this.value.replace(/,/g,".");e=e.replace(/[^\d.]/g,""),e=e.replace(/^0+/,"");let t=e.indexOf(".");-1===t&&(e+="."),t=e.indexOf("."),0===t&&(e="0."+e),t=e.indexOf(".");let a=e.slice(t);a=a.replace(/\./g,"");let i=this.field_data.type_settings?.decimal_digits||2;i=parseInt(i,10),a.length>i?a=a.slice(0,i):a.length<i&&(a=a.padEnd(i,"0")),this.value=e.slice(0,t+1)+a}void 0!==this.emit_name&&this.$emit(this.emit_name)},prevent_letters_in_float(e){if("dec"!==this.field_data.value_type)return;let t=[",",".","Backspace","Delete","Escape","Enter","Tab","ArrowRight","ArrowLeft","ArrowUp","ArrowDown"];!1===e.ctrlKey&&isNaN(parseInt(e.key,10))&&-1===t.indexOf(e.key)&&e.preventDefault();let a=this.value.match(/,|\./)?.index,i=this.value.slice(a),s=this.field_data.type_settings?.decimal_digits||2;void 0!==a&&i.length>s&&!1===e.ctrlKey&&-1===t.indexOf(e.key)&&e.target.selectionStart>a&&e.preventDefault()},html_attributes(e){if(e){let e=this.field_id.includes("email")?60:50;return this.field_data.attributes?.maxlength||e}return this.field_data.attributes?.minlength||0}},computed:{transform_class(){return"uppercase"===this.field_data.type_settings?.transform?"text_uppercase":"capitalize"===this.field_data.type_settings?.transform?"text_capitalize":""},value:{get(){return void 0!==this.emit_name?(0,c.A)().get_user_input(this.field_id):(0,c.A)().get_form_value(this.field_id)},set(e){(0,c.A)().set_form_value(this.field_id,e,this.field_data)}}},watch:{}},v=a(6262);const f=(0,v.A)(m,[["render",o]]);var g=f},55:function(e,t,a){a.d(t,{A:function(){return l}});var i=a(641),s=a(33);const n={class:"spinner"};function r(e,t,a,r,o,c){return(0,i.uX)(),(0,i.CE)("div",n,[(0,i.Lk)("div",{class:(0,s.C4)(["bounce1",a.size])},null,2),(0,i.Lk)("div",{class:(0,s.C4)(["bounce2",a.size])},null,2),(0,i.Lk)("div",{class:(0,s.C4)(["bounce3",a.size])},null,2)])}var o={props:{size:String},components:{},data(){return{}},created(){},methods:{},computed:{}},c=a(6262);const _=(0,c.A)(o,[["render",r]]);var l=_}}]);