"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[893],{7618:function(e,t,r){var s=r(1114),n=r(6343),o=r(9452),a=r(6460);class _{constructor(){(0,s.A)(this,"field_id","")}check_scan_promise(){return new Promise(((e,t)=>{this.scan_input_in_current_tab()?o.A.session_info().then((r=>{if(200!==r.status)return void t("sessioninfo failed");let s=r.result.scan_id_required,o=r.result.scan_id_succeeded;1===s&&0===o?((0,a.A)().set_one_error(this.field_id,"Občianský preukaz je povinný."),n.A.adjust_view(!0),t("scan required, reject validate")):((0,a.A)().clear_one_error(this.field_id),e())})):e()}))}scan_input_in_current_tab(){let e=n.A.active_tab();for(let t in e){let r=n.A.first_value(e[t]),s=n.A.first_key(e[t]);if("scan_modal"===r.type_settings?.upload)return this.field_id=s,!0}return!1}}t.A=new _},2878:function(e,t,r){var s=r(8700),n=r(6343),o=r(3175),a=r(3177);class _{get_group_form(){let e={action_name:"getgroupform",method:"GET",url:(0,s.A)().endpoint_url()+"online/getgroupform/"+(0,s.A)().product_group_id()+"/?global=2&json=1"};e.url+=n.A.add_token_as_parameter(),e.url+=(0,a.A)().agent_code_param();let t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}validate_group_form(){let e={action_name:"validategroupform",method:"POST",body:n.A.serialize_user_input(),url:(0,s.A)().endpoint_url()+"online/validategroupform/"+(0,s.A)().product_group_id()+"/?global=2&without_form=1"};e.url+=n.A.add_token_as_parameter(),e.url+=(0,a.A)().add_filtered_param();let t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}}t.A=new _},8222:function(e,t,r){var s=r(8700),n=r(6343),o=r(3175),a=r(3177);class _{get_user_form(){let e={action_name:"getform",method:"POST",body:null,url:(0,s.A)().endpoint_url()+"online/getform/"+(0,a.A)().get_selected_product().form_id+"/?json=1"};e.url+=n.A.add_token_as_parameter();let t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}validate_user_form(){let e={action_name:"validateform",method:"POST",body:n.A.serialize_user_input(),url:(0,s.A)().endpoint_url()+"online/validateform/"+(0,a.A)().get_selected_product().form_id+"/?without_form=1"};e.url+=n.A.add_token_as_parameter();let t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}}t.A=new _},9452:function(e,t,r){var s=r(8700),n=r(6343),o=r(3175);class a{session_info(){let e={action_name:"getsessioninfo",method:"GET",url:(0,s.A)().endpoint_url()+"online/getsessioninfo/?"+n.A.add_token_as_parameter()},t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}get_data(){let e={action_name:"getdata",method:"GET",url:(0,s.A)().endpoint_url()+"online/getdata/?"+n.A.add_token_as_parameter()},t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}set_data(e){let t={action_name:"setdata",method:"POST",url:(0,s.A)().endpoint_url()+"online/setdata/?"+n.A.serialize_object(e)+n.A.add_token_as_parameter()},r=new o.A;return r.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new a},3367:function(e,t,r){r.d(t,{A:function(){return A}});var s=r(641),n=r(3751);const o={class:"row mt-4 form-pagination","data-cy":"navigation"},a={class:"col-12 col-sm-4 text-center text-sm-start order-2 order-sm-1"},_={class:"col-12 col-sm-4 text-center order-3 order-sm-2"},i={class:"col-12 col-sm-4 text-center text-sm-end order-1 order-sm-3"},l=["disabled","title"];function c(e,t,r,c,d,u){const p=(0,s.g2)("Bouncer_loading");return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("div",a,[r.show_back?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>u.prev&&u.prev(...e)),type:"button",class:"btn btn-light btn-left btn-lg"}," Naspäť ")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",_,[(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>u.clear&&u.clear(...e)),type:"button",class:"btn btn-white btn-lg"}," Vymazať údaje ")]),(0,s.Lk)("div",i,[(0,s.bo)((0,s.bF)(p,null,null,512),[[n.aG,u.loading]]),r.show_next?(0,s.bo)(((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[2]||(t[2]=(...e)=>u.next&&u.next(...e)),disabled:r.disable_next,title:r.disable_next?"Pokúšame sa zopakovať požiadavku.":"",type:"button",class:"btn btn-primary btn-right btn-lg"}," Pokračovať ",8,l)),[[n.aG,!u.loading]]):(0,s.Q3)("",!0)])])}var d=r(55),u=r(2873),p={props:{show_back:Boolean,show_next:Boolean,disable_next:Boolean},components:{Bouncer_loading:d.A},emits:["next","prev"],data(){return{}},created(){},methods:{next(){this.$emit("next")},prev(){this.$emit("prev")},clear(){(0,u.A)().open_it("Cleaning_session")}},computed:{loading(){return(0,u.A)().is_loading()}}},h=r(6262);const m=(0,h.A)(p,[["render",c]]);var A=m},5412:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var s=r(641);const n={"data-cy":"calc_forms"};function o(e,t,r,o,a,_){const i=(0,s.g2)("Zeteo_nav"),l=(0,s.g2)("Tabs"),c=(0,s.g2)("Navigation");return(0,s.uX)(),(0,s.CE)("section",n,[_.classic_np_nav?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(i,{key:0,onPrev:_.prev_button,onNext:_.next_button,show_back:_.show_back},null,8,["onPrev","onNext","show_back"])),(0,s.bF)(l),_.classic_np_nav?((0,s.uX)(),(0,s.Wv)(c,{key:1,onPrev:_.prev_button,onNext:_.next_button,show_back:_.show_back,show_next:a.agent_clearance_ok,disable_next:!1},null,8,["onPrev","onNext","show_back","show_next"])):(0,s.Q3)("",!0)])}var a=r(3367),_=r(3751);const i={class:"step_progress_alt_pagination text-end","data-cy":"navigation"};function l(e,t,r,n,o,a){const l=(0,s.g2)("Bouncer_loading");return(0,s.uX)(),(0,s.CE)("div",i,[r.show_back?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>a.prev&&a.prev(...e)),class:"btn btn-outline-primary btn-left btn-m me-1"}," Späť ")):(0,s.Q3)("",!0),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>a.clear&&a.clear(...e)),class:"btn btn-outline-primary btn-m me-1"}," Zmazať údaje "),(0,s.bo)((0,s.bF)(l,{style:{"margin-right":"19px","margin-left":"20px","padding-top":"5px"}},null,512),[[_.aG,a.loading]]),(0,s.bo)((0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>a.next&&a.next(...e)),class:"btn btn-primary btn-right btn-m"}," Ďalej ",512),[[_.aG,!a.loading]])])}var c=r(55),d=r(2873),u={props:{show_back:Boolean},components:{Bouncer_loading:c.A},emits:["next","prev"],data(){return{}},created(){},methods:{next(){this.$emit("next")},prev(){this.$emit("prev")},clear(){(0,d.A)().open_it("Cleaning_session")}},computed:{loading(){return(0,d.A)().is_loading()}},watch:{}},p=r(6262);const h=(0,p.A)(u,[["render",l]]);var m=h,A=r(2878),b=r(8222),f=r(6343),v=r(3358),g=r(6460),k=r(8700),w=r(9452),x=r(3177),y=r(8439),P=r(9614),C=r(7618),j={props:{},components:{Navigation:a.A,Tabs:v.A,Zeteo_nav:m},data(){return{is_step:1,is_fresh_session:!1,agent_clearance_ok:!0}},created(){(0,d.A)().open_it("Loading"),this.is_step=(0,k.A)().current_step(),(0,k.A)().is_fresh_session()&&(this.is_fresh_session=!0);var e=(0,k.A)().myport_session_token_promise();Promise.resolve().then((()=>this.is_fresh_session&&null===e?Promise.resolve():this.is_fresh_session&&null!==e?e().then((e=>{console.log("using session from myport: "+typeof e,e),(0,k.A)().set_session_token(e)})):((0,P.A)().set_upper_section(),w.A.session_info()))).then((e=>!this.is_fresh_session&&e?.result?.state>=100?((0,d.A)().close_them_all(),(0,k.A)().change_step(5),Promise.reject("session already confirmed")):(this.is_fresh_session||1!==e.result.read_only||(0,k.A)().set_read_only(),Promise.resolve()))).then((()=>3===this.is_step&&void 0===(0,x.A)().get_selected_product().form_id?w.A.get_data():Promise.resolve())).then((e=>{void 0!==e&&(0,x.A)().extract_selected_product(e)})).then((()=>1===this.is_step?A.A.get_group_form():3===this.is_step?b.A.get_user_form():void 0)).then((t=>{if(423===t.status&&(this.agent_clearance_ok=!1),200!==t.status)return;(0,d.A)().close_them_all(),this.is_fresh_session&&null===e&&(0,k.A)().set_session_token(t.result.token),(0,x.A)().store_call_params(t.result.call_params);let r=t.result.form;(0,g.A)().set_form(r),(0,x.A)().insert_form_values(r),(0,P.A)().set_tab_keys(r),y.A.store_form_cache(this.is_fresh_session),this.is_fresh_session&&w.A.set_data({osm_author_spa:1})})).catch((e=>{console.log(e)}))},methods:{prev_button(){(0,P.A)().current_tab_is_first()?((0,g.A)().clear_form(),(0,x.A)().reset_form_values(),(0,P.A)().reset_tab_keys(),(0,k.A)().change_step(2)):((0,P.A)().decrease_tab(),f.A.this_tab_is_empty()&&this.prev_button(),f.A.adjust_view())},next_button(){(0,P.A)().set_upper_section(),(0,k.A)().is_read_only()?this.check_errors_go_next({result:{validform:!0}}):((0,d.A)().open_it("Loading"),Promise.resolve().then((()=>C.A.check_scan_promise())).then((()=>1===this.is_step?A.A.validate_group_form():3===this.is_step?b.A.validate_user_form():void 0)).then((e=>{(0,d.A)().close_them_all(),200===e.status&&((0,g.A)().clear_errors(),this.check_errors_go_next(e))})).catch((e=>{console.log(e),(0,d.A)().close_them_all()})))},check_errors_go_next(e){if((0,P.A)().current_tab_is_last())!0===e.result.validform?((0,g.A)().clear_form(),(0,x.A)().reset_form_values(),(0,P.A)().reset_tab_keys(),(0,k.A)().change_step(this.is_step+1)):((0,g.A)().set_errors(e.result.form_validation_error_elements),(0,P.A)().open_first_tab_with_error(e.result.form_validation_error_tab_elements),f.A.adjust_view(!0));else{let t=e.result.form_validation_error_tab_elements?.[(0,P.A)().get_current_tab()];void 0===t?((0,P.A)().increase_tab(),f.A.this_tab_is_empty()&&this.check_errors_go_next(e),f.A.adjust_view()):((0,g.A)().set_errors(t),f.A.adjust_view(!0))}}},computed:{show_back(){return(3===this.is_step||!(0,P.A)().current_tab_is_first())&&this.agent_clearance_ok},classic_np_nav(){return!(0,k.A)().is_zeteo_skin()},requested_direction(){return(0,P.A)().get_requested_direction()}},watch:{requested_direction(){null!==this.requested_direction&&("backward"===this.requested_direction?((0,P.A)().reset_requested_direction(),this.prev_button()):"forward"===this.requested_direction&&((0,P.A)().reset_requested_direction(),this.next_button()))}}};const q=(0,p.A)(j,[["render",o]]);var E=q}}]);