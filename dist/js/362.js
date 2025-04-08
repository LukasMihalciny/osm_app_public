"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[362],{3175:function(e,t,a){var s=a(1114),r=a(8700),n=a(2873),o=a(5833),i=a(2754),_=a(3177);class c{constructor(){(0,s.A)(this,"params",{}),(0,s.A)(this,"headers",{}),(0,s.A)(this,"auth_fails",0),(0,s.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,i.A)().get_abort_signal(),headers:{"x-user-scope":(0,r.A)().give_api_scope(),Authorization:(0,r.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,r.A)().get_backend_type(),t=(0,r.A)().get_endpoint_type(),a=(0,_.A)().get_receiver(),s={php_wrapper:"/authorize_frontend/?endpoint="+t+"&receiver="+a,np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/?receiver="+a,np_symfony:"/osmapp/auth/",wrapper_sf:"/osmapp/auth/?endpoint="+t+"&receiver="+a};if(s.hasOwnProperty(e)){let t=window.location.origin+s[e];return fetch(t).then((e=>e.json())).then((e=>!!e&&((0,r.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+t+"&receiver="+a;return fetch(e).then((e=>e.json())).then((e=>((0,r.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,r.A)().myport_access_token_promise().then((e=>!1!==e&&((0,r.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,n.A)().open_it("Clearance"),e;if(503===e.status)return(0,r.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,n.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let t=(new Date).toLocaleString(),a=(0,r.A)().get_session_token(),s=(0,r.A)().current_step();return(0,o.A)().set_last_request(this.headers,this.params,t,a,s,e),(0,r.A)().change_step(404),(0,n.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,t)=>{let a=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),s={};fetch(this.params.url,this.headers).then((e=>{s=e;let t=e.headers.get("content-type");return-1===t.indexOf("json")?{response:"not in json format"}:e.json()})).then((t=>{s.result=t,e(s)})).catch((e=>{"AbortError"===e.name?(clearTimeout(a),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}t.A=c},2144:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var s=a(641),r=a(3751),n=a(33);const o={class:"row pb-3"},i={class:"col-6"},_={class:"nav nav-tabs nav-justified"},c=["onClick"],u={class:"col-3 text-end"},l={class:"col-3 text-end"};function d(e,t,a,d,p,h){const m=(0,s.g2)("Bouncer_loading"),v=(0,s.g2)("Tabs"),f=(0,s.g2)("Modal_body");return(0,s.uX)(),(0,s.Wv)(f,{close:!1,title:"Individuálne nastavenia - "+p.product_name,class:"",huge:!0},{default:(0,s.k6)((()=>[(0,s.Lk)("div",o,[(0,s.Lk)("div",i,[(0,s.Lk)("ul",_,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h.tab_count,((e,t)=>(0,s.bo)(((0,s.uX)(),(0,s.CE)("li",{onClick:(0,r.D$)((t=>h.switch_the_tab(e)),["prevent"]),class:(0,n.C4)(h.current_person===e?"active":"")},[(0,s.Lk)("a",{style:(0,n.Tr)({cursor:h.allow_tab_switch?"pointer":"default"}),href:"#"},(0,n.v_)(t+1)+". poistený ",5)],10,c)),[[r.aG,h.tab_is_not_empty(e)]]))),256))])]),(0,s.Lk)("div",u,[(0,s.Lk)("button",{class:"btn btn-sm btn-secondary btn-left",onClick:t[0]||(t[0]=(...e)=>h.return_to_step1&&h.return_to_step1(...e))},(0,n.v_)(h.first_person?"Na vstup":"Naspäť"),1)]),(0,s.Lk)("div",l,[p.loading?((0,s.uX)(),(0,s.Wv)(m,{key:0,style:{"margin-top":"10px"}})):((0,s.uX)(),(0,s.CE)("button",{key:1,class:"btn btn-sm btn-primary btn-right",onClick:t[1]||(t[1]=(...e)=>h.validate_extended&&h.validate_extended(...e))},(0,n.v_)(h.last_person?"Prepočítať":"Pokračovať"),1))])]),(0,s.bF)(v,{style:{"max-height":"calc(90vh - 55px - 65px - 30px)",overflow:"auto"}})])),_:1},8,["title"])}a(4979),a(1678);var p=a(8384),h=a(2873),m=a(3177),v=a(6460),f=a(8700),A=a(6343),b=a(3175);class g{validate_extended_form(){let e={action_name:"validategroupform",method:"POST",body:A.A.serialize_user_input(),url:(0,f.A)().endpoint_url()+"online/validategroupform/"+(0,f.A)().product_group_id()+"/?global=0&without_form=1"};e.url+=A.A.add_token_as_parameter();let t=new b.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}}var y=new g,k=a(55),w=a(9414),x=a(9614),C={props:{},components:{Bouncer_loading:k.A,Modal_body:p.A,Tabs:w.A},data(){return{extended_inputs:{},extended_errors:null,product_name:"",product_id:0,period:0,loading:!1}},created(){this.extended_inputs=(0,h.A)().retrieve_modal_data().extended_inputs,this.extended_errors=(0,h.A)().retrieve_modal_data().extended_errors,this.product_name=(0,h.A)().retrieve_modal_data().product_name,this.product_id=(0,h.A)().retrieve_modal_data().product_id,this.period=(0,h.A)().retrieve_modal_data().period,(0,m.A)().insert_product_values(this.extended_inputs),(0,v.A)().set_form(this.extended_inputs),null!==this.extended_errors&&(0,v.A)().set_errors(structuredClone(this.extended_errors)),(0,x.A)().set_tab_keys(this.extended_inputs)},methods:{return_to_step1(){this.first_person?((0,v.A)().clear_form(),(0,m.A)().reset_form_values(),(0,v.A)().clear_errors(),(0,x.A)().reset_tab_keys(),(0,f.A)().change_step(1)):((0,x.A)().decrease_tab(),A.A.this_tab_is_empty()&&this.return_to_step1())},validate_extended(){this.loading=!0,y.validate_extended_form().then((e=>{this.loading=!1,200===e.status&&((0,v.A)().clear_errors(),this.process_errors_and_go_further(e))}))},process_errors_and_go_further(e){if((0,x.A)().current_tab_is_last())!0===e.result.validform?((0,v.A)().clear_form(),(0,m.A)().reset_form_values(),(0,x.A)().reset_tab_keys(),(0,h.A)().set_modal_event_data(this.product_id),(0,h.A)().close_them_all()):((0,v.A)().set_errors(e.result.form_validation_error_elements),(0,x.A)().open_first_tab_with_error(e.result.form_validation_error_tab_elements),A.A.adjust_view(!0));else{let t=e.result.form_validation_error_tab_elements?.[(0,x.A)().get_current_tab()];void 0===t?((0,x.A)().increase_tab(),A.A.this_tab_is_empty()&&this.process_errors_and_go_further(e),A.A.adjust_view()):((0,v.A)().set_errors(t),A.A.adjust_view(!0))}},switch_the_tab(e){this.allow_tab_switch&&(0,x.A)().set_current_tab(e)},tab_is_not_empty(e){return!A.A.this_tab_is_empty(e)}},computed:{tab_count(){return(0,x.A)().get_tab_keys()},first_person(){return(0,x.A)().current_tab_is_first()},last_person(){return(0,x.A)().current_tab_is_last()},current_person(){return(0,x.A)().get_current_tab()},allow_tab_switch(){return(0,m.A)().capable_agent()}}},L=a(6262);const j=(0,L.A)(C,[["render",d]]);var E=j},8384:function(e,t,a){a.d(t,{A:function(){return p}});var s=a(641),r=a(33);const n={class:"modal-content"},o={class:"modal-header"},i={class:"modal-body"};function _(e,t,a,_,c,u){return(0,s.uX)(),(0,s.CE)("div",{onClick:t[1]||(t[1]=(...e)=>u.did_click_outside&&u.did_click_outside(...e)),class:(0,r.C4)(["vue_modal",a.huge?"huge":""]),"data-cy":"modal"},[(0,s.Lk)("div",n,[(0,s.Lk)("div",o,[(0,s.Lk)("h4",null,(0,r.v_)(a.title),1),a.close?((0,s.uX)(),(0,s.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>u.close_me&&u.close_me(...e)),class:"i_close"})):(0,s.Q3)("",!0)]),(0,s.Lk)("div",i,[(0,s.RG)(e.$slots,"default")])])],2)}var c=a(2873),u={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,c.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},l=a(6262);const d=(0,l.A)(u,[["render",_]]);var p=d}}]);