"use strict";(self["webpackChunkosmapp_webpack_2107x"]=self["webpackChunkosmapp_webpack_2107x"]||[]).push([[680],{8943:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var a=s(641);const o=["innerHTML"],l={class:"docs_download"};function c(e,t,s,c,d,n){const i=(0,a.g2)("Document_download"),r=(0,a.g2)("Modal_body");return(0,a.uX)(),(0,a.Wv)(r,{close:!0,title:d.title,huge:!0},{default:(0,a.k6)((()=>[(0,a.Lk)("div",{innerHTML:d.html,class:"product_detail_html"},null,8,o),(0,a.Lk)("div",l,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(d.static_docs,((e,t)=>((0,a.uX)(),(0,a.Wv)(i,{doc:e},null,8,["doc"])))),256))])])),_:1},8,["title"])}var d=s(8384),n=s(2873),i=s(8856),r=s(4162),u=s(3556),p={props:{},components:{Modal_body:d.A,Document_download:u.A},emits:[],data(){return{title:"",html:"",static_docs:{}}},created(){let e=(0,n.A)().retrieve_modal_data();this.title=e.product_name,i.A.get_it(e.detail_template).then((e=>{200===e.status&&(this.html=e.result.html,this.add_tab_listeners())})),r.A.static_documents().then((e=>{200===e.status&&(this.static_docs=e.result.documents)}))},methods:{add_tab_listeners(){setTimeout((()=>{let e=document.querySelectorAll("#osm_app .vue_modal .tab-pane");for(let a in e)e.hasOwnProperty(a)&&(e[a].classList.remove("fade","in"),e[a].parentNode.classList.contains("tab-pane")&&e[a].parentNode.parentNode.appendChild(e[a]));let t=document.querySelectorAll("#osm_app .vue_modal ul.nav-tabs a");for(let a in t)t.hasOwnProperty(a)&&t[a].addEventListener("click",(s=>{s.preventDefault();let a=s.target.hash.replace("#","");for(let o in e)e.hasOwnProperty(o)&&(e[o].classList.remove("active"),t[o].parentNode.classList.remove("active"),e[o].id===a&&(e[o].classList.add("active"),t[o].parentNode.classList.add("active")))}));let s=document.querySelectorAll("#osm_app .vue_modal .product_detail_tab_switcher");for(let a in s){if(!s.hasOwnProperty(a))continue;let o=s[a].dataset.show,l=s[a].dataset.scroll;s[a].addEventListener("click",(s=>{s.preventDefault();for(let l in e)e.hasOwnProperty(l)&&(e[l].classList.remove("active"),t[l].parentNode.classList.remove("active"),parseInt(l,10)===parseInt(o,10)-1&&(e[l].classList.add("active"),t[l].parentNode.classList.add("active")));let a=document.querySelector("#osm_app .vue_modal ."+l);null!==a&&a.scrollIntoView()}))}}),100)}},computed:{},watch:{}},m=s(6262);const _=(0,m.A)(p,[["render",c],["__scopeId","data-v-fbb973fc"]]);var v=_},8384:function(e,t,s){s.d(t,{A:function(){return m}});var a=s(641),o=s(33);const l={class:"modal-content"},c={class:"modal-header"},d={class:"modal-body"};function n(e,t,s,n,i,r){return(0,a.uX)(),(0,a.CE)("div",{onClick:t[1]||(t[1]=(...e)=>r.did_click_outside&&r.did_click_outside(...e)),class:(0,o.C4)(["vue_modal",s.huge?"huge":""]),"data-cy":"modal"},[(0,a.Lk)("div",l,[(0,a.Lk)("div",c,[(0,a.Lk)("h4",null,(0,o.v_)(s.title),1),s.close?((0,a.uX)(),(0,a.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>r.close_me&&r.close_me(...e)),class:"i_close"})):(0,a.Q3)("",!0)]),(0,a.Lk)("div",d,[(0,a.RG)(e.$slots,"default")])])],2)}var i=s(2873),r={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,i.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},u=s(6262);const p=(0,u.A)(r,[["render",n]]);var m=p}}]);