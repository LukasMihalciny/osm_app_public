"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[427],{9427:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var o=r(641),a=r(33);const n=["innerHTML"],l={key:0},s=(0,o.Lk)("br",null,null,-1),i=(0,o.Lk)("br",null,null,-1),c=(0,o.Lk)("br",null,null,-1),d=["href"],p=(0,o.Lk)("br",null,null,-1),u={key:0};function _(e,t,r,_,m,k){const v=(0,o.g2)("Modal_body");return(0,o.uX)(),(0,o.Wv)(v,{close:!1,title:k.error_text?.title,class:"modal-error"},{default:(0,o.k6)((()=>[(0,o.Lk)("p",{innerHTML:k.error_text?.paragraph},null,8,n),k.errors?((0,o.uX)(),(0,o.CE)("p",l,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(k.errors,((e,t)=>((0,o.uX)(),(0,o.CE)("span",null,[(0,o.eW)((0,a.v_)(t)+" : "+(0,a.v_)(e)+" ",1),s])))),256))])):(0,o.Q3)("",!0),(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>k.go_back&&k.go_back(...e)),class:"btn btn-primary btn-left mt-2 mb-4 w-100 text-center"}," Vrátiť sa na predchádzajúci krok "),(0,o.Lk)("p",null,[(0,o.eW)(" token: "+(0,a.v_)(k.token)+" ",1),i,(0,o.eW)(" time: "+(0,a.v_)(k.time),1)]),(0,o.Lk)("p",null,[(0,o.eW)(" Pre bližšie info o ďalšom postupe nás prosím kontaktuje: "),c,(0,o.Lk)("a",{href:"mailto:"+k.mail},(0,a.v_)(k.mail),9,d),p,k.phone?((0,o.uX)(),(0,o.CE)("span",u,(0,a.v_)(k.phone),1)):(0,o.Q3)("",!0)])])),_:1},8,["title"])}var m=r(8384),k=r(2873),v=r(8700),h=r(9819),b=(r(3177),{props:{},components:{Modal_body:m.A},emits:[],data(){return{}},created(){},methods:{go_back(){(0,v.A)().change_step(this.error_text?.redirect_step||1)}},computed:{error_text(){let e={calculate_step4_webservice_didnt_accept_form:{title:"Nebolo možné vypočítať poistné",paragraph:"Na strane poisťovne prišlo k neočakávanej chybe:",redirect_step:1},calculate_step4_validate_form_didnt_pass:{title:"Chyba pri výpočte",paragraph:"Kontrolou zadaných údajov sme zistili, že nasledovná hodnota nie je validná:",redirect_step:1},calculate_step4_unexpected_response_code:{title:"Zlyhal výpočet poistného",paragraph:"Niečo sa nepodarilo. <br> Vyskúšajte stránku otvoriť znovu.",redirect_step:3},confirm_step4_didnt_succeed:{title:"Chyba pri potvrdení",paragraph:"Nebolo možné vygenerovať návrh zmluvy z nasledovného dôvodu:",redirect_step:3},session_documents_webservice_doc_error:{title:"Webservice dokument error",paragraph:this.errors?"":"Načítanie dokumentov zlyhalo na strane poskytovateľa produktu.",redirect_step:3},calculate_step2_form_isnt_valid:{title:"Chyba pri výpočte",paragraph:"Kontrolou zadaných údajov sme zistili, že nasledovná hodnota nie je validná:",redirect_step:1}};return e[this.error_type]},error_type(){return(0,k.A)().retrieve_modal_data().type},errors(){return(0,k.A)().retrieve_modal_data().errors},token(){return(0,v.A)().get_session_token()},time(){return(new Date).toLocaleString()},mail(){return h.A.email_address()},phone(){return h.A.phone_number()}},watch:{}}),y=r(6262);const f=(0,y.A)(b,[["render",_]]);var g=f},8384:function(e,t,r){r.d(t,{A:function(){return _}});var o=r(641),a=r(33);const n={class:"modal-content"},l={class:"modal-header"},s={class:"modal-body"};function i(e,t,r,i,c,d){return(0,o.uX)(),(0,o.CE)("div",{onClick:t[1]||(t[1]=(...e)=>d.did_click_outside&&d.did_click_outside(...e)),class:(0,a.C4)(["vue_modal",r.huge?"huge":""]),"data-cy":"modal"},[(0,o.Lk)("div",n,[(0,o.Lk)("div",l,[(0,o.Lk)("h4",null,(0,a.v_)(r.title),1),r.close?((0,o.uX)(),(0,o.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>d.close_me&&d.close_me(...e)),class:"i_close"})):(0,o.Q3)("",!0)]),(0,o.Lk)("div",s,[(0,o.RG)(e.$slots,"default")])])],2)}var c=r(2873),d={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,c.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},p=r(6262);const u=(0,p.A)(d,[["render",i]]);var _=u}}]);