"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[584],{4326:function(e,t,r){var n=r(8700),s=r(6343),a=r(3175),o=r(3177);class _{get_calculate(e,t,r){let o={action_name:"calculate_step2",method:"POST",url:(0,n.A)().endpoint_url()+"online/calculate/?id="+e+"&json=1&period="+r+s.A.add_token_as_parameter(),body:t},_=new a.A;return _.prepare_params(o).handle_response().then((t=>408===t.status?(console.log("#"+e+" has 408, going for results request"),this.repeat_results()):t)).catch((e=>{throw e}))}check_calculate(){let e={action_name:"calculate_step4",method:"POST",url:(0,n.A)().endpoint_url()+"online/calculate/?"+s.A.add_token_as_parameter(),body:null};e.url+="&id="+(0,o.A)().get_selected_product().product_id+"&period="+(0,o.A)().get_selected_product().period;let t=new a.A;return t.prepare_params(e).handle_response().then((async e=>408===e.status?(console.log("calculate has 408 timeout, wait 1 minute and run results api"),await s.A.sleep(60),this.repeat_results()):e)).catch((e=>{throw e}))}repeat_results(){let e={action_name:"results",method:"GET",url:(0,n.A)().endpoint_url()+"online/results/?"+s.A.add_token_as_parameter()},t=new a.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}}t.A=new _},7654:function(e,t,r){var n=r(8700),s=r(6343),a=r(3175),o=r(5833),_=r(6460);class i{confirm_session(e){let t="";e&&(t=(0,_.A)().get_confirm_chbs(),t=s.A.serialize_object(t));let r={action_name:"confirm",method:"GET",url:(0,n.A)().endpoint_url()+"online/confirm/?"+t+s.A.add_token_as_parameter()},o=new a.A;return o.prepare_params(r).handle_response().then((e=>408===e.status||412===e.status?this.repeat_getsessioninfo(0):e)).catch((e=>{throw e}))}repeat_confirm(){let e={action_name:"confirm",method:"GET",url:(0,n.A)().endpoint_url()+"online/confirm/?"+s.A.add_token_as_parameter()},t=new a.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}async repeat_getsessioninfo(e){e++;let t=10,r=10;console.log("wait "+r+" seconds then try getsessioninfo, iteration: "+e+" (max "+t+")"),await s.A.sleep(r);let _={action_name:"getsessioninfo",method:"GET",url:(0,n.A)().endpoint_url()+"online/getsessioninfo/?"+s.A.add_token_as_parameter()},i=new a.A;return i.prepare_params(_).handle_response().then((r=>{if(100===r.result?.state)return r;if(e>=t){let e=(new Date).toLocaleString(),t=(0,n.A)().get_session_token(),s=(0,n.A)().current_step();return(0,o.A)().set_last_request({},_,e,t,s,r),(0,n.A)().change_step(404),{status:408,action_name:"getsessioninfo"}}return this.repeat_getsessioninfo(e)})).catch((e=>{throw e}))}}t.A=new i},9452:function(e,t,r){var n=r(8700),s=r(6343),a=r(3175);class o{session_info(){let e={action_name:"getsessioninfo",method:"GET",url:(0,n.A)().endpoint_url()+"online/getsessioninfo/?"+s.A.add_token_as_parameter()},t=new a.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}get_data(){let e={action_name:"getdata",method:"GET",url:(0,n.A)().endpoint_url()+"online/getdata/?"+s.A.add_token_as_parameter()},t=new a.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}set_data(e){let t={action_name:"setdata",method:"POST",url:(0,n.A)().endpoint_url()+"online/setdata/?"+s.A.serialize_object(e)+s.A.add_token_as_parameter()},r=new a.A;return r.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new o},6767:function(e,t,r){r.r(t),r.d(t,{default:function(){return H}});var n=r(641),s=r(3751),a=r(33);const o={"data-cy":"calc_proposal"},_=["innerHTML"],i=["innerHTML"],c={class:"text-center pt-2 pb-5"},l=(0,n.Lk)("h3",null,"Načítavame dokumenty",-1),u={key:0,class:"prop_confirm mb-4"},d=(0,n.Lk)("h5",{class:"text-warning"},"Upozornenie",-1),p=(0,n.Lk)("span",{class:"proposal_scroll_anchor"},null,-1);function m(e,t,r,m,h,f){const g=(0,n.g2)("Title"),A=(0,n.g2)("Documents_prepare"),w=(0,n.g2)("Bouncer_loading"),v=(0,n.g2)("Confirm_form"),k=(0,n.g2)("Singnature_form");return(0,n.uX)(),(0,n.CE)("section",o,[(0,n.bF)(g,{title:"Takmer hotovo!"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{innerHTML:h.html.view_header_text},null,8,_)])),_:1}),(0,n.Lk)("div",{innerHTML:h.html.contract_html,class:"prop_wording","data-cy":"proposal_template"},null,8,i),(0,n.bF)(A,{start_doc_requests:h.start_doc_requests,onAll_docs_finished:f.all_docs_finished,step_html:4},null,8,["start_doc_requests","onAll_docs_finished"]),(0,n.bo)((0,n.Lk)("div",c,[l,(0,n.bF)(w)],512),[[s.aG,!h.doc_requests_are_done]]),h.warning?(0,n.bo)(((0,n.uX)(),(0,n.CE)("div",u,[d,(0,n.Lk)("p",null,(0,a.v_)(h.warning),1)],512)),[[s.aG,h.doc_requests_are_done]]):(0,n.Q3)("",!0),p,0===h.signature_required&&h.doc_requests_are_done?((0,n.uX)(),(0,n.Wv)(v,{key:1,confirm_running:h.confirm_running,onRun_confirm:f.run_confirm},null,8,["confirm_running","onRun_confirm"])):1===h.signature_required&&h.doc_requests_are_done?((0,n.uX)(),(0,n.Wv)(k,{key:2,confirm_running:h.confirm_running,onRun_confirm:f.run_confirm},null,8,["confirm_running","onRun_confirm"])):(0,n.Q3)("",!0)])}var h=r(9452),f=r(4326),g=r(8856),A=r(55),w=r(2873),v=r(3177),k=r(821),b=r(9713);const x={class:"prop_confirm","data-cy":"acceptance_form"},y=(0,n.Lk)("h3",{class:"text-primary"}," Záverečné potvrdenie ",-1);function q(e,t,r,s,a,o){const _=(0,n.g2)("Confirm_checkboxes"),i=(0,n.g2)("Confirm_buttons");return(0,n.uX)(),(0,n.CE)("div",x,[y,(0,n.bF)(_,{mode:"classic",invalid_checkboxes:a.invalid_checkboxes},null,8,["invalid_checkboxes"]),(0,n.bF)(i,{mode:"classic",allow_back:!r.confirm_running,loading:r.confirm_running,onMain_button_press:o.main_button_press},null,8,["allow_back","loading","onMain_button_press"])])}var T=r(424),j=r(1391),L=r(6460),C={props:{confirm_running:Boolean},components:{Confirm_checkboxes:T.A,Confirm_buttons:j.A},emits:["run_confirm"],data(){return{invalid_checkboxes:!1}},created(){},methods:{main_button_press(){this.invalid_checkboxes=(0,L.A)().are_checkboxes_invalid(),this.invalid_checkboxes||this.$emit("run_confirm",!0)}},computed:{},watch:{}},P=r(6262);const E=(0,P.A)(C,[["render",q]]);var G=E,O=r(8700),M=r(514),S=r(7654),F={props:{},components:{Documents_prepare:k.A,Bouncer_loading:A.A,Title:b.A,Confirm_form:G,Singnature_form:M.A},data(){return{debug:!1,start_doc_requests:!1,doc_requests_are_done:!1,confirm_running:!1,signature_required:0,html:{contract_html:"",view_header_text:""},warning:void 0}},created(){Promise.resolve().then((()=>h.A.session_info())).then((e=>{if(e.result?.state>=100)return(0,O.A)().change_step(5),Promise.reject("session already confirmed");1===e.result.read_only&&(0,O.A)().set_read_only(),this.signature_required=e.result?.signature_required,console.log("signature_required",e.result?.signature_required)})).then((()=>h.A.get_data())).then((e=>200!==e.status?Promise.reject("get_data api failed"):((0,v.A)().extract_selected_product(e),(0,v.A)().store_call_params(e.result?.call_params),this.debug?(this.doc_requests_are_done=!0,Promise.reject("debug prevent calculate")):f.A.check_calculate()))).then((e=>{let t=(0,v.A)().get_selected_product().product_id;return this.warning=e.result[t]?.result?.result?.warning?.result,!1===e.result.validform?((0,w.A)().store_modal_data({type:"calculate_step4_validate_form_didnt_pass",errors:e.result?.form_validation_error_elements}),(0,w.A)().open_it("Ordinary_error_modal"),Promise.reject("prevent documents, validform false")):void 0!==e.result[t]?.result?.errors?((0,w.A)().store_modal_data({type:"calculate_step4_webservice_didnt_accept_form",errors:e.result[t]?.result?.errors}),(0,w.A)().open_it("Ordinary_error_modal"),Promise.reject("prevent documents, webservice rejected")):200!==e.status?((0,w.A)().store_modal_data({type:"calculate_step4_unexpected_response_code",errors:null}),(0,w.A)().open_it("Ordinary_error_modal"),Promise.reject("prevent documents, response code")):void 0})).then((()=>{g.A.get_it(!1).then((e=>{this.html.contract_html=e.result?.html})),g.A.get_json_api("view_header_text").then((e=>{if(0===this.signature_required)this.html.view_header_text=e.result?.json?.both;else{let t=(0,O.A)().get_signature_role();this.html.view_header_text="poistnik"===t?e.result?.json?.client:e.result?.json?.agent}})),this.start_doc_requests=!0})).catch((e=>{console.log(e)}))},methods:{all_docs_finished(){this.doc_requests_are_done=!0},run_confirm(e){this.confirm_running=!0,S.A.confirm_session(e).then((e=>{if(this.confirm_running=!1,200===e.status&&("success"===e.result?.response||100===e.result?.state))return(0,L.A)().$reset(),void(0,O.A)().change_step(5);(0,w.A)().store_modal_data({type:"confirm_step4_didnt_succeed",errors:e.result?.data?.errors||{message:e.result?.message}}),(0,w.A)().open_it("Ordinary_error_modal")}))}},computed:{},watch:{}};const X=(0,P.A)(F,[["render",m]]);var H=X}}]);