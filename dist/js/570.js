"use strict";(self["webpackChunkosmapp_webpack_2107x"]=self["webpackChunkosmapp_webpack_2107x"]||[]).push([[570],{55:function(e,t,o){o.d(t,{A:function(){return u}});var n=o(641),s=o(33);const i={class:"spinner"};function r(e,t,o,r,a,c){return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("div",{class:(0,s.C4)(["bounce1",o.size])},null,2),(0,n.Lk)("div",{class:(0,s.C4)(["bounce2",o.size])},null,2),(0,n.Lk)("div",{class:(0,s.C4)(["bounce3",o.size])},null,2)])}var a={props:{size:String},components:{},data(){return{}},created(){},methods:{},computed:{}},c=o(6262);const l=(0,c.A)(a,[["render",r]]);var u=l},7570:function(e,t,o){o.r(t),o.d(t,{default:function(){return _}});var n=o(641),s=o(33);const i={key:1};function r(e,t,o,r,a,c){const l=(0,n.g2)("Bouncer_loading"),u=(0,n.g2)("Modal_body");return(0,n.uX)(),(0,n.Wv)(u,{close:!0,title:c.text.title,class:"modal-cleaning_session text-center"},{default:(0,n.k6)((()=>[(0,n.Lk)("p",null,(0,s.v_)(c.text.subtitle),1),a.loading?((0,n.uX)(),(0,n.Wv)(l,{key:0})):((0,n.uX)(),(0,n.CE)("div",i,[null!==c.text.yes?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>c.clear&&c.clear(...e)),type:"button",class:"btn btn-primary btn-w80 me-2"},(0,s.v_)(c.text.yes),1)):(0,n.Q3)("",!0),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>c.cancel&&c.cancel(...e)),type:"button",class:"btn btn-secondary btn-w80 ms-2"},(0,s.v_)(c.text.no),1)]))])),_:1},8,["title"])}var a=o(8384),c=o(2873),l=o(6343),u=o(3177),d=o(8700),v=o(55),p={props:{},components:{Modal_body:a.A,Bouncer_loading:v.A},data(){return{loading:!1}},created(){document.addEventListener("keyup",this.clear),this.receiver=(0,u.A)().get_receiver(),this.step=(0,d.A)().current_step()},beforeUnmount(){document.removeEventListener("keyup",this.clear)},methods:{clear(e){if(void 0===e?.keyCode||13===e.keyCode){if(this.loading=!0,3===this.receiver){let e=(0,d.A)().is_prod_endpoint()?"https://webums.ums.sk/clone/":"https://test.ums.jdsoftware.sk/clone/";e+=(0,d.A)().get_session_token(),window.location.href=e}l.A.clear_session()}},cancel(){(0,c.A)().close_them_all()}},computed:{text(){let e={runner_14:{title:"Naozaj chcete vymazať údaje?",subtitle:"Stratíte všetky údaje, ktoré ste doteraz vyplnili.",yes:"Áno",no:"Nie"},runner_56:{title:"Vytvoriť nové porovnanie?",subtitle:"Zatvoríme rekapituláciu a otvoríme nové porovnanie.",yes:"Nové porovnanie",no:"Zrusiť"},ums_14:{title:"Naozaj chcete vymazať údaje?",subtitle:"Pre vytvorenie nového porovnania pokračujte voľbou Nové porovnanie.",yes:"Nové porovnanie",no:"Zrusiť"},ums_56:{title:"Vytvoriť nové porovnanie",subtitle:"Pre vytvorenie nového porovnania pokračujte voľbou Nové porovnanie.",yes:"Nové porovnanie",no:"Zrusiť"},other:{title:"Nie je možné zmazať údaje",subtitle:"Pre vytvorenie nového porovnania prosím kliknite na odkaz vo Vašej aplikácii.",yes:null,no:"Zrusiť"},empty:{title:"",subtitle:"",yes:"",no:""}};return-1===[1,2,3,4,5].indexOf(this.receiver)?e.other:3===this.receiver&&this.step<5?e.ums_14:3===this.receiver&&this.step>4?e.ums_56:this.step<5?e.runner_14:this.step>4?e.runner_56:e.empty}}},m=o(6262);const k=(0,m.A)(p,[["render",r]]);var _=k},8384:function(e,t,o){o.d(t,{A:function(){return p}});var n=o(641),s=o(33);const i={class:"modal-content"},r={class:"modal-header"},a={class:"modal-body"};function c(e,t,o,c,l,u){return(0,n.uX)(),(0,n.CE)("div",{onClick:t[1]||(t[1]=(...e)=>u.did_click_outside&&u.did_click_outside(...e)),class:(0,s.C4)(["vue_modal",o.huge?"huge":""]),"data-cy":"modal"},[(0,n.Lk)("div",i,[(0,n.Lk)("div",r,[(0,n.Lk)("h4",null,(0,s.v_)(o.title),1),o.close?((0,n.uX)(),(0,n.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>u.close_me&&u.close_me(...e)),class:"i_close"})):(0,n.Q3)("",!0)]),(0,n.Lk)("div",a,[(0,n.RG)(e.$slots,"default")])])],2)}var l=o(2873),u={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,l.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},d=o(6262);const v=(0,d.A)(u,[["render",c]]);var p=v}}]);