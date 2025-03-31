"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[286],{3175:function(e,t,a){var i=a(1114),s=a(8700),n=a(2873),r=a(5833),o=a(2754),l=a(3177);class c{constructor(){(0,i.A)(this,"params",{}),(0,i.A)(this,"headers",{}),(0,i.A)(this,"auth_fails",0),(0,i.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,o.A)().get_abort_signal(),headers:{"x-user-scope":(0,s.A)().give_api_scope(),Authorization:(0,s.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,s.A)().get_backend_type(),t=(0,s.A)().get_endpoint_type(),a=(0,l.A)().get_receiver(),i={php_wrapper:"/authorize_frontend/?endpoint="+t+"&receiver="+a,np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/?receiver="+a,np_symfony:"/osmapp/auth/",wrapper_sf:"/osmapp/auth/?endpoint="+t+"&receiver="+a};if(i.hasOwnProperty(e)){let t=window.location.origin+i[e];return fetch(t).then((e=>e.json())).then((e=>!!e&&((0,s.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+t+"&receiver="+a;return fetch(e).then((e=>e.json())).then((e=>((0,s.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,s.A)().myport_access_token_promise().then((e=>!1!==e&&((0,s.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,n.A)().open_it("Clearance"),e;if(503===e.status)return(0,s.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,n.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||422===e.status&&"identity-scan-check"===this.params.action_name||422===e.status&&"identity-scan"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let t=(new Date).toLocaleString(),a=(0,s.A)().get_session_token(),i=(0,s.A)().current_step();return(0,r.A)().set_last_request(this.headers,this.params,t,a,i,e),(0,s.A)().change_step(404),(0,n.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,t)=>{let a=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),i={};fetch(this.params.url,this.headers).then((e=>{i=e;let t=e.headers.get("content-type");return-1===t.indexOf("json")?{response:"not in json format"}:e.json()})).then((t=>{i.result=t,e(i)})).catch((e=>{"AbortError"===e.name?(clearTimeout(a),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}t.A=c},5254:function(e,t,a){var i=a(8700),s=a(3175);class n{car_data_search(e,t){let a={action_name:"car-data-search",method:"GET",url:(0,i.A)().endpoint_url()+"api/car-data-search/?"+e+"="+t},n=new s.A;return n.prepare_params(a).handle_response().catch((e=>{throw e}))}ico_info(e){let t="node_red"===(0,i.A)().get_run_mode()?(0,i.A)().get_flow_id():(0,i.A)().product_group_id(),a={action_name:"ico-info",method:"GET",url:(0,i.A)().endpoint_url()+"online/ico-info/"+e+"/?type="+t},n=new s.A;return n.prepare_params(a).handle_response().catch((e=>{throw e}))}car_valuation_options(e){let t={action_name:"car-valuation-options",method:"GET",url:(0,i.A)().endpoint_url()+"api/car-valuation-options/?"+e},a=new s.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}car_valuation_price(e){let t={action_name:"car-valuation-price",method:"GET",url:(0,i.A)().endpoint_url()+"api/car-valuation-price/?"+e},a=new s.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new n},6710:function(e,t,a){a.d(t,{A:function(){return b}});var i=a(641),s=a(33),n=a(3751);const r={key:0,class:"cloud_info"},o=["id","name","placeholder","disabled","maxlength","minlength"];function l(e,t,a,l,c,_){return(0,i.uX)(),(0,i.CE)(i.FK,null,[c.cloud_info?((0,i.uX)(),(0,i.CE)("div",r,t[3]||(t[3]=[(0,i.Lk)("span",null," Boli odstránené nežiaduce znaky. ",-1)]))):(0,i.Q3)("",!0),(0,i.bo)((0,i.Lk)("input",{id:a.field_id,name:a.field_id,"onUpdate:modelValue":t[0]||(t[0]=e=>_.value=e),placeholder:a.field_data.placeholder,disabled:_.is_disabled,onBlur:t[1]||(t[1]=(...e)=>_.transform_value&&_.transform_value(...e)),onKeydown:t[2]||(t[2]=(...e)=>_.prevent_letters_in_float&&_.prevent_letters_in_float(...e)),maxlength:_.html_attributes(!0),minlength:_.html_attributes(!1),type:"text",class:(0,s.C4)(["form-control",_.transform_class])},null,42,o),[[n.Jo,_.value,void 0,{lazy:!0}]])],64)}var c=a(3177),_=a(8700),d=a(6343);let u={props:{},components:{},emits:[],data(){return{dynamic:{majetok_podlazie:"majetok_poschodie"}}},created(){},methods:{},computed:{dynamic_parent(){return this.dynamic.hasOwnProperty(this.field_id)?(0,c.A)().get_form_value(this.dynamic[this.field_id]):null}},watch:{dynamic_parent(){isNaN(this.dynamic_parent)||""===this.dynamic_parent?this.value="":this.value=parseInt(this.dynamic_parent,10)+1}}};var p=u,h=(a(4979),a(1678),a(5254));let m={props:{},components:{},emits:[],data(){return{watched_id:"havarijne_auto_vybava",cena_id:"havarijne_auto_cena",vyroba_id:"havarijne_rokvyroby",cena_date:"havarijne_auto_registracia",cena_required:["havarijne_auto_znacka","havarijne_auto_model","havarijne_vykon","havarijne_auto_vin","havarijne_palivo"],cena_optional:["havarijne_objem","havarijne_hmotnost","havarijne_rokvyroby","havarijne_auto_prevodovka","havarijne_auto_registracia","havarijne_auto_pocet_sedadiel","havarijne_auto_karoseria"],stanovenie_id:"havarijne_auto_cena_stanovenie"}},created(){this.cena_request()},methods:{cena_request(){if(null===this.cached_listener)return;let e=structuredClone(this.cached_listener),t=(0,c.A)().get_form_value(this.vyroba_id);if(""===e||""===t)return void(this.cena_disable=!1);this.cena_disable=!0;let a,i={},s=this.cena_required.length;for(a=0;a<s;a++)if(i[this.cena_required[a]]=(0,c.A)().get_form_value(this.cena_required[a]),""===i[this.cena_required[a]])return;for(s=this.cena_optional.length,a=0;a<s;a++){let e=(0,c.A)().get_form_value(this.cena_optional[a]);""!==e&&void 0!==e&&(this.cena_optional[a]===this.cena_date&&(e=d.A.format_car_request_date(e)),i[this.cena_optional[a]]=e)}i[this.watched_id]=e,i=d.A.serialize_object(i),h.A.car_valuation_price(i).then((e=>{200===e.status&&(this.value=e.result.data?.[0]?.[this.cena_id])}))}},computed:{cached_listener(){return this.field_id!==this.cena_id?null:(0,c.A)().get_form_value(this.watched_id)},cached_stanovenie(){return this.field_id!==this.cena_id?null:(0,c.A)().get_form_value(this.stanovenie_id)}},watch:{cached_listener(){this.cena_request()},cached_stanovenie(){"2"===this.cached_stanovenie&&(this.cena_disable=!1,(0,c.A)().delete_form_value(this.watched_id))}}};var v=m,f={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed"],mixins:[p,v],data(){return{cena_disable:!1,cloud_info:!1}},created(){},methods:{transform_value(){if("string"===typeof this.value&&this.value!==this.value.trim()){let e=this.value.trim();this.value!==e&&(this.value=e)}if("uppercase"===this.field_data.type_settings?.transform){let e=this.value.toUpperCase();this.value!==e&&(this.value=e)}else if("capitalize"===this.field_data.type_settings?.transform){let e=this.value.charAt(0).toUpperCase()+this.value.slice(1);this.value!==e&&(this.value=e)}if("digits_only"===this.field_data.input_settings?.sanitize_value){let e=d.A.keep_only_numbers(this.value);this.value!==e&&(this.value=e,this.cloud_info=!0,setTimeout((()=>{this.cloud_info=!1}),4e3))}if("dec"===this.field_data.value_type){let e=this.value.replace(/,/g,".");e=e.replace(/[^\d.]/g,""),e=e.replace(/^0+/,"");let t=e.indexOf(".");-1===t&&(e+="."),t=e.indexOf("."),0===t&&(e="0."+e),t=e.indexOf(".");let a=e.slice(t);a=a.replace(/\./g,"");let i=this.field_data.type_settings?.decimal_digits||2;i=parseInt(i,10),a.length>i?a=a.slice(0,i):a.length<i&&(a=a.padEnd(i,"0")),this.value=e.slice(0,t+1)+a}void 0!==this.emit_name&&this.$emit(this.emit_name)},prevent_letters_in_float(e){if("dec"!==this.field_data.value_type)return;let t=[",",".","Backspace","Delete","Escape","Enter","Tab","ArrowRight","ArrowLeft","ArrowUp","ArrowDown"];!1===e.ctrlKey&&isNaN(parseInt(e.key,10))&&-1===t.indexOf(e.key)&&e.preventDefault();let a=this.value.match(/,|\./)?.index,i=this.value.slice(a),s=this.field_data.type_settings?.decimal_digits||2;void 0!==a&&i.length>s&&!1===e.ctrlKey&&-1===t.indexOf(e.key)&&e.target.selectionStart>a&&e.preventDefault()},html_attributes(e){if(e){let e=this.field_id.includes("email")?60:50;return this.field_data.attributes?.maxlength||e}return this.field_data.attributes?.minlength||0}},computed:{transform_class(){return"uppercase"===this.field_data.type_settings?.transform?"text_uppercase":"capitalize"===this.field_data.type_settings?.transform?"text_capitalize":""},is_disabled(){return(0,_.A)().is_read_only()||this.field_data.type_settings?.disabled||this.cena_disable},value:{get(){return void 0!==this.emit_name?(0,c.A)().get_user_input(this.field_id):(0,c.A)().get_form_value(this.field_id)},set(e){(0,c.A)().set_form_value(this.field_id,e)}}},watch:{}},g=a(6262);const y=(0,g.A)(f,[["render",l]]);var b=y},55:function(e,t,a){a.d(t,{A:function(){return _}});var i=a(641),s=a(33);const n={class:"spinner"};function r(e,t,a,r,o,l){return(0,i.uX)(),(0,i.CE)("div",n,[(0,i.Lk)("div",{class:(0,s.C4)(["bounce1",a.size])},null,2),(0,i.Lk)("div",{class:(0,s.C4)(["bounce2",a.size])},null,2),(0,i.Lk)("div",{class:(0,s.C4)(["bounce3",a.size])},null,2)])}var o={props:{size:String},components:{},data(){return{}},created(){},methods:{},computed:{}},l=a(6262);const c=(0,l.A)(o,[["render",r]]);var _=c},6286:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var i=a(641),s=a(3751),n=a(33);const r={class:"text-center text-warning fw-bold"},o={class:"col-sm-12 mb-3"},l=["for"],c={key:1},_={class:"validation-placeholder validation-message"},d={class:"text-center"},u=["disabled"],p=["disabled"];function h(e,t,a,h,m,v){const f=(0,i.g2)("Text"),g=(0,i.g2)("Bouncer_loading"),y=(0,i.g2)("Modal_body");return(0,i.uX)(),(0,i.Wv)(y,{close:!0,title:"Upresniť cenu",class:"modal-signature"},{default:(0,i.k6)((()=>[t[5]||(t[5]=(0,i.Lk)("p",{class:"mb-3"},[(0,i.eW)(" Cena je predbežne orientačná. "),(0,i.Lk)("br"),(0,i.eW)(" Aby sme Vám vedeli zobraziť presnú cenu, potrebujeme od Vás dodatočné údaje. ")],-1)),t[6]||(t[6]=(0,i.Lk)("p",null,[(0,i.eW)(" Ak Vám postačuje orientačná cena, možte pokračovať bez doplnenia údajov. "),(0,i.Lk)("br"),(0,i.eW)(" Presná cena Vám bude dopočítaná pred uzatvorením zmluvy. ")],-1)),t[7]||(t[7]=(0,i.Lk)("p",null," Poskytovateľ produktu potrebuje na upresnenie ceny nasledovné údaje: ",-1)),(0,i.bo)((0,i.Lk)("p",r," Všetky údaje sú potrebné pre upresnenie ceny. ",512),[[s.aG,m.invalid]]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(m.price_inputs,((e,a)=>((0,i.uX)(),(0,i.CE)("div",o,[(0,i.Lk)("label",{for:a,class:"input-label"},(0,n.v_)(e?.label),9,l),"text"===e?.type?((0,i.uX)(),(0,i.Wv)(f,{key:0,onKeyup:(0,s.jR)(v.specify_submit,["enter"]),emit_name:"fake_emit",field_id:a,field_data:e},null,8,["onKeyup","field_id","field_data"])):((0,i.uX)(),(0,i.CE)("p",c,[(0,i.Lk)("strong",null,(0,n.v_)(a),1),t[2]||(t[2]=(0,i.Lk)("br",null,null,-1)),t[3]||(t[3]=(0,i.eW)(" Specify_product_price modal currently supports 'text' input type only. "))])),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(m.price_errors[a],((e,a)=>((0,i.uX)(),(0,i.CE)("div",_,[t[4]||(t[4]=(0,i.Lk)("span",{class:"mark-circle mark-orange"},"!",-1)),(0,i.eW)(" "+(0,n.v_)(e),1)])))),256))])))),256)),(0,i.Lk)("div",d,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>v.specify_submit&&v.specify_submit(...e)),disabled:m.loading,class:"btn btn-primary w-100 mt-3 mb-2",title:"Na základe Vami doplnených údajov vieme zistiť finálnu presnú cenu."}," Upresniť cenu ",8,u),v.allow_skip?((0,i.uX)(),(0,i.CE)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>v.skip_specify&&v.skip_specify(...e)),disabled:m.loading,class:"btn btn-secondary w-100",title:"Možte pokračovať s orientačnou cenou. Finálnu cenu prepočítame tesne pred uzatvorením zmluvy."}," Pokračovať s orientačnou ",8,p)):(0,i.Q3)("",!0),(0,i.bo)((0,i.bF)(g,{size:"large",class:"mt-3"},null,512),[[s.aG,m.loading]])])])),_:1})}var m=a(4883),v=a(55),f=a(2873),g=a(3177),y=a(6343),b=a(9126),A=a(5162),k=a(6710),w={props:{},components:{Modal_body:m.A,Bouncer_loading:v.A,Text:k.A},emits:[],data(){return{launched_from:null,product_id:null,price_inputs:{},price_errors:{},loading:!1,invalid:!1}},created(){this.launched_from=(0,f.A)().retrieve_modal_data().launched_from,"from_global"===this.launched_from?(this.price_inputs=(0,f.A)().retrieve_modal_data().price_inputs,this.price_errors=(0,f.A)().retrieve_modal_data().price_errors):"from_product"===this.launched_from?(this.product_id=(0,f.A)().retrieve_modal_data().product_id,this.loading=!0,b.A.get_global_form().then((e=>{this.loading=!1;let t=A.A.product_form_formatter(e.result.form,"price"),a=(0,f.A)().retrieve_modal_data().filter_price_inputs;if(null!==a){a=a.split(",");for(let e=0;e<a.length;e++)void 0!==t?.[a[e]]&&(this.price_inputs[a[e]]=t[a[e]])}else this.price_inputs=t}))):console.log("unexpected launched_from",this.launched_from)},methods:{skip_specify(){Object.keys(this.price_inputs);(0,g.A)().reset_form_values(),(0,f.A)().set_modal_event_data("indicative_price_"+this.product_id),(0,f.A)().close_them_all()},specify_submit(){if(this.empty_inputs)return void(this.invalid=!0);this.loading=!0;let e=y.A.serialize_specific_inputs(Object.keys(this.price_inputs));b.A.validate_global_form(e).then((e=>{this.loading=!1,!0===e.result.validform?((0,f.A)().set_modal_event_data("specify_recalculate"),(0,f.A)().close_them_all()):(console.log(e.result?.form_validation_error_elements),this.price_errors=e.result.form_validation_error_elements)}))}},computed:{allow_skip(){return"from_product"===this.launched_from&&0===Object.keys(this.price_errors).length},empty_inputs(){for(let e in this.price_inputs){let t=(0,g.A)().get_user_input(e);if(""===t)return!0}return this.invalid=!1,!1}},watch:{}},j=a(6262);const x=(0,j.A)(w,[["render",h]]);var z=x},4883:function(e,t,a){a.d(t,{A:function(){return p}});var i=a(641),s=a(33);const n={class:"modal-content"},r={class:"modal-header"},o={class:"modal-body"};function l(e,t,a,l,c,_){return(0,i.uX)(),(0,i.CE)("div",{onClick:t[1]||(t[1]=(...e)=>_.did_click_outside&&_.did_click_outside(...e)),class:(0,s.C4)(["vue_modal",a.modal_size]),"data-cy":"modal"},[(0,i.Lk)("div",n,[(0,i.Lk)("div",r,[(0,i.Lk)("h4",null,(0,s.v_)(a.title),1),a.close?((0,i.uX)(),(0,i.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>_.close_me&&_.close_me(...e)),class:"i_close"})):(0,i.Q3)("",!0)]),(0,i.Lk)("div",o,[(0,i.RG)(e.$slots,"default")])])],2)}var c=a(2873),_={props:{close:Boolean,title:String,modal_size:String},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,c.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},d=a(6262);const u=(0,d.A)(_,[["render",l]]);var p=u}}]);