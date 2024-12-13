"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[449],{3175:function(e,t,a){var s=a(1114),n=a(8700),o=a(2873),r=a(5833),i=a(2754),c=a(3177);class l{constructor(){(0,s.A)(this,"params",{}),(0,s.A)(this,"headers",{}),(0,s.A)(this,"auth_fails",0),(0,s.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,i.A)().get_abort_signal(),headers:{"x-user-scope":(0,n.A)().give_api_scope(),Authorization:(0,n.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,n.A)().get_backend_type(),t=(0,n.A)().get_endpoint_type(),a={php_wrapper:"/authorize_frontend/?endpoint="+t+"&receiver="+(0,c.A)().get_receiver(),np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/"};if(a.hasOwnProperty(e)){let t=window.location.origin+a[e];return fetch(t).then((e=>e.json())).then((e=>!!e&&((0,n.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+t+"&receiver="+(0,c.A)().get_receiver();return fetch(e).then((e=>e.json())).then((e=>((0,n.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,n.A)().myport_access_token_promise().then((e=>!1!==e&&((0,n.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,o.A)().open_it("Clearance"),e;if(503===e.status)return(0,n.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,o.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let t=(new Date).toLocaleString(),a=(0,n.A)().get_session_token(),s=(0,n.A)().current_step();return(0,r.A)().set_last_request(this.headers,this.params,t,a,s,e),(0,n.A)().change_step(404),(0,o.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,t)=>{let a=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),s={};fetch(this.params.url,this.headers).then((e=>{s=e;let t=e.headers.get("content-type");return-1===t.indexOf("json")?{response:"not in json format"}:e.json()})).then((t=>{s.result=t,e(s)})).catch((e=>{"AbortError"===e.name?(clearTimeout(a),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}t.A=l},9452:function(e,t,a){var s=a(8700),n=a(6343),o=a(3175);class r{session_info(){let e={action_name:"getsessioninfo",method:"GET",url:(0,s.A)().endpoint_url()+"online/getsessioninfo/?"+n.A.add_token_as_parameter()},t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}get_data(){let e={action_name:"getdata",method:"GET",url:(0,s.A)().endpoint_url()+"online/getdata/?"+n.A.add_token_as_parameter()},t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}set_data(e){let t={action_name:"setdata",method:"POST",url:(0,s.A)().endpoint_url()+"online/setdata/?"+n.A.serialize_object(e)+n.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new r},8494:function(e,t,a){var s=a(8700),n=a(6343),o=a(3175),r=a(6460);class i{offer_send(e="api"){let t=(0,r.A)().get_confirm_chbs();t=n.A.serialize_object(t);let a={action_name:"signature-offer-send",method:"GET",url:(0,s.A)().endpoint_url()+"online/signature-offer-send/?"+t+n.A.add_token_as_parameter()+"&name="+e,timeout:45},i=new o.A;return i.prepare_params(a).handle_response().catch((e=>{throw e}))}code_send(e){let t={action_name:"signature-code-send",method:"GET",url:(0,s.A)().endpoint_url()+"online/signature-code-send/?client="+e+n.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}code_check(e,t){let a=(0,r.A)().get_confirm_chbs();a=n.A.serialize_object(a);let i={action_name:"signature-code-check",method:"POST",url:(0,s.A)().endpoint_url()+"online/signature-code-check/?"+a+"&client="+t+n.A.add_token_as_parameter(),body:JSON.stringify({code:e}),content_type:"application/json",timeout:45},c=new o.A;return c.prepare_params(i).handle_response().catch((e=>{throw e}))}signature_status(){let e={action_name:"signature-status",method:"GET",url:(0,s.A)().endpoint_url()+"online/signature-status/?"+n.A.add_token_as_parameter()},t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}}t.A=new i},55:function(e,t,a){a.d(t,{A:function(){return _}});var s=a(641),n=a(33);const o={class:"spinner"};function r(e,t,a,r,i,c){return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("div",{class:(0,n.C4)(["bounce1",a.size])},null,2),(0,s.Lk)("div",{class:(0,n.C4)(["bounce2",a.size])},null,2),(0,s.Lk)("div",{class:(0,n.C4)(["bounce3",a.size])},null,2)])}var i={props:{size:String},components:{},data(){return{}},created(){},methods:{},computed:{}},c=a(6262);const l=(0,c.A)(i,[["render",r]]);var _=l},4449:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var s=a(641),n=a(3751),o=a(33);const r=(0,s.Lk)("p",null," Odosielame SMS kód na vaše telefónne číslo ",-1),i=(0,s.Lk)("p",null," Odosielanie SMS správy zlyhalo. ",-1),c=(0,s.Lk)("p",null,[(0,s.eW)(" SMS správa s kódom bola vygenerovaná a mala by Vám byť doručená v krátkej dobe."),(0,s.Lk)("br"),(0,s.eW)(" Zadajte SMS kód, ktorý ste obdržali."),(0,s.Lk)("br"),(0,s.eW)(" Zadaním SMS kódu vyjadrujete súhlas s obsahom obdržanej predzmluvnej dokumentácie. ")],-1),l=(0,s.Lk)("p",null," Kontrolujeme platnosť SMS kódu. ",-1),_=(0,s.Lk)("p",null,[(0,s.eW)(" SMS kód je platný. "),(0,s.Lk)("br"),(0,s.eW)(" Zmluva bola schválená. "),(0,s.Lk)("br"),(0,s.eW)(" Presmerovávame Vás na záverečnú časť. ")],-1),d=(0,s.Lk)("p",null,[(0,s.eW)(" SMS potvrdenie predzmluvnej dokumentácie prebehlo v poriadku."),(0,s.Lk)("br"),(0,s.eW)(" Prosím zatvorte túto stránku a počkajte na ďalšie inštrukcie k uzatvoreniu poistnej zmluvy od vášho sprostredkovateľa. ")],-1),u=[d];function m(e,t,a,d,m,p){const h=(0,s.g2)("Bouncer_loading"),g=(0,s.g2)("Modal_body");return(0,s.uX)(),(0,s.Wv)(g,{close:!1,title:"Potvrdenie SMS kódom",class:"modal-signature"},{default:(0,s.k6)((()=>[(0,s.bo)((0,s.Lk)("div",null,[r,(0,s.bF)(h)],512),[[n.aG,"sending"===m.sign_state]]),(0,s.bo)((0,s.Lk)("div",null,[i,(0,s.Lk)("p",null,(0,o.v_)(m.message),1)],512),[[n.aG,"not_sent"===m.sign_state]]),(0,s.bo)((0,s.Lk)("div",null,[(0,s.Lk)("p",null,(0,o.v_)(m.message),1)],512),[[n.aG,"already_sent"===m.sign_state]]),(0,s.bo)((0,s.Lk)("div",null,[c,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>m.sms_code=e),onKeydown:[t[1]||(t[1]=(...e)=>p.clear_error&&p.clear_error(...e)),t[2]||(t[2]=(0,n.jR)(((...e)=>p.code_validation&&p.code_validation(...e)),["enter"]))],ref:"sms_code_reference",type:"text",name:"sms_code",autocomplete:"off",class:"form-control mb-2 mx-auto mx-sm-0"},null,544),[[n.Jo,m.sms_code]]),(0,s.bo)((0,s.Lk)("p",null," Bol zadaný nesprávny formát. SMS kód je 5 ciferné číslo. ",512),[[n.aG,m.invalid_format]]),(0,s.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>p.code_validation&&p.code_validation(...e)),class:"btn btn-accent btn-right btn-lg mx-auto"}," Skontrolovať SMS kód ")],512),[[n.aG,"is_sent"===m.sign_state]]),(0,s.bo)((0,s.Lk)("div",null,[l,(0,s.bF)(h)],512),[[n.aG,"checking"===m.sign_state]]),(0,s.bo)((0,s.Lk)("div",null,[(0,s.Lk)("p",null,(0,o.v_)(m.message),1),(0,s.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>p.ask_for_code&&p.ask_for_code(...e)),class:"btn btn-primary btn-left btn-lg"}," Opraviť ")],512),[[n.aG,"failed"===m.sign_state]]),(0,s.bo)((0,s.Lk)("div",null,[_,(0,s.bF)(h)],512),[[n.aG,"success"===m.sign_state]]),(0,s.bo)((0,s.Lk)("div",null,u,512),[[n.aG,"no_confirm"===m.sign_state]])])),_:1})}var p=a(55),h=a(8384),g=a(8494),f=a(2873),k=a(6343),v=a(9452),A={props:{},components:{Bouncer_loading:p.A,Modal_body:h.A},emits:[],data(){return{sign_state:"sending",message:"",sms_code:"",invalid_format:!1,client_uuid:""}},created(){this.client_uuid=(0,f.A)().retrieve_modal_data().client_uuid,this.ask_for_code()},methods:{ask_for_code(){g.A.code_send(this.client_uuid).then((e=>{422===e.status?(this.sign_state="not_sent",this.message=e.result.message):409===e.status?(this.sign_state="already_sent",this.message=e.result.message,this.confirm_or_close()):200===e.status&&"fail"!==e.result.status?(this.sign_state="is_sent",this.$nextTick((()=>{this.$refs.sms_code_reference.focus()}))):(this.sign_state="not_sent",this.message=JSON.stringify(e.result))}))},code_validation(){5===this.sms_code.length&&!1!==k.A.contains_only_digits(this.sms_code)?(this.sign_state="checking",g.A.code_check(this.sms_code,this.client_uuid).then((e=>{422===e.status?(this.sign_state="failed",this.message=e.result.message):409===e.status?(this.sign_state="already_sent",this.message=e.result.message,this.confirm_or_close()):(this.sign_state="success",this.confirm_or_close())}))):this.invalid_format=!0},confirm_or_close(){v.A.session_info().then((e=>{e.result?.specialData?.require_provider_confirm?this.sign_state="no_confirm":((0,f.A)().set_modal_event_data("code_modal_closing"),(0,f.A)().close_them_all())}))},clear_error(){this.invalid_format=!1}},computed:{},watch:{}},b=a(6262);const y=(0,b.A)(A,[["render",m]]);var w=y},8384:function(e,t,a){a.d(t,{A:function(){return m}});var s=a(641),n=a(33);const o={class:"modal-content"},r={class:"modal-header"},i={class:"modal-body"};function c(e,t,a,c,l,_){return(0,s.uX)(),(0,s.CE)("div",{onClick:t[1]||(t[1]=(...e)=>_.did_click_outside&&_.did_click_outside(...e)),class:(0,n.C4)(["vue_modal",a.huge?"huge":""]),"data-cy":"modal"},[(0,s.Lk)("div",o,[(0,s.Lk)("div",r,[(0,s.Lk)("h4",null,(0,n.v_)(a.title),1),a.close?((0,s.uX)(),(0,s.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>_.close_me&&_.close_me(...e)),class:"i_close"})):(0,s.Q3)("",!0)]),(0,s.Lk)("div",i,[(0,s.RG)(e.$slots,"default")])])],2)}var l=a(2873),_={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,l.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},d=a(6262);const u=(0,d.A)(_,[["render",c]]);var m=u}}]);