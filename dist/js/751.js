"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[751],{132:function(e,t,o){o.r(t),o.d(t,{default:function(){return _}});var l=o(641),s=o(33);const a={class:"text-center"},n=(0,l.Lk)("p",null," Pre prácu s týmto produktom nemáte požadovanú licenciu. ",-1),c=(0,l.Lk)("br",null,null,-1),d=["href"];function i(e,t,o,i,r,u){const m=(0,l.g2)("Modal_body");return(0,l.uX)(),(0,l.Wv)(m,{close:!0,title:"Chýbajúca licencia",class:"modal-error"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",a,[n,(0,l.Lk)("p",null,[(0,l.eW)(" Ak došlo k nedorozumeniu, prosím kontaktuje nás "),c,(0,l.eW)("na e-mailovej adrese: "),(0,l.Lk)("a",{href:u.mailto},(0,s.v_)(u.email),9,d)])])])),_:1})}var r=o(9819),u=o(8384),m={props:{},components:{Modal_body:u.A},emits:[],data(){return{}},created(){},mounted(){},methods:{},computed:{email(){return r.A.email_address()},mailto(){return"mailto:"+this.email}},watch:{}},k=o(6262);const p=(0,k.A)(m,[["render",i]]);var _=p},8384:function(e,t,o){o.d(t,{A:function(){return k}});var l=o(641),s=o(33);const a={class:"modal-content"},n={class:"modal-header"},c={class:"modal-body"};function d(e,t,o,d,i,r){return(0,l.uX)(),(0,l.CE)("div",{onClick:t[1]||(t[1]=(...e)=>r.did_click_outside&&r.did_click_outside(...e)),class:(0,s.C4)(["vue_modal",o.huge?"huge":""]),"data-cy":"modal"},[(0,l.Lk)("div",a,[(0,l.Lk)("div",n,[(0,l.Lk)("h4",null,(0,s.v_)(o.title),1),o.close?((0,l.uX)(),(0,l.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>r.close_me&&r.close_me(...e)),class:"i_close"})):(0,l.Q3)("",!0)]),(0,l.Lk)("div",c,[(0,l.RG)(e.$slots,"default")])])],2)}var i=o(2873),r={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,i.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},u=o(6262);const m=(0,u.A)(r,[["render",d]]);var k=m}}]);