"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[777],{3175:function(t,e,s){var n=s(1114),a=s(8700),r=s(2873),o=s(5833),i=s(2754),c=s(3177);class _{constructor(){(0,n.A)(this,"params",{}),(0,n.A)(this,"headers",{}),(0,n.A)(this,"auth_fails",0),(0,n.A)(this,"auth_max",6)}prepare_params(t){return this.params=t,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,i.A)().get_abort_signal(),headers:{"x-user-scope":(0,a.A)().give_api_scope(),Authorization:(0,a.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let t=(0,a.A)().get_backend_type(),e=(0,a.A)().get_endpoint_type(),s=(0,c.A)().get_receiver(),n={php_wrapper:"/authorize_frontend/?endpoint="+e+"&receiver="+s,np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/?receiver="+s,np_symfony:"/osmapp/auth/?receiver="+s};if(n.hasOwnProperty(t)){let e=window.location.origin+n[t];return fetch(e).then((t=>t.json())).then((t=>!!t&&((0,a.A)().save_bearer(t),!0)))}if("lukas_local"===t){let t="http://wrapper.local/authorize_frontend/?endpoint="+e+"&receiver="+s;return fetch(t).then((t=>t.json())).then((t=>((0,a.A)().save_bearer(t),console.log("NEW BEARER:"),console.log(t),!0)))}return"vue"===t?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===t?(0,a.A)().myport_access_token_promise().then((t=>!1!==t&&((0,a.A)().save_bearer(t),!0))):(console.log("backend_type "+t+" has no access to new authorization"),!1)}async handle_response(){let t=await this.call_the_api_request();if(200===t.status)return this.auth_fails=0,t;if(401===t.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let t=await this.unauthorized();return t?await this.prepare_params(this.params).handle_response():null}if(423===t.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,r.A)().open_it("Clearance"),t;if(503===t.status)return(0,a.A)().change_step(503),t;if(408===t.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,r.A)().open_it("Server_timeout"),t;if(500===t.status&&"calculate_step2"===this.params.action_name||422===t.status&&"confirm"===this.params.action_name||412===t.status&&"confirm"===this.params.action_name||422===t.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===t.status&&"session-remap"===this.params.action_name||422===t.status&&"id-scan/add-page"===this.params.action_name||422===t.status&&"id-scan/get-scan-groups"===this.params.action_name||425===t.status&&"identity-scan-check"===this.params.action_name||422===t.status&&"identity-scan-check"===this.params.action_name||422===t.status&&"identity-scan"===this.params.action_name||(422===t.status||409===t.status)&&"signature-code-check"===this.params.action_name||(422===t.status||409===t.status)&&"signature-code-send"===this.params.action_name||500===t.status&&"id-scan/get-scan-groups"===this.params.action_name||425===t.status&&"id-scan/get-scan-groups"===this.params.action_name||425===t.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===t.status&&"payment-create"===this.params.action_name||422===t.status&&"offer-notify"===this.params.action_name)return t;{let e=(new Date).toLocaleString(),s=(0,a.A)().get_session_token(),n=(0,a.A)().current_step();return(0,o.A)().set_last_request(this.headers,this.params,e,s,n,t),(0,a.A)().change_step(404),(0,r.A)().close_them_all(),t}}call_the_api_request(){return new Promise(((t,e)=>{let s=setTimeout((function(){return t({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),n={};fetch(this.params.url,this.headers).then((t=>{n=t;let e=t.headers.get("content-type");return-1===e.indexOf("json")?{response:"not in json format"}:t.json()})).then((e=>{n.result=e,t(n)})).catch((t=>{"AbortError"===t.name?(clearTimeout(s),console.log("abort",this.params.action_name)):console.error("Fetch error:",t)}))}))}}e.A=_},5947:function(t,e,s){s.r(e),s.d(e,{default:function(){return kt}});var n=s(641),a=s(33);const r={class:"row"};function o(t,e,s,o,i,c){const _=(0,n.g2)("Info"),p=(0,n.g2)("Actions_loader"),u=(0,n.g2)("Internal_step");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(_),(0,n.Lk)("div",{class:(0,a.C4)([c.find_template]),"data-cy":"nodered_flow"},[(0,n.Lk)("div",r,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.step_actions,((t,e)=>((0,n.uX)(),(0,n.Wv)(p,{action:t,onRequested_step:c.next_step},null,8,["action","onRequested_step"])))),256)),i.display_internal?((0,n.uX)(),(0,n.Wv)(u,{key:0,error:i.error,onRepeat_next:c.next_step},null,8,["error","onRepeat_next"])):(0,n.Q3)("",!0)])],2)],64)}s(4114);var i=s(2327),c=s(3175),_=s(8700),p=s(5143);class u{flow_init_session(){let t={action_name:"init",method:"GET",url:(0,_.A)().endpoint_url()+"osmapp/init/"+(0,_.A)().get_flow_id()},e=new c.A;return e.prepare_params(t).handle_response().then((t=>(200!==t.status||((0,_.A)().set_session_token(t.result?.data?.session),(0,p.A)().set_workflow_status(t.result?.data?.workflowStatus),(0,p.A)().set_workflow_name(t.result?.data?.workflow)),t))).catch((t=>{throw t}))}flow_next_step(t){var e=0;let s={action_name:"nextstep",method:"GET",url:(0,_.A)().endpoint_url()+"osmapp/nextstep/"+(0,_.A)().get_session_token()};var n=[];void 0!==t&&n.push("step="+t),e>0&&n.push("&delay="+1e3*e),n.push("with-session-data=1"),(0,_.A)().is_prod_endpoint()||n.push("debug-info=1"),n.length>0&&(s.url+="/?"+n.join("&"));let a=new c.A;return a.prepare_params(s).handle_response().then((t=>(200!==t.status||((0,p.A)().set_workflow_status(t.result?.data?.workflowStatus),(0,p.A)().set_workflow_name(t.result?.data?.workflow)),t))).catch((t=>{throw t}))}flow_status(){let t={action_name:"status",method:"GET",url:(0,_.A)().endpoint_url()+"osmapp/status/"+(0,_.A)().get_session_token()};var e=[];e.push("with-session-data=1"),(0,_.A)().is_prod_endpoint()||e.push("debug-info=1"),e.length>0&&(t.url+="/?"+e.join("&"));let s=new c.A;return s.prepare_params(t).handle_response().then((t=>(200!==t.status||((0,p.A)().set_workflow_status(t.result?.data?.workflowStatus),(0,p.A)().set_workflow_name(t.result?.data?.workflow)),t))).catch((t=>{throw t}))}}var l=new u;const m=["data-cy"];function h(t,e,s,r,o,i){const c=(0,n.g2)("Image_action"),_=(0,n.g2)("Navigation_action"),p=(0,n.g2)("Form_action"),u=(0,n.g2)("Html_action");return(0,n.uX)(),(0,n.CE)("div",{class:(0,a.C4)([i.size]),"data-cy":i.cypres},["image"===i.type?((0,n.uX)(),(0,n.Wv)(c,{key:0,action:s.action},null,8,["action"])):"navigation"===i.type?((0,n.uX)(),(0,n.Wv)(_,{key:1,action:s.action,onRequested_step:i.requested_step},null,8,["action","onRequested_step"])):"getForm"===i.type?((0,n.uX)(),(0,n.Wv)(p,{key:2,action:s.action,onNext_step:i.next_step},null,8,["action","onNext_step"])):"getHtml"===i.type?((0,n.uX)(),(0,n.Wv)(u,{key:3,action:s.action},null,8,["action"])):(0,n.Q3)("",!0)],10,m)}const d={class:"row"},f={class:"col-6 offset-3"},v=["src"];function g(t,e,s,a,r,o){return(0,n.uX)(),(0,n.CE)("div",d,[(0,n.Lk)("div",f,[(0,n.Lk)("img",{class:"img",src:o.give_img},null,8,v)])])}var w={props:{action:Object},components:{},data(){return{}},mounted(){},methods:{},computed:{give_img(){return this.action.functionParams.url}}},k=s(6262);const A=(0,k.A)(w,[["render",g],["__scopeId","data-v-7248ce3a"]]);var y=A;const b={class:"row mt-4 mb-2 justify-content-center align-items-center"},x={class:"col text-center"},L=["onClick"];function C(t,e,s,r,o,i){return(0,n.uX)(),(0,n.CE)("div",b,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.action.functionParams,((t,e)=>((0,n.uX)(),(0,n.CE)("div",x,[(0,n.Lk)("button",{class:(0,a.C4)(["btn btn-m btn-primary",t.arrow?"btn-"+t.arrow:""]),onClick:e=>i.change_step_or_return_to_myport(t.step)},(0,a.v_)(t.label),11,L)])))),256))])}var j={props:{action:Object},components:{},data(){return{}},mounted(){},emits:["requested_step"],methods:{change_step_or_return_to_myport(t){0==t&&(console.log("osmapp history back to myport"),history.back()),this.$emit("requested_step",t)}},computed:{}};const E=(0,k.A)(j,[["render",C]]);var X=E;const q={class:"row mt-4 mb-2 justify-content-center align-items-center","data-cy":"pagination"},P={class:"col text-center"},T={class:"col text-center"},z={class:"row"},F={class:"col-12"},I={class:"row mt-4 mb-2 justify-content-center align-items-center","data-cy":"pagination"},O={class:"col text-center"},R={class:"col text-center"};function S(t,e,s,a,r,o){const i=(0,n.g2)("Tabs");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",q,[(0,n.Lk)("div",P,[o.show_back_button?((0,n.uX)(),(0,n.CE)("button",{key:0,class:"btn btn-m btn-primary btn-left",onClick:e[0]||(e[0]=t=>o.prev())}," Naspäť ")):(0,n.Q3)("",!0)]),(0,n.Lk)("div",T,[(0,n.Lk)("button",{class:"btn btn-m btn-primary btn-right",onClick:e[1]||(e[1]=t=>o.next())}," Pokračovať ")])]),(0,n.Lk)("div",z,[(0,n.Lk)("div",F,[(0,n.bF)(i)])]),(0,n.Lk)("div",I,[(0,n.Lk)("div",O,[o.show_back_button?((0,n.uX)(),(0,n.CE)("button",{key:0,class:"btn btn-m btn-primary btn-left",onClick:e[2]||(e[2]=t=>o.prev())}," Naspäť ")):(0,n.Q3)("",!0)]),(0,n.Lk)("div",R,[(0,n.Lk)("button",{class:"btn btn-m btn-primary btn-right",onClick:e[3]||(e[3]=t=>o.next())}," Pokračovať ")])])],64)}var N=s(6343);class W{osmapi_get_form(t){let e={action_name:"get-form",method:"GET",url:(0,_.A)().endpoint_url()+"osmapi/get-form/"+(0,_.A)().get_session_token()};var s=[];s.push("source="+t.functionParams.source),s.push("source-id="+t.functionParams["source-id"]),s.push("action-id="+t.id),s.push("json=1"),s.length>0&&(e.url+="/?"+s.join("&"));let n=new c.A;return n.prepare_params(e).handle_response().catch((t=>{throw t}))}osmapi_validate_form(t){let e={action_name:"validate-form",method:"POST",url:(0,_.A)().endpoint_url()+"osmapi/validate-form/"+(0,_.A)().get_session_token(),body:N.A.objectify_user_input(),content_type:"application/json"};var s=[];s.push("source="+t.functionParams.source),s.push("source-id="+t.functionParams["source-id"]),s.push("action-id="+t.id),s.push("json=1"),s.push("without_form=1"),s.length>0&&(e.url+="/?"+s.join("&"));let n=new c.A;return n.prepare_params(e).handle_response().catch((t=>{throw t}))}}var D=new W,G=s(6683),H=s(6460),K=s(9614),Q=s(3177),$={props:{action:Object},components:{Tabs:G.A},data(){return{tab_current:0,tab_last:0}},mounted(){Promise.resolve().then((()=>D.osmapi_get_form(this.action))).then((t=>{if(200===t.status){var e=t.result?.data?.resultData?.form;(0,H.A)().set_form(e),(0,Q.A)().insert_form_values(e),(0,K.A)().set_tab_keys(e)}})).then((()=>l.flow_status())).then((t=>{200===t.status&&(0,Q.A)().store_call_params(t.result.data?.sessionData)}))},methods:{prev(){},next(){this.validate_form()},validate_form(){D.osmapi_validate_form(this.action).then((t=>{(0,H.A)().set_errors(t.result?.data?.resultData?.form_validation_error_elements),!1!==t.result.data?.resultData?.validform?((0,H.A)().clear_form(),this.$emit("next_step")):N.A.adjust_view(!0)}))}},computed:{show_back_button(){return this.tab_last>1&&this.tab_current>1}}};const B=(0,k.A)($,[["render",S]]);var M=B;const U={class:"row my-3"},V={class:"col-12"},Z=["innerHTML"];function J(t,e,s,a,r,o){return(0,n.uX)(),(0,n.CE)("div",U,[(0,n.Lk)("div",V,[(0,n.Lk)("div",{class:"prop_wording",innerHTML:o.print_html},null,8,Z)])])}class Y{osmapi_get_flow_html(t){let e={action_name:"get-html",method:"GET",url:(0,_.A)().endpoint_url()+"osmapi/get-html/"+(0,_.A)().get_session_token()};var s=[];s.push("template="+t.functionParams.template),s.length>0&&(e.url+="/?"+s.join("&"));var n=new c.A;return n.prepare_params(e).handle_response().catch((t=>{throw t}))}}var tt=new Y,et={props:{action:Object},components:{},data(){return{html:""}},mounted(){tt.osmapi_get_flow_html(this.action).then((t=>{200===t.status&&(this.html=t.result.data.resultData.html)}))},methods:{},computed:{print_html(){return this.html}}};const st=(0,k.A)(et,[["render",J]]);var nt=st,at={props:{action:Object},components:{Image_action:y,Navigation_action:X,Form_action:M,Html_action:nt},emits:["requested_step","next_step"],data(){return{}},created(){},methods:{requested_step(t){this.$emit("requested_step",t)},next_step(){this.$emit("requested_step")}},computed:{type(){return this.action.function},size(){return"full"===this.action.functionPosition.size?"col-12":"half"===this.action.functionPosition.size?"col-12 col-lg-6":"col-12"},cypres(){return"action_"+this.action.function+"_order_"+this.action.functionPosition.order}},watch:{}};const rt=(0,k.A)(at,[["render",h]]);var ot=rt;const it={key:0,class:"calc_title_area mt-5"},ct={class:"row"},_t={class:"col-4"},pt={class:"col-4"},ut={class:"col-4"},lt={key:1,class:"calc_title_area mt-5"};function mt(t,e,s,r,o,i){const c=(0,n.g2)("Bouncer_loading");return s.error?((0,n.uX)(),(0,n.CE)("div",it,[e[1]||(e[1]=(0,n.Lk)("h2",{class:"text-primary"},"Interný krok zlyhal",-1)),e[2]||(e[2]=(0,n.Lk)("p",{class:"mb-5 text-center"},"Spracovanie zlyhalo. Skúste ho prosím manuálne zopakovať.",-1)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.internal_actions,((t,e)=>((0,n.uX)(),(0,n.CE)("div",ct,[(0,n.Lk)("div",_t,(0,a.v_)(t.name),1),(0,n.Lk)("div",pt,(0,a.v_)(t.token),1),(0,n.Lk)("div",ut,(0,a.v_)(t.error),1)])))),256)),(0,n.Lk)("button",{onClick:e[0]||(e[0]=e=>t.$emit("repeat_next")),class:"btn btn-primary mt-5"},"Zopakovať")])):((0,n.uX)(),(0,n.CE)("div",lt,[e[3]||(e[3]=(0,n.Lk)("h2",{class:"text-primary"},"Prebieha spracovanie interného kroku",-1)),e[4]||(e[4]=(0,n.Lk)("p",{class:"mb-3 text-center"},"Chvíľu prosím počkajte kým spracujeme všetky dôležité časti.",-1)),(0,n.bF)(c,{class:"mt-3"})]))}var ht=s(55),dt={props:{error:Boolean},components:{Bouncer_loading:ht.A},emits:["repeat_next"],data(){return{}},created(){},methods:{},computed:{internal_actions(){var t=(0,p.A)().get_workflow_actions();let e={};for(let s in t)e[s]={name:t[s].function,error:t[s].error,token:t[s].functionParams.token};return e}},watch:{}};const ft=(0,k.A)(dt,[["render",mt]]);var vt=ft,gt={props:{},components:{Info:i.A,Actions_loader:ot,Internal_step:vt},emits:[],data(){return{status_repeat_frequency:3e3,status_repeats_count:0,status_repeats_limit:10,display_internal:!1,error:!1}},created(){this.init_session()},methods:{init_session(){(0,_.A)().is_fresh_session()?l.flow_init_session().then((t=>{200===t.status&&this.what_to_do_next()})):this.status()},next_step(t=void 0){this.status_repeats_count=0,this.error=!1,l.flow_next_step(t).then((t=>{200===t.status&&this.what_to_do_next()}))},status(){l.flow_status().then((t=>{200===t.status&&this.what_to_do_next()}))},what_to_do_next(){this.display_internal=!1;var t=(0,p.A)().get_workflow_step_state(),e=(0,p.A)().get_workflow_internal(),s=(0,p.A)().get_workflow_finished();if(!0!==s)if("success"===t)this.next_step();else if(!0===e){if(this.display_internal=!0,this.status_repeats_count>this.status_repeats_limit)return console.log("reached status repeat limit, stopping requests"),void(this.error=!0);this.status_repeats_count++,setTimeout(function(){this.status()}.bind(this),this.status_repeat_frequency)}}},computed:{step_actions(){var t,e=(0,p.A)().get_workflow_actions(),s=[],n=e.length;for(t=0;t<n;t++)"template"!==e[t].function&&s.push(e[t]);return s},find_template(){var t,e=(0,p.A)().get_workflow_actions(),s=e.length;for(t=0;t<s;t++)if("template"===e[t].function)return e[t].functionParams.type;return null}},watch:{}};const wt=(0,k.A)(gt,[["render",o],["__scopeId","data-v-619966c3"]]);var kt=wt},2327:function(t,e,s){s.d(e,{A:function(){return x}});var n=s(641),a=s(33),r=s(3751);const o={class:"info_for_session","data-cy":"info"},i=["title"],c={title:"endpoint"},_={title:"receiver name (id)"},p={title:"session token"},u={title:"agent code"},l={title:"filtred products"},m={title:"osmapp version"},h={key:0,title:"step | state | finished | internal"};function d(t,e,s,d,f,v){return(0,n.bo)(((0,n.uX)(),(0,n.CE)("section",o,[(0,n.Lk)("h2",{title:v.print_group},(0,a.v_)(v.heading),9,i),(0,n.Lk)("p",c,(0,a.v_)(v.print_endpoint),1),(0,n.Lk)("p",_,(0,a.v_)(v.print_receiver),1),(0,n.Lk)("p",p,(0,a.v_)(v.print_session_token),1),(0,n.Lk)("p",u,(0,a.v_)(v.print_agent_code),1),(0,n.Lk)("p",l,(0,a.v_)(v.print_filtered_products),1),(0,n.Lk)("p",m,(0,a.v_)(v.print_version),1),v.print_flow?((0,n.uX)(),(0,n.CE)("p",h,(0,a.v_)(v.print_flow),1)):(0,n.Q3)("",!0)],512)),[[r.aG,v.info_shown]])}var f=s(8700),v=s(3177),g=s(5143),w=s(9614),k=s(9819),A={props:{},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{group_id(){return(0,f.A)().product_group_id()},heading(){return"node_red"===(0,f.A)().get_run_mode()?"node_red | "+(0,g.A)().get_workflow_name():111===(0,f.A)().current_step()?"cookie session manager":k.A.group_name(this.group_id)},print_group(){return"group name, for id: "+this.group_id},print_session_token(){return(0,f.A)().get_session_token()||"-"},print_agent_code(){return(0,v.A)().get_agent_code()||"-"},print_filtered_products(){return(0,v.A)().get_filtered_products()||"-"},print_version(){return(0,f.A)().give_app_version()},print_endpoint(){return(0,f.A)().get_endpoint_type()},print_receiver(){let t=(0,v.A)().get_receiver();return k.A.receiver_names(t)+" ("+t+")"},print_flow(){return"node_red"===(0,f.A)().get_run_mode()&&(0,g.A)().get_workflow_step()+" | "+(0,g.A)().get_workflow_step_state()+" | "+((0,g.A)().get_workflow_finished()?"finished":"")+" | "+((0,g.A)().get_workflow_internal()?"internal":"")},info_shown(){return!(0,f.A)().is_prod_endpoint()||(0,v.A)().capable_agent()||(0,w.A)().show_info_section()}},watch:{}},y=s(6262);const b=(0,y.A)(A,[["render",d]]);var x=b}}]);