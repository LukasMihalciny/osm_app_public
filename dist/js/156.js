"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[156],{7654:function(e,t,n){var s=n(8700),o=n(6343),a=n(3175),r=n(5833),i=n(6460);class l{confirm_session(e){let t="";e&&(t=(0,i.A)().get_confirm_chbs(),t=o.A.serialize_object(t));let n={action_name:"confirm",method:"GET",url:(0,s.A)().endpoint_url()+"online/confirm/?"+t+o.A.add_token_as_parameter()},r=new a.A;return r.prepare_params(n).handle_response().then((e=>408===e.status||412===e.status?this.repeat_getsessioninfo(0):e)).catch((e=>{throw e}))}repeat_confirm(){let e={action_name:"confirm",method:"GET",url:(0,s.A)().endpoint_url()+"online/confirm/?"+o.A.add_token_as_parameter()},t=new a.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}async repeat_getsessioninfo(e){e++;let t=10,n=10;console.log("wait "+n+" seconds then try getsessioninfo, iteration: "+e+" (max "+t+")"),await o.A.sleep(n);let i={action_name:"getsessioninfo",method:"GET",url:(0,s.A)().endpoint_url()+"online/getsessioninfo/?"+o.A.add_token_as_parameter()},l=new a.A;return l.prepare_params(i).handle_response().then((n=>{if(100===n.result?.state)return n;if(e>=t){let e=(new Date).toLocaleString(),t=(0,s.A)().get_session_token(),o=(0,s.A)().current_step();return(0,r.A)().set_last_request({},i,e,t,o,n),(0,s.A)().change_step(404),{status:408,action_name:"getsessioninfo"}}return this.repeat_getsessioninfo(e)})).catch((e=>{throw e}))}}t.A=new l},9452:function(e,t,n){var s=n(8700),o=n(6343),a=n(3175);class r{session_info(){let e={action_name:"getsessioninfo",method:"GET",url:(0,s.A)().endpoint_url()+"online/getsessioninfo/?"+o.A.add_token_as_parameter()},t=new a.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}get_data(){let e={action_name:"getdata",method:"GET",url:(0,s.A)().endpoint_url()+"online/getdata/?"+o.A.add_token_as_parameter()},t=new a.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}set_data(e){let t={action_name:"setdata",method:"POST",url:(0,s.A)().endpoint_url()+"online/setdata/?"+o.A.serialize_object(e)+o.A.add_token_as_parameter()},n=new a.A;return n.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new r},7431:function(e,t,n){n.d(t,{A:function(){return b}});var s=n(641),o=n(3751);const a={class:"row mt-4","data-cy":"navigation"},r={class:"col-12 col-sm-4 text-center text-sm-start order-2 order-sm-1"},i={class:"col-12 col-sm-4 text-center order-3 order-sm-2"},l={class:"col-12 col-sm-4 text-center text-sm-end order-1 order-sm-3"},c=["disabled","title"];function u(e,t,n,u,_,p){const d=(0,s.g2)("Bouncer_loading");return(0,s.uX)(),(0,s.CE)("div",a,[(0,s.Lk)("div",r,[n.show_back?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>p.prev&&p.prev(...e)),type:"button",class:"btn btn-light btn-left btn-lg"}," Naspäť ")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",i,[(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>p.clear&&p.clear(...e)),type:"button",class:"btn btn-white btn-lg"}," Vymazať údaje ")]),(0,s.Lk)("div",l,[(0,s.bo)((0,s.bF)(d,null,null,512),[[o.aG,p.loading]]),n.show_next?(0,s.bo)(((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[2]||(t[2]=(...e)=>p.next&&p.next(...e)),disabled:n.disable_next,title:n.disable_next?"Pokúšame sa zopakovať požiadavku.":"",type:"button",class:"btn btn-primary btn-right btn-lg"}," Pokračovať ",8,c)),[[o.aG,!p.loading]]):(0,s.Q3)("",!0)])])}var _=n(55),p=n(2873),d={props:{show_back:Boolean,show_next:Boolean,disable_next:Boolean},components:{Bouncer_loading:_.A},emits:["next","prev"],data(){return{}},created(){},methods:{next(){this.$emit("next")},prev(){this.$emit("prev")},clear(){(0,p.A)().open_it("Cleaning_session")}},computed:{loading(){return(0,p.A)().is_loading()}}},m=n(6262);const h=(0,m.A)(d,[["render",u]]);var b=h},4156:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var s=n(641),o=n(33);const a={"data-cy":"error_page"},r={class:"text-center pt-5"},i={key:0},l={class:"text-primary"},c={class:"text-primary"},u={class:"text-center"};function _(e,t,n,_,p,d){const m=(0,s.g2)("Navigation");return(0,s.uX)(),(0,s.CE)("section",a,[(0,s.Lk)("div",r,[t[2]||(t[2]=(0,s.Lk)("h1",null," Ľutujeme, niečo sa nepodarilo :( ",-1)),t[3]||(t[3]=(0,s.Lk)("p",null,[(0,s.eW)(" Vyskytla sa neočakávaná chyba, preto nebolo možné dokončiť operáciu."),(0,s.Lk)("br"),(0,s.eW)(" Pre informácie ohľadom ďalšieho postupu nás prosím kontaktujte. ")],-1)),d.phone?((0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("h3",l,(0,o.v_)(d.phone),1),t[1]||(t[1]=(0,s.Lk)("p",null," Volajte kedykoľvek pondelok až piatok 09:00 - 17:00 ",-1))])):(0,s.Q3)("",!0),(0,s.Lk)("h3",c,(0,o.v_)(d.email),1),t[4]||(t[4]=(0,s.Lk)("p",null," Pošlite nám fotku tejto obrazovky a ozveme sa vám. ",-1))]),(0,s.Lk)("pre",null,(0,o.v_)(d.error),1),(0,s.bF)(m,{onPrev:d.prev_button,onNext:d.next_button,show_back:!0,show_next:!0,disable_next:p.disable_next},null,8,["onPrev","onNext","disable_next"]),(0,s.Lk)("div",u,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>d.open_where&&d.open_where(...e)),class:"btn btn-secondary mt-5"}," Zotavenie session ")])])}var p=n(7431),d=n(5833),m=n(9819),h=n(8700),b=n(9452),k=n(7654),v=n(2873),A={props:{},components:{Navigation:p.A},emits:[],data(){return{disable_next:!0,attempt:0,max_tries:20,session_state:0,timeout_handle:""}},created(){this.continue_session()},methods:{prev_button(){clearTimeout(this.timeout_handle),(0,h.A)().change_step(this.error.step)},next_button(){100!==this.session_state?k.A.repeat_confirm().then((e=>{"success"!==e.result?.response&&100!==e.result?.state||(0,h.A)().change_step(5)})):(0,h.A)().change_step(5)},continue_session(){b.A.session_info().then((e=>{if("success"===e.result?.response||100===e.result?.state)this.session_state=100,this.disable_next=!1;else if(90===e.result?.state)this.session_state=90,this.disable_next=!1;else{if(this.attempt>this.max_tries)return void console.log("continue_session reached max_tries");this.attempt++,this.timeout_handle=setTimeout((()=>{this.continue_session()}),5e3)}}))},open_where(){clearTimeout(this.timeout_handle),(0,v.A)().open_it("Resurrect_session")}},computed:{error(){return(0,d.A)().get_last_request()},email(){return m.A.email_address()},phone(){return m.A.phone_number()}},watch:{}},f=n(6262);const g=(0,f.A)(A,[["render",_]]);var x=g},55:function(e,t,n){n.d(t,{A:function(){return u}});var s=n(641),o=n(33);const a={class:"spinner"};function r(e,t,n,r,i,l){return(0,s.uX)(),(0,s.CE)("div",a,[(0,s.Lk)("div",{class:(0,o.C4)(["bounce1",n.size])},null,2),(0,s.Lk)("div",{class:(0,o.C4)(["bounce2",n.size])},null,2),(0,s.Lk)("div",{class:(0,o.C4)(["bounce3",n.size])},null,2)])}var i={props:{size:String},components:{},data(){return{}},created(){},methods:{},computed:{}},l=n(6262);const c=(0,l.A)(i,[["render",r]]);var u=c}}]);