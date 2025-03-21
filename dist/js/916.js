"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[916],{3175:function(e,t,a){var s=a(1114),n=a(8700),o=a(2873),r=a(5833),i=a(2754),c=a(3177);class l{constructor(){(0,s.A)(this,"params",{}),(0,s.A)(this,"headers",{}),(0,s.A)(this,"auth_fails",0),(0,s.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,i.A)().get_abort_signal(),headers:{"x-user-scope":(0,n.A)().give_api_scope(),Authorization:(0,n.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,n.A)().get_backend_type(),t=(0,n.A)().get_endpoint_type(),a=(0,c.A)().get_receiver(),s={php_wrapper:"/authorize_frontend/?endpoint="+t+"&receiver="+a,np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/?receiver="+a,np_symfony:"/osmapp/auth/",wrapper_sf:"/osmapp/auth/?endpoint="+t+"&receiver="+a};if(s.hasOwnProperty(e)){let t=window.location.origin+s[e];return fetch(t).then((e=>e.json())).then((e=>!!e&&((0,n.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+t+"&receiver="+a;return fetch(e).then((e=>e.json())).then((e=>((0,n.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,n.A)().myport_access_token_promise().then((e=>!1!==e&&((0,n.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,o.A)().open_it("Clearance"),e;if(503===e.status)return(0,n.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,o.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let t=(new Date).toLocaleString(),a=(0,n.A)().get_session_token(),s=(0,n.A)().current_step();return(0,r.A)().set_last_request(this.headers,this.params,t,a,s,e),(0,n.A)().change_step(404),(0,o.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,t)=>{let a=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),s={};fetch(this.params.url,this.headers).then((e=>{s=e;let t=e.headers.get("content-type");return-1===t.indexOf("json")?{response:"not in json format"}:e.json()})).then((t=>{s.result=t,e(s)})).catch((e=>{"AbortError"===e.name?(clearTimeout(a),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}t.A=l},55:function(e,t,a){a.d(t,{A:function(){return u}});var s=a(641),n=a(33);const o={class:"spinner"};function r(e,t,a,r,i,c){return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("div",{class:(0,n.C4)(["bounce1",a.size])},null,2),(0,s.Lk)("div",{class:(0,n.C4)(["bounce2",a.size])},null,2),(0,s.Lk)("div",{class:(0,n.C4)(["bounce3",a.size])},null,2)])}var i={props:{size:String},components:{},data(){return{}},created(){},methods:{},computed:{}},c=a(6262);const l=(0,c.A)(i,[["render",r]]);var u=l},9916:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var s=a(641),n=a(3751),o=a(33);const r={key:0},i=["disabled"],c={class:"text-center mt-3"},l={key:1};function u(e,t,a,u,m,p){const h=(0,s.g2)("Bouncer_loading"),d=(0,s.g2)("Modal_body");return(0,s.uX)(),(0,s.Wv)(d,{close:!0,title:"Poslať ponuku e-mailom?",class:"modal-email"},{default:(0,s.k6)((()=>[m.success?((0,s.uX)(),(0,s.CE)("div",l,t[4]||(t[4]=[(0,s.Lk)("p",null,[(0,s.Lk)("span",{class:"i_success"}),(0,s.Lk)("strong",null,"Ponuka bola odoslaná na Váš email!")],-1)]))):((0,s.uX)(),(0,s.CE)("div",r,[t[3]||(t[3]=(0,s.Lk)("p",{class:"mb-4"}," na Váš e-mail Vám pošleme odkaz, cez ktorý sa môžete kedykoľvek vrátiť naspäť a všetky vyplnené údaje budete mať uložené u nás ",-1)),(0,s.Lk)("form",{onSubmit:t[2]||(t[2]=(...e)=>p.email_submited&&p.email_submited(...e))},[(0,s.bo)((0,s.Lk)("input",{name:"email",class:"form-control mb-2",type:"email",placeholder:"Vaša e-mailová adresa","onUpdate:modelValue":t[0]||(t[0]=e=>m.email=e)},null,512),[[n.Jo,m.email]]),(0,s.bo)((0,s.Lk)("input",{name:"subject",id:"email_subject",class:"form-control mb-3",type:"text",placeholder:"Názov ponuky","onUpdate:modelValue":t[1]||(t[1]=e=>m.subject=e)},null,512),[[n.Jo,m.subject]]),(0,s.Lk)("button",{class:"btn btn-primary w-100",type:"submit",disabled:m.loading},"Odoslať",8,i),(0,s.Lk)("div",c,[(0,s.bo)((0,s.Lk)("p",null,(0,o.v_)(m.error),513),[[n.aG,m.error]]),(0,s.bo)((0,s.bF)(h,{size:"large"},null,512),[[n.aG,m.loading]])])],32)]))])),_:1})}var m=a(8384),p=a(6343),h=a(8700),d=a(3175);class _{email_save(e){let t={action_name:"email",method:"POST",body:e,url:(0,h.A)().endpoint_url()+"online/email/?"+p.A.add_token_as_parameter()},a=new d.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}offer_notify(e){let t={action_name:"offer-notify",method:"GET",url:(0,h.A)().endpoint_url()+"online/offer-notify/?"+p.A.add_token_as_parameter()};e=""===e?" poistenie":e,t.url+="&email_subject="+encodeURIComponent(e);let a=new d.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}var f=new _,v=a(55),k={props:{},components:{Modal_body:m.A,Bouncer_loading:v.A},data(){return{email:"",subject:"",error:null,loading:!1,success:!1}},created(){},methods:{email_submited(e){e.preventDefault(),""!==this.email?(this.loading=!0,Promise.resolve().then((()=>{let t=p.A.custom_serialize_form_elements(e);return f.email_save(t)})).then((()=>f.offer_notify(this.subject))).then((e=>{if(200===e.status)return this.loading=!1,void(this.success=!0);this.show_error(e.result?.error),this.loading=!1}))):this.show_error(null)},show_error(e){this.error=null===e||void 0===e?"Emailová adresa je povinná.":e.join(" "),setTimeout((()=>{this.error=null}),3500)}},computed:{}},b=a(6262);const g=(0,b.A)(k,[["render",u]]);var y=g},8384:function(e,t,a){a.d(t,{A:function(){return h}});var s=a(641),n=a(33);const o={class:"modal-content"},r={class:"modal-header"},i={class:"modal-body"};function c(e,t,a,c,l,u){return(0,s.uX)(),(0,s.CE)("div",{onClick:t[1]||(t[1]=(...e)=>u.did_click_outside&&u.did_click_outside(...e)),class:(0,n.C4)(["vue_modal",a.huge?"huge":""]),"data-cy":"modal"},[(0,s.Lk)("div",o,[(0,s.Lk)("div",r,[(0,s.Lk)("h4",null,(0,n.v_)(a.title),1),a.close?((0,s.uX)(),(0,s.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>u.close_me&&u.close_me(...e)),class:"i_close"})):(0,s.Q3)("",!0)]),(0,s.Lk)("div",i,[(0,s.RG)(e.$slots,"default")])])],2)}var l=a(2873),u={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,l.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},m=a(6262);const p=(0,m.A)(u,[["render",c]]);var h=p}}]);