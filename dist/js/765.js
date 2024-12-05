"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[765],{7765:function(e,t,i){i.r(t),i.d(t,{default:function(){return W}});var o=i(641),l=i(3751),n=i(33);const s=(0,o.Lk)("p",{class:"mb-3"},[(0,o.eW)(" Cena je predbežne orientačná. "),(0,o.Lk)("br"),(0,o.eW)(" Aby sme Vám vedeli zobraziť presnú cenu, potrebujeme od Vás dodatočné údaje. ")],-1),r=(0,o.Lk)("p",null,[(0,o.eW)(" Ak Vám postačuje orientačná cena, možte pokračovať bez doplnenia údajov. "),(0,o.Lk)("br"),(0,o.eW)(" Presná cena Vám bude dopočítaná pred uzatvorením zmluvy. ")],-1),a=(0,o.Lk)("p",null," Poskytovateľ produktu potrebuje na upresnenie ceny nasledovné údaje: ",-1),c={class:"text-center text-warning fw-bold"},d={class:"col-sm-12 mb-3"},u=["for"],p={key:1},_=(0,o.Lk)("br",null,null,-1),m={class:"validation-placeholder validation-message"},k=(0,o.Lk)("span",{class:"mark-circle mark-orange"},"!",-1),v={class:"text-center"},f=["disabled"],h=["disabled"];function b(e,t,i,b,y,g){const A=(0,o.g2)("Text"),L=(0,o.g2)("Bouncer_loading"),C=(0,o.g2)("Modal_body");return(0,o.uX)(),(0,o.Wv)(C,{close:!0,title:"Upresniť cenu",class:"modal-signature"},{default:(0,o.k6)((()=>[s,r,a,(0,o.bo)((0,o.Lk)("p",c," Všetky údaje sú potrebné pre upresnenie ceny. ",512),[[l.aG,y.invalid]]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(y.price_inputs,((e,t)=>((0,o.uX)(),(0,o.CE)("div",d,[(0,o.Lk)("label",{for:t,class:"input-label"},(0,n.v_)(e?.label),9,u),"text"===e?.type?((0,o.uX)(),(0,o.Wv)(A,{key:0,onKeyup:(0,l.jR)(g.specify_submit,["enter"]),emit_name:"fake_emit",field_id:t,field_data:e},null,8,["onKeyup","field_id","field_data"])):((0,o.uX)(),(0,o.CE)("p",p,[(0,o.Lk)("strong",null,(0,n.v_)(t),1),_,(0,o.eW)(" Specify_product_price modal currently supports 'text' input type only. ")])),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(y.price_errors[t],((e,t)=>((0,o.uX)(),(0,o.CE)("div",m,[k,(0,o.eW)(" "+(0,n.v_)(e),1)])))),256))])))),256)),(0,o.Lk)("div",v,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>g.specify_submit&&g.specify_submit(...e)),disabled:y.loading,class:"btn btn-primary w-100 mt-3 mb-2",title:"Na základe Vami doplnených údajov vieme zistiť finálnu presnú cenu."}," Upresniť cenu ",8,f),g.allow_skip?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:t[1]||(t[1]=(...e)=>g.skip_specify&&g.skip_specify(...e)),disabled:y.loading,class:"btn btn-secondary w-100",title:"Možte pokračovať s orientačnou cenou. Finálnu cenu prepočítame tesne pred uzatvorením zmluvy."}," Pokračovať s orientačnou ",8,h)):(0,o.Q3)("",!0),(0,o.bo)((0,o.bF)(L,{size:"large"},null,512),[[l.aG,y.loading]])])])),_:1})}var y=i(8384),g=i(55),A=i(2873),L=i(3177),C=i(6343),j=i(9126),w=i(5162),x=i(4201),z={props:{},components:{Modal_body:y.A,Bouncer_loading:g.A,Text:x.A},emits:[],data(){return{launched_from:null,product_id:null,price_inputs:{},price_errors:{},loading:!1,invalid:!1}},created(){this.launched_from=(0,A.A)().retrieve_modal_data().launched_from,"from_global"===this.launched_from?(this.price_inputs=(0,A.A)().retrieve_modal_data().price_inputs,this.price_errors=(0,A.A)().retrieve_modal_data().price_errors):"from_product"===this.launched_from?(this.product_id=(0,A.A)().retrieve_modal_data().product_id,this.loading=!0,j.A.get_global_form().then((e=>{this.loading=!1;let t=w.A.product_form_formatter(e.result.form,"price"),i=(0,A.A)().retrieve_modal_data().filter_price_inputs;if(null!==i){i=i.split(",");for(let e=0;e<i.length;e++)void 0!==t?.[i[e]]&&(this.price_inputs[i[e]]=t[i[e]])}else this.price_inputs=t}))):console.log("unexpected launched_from",this.launched_from)},methods:{skip_specify(){Object.keys(this.price_inputs);(0,L.A)().reset_form_values(),(0,A.A)().set_modal_event_data("indicative_price_"+this.product_id),(0,A.A)().close_them_all()},specify_submit(){if(this.empty_inputs)return void(this.invalid=!0);this.loading=!0;let e=C.A.serialize_specific_inputs(Object.keys(this.price_inputs));j.A.validate_global_form(e).then((e=>{this.loading=!1,!0===e.result.validform?((0,A.A)().set_modal_event_data("specify_recalculate"),(0,A.A)().close_them_all()):(console.log(e.result?.form_validation_error_elements),this.price_errors=e.result.form_validation_error_elements)}))}},computed:{allow_skip(){return"from_product"===this.launched_from&&0===Object.keys(this.price_errors).length},empty_inputs(){for(let e in this.price_inputs){let t=(0,L.A)().get_user_input(e);if(""===t)return!0}return this.invalid=!1,!1}},watch:{}},E=i(6262);const X=(0,E.A)(z,[["render",b]]);var W=X},8384:function(e,t,i){i.d(t,{A:function(){return _}});var o=i(641),l=i(33);const n={class:"modal-content"},s={class:"modal-header"},r={class:"modal-body"};function a(e,t,i,a,c,d){return(0,o.uX)(),(0,o.CE)("div",{onClick:t[1]||(t[1]=(...e)=>d.did_click_outside&&d.did_click_outside(...e)),class:(0,l.C4)(["vue_modal",i.huge?"huge":""]),"data-cy":"modal"},[(0,o.Lk)("div",n,[(0,o.Lk)("div",s,[(0,o.Lk)("h4",null,(0,l.v_)(i.title),1),i.close?((0,o.uX)(),(0,o.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>d.close_me&&d.close_me(...e)),class:"i_close"})):(0,o.Q3)("",!0)]),(0,o.Lk)("div",r,[(0,o.RG)(e.$slots,"default")])])],2)}var c=i(2873),d={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,c.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},u=i(6262);const p=(0,u.A)(d,[["render",a]]);var _=p}}]);