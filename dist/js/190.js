"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[190],{3790:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var s=r(641),a=r(33);const o={class:"row pb-3 advanced_settings_nav"},n={class:"col-6"},_=["onClick"],d={class:"col-3 text-end"},i={class:"col-3 text-end"},l={class:"row mt-4"},c={class:"col-9 text-end"},u={class:"col-3 text-end"};function p(e,t,r,p,m,v){const b=(0,s.g2)("Bouncer_loading"),h=(0,s.g2)("Tabs"),k=(0,s.g2)("Modal_body");return(0,s.uX)(),(0,s.Wv)(k,{close:!1,title:m.product_name,class:"",huge:!0},{default:(0,s.k6)((()=>[(0,s.Lk)("div",o,[(0,s.Lk)("div",n,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(v.tab_count,((e,t)=>((0,s.uX)(),(0,s.CE)("button",{onClick:t=>v.switch_the_tab(e),class:(0,a.C4)(["btn btn-sm btn-secondary me-5",v.current_person===e?"active":"faded"])},(0,a.v_)(t+1)+". poistený ",11,_)))),256))]),(0,s.Lk)("div",d,[(0,s.Lk)("button",{class:"btn btn-sm btn-secondary btn-left",onClick:t[0]||(t[0]=(...e)=>v.return_to_step1&&v.return_to_step1(...e))},(0,a.v_)(v.first_person?"Návrat na vstup":"Naspäť"),1)]),(0,s.Lk)("div",i,[m.loading?((0,s.uX)(),(0,s.Wv)(b,{key:0,style:{"margin-top":"10px"}})):((0,s.uX)(),(0,s.CE)("button",{key:1,class:"btn btn-sm btn-primary btn-right",onClick:t[1]||(t[1]=(...e)=>v.validate_extended&&v.validate_extended(...e))},(0,a.v_)(v.last_person?"Prepočítať produkt":"Pokračovať"),1))])]),(0,s.bF)(h),(0,s.Lk)("div",l,[(0,s.Lk)("div",c,[(0,s.Lk)("button",{class:"btn btn-sm btn-secondary btn-left",onClick:t[2]||(t[2]=(...e)=>v.return_to_step1&&v.return_to_step1(...e))},(0,a.v_)(v.first_person?"Návrat na vstup":"Naspäť"),1)]),(0,s.Lk)("div",u,[m.loading?((0,s.uX)(),(0,s.Wv)(b,{key:0,style:{"margin-top":"10px"}})):((0,s.uX)(),(0,s.CE)("button",{key:1,class:"btn btn-sm btn-primary btn-right",onClick:t[3]||(t[3]=(...e)=>v.validate_extended&&v.validate_extended(...e))},(0,a.v_)(v.last_person?"Prepočítať produkt":"Pokračovať"),1))])])])),_:1},8,["title"])}r(4979),r(1678);var m=r(8384),v=r(2873),b=r(3177),h=r(6460),k=r(8700),A=r(6343),f=r(3175);class g{validate_extended_form(){let e={action_name:"validategroupform",method:"POST",body:A.A.serialize_user_input(),url:(0,k.A)().endpoint_url()+"online/validategroupform/"+(0,k.A)().product_group_id()+"/?global=0&without_form=1"};e.url+=A.A.add_token_as_parameter();let t=new f.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}}var y=new g,x=r(55),C=r(803),w=r(9614),L={props:{},components:{Bouncer_loading:x.A,Modal_body:m.A,Tabs:C.A},data(){return{extended_inputs:{},extended_errors:null,product_name:"",product_id:0,period:0,loading:!1}},created(){this.extended_inputs=(0,v.A)().retrieve_modal_data().extended_inputs,this.extended_errors=(0,v.A)().retrieve_modal_data().extended_errors,this.product_name=(0,v.A)().retrieve_modal_data().product_name,this.product_id=(0,v.A)().retrieve_modal_data().product_id,this.period=(0,v.A)().retrieve_modal_data().period,(0,b.A)().insert_product_values(this.extended_inputs),(0,h.A)().set_form(this.extended_inputs),null!==this.extended_errors&&(0,h.A)().set_errors(structuredClone(this.extended_errors)),(0,w.A)().set_tab_keys(this.extended_inputs)},methods:{return_to_step1(){this.first_person?((0,h.A)().clear_form(),(0,b.A)().reset_form_values(),(0,h.A)().clear_errors(),(0,w.A)().reset_tab_keys(),(0,k.A)().change_step(1)):((0,w.A)().decrease_tab(),A.A.this_tab_is_empty()&&this.return_to_step1())},validate_extended(){this.loading=!0,y.validate_extended_form().then((e=>{this.loading=!1,200===e.status&&((0,h.A)().clear_errors(),this.process_errors_and_go_further(e))}))},process_errors_and_go_further(e){if((0,w.A)().current_tab_is_last())!0===e.result.validform?((0,h.A)().clear_form(),(0,b.A)().reset_form_values(),(0,w.A)().reset_tab_keys(),(0,v.A)().set_modal_event_data(this.product_id),(0,v.A)().close_them_all()):((0,h.A)().set_errors(e.result.form_validation_error_elements),(0,w.A)().open_first_tab_with_error(e.result.form_validation_error_tab_elements),A.A.adjust_view(!0));else{let t=e.result.form_validation_error_tab_elements?.[(0,w.A)().get_current_tab()];void 0===t?((0,w.A)().increase_tab(),A.A.this_tab_is_empty()&&this.process_errors_and_go_further(e),A.A.adjust_view()):((0,h.A)().set_errors(t),A.A.adjust_view(!0))}},switch_the_tab(e){(0,w.A)().set_current_tab(e)}},computed:{tab_count(){return(0,w.A)().get_tab_keys()},first_person(){return(0,w.A)().current_tab_is_first()},last_person(){return(0,w.A)().current_tab_is_last()},current_person(){return(0,w.A)().get_current_tab()}}},X=r(6262);const E=(0,X.A)(L,[["render",p]]);var P=E},8384:function(e,t,r){r.d(t,{A:function(){return p}});var s=r(641),a=r(33);const o={class:"modal-content"},n={class:"modal-header"},_={class:"modal-body"};function d(e,t,r,d,i,l){return(0,s.uX)(),(0,s.CE)("div",{onClick:t[1]||(t[1]=(...e)=>l.did_click_outside&&l.did_click_outside(...e)),class:(0,a.C4)(["vue_modal",r.huge?"huge":""]),"data-cy":"modal"},[(0,s.Lk)("div",o,[(0,s.Lk)("div",n,[(0,s.Lk)("h4",null,(0,a.v_)(r.title),1),r.close?((0,s.uX)(),(0,s.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>l.close_me&&l.close_me(...e)),class:"i_close"})):(0,s.Q3)("",!0)]),(0,s.Lk)("div",_,[(0,s.RG)(e.$slots,"default")])])],2)}var i=r(2873),l={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,i.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},c=r(6262);const u=(0,c.A)(l,[["render",d]]);var p=u}}]);