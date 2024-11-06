"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[681],{6083:function(t,e,n){n.r(e),n.d(e,{default:function(){return xt}});var s=n(641),o=n(33);const r={class:"row"};function a(t,e,n,a,i,_){const c=(0,s.g2)("Info"),l=(0,s.g2)("Actions_loader"),u=(0,s.g2)("Internal_step");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c),(0,s.Lk)("div",{class:(0,o.C4)([_.find_template]),"data-cy":"nodered_flow"},[(0,s.Lk)("div",r,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(_.step_actions,((t,e)=>((0,s.uX)(),(0,s.Wv)(l,{action:t,onRequested_step:_.next_step},null,8,["action","onRequested_step"])))),256)),i.display_internal?((0,s.uX)(),(0,s.Wv)(u,{key:0,error:i.error,onRepeat_next:_.next_step},null,8,["error","onRepeat_next"])):(0,s.Q3)("",!0)])],2)],64)}n(4114);var i=n(2327),_=n(3175),c=n(8700),l=n(5143);class u{flow_init_session(){let t={action_name:"init",method:"GET",url:(0,c.A)().endpoint_url()+"osmapp/init/"+(0,c.A)().get_flow_id()},e=new _.A;return e.prepare_params(t).handle_response().then((t=>(200!==t.status||((0,c.A)().set_session_token(t.result?.data?.session),(0,l.A)().set_workflow_status(t.result?.data?.workflowStatus),(0,l.A)().set_workflow_name(t.result?.data?.workflow)),t))).catch((t=>{throw t}))}flow_next_step(t){var e=0;let n={action_name:"nextstep",method:"GET",url:(0,c.A)().endpoint_url()+"osmapp/nextstep/"+(0,c.A)().get_session_token()};var s=[];void 0!==t&&s.push("step="+t),e>0&&s.push("&delay="+1e3*e),s.push("with-session-data=1"),(0,c.A)().is_prod_endpoint()||s.push("debug-info=1"),s.length>0&&(n.url+="/?"+s.join("&"));let o=new _.A;return o.prepare_params(n).handle_response().then((t=>(200!==t.status||((0,l.A)().set_workflow_status(t.result?.data?.workflowStatus),(0,l.A)().set_workflow_name(t.result?.data?.workflow)),t))).catch((t=>{throw t}))}flow_status(){let t={action_name:"status",method:"GET",url:(0,c.A)().endpoint_url()+"osmapp/status/"+(0,c.A)().get_session_token()};var e=[];e.push("with-session-data=1"),(0,c.A)().is_prod_endpoint()||e.push("debug-info=1"),e.length>0&&(t.url+="/?"+e.join("&"));let n=new _.A;return n.prepare_params(t).handle_response().then((t=>(200!==t.status||((0,l.A)().set_workflow_status(t.result?.data?.workflowStatus),(0,l.A)().set_workflow_name(t.result?.data?.workflow)),t))).catch((t=>{throw t}))}}var p=new u;const d=["data-cy"];function m(t,e,n,r,a,i){const _=(0,s.g2)("Image_action"),c=(0,s.g2)("Navigation_action"),l=(0,s.g2)("Form_action"),u=(0,s.g2)("Html_action");return(0,s.uX)(),(0,s.CE)("div",{class:(0,o.C4)([i.size]),"data-cy":i.cypres},["image"===i.type?((0,s.uX)(),(0,s.Wv)(_,{key:0,action:n.action},null,8,["action"])):"navigation"===i.type?((0,s.uX)(),(0,s.Wv)(c,{key:1,action:n.action,onRequested_step:i.requested_step},null,8,["action","onRequested_step"])):"getForm"===i.type?((0,s.uX)(),(0,s.Wv)(l,{key:2,action:n.action,onNext_step:i.next_step},null,8,["action","onNext_step"])):"getHtml"===i.type?((0,s.uX)(),(0,s.Wv)(u,{key:3,action:n.action},null,8,["action"])):(0,s.Q3)("",!0)],10,d)}const h={class:"row"},f={class:"col-6 offset-3"},v=["src"];function k(t,e,n,o,r,a){return(0,s.uX)(),(0,s.CE)("div",h,[(0,s.Lk)("div",f,[(0,s.Lk)("img",{class:"img",src:a.give_img},null,8,v)])])}var w={props:{action:Object},components:{},data(){return{}},mounted(){},methods:{},computed:{give_img(){return this.action.functionParams.url}}},g=n(6262);const A=(0,g.A)(w,[["render",k],["__scopeId","data-v-7248ce3a"]]);var b=A;const y={class:"row mt-4 mb-2 justify-content-center align-items-center"},x={class:"col text-center"},L=["onClick"];function C(t,e,n,r,a,i){return(0,s.uX)(),(0,s.CE)("div",y,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.action.functionParams,((t,e)=>((0,s.uX)(),(0,s.CE)("div",x,[(0,s.Lk)("button",{class:(0,o.C4)(["btn btn-m btn-primary",t.arrow?"btn-"+t.arrow:""]),onClick:e=>i.change_step_or_return_to_myport(t.step)},(0,o.v_)(t.label),11,L)])))),256))])}var X={props:{action:Object},components:{},data(){return{}},mounted(){},emits:["requested_step"],methods:{change_step_or_return_to_myport(t){0==t&&(console.log("osmapp history back to myport"),history.back()),this.$emit("requested_step",t)}},computed:{}};const E=(0,g.A)(X,[["render",C]]);var j=E;const P={class:"row mt-4 mb-2 justify-content-center align-items-center","data-cy":"pagination"},q={class:"col text-center"},I={class:"col text-center"},F={class:"row"},T={class:"col-12"},z={class:"row mt-4 mb-2 justify-content-center align-items-center","data-cy":"pagination"},G={class:"col text-center"},N={class:"col text-center"};function O(t,e,n,o,r,a){const i=(0,s.g2)("Tabs");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",P,[(0,s.Lk)("div",q,[a.show_back_button?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"btn btn-m btn-primary btn-left",onClick:e[0]||(e[0]=t=>a.prev())}," Naspäť ")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",I,[(0,s.Lk)("button",{class:"btn btn-m btn-primary btn-right",onClick:e[1]||(e[1]=t=>a.next())}," Pokračovať ")])]),(0,s.Lk)("div",F,[(0,s.Lk)("div",T,[(0,s.bF)(i)])]),(0,s.Lk)("div",z,[(0,s.Lk)("div",G,[a.show_back_button?((0,s.uX)(),(0,s.CE)("button",{key:0,class:"btn btn-m btn-primary btn-left",onClick:e[2]||(e[2]=t=>a.prev())}," Naspäť ")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",N,[(0,s.Lk)("button",{class:"btn btn-m btn-primary btn-right",onClick:e[3]||(e[3]=t=>a.next())}," Pokračovať ")])])],64)}var R=n(6343);class S{osmapi_get_form(t){let e={action_name:"get-form",method:"GET",url:(0,c.A)().endpoint_url()+"osmapi/get-form/"+(0,c.A)().get_session_token()};var n=[];n.push("source="+t.functionParams.source),n.push("source-id="+t.functionParams["source-id"]),n.push("action-id="+t.id),n.push("json=1"),n.length>0&&(e.url+="/?"+n.join("&"));let s=new _.A;return s.prepare_params(e).handle_response().catch((t=>{throw t}))}osmapi_validate_form(t){let e={action_name:"validate-form",method:"POST",url:(0,c.A)().endpoint_url()+"osmapi/validate-form/"+(0,c.A)().get_session_token(),body:R.A.objectify_user_input(),content_type:"application/json"};var n=[];n.push("source="+t.functionParams.source),n.push("source-id="+t.functionParams["source-id"]),n.push("action-id="+t.id),n.push("json=1"),n.push("without_form=1"),n.length>0&&(e.url+="/?"+n.join("&"));let s=new _.A;return s.prepare_params(e).handle_response().catch((t=>{throw t}))}}var W=new S,H=n(8971),K=n(6460),Q=n(9614),$=n(3177),D={props:{action:Object},components:{Tabs:H.A},data(){return{tab_current:0,tab_last:0}},mounted(){W.osmapi_get_form(this.action).then((t=>{if(200===t.status){var e=t.result?.data?.resultData?.form;(0,K.A)().set_form(e),(0,$.A)().insert_form_values(e),(0,Q.A)().set_tab_keys(e)}}))},methods:{prev(){},next(){this.validate_form()},validate_form(){W.osmapi_validate_form(this.action).then((t=>{(0,K.A)().set_errors(t.result?.data?.resultData?.form_validation_error_elements),!1!==t.result.data?.resultData?.validform?((0,K.A)().clear_form(),this.$emit("next_step")):R.A.adjust_view(!0)}))}},computed:{show_back_button(){return this.tab_last>1&&this.tab_current>1}}};const B=(0,g.A)(D,[["render",O],["__scopeId","data-v-7e87ed90"]]);var M=B;const Z={class:"row my-3"},J={class:"col-12"},U=["innerHTML"];function V(t,e,n,o,r,a){return(0,s.uX)(),(0,s.CE)("div",Z,[(0,s.Lk)("div",J,[(0,s.Lk)("div",{class:"prop_wording",innerHTML:a.print_html},null,8,U)])])}class Y{osmapi_get_flow_html(t){let e={action_name:"get-html",method:"GET",url:(0,c.A)().endpoint_url()+"osmapi/get-html/"+(0,c.A)().get_session_token()};var n=[];n.push("template="+t.functionParams.template),n.length>0&&(e.url+="/?"+n.join("&"));var s=new _.A;return s.prepare_params(e).handle_response().catch((t=>{throw t}))}}var tt=new Y,et={props:{action:Object},components:{},data(){return{html:""}},mounted(){tt.osmapi_get_flow_html(this.action).then((t=>{200===t.status&&(this.html=t.result.data.resultData.html)}))},methods:{},computed:{print_html(){return this.html}}};const nt=(0,g.A)(et,[["render",V]]);var st=nt,ot={props:{action:Object},components:{Image_action:b,Navigation_action:j,Form_action:M,Html_action:st},emits:["requested_step","next_step"],data(){return{}},created(){},methods:{requested_step(t){this.$emit("requested_step",t)},next_step(){this.$emit("requested_step")}},computed:{type(){return this.action.function},size(){return"full"===this.action.functionPosition.size?"col-12":"half"===this.action.functionPosition.size?"col-12 col-lg-6":"col-12"},cypres(){return"action_"+this.action.function+"_order_"+this.action.functionPosition.order}},watch:{}};const rt=(0,g.A)(ot,[["render",m]]);var at=rt;const it={key:0,class:"calc_title_area mt-5"},_t=(0,s.Lk)("h2",{class:"text-primary"},"Interný krok zlyhal",-1),ct=(0,s.Lk)("p",{class:"mb-5 text-center"},"Spracovanie zlyhalo. Skúste ho prosím manuálne zopakovať.",-1),lt={class:"row"},ut={class:"col-4"},pt={class:"col-4"},dt={class:"col-4"},mt={key:1,class:"calc_title_area mt-5"},ht=(0,s.Lk)("h2",{class:"text-primary"},"Prebieha spracovanie interného kroku",-1),ft=(0,s.Lk)("p",{class:"mb-3 text-center"},"Chvíľu prosím počkajte kým spracujeme všetky dôležité časti.",-1);function vt(t,e,n,r,a,i){const _=(0,s.g2)("Bouncer_loading");return n.error?((0,s.uX)(),(0,s.CE)("div",it,[_t,ct,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.internal_actions,((t,e)=>((0,s.uX)(),(0,s.CE)("div",lt,[(0,s.Lk)("div",ut,(0,o.v_)(t.name),1),(0,s.Lk)("div",pt,(0,o.v_)(t.token),1),(0,s.Lk)("div",dt,(0,o.v_)(t.error),1)])))),256)),(0,s.Lk)("button",{onClick:e[0]||(e[0]=e=>t.$emit("repeat_next")),class:"btn btn-primary mt-5"},"Zopakovať")])):((0,s.uX)(),(0,s.CE)("div",mt,[ht,ft,(0,s.bF)(_,{class:"mt-3"})]))}var kt=n(55),wt={props:{error:Boolean},components:{Bouncer_loading:kt.A},emits:["repeat_next"],data(){return{}},created(){},methods:{},computed:{internal_actions(){var t=(0,l.A)().get_workflow_actions();let e={};for(let n in t)e[n]={name:t[n].function,error:t[n].error,token:t[n].functionParams.token};return e}},watch:{}};const gt=(0,g.A)(wt,[["render",vt]]);var At=gt,bt={props:{},components:{Info:i.A,Actions_loader:at,Internal_step:At},emits:[],data(){return{status_repeat_frequency:3e3,status_repeats_count:0,status_repeats_limit:10,display_internal:!1,error:!1}},created(){this.init_session()},methods:{init_session(){(0,c.A)().is_fresh_session()?p.flow_init_session().then((t=>{200===t.status&&this.what_to_do_next()})):this.status()},next_step(t=void 0){this.status_repeats_count=0,this.error=!1,p.flow_next_step(t).then((t=>{200===t.status&&this.what_to_do_next()}))},status(){p.flow_status().then((t=>{200===t.status&&this.what_to_do_next()}))},what_to_do_next(){this.display_internal=!1;var t=(0,l.A)().get_workflow_step_state(),e=(0,l.A)().get_workflow_internal(),n=(0,l.A)().get_workflow_finished();if(!0!==n)if("success"===t)this.next_step();else if(!0===e){if(this.display_internal=!0,this.status_repeats_count>this.status_repeats_limit)return console.log("reached status repeat limit, stopping requests"),void(this.error=!0);this.status_repeats_count++,setTimeout(function(){this.status()}.bind(this),this.status_repeat_frequency)}}},computed:{step_actions(){var t,e=(0,l.A)().get_workflow_actions(),n=[],s=e.length;for(t=0;t<s;t++)"template"!==e[t].function&&n.push(e[t]);return n},find_template(){var t,e=(0,l.A)().get_workflow_actions(),n=e.length;for(t=0;t<n;t++)if("template"===e[t].function)return e[t].functionParams.type;return null}},watch:{}};const yt=(0,g.A)(bt,[["render",a],["__scopeId","data-v-619966c3"]]);var xt=yt},2327:function(t,e,n){n.d(e,{A:function(){return x}});var s=n(641),o=n(33),r=n(3751);const a={class:"info_for_session","data-cy":"info"},i=["title"],_={title:"endpoint"},c={title:"receiver name (id)"},l={title:"session token"},u={title:"agent code"},p={title:"filtred products"},d={title:"osmapp version"},m={key:0,title:"step | state | finished | internal"};function h(t,e,n,h,f,v){return(0,s.bo)(((0,s.uX)(),(0,s.CE)("section",a,[(0,s.Lk)("h2",{title:v.print_group},(0,o.v_)(v.heading),9,i),(0,s.Lk)("p",_,(0,o.v_)(v.print_endpoint),1),(0,s.Lk)("p",c,(0,o.v_)(v.print_receiver),1),(0,s.Lk)("p",l,(0,o.v_)(v.print_session_token),1),(0,s.Lk)("p",u,(0,o.v_)(v.print_agent_code),1),(0,s.Lk)("p",p,(0,o.v_)(v.print_filtered_products),1),(0,s.Lk)("p",d,(0,o.v_)(v.print_version),1),v.print_flow?((0,s.uX)(),(0,s.CE)("p",m,(0,o.v_)(v.print_flow),1)):(0,s.Q3)("",!0)],512)),[[r.aG,v.info_shown]])}var f=n(8700),v=n(3177),k=n(5143),w=n(9614),g=n(9819),A={props:{},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{group_id(){return(0,f.A)().product_group_id()},heading(){return"node_red"===(0,f.A)().get_run_mode()?"node_red | "+(0,k.A)().get_workflow_name():111===(0,f.A)().current_step()?"cookie session manager":g.A.group_name(this.group_id)},print_group(){return"group name, for id: "+this.group_id},print_session_token(){return(0,f.A)().get_session_token()||"-"},print_agent_code(){return(0,v.A)().get_agent_code()||"-"},print_filtered_products(){return(0,v.A)().get_filtered_products()||"-"},print_version(){return(0,f.A)().give_app_version()},print_endpoint(){return(0,f.A)().get_endpoint_type()},print_receiver(){let t=(0,v.A)().get_receiver();return g.A.receiver_names(t)+" ("+t+")"},print_flow(){return"node_red"===(0,f.A)().get_run_mode()&&(0,k.A)().get_workflow_step()+" | "+(0,k.A)().get_workflow_step_state()+" | "+((0,k.A)().get_workflow_finished()?"finished":"")+" | "+((0,k.A)().get_workflow_internal()?"internal":"")},info_shown(){return!(0,f.A)().is_prod_endpoint()||(0,v.A)().capable_agent()||(0,w.A)().show_info_section()}},watch:{}},b=n(6262);const y=(0,b.A)(A,[["render",h]]);var x=y}}]);