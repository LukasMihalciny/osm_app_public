"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[426],{426:function(e,t,l){l.r(t),l.d(t,{default:function(){return b}});var s=l(641),o=l(33);const a={class:"session_cookie_manager"},n={class:"table keep_table_styles table-striped table-light table-hover table-borderless align-middle table-sm"},c={scope:"row"},p=["onClick"],r=["onClick"];function i(e,t,l,i,_,k){return(0,s.uX)(),(0,s.CE)("section",a,[(0,s.Lk)("table",n,[t[0]||(t[0]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",{scope:"col"},"ID"),(0,s.Lk)("th",{scope:"col"},"name"),(0,s.Lk)("th",{scope:"col"},"step"),(0,s.Lk)("th",{scope:"col"},"session"),(0,s.Lk)("th",{scope:"col"},"expire"),(0,s.Lk)("th",{scope:"col"},"endpoint"),(0,s.Lk)("th",{scope:"col"},"receiver"),(0,s.Lk)("th",{scope:"col"},"open"),(0,s.Lk)("th",{scope:"col"},"delete")])],-1)),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(_.all_data,((e,t)=>((0,s.uX)(),(0,s.CE)("tr",null,[(0,s.Lk)("th",c,(0,o.v_)(t),1),(0,s.Lk)("td",null,(0,o.v_)(e.name),1),(0,s.Lk)("td",null,(0,o.v_)(e.step),1),(0,s.Lk)("td",null,(0,o.v_)(e.session),1),(0,s.Lk)("td",null,(0,o.v_)(e.expire),1),(0,s.Lk)("td",null,(0,o.v_)(e.endpoint),1),(0,s.Lk)("td",null,(0,o.v_)(e.receiver),1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{onClick:e=>k.open_this_group(t),class:"btn btn-sm btn-primary"}," open ",8,p)]),(0,s.Lk)("td",null,[(0,s.Lk)("button",{onClick:e=>k.clear_this_group(t),class:"btn btn-sm btn-secondary"}," clear ",8,r)])])))),256))])])])}var _=l(9819),k=(l(6645),l(8700)),d=l(414),u={props:{},components:{},emits:[],data(){return{all_data:{}}},created(){let e=_.A.group_names();for(let t in e)this.all_data[t]=d.A.retrieve_cookies(t,e[t])},methods:{open_this_group(e){(0,k.A)().set_session_token(this.all_data[e].session),(0,k.A)().change_product_group_id(e),(0,k.A)().change_step(this.all_data[e].step)},clear_this_group(e){d.A.purge_cookies(e),this.all_data[e].step=1,this.all_data[e].session="",this.all_data[e].receiver="",this.all_data[e].endpoint="",this.all_data[e].expire=""}},computed:{},watch:{}},h=l(6262);const L=(0,h.A)(u,[["render",i]]);var b=L}}]);