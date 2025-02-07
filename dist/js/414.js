"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[414],{7618:function(e,t,r){var s=r(1114),n=r(6343),o=r(9452),_=r(6460);class a{constructor(){(0,s.A)(this,"field_id","")}check_scan_promise(){return new Promise(((e,t)=>{this.scan_input_in_current_tab()?o.A.session_info().then((r=>{if(200!==r.status)return void t("sessioninfo failed");let s=r.result.scan_id_required,o=r.result.scan_id_succeeded;1===s&&0===o?((0,_.A)().set_one_error(this.field_id,"Občianský preukaz je povinný."),n.A.adjust_view(!0),t("scan required, reject validate")):((0,_.A)().clear_one_error(this.field_id),e())})):e()}))}scan_input_in_current_tab(){let e=n.A.active_tab();for(let t in e){let r=n.A.first_value(e[t]),s=n.A.first_key(e[t]);if("scan_modal"===r.type_settings?.upload)return this.field_id=s,!0}return!1}}t.A=new a},2878:function(e,t,r){var s=r(8700),n=r(6343),o=r(3175),_=r(3177);class a{get_group_form(){let e={action_name:"getgroupform",method:"GET",url:(0,s.A)().endpoint_url()+"online/getgroupform/"+(0,s.A)().product_group_id()+"/?global=2&json=1"};e.url+=n.A.add_token_as_parameter(),e.url+=(0,_.A)().agent_code_param();let t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}validate_group_form(){let e={action_name:"validategroupform",method:"POST",body:n.A.serialize_user_input(),url:(0,s.A)().endpoint_url()+"online/validategroupform/"+(0,s.A)().product_group_id()+"/?global=2&without_form=1"};e.url+=n.A.add_token_as_parameter(),e.url+=(0,_.A)().add_filtered_param();let t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}}t.A=new a},8222:function(e,t,r){var s=r(8700),n=r(6343),o=r(3175),_=r(3177);class a{get_user_form(){let e={action_name:"getform",method:"POST",body:null,url:(0,s.A)().endpoint_url()+"online/getform/"+(0,_.A)().get_selected_product().form_id+"/?json=1"};e.url+=n.A.add_token_as_parameter();let t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}validate_user_form(){let e={action_name:"validateform",method:"POST",body:n.A.serialize_user_input(),url:(0,s.A)().endpoint_url()+"online/validateform/"+(0,_.A)().get_selected_product().form_id+"/?without_form=1"};e.url+=n.A.add_token_as_parameter();let t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}}t.A=new a},9452:function(e,t,r){var s=r(8700),n=r(6343),o=r(3175);class _{session_info(){let e={action_name:"getsessioninfo",method:"GET",url:(0,s.A)().endpoint_url()+"online/getsessioninfo/?"+n.A.add_token_as_parameter()},t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}get_data(){let e={action_name:"getdata",method:"GET",url:(0,s.A)().endpoint_url()+"online/getdata/?"+n.A.add_token_as_parameter()},t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}set_data(e){let t={action_name:"setdata",method:"POST",url:(0,s.A)().endpoint_url()+"online/setdata/?"+n.A.serialize_object(e)+n.A.add_token_as_parameter()},r=new o.A;return r.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new _},9138:function(e,t,r){function s(e,t,r,s,n,o){return null}r.d(t,{A:function(){return l}});var n=r(55),o=r(2873),_={props:{show_back:Boolean,show_next:Boolean,disable_next:Boolean},components:{Bouncer_loading:n.A},emits:["next","prev"],data(){return{}},created(){},methods:{next(){this.$emit("next")},prev(){this.$emit("prev")},clear(){(0,o.A)().open_it("Cleaning_session")}},computed:{loading(){return(0,o.A)().is_loading()}}},a=r(6262);const i=(0,a.A)(_,[["render",s]]);var l=i},5412:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var s=r(641);const n={"data-cy":"calc_forms"};function o(e,t,r,o,_,a){const i=(0,s.g2)("Zeteo_nav"),l=(0,s.g2)("Tabs"),c=(0,s.g2)("Navigation");return(0,s.uX)(),(0,s.CE)("section",n,[a.classic_np_nav?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(i,{key:0,onPrev:a.prev_button,onNext:a.next_button,show_back:a.show_back},null,8,["onPrev","onNext","show_back"])),(0,s.bF)(l),a.classic_np_nav?((0,s.uX)(),(0,s.Wv)(c,{key:1,onPrev:a.prev_button,onNext:a.next_button,show_back:a.show_back,show_next:_.agent_clearance_ok,disable_next:!1},null,8,["onPrev","onNext","show_back","show_next"])):(0,s.Q3)("",!0)])}var _=r(9138),a=r(3751);const i={class:"step_progress_alt_pagination text-end","data-cy":"navigation"};function l(e,t,r,n,o,_){const l=(0,s.g2)("Bouncer_loading");return(0,s.uX)(),(0,s.CE)("div",i,[r.show_back?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>_.prev&&_.prev(...e)),class:"btn btn-outline-primary btn-left btn-m me-1"}," Späť ")):(0,s.Q3)("",!0),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>_.clear&&_.clear(...e)),class:"btn btn-outline-primary btn-m me-1"}," Zmazať údaje "),(0,s.bo)((0,s.bF)(l,{style:{"margin-right":"19px","margin-left":"20px","padding-top":"5px"}},null,512),[[a.aG,_.loading]]),(0,s.bo)((0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>_.next&&_.next(...e)),class:"btn btn-primary btn-right btn-m"}," Ďalej ",512),[[a.aG,!_.loading]])])}var c=r(55),u=r(2873),d={props:{show_back:Boolean},components:{Bouncer_loading:c.A},emits:["next","prev"],data(){return{}},created(){},methods:{next(){this.$emit("next")},prev(){this.$emit("prev")},clear(){(0,u.A)().open_it("Cleaning_session")}},computed:{loading(){return(0,u.A)().is_loading()}},watch:{}},p=r(6262);const h=(0,p.A)(d,[["render",l]]);var m=h,A=r(2878),f=r(8222),v=r(6343),g=r(8629),b=r(6460),k=r(8700),w=r(9452),x=r(3177),y=r(8439),P=r(9614),j=r(7618),q={props:{},components:{Navigation:_.A,Tabs:g.A,Zeteo_nav:m},data(){return{is_step:1,is_fresh_session:!1,agent_clearance_ok:!0}},created(){(0,u.A)().open_it("Loading"),this.is_step=(0,k.A)().current_step(),(0,k.A)().is_fresh_session()&&(this.is_fresh_session=!0);var e=(0,k.A)().myport_session_token_promise();Promise.resolve().then((()=>this.is_fresh_session&&null===e?Promise.resolve():this.is_fresh_session&&null!==e?e().then((e=>{console.log("using session from myport: "+typeof e,e),(0,k.A)().set_session_token(e)})):((0,P.A)().set_upper_section(),w.A.session_info()))).then((e=>!this.is_fresh_session&&e?.result?.state>=100?((0,u.A)().close_them_all(),(0,k.A)().change_step(5),Promise.reject("session already confirmed")):(this.is_fresh_session||1!==e.result.read_only||(0,k.A)().set_read_only(),Promise.resolve()))).then((()=>3===this.is_step&&void 0===(0,x.A)().get_selected_product().form_id?w.A.get_data():Promise.resolve())).then((e=>{void 0!==e&&(0,x.A)().extract_selected_product(e)})).then((()=>1===this.is_step?A.A.get_group_form():3===this.is_step?f.A.get_user_form():void 0)).then((t=>{if(423===t.status&&(this.agent_clearance_ok=!1),200!==t.status)return;(0,u.A)().close_them_all(),this.is_fresh_session&&null===e&&(0,k.A)().set_session_token(t.result.token),(0,x.A)().store_call_params(t.result.call_params);let r=t.result.form;(0,b.A)().set_form(r),(0,x.A)().insert_form_values(r),(0,P.A)().set_tab_keys(r),y.A.store_form_cache(this.is_fresh_session),this.is_fresh_session&&w.A.set_data({osm_author_spa:1})})).catch((e=>{console.log(e)}))},methods:{prev_button(){(0,P.A)().current_tab_is_first()?((0,b.A)().clear_form(),(0,x.A)().reset_form_values(),(0,P.A)().reset_tab_keys(),(0,k.A)().change_step(2)):((0,P.A)().decrease_tab(),v.A.this_tab_is_empty()&&this.prev_button(),v.A.adjust_view())},next_button(){(0,P.A)().set_upper_section(),(0,k.A)().is_read_only()?this.check_errors_go_next({result:{validform:!0}}):((0,u.A)().open_it("Loading"),Promise.resolve().then((()=>j.A.check_scan_promise())).then((()=>1===this.is_step?A.A.validate_group_form():3===this.is_step?f.A.validate_user_form():void 0)).then((e=>{(0,u.A)().close_them_all(),200===e.status&&((0,b.A)().clear_errors(),this.check_errors_go_next(e))})).catch((e=>{console.log(e),(0,u.A)().close_them_all()})))},check_errors_go_next(e){if((0,P.A)().current_tab_is_last())!0===e.result.validform?((0,b.A)().clear_form(),(0,x.A)().reset_form_values(),(0,P.A)().reset_tab_keys(),(0,k.A)().change_step(this.is_step+1)):((0,b.A)().set_errors(e.result.form_validation_error_elements),(0,P.A)().open_first_tab_with_error(e.result.form_validation_error_tab_elements),v.A.adjust_view(!0));else{let t=e.result.form_validation_error_tab_elements?.[(0,P.A)().get_current_tab()];void 0===t?((0,P.A)().increase_tab(),v.A.this_tab_is_empty()&&this.check_errors_go_next(e),v.A.adjust_view()):((0,b.A)().set_errors(t),v.A.adjust_view(!0))}}},computed:{show_back(){return(3===this.is_step||!(0,P.A)().current_tab_is_first())&&this.agent_clearance_ok},classic_np_nav(){return!(0,k.A)().is_zeteo_skin()},requested_direction(){return(0,P.A)().get_requested_direction()}},watch:{requested_direction(){null!==this.requested_direction&&("backward"===this.requested_direction?((0,P.A)().reset_requested_direction(),this.prev_button()):"forward"===this.requested_direction&&((0,P.A)().reset_requested_direction(),this.next_button()))}}};const C=(0,p.A)(q,[["render",o]]);var T=C}}]);