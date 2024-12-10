"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[185],{3175:function(e,t,s){var n=s(1114),a=s(8700),r=s(2873),o=s(5833),i=s(2754),p=s(3177);class _{constructor(){(0,n.A)(this,"params",{}),(0,n.A)(this,"headers",{}),(0,n.A)(this,"auth_fails",0),(0,n.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,i.A)().get_abort_signal(),headers:{"x-user-scope":(0,a.A)().give_api_scope(),Authorization:(0,a.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,a.A)().get_backend_type(),t=(0,a.A)().get_endpoint_type(),s={php_wrapper:"/authorize_frontend/?endpoint="+t+"&receiver="+(0,p.A)().get_receiver(),np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/"};if(s.hasOwnProperty(e)){let t=window.location.origin+s[e];return fetch(t).then((e=>e.json())).then((e=>!!e&&((0,a.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+t+"&receiver="+(0,p.A)().get_receiver();return fetch(e).then((e=>e.json())).then((e=>((0,a.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,a.A)().myport_access_token_promise().then((e=>!1!==e&&((0,a.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,r.A)().open_it("Clearance"),e;if(503===e.status)return(0,a.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,r.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let t=(new Date).toLocaleString(),s=(0,a.A)().get_session_token(),n=(0,a.A)().current_step();return(0,o.A)().set_last_request(this.headers,this.params,t,s,n,e),(0,a.A)().change_step(404),(0,r.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,t)=>{let s=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),n={};fetch(this.params.url,this.headers).then((e=>{n=e;let t=e.headers.get("content-type");return-1===t.indexOf("json")?{response:"not in json format"}:e.json()})).then((t=>{n.result=t,e(n)})).catch((e=>{"AbortError"===e.name?(clearTimeout(s),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}t.A=_},880:function(e,t,s){var n=s(8700),a=s(6343),r=s(3175);class o{session_remap(e){let t={action_name:"session-remap",method:"GET",url:(0,n.A)().endpoint_url()+"online/session-remap/?destGroup="+e+"&"+a.A.add_token_as_parameter()},s=new r.A;return s.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new o},4185:function(e,t,s){s.r(t),s.d(t,{default:function(){return Ie}});var n=s(641),a=s(33);const r={key:15},o=(0,n.Lk)("br",null,null,-1),i=(0,n.Lk)("small",null,[(0,n.Lk)("i",null,"(nemalo by trvať viac než pár sekúnd)")],-1),p={key:16};function _(e,t,s,_,c,l){const u=(0,n.g2)("Info"),d=(0,n.g2)("Progress_bar"),h=(0,n.g2)("Upper_nav"),m=(0,n.g2)("Zeteo_progress"),b=(0,n.g2)("Step0_offer"),k=(0,n.g2)("Step1_groupform"),v=(0,n.g2)("Step2_results"),g=(0,n.g2)("Step4_proposal"),f=(0,n.g2)("Step5_confirm"),A=(0,n.g2)("Step6_payment"),w=(0,n.g2)("Step88_boris"),y=(0,n.g2)("Step99_lukas"),C=(0,n.g2)("Step_manager_111"),L=(0,n.g2)("Step_error_404"),X=(0,n.g2)("Step_maintenance_503"),x=(0,n.g2)("Call_support");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(u),l.classic_np_progress_bar?((0,n.uX)(),(0,n.Wv)(d,{key:0})):(0,n.Q3)("",!0),l.classic_np_progress_bar?((0,n.uX)(),(0,n.Wv)(h,{key:1})):((0,n.uX)(),(0,n.Wv)(m,{key:2})),0===l.step?((0,n.uX)(),(0,n.Wv)(b,{key:3})):1===l.step?((0,n.uX)(),(0,n.Wv)(k,{key:4})):2===l.step?((0,n.uX)(),(0,n.Wv)(v,{key:5})):3===l.step?((0,n.uX)(),(0,n.Wv)(k,{key:6})):4===l.step?((0,n.uX)(),(0,n.Wv)(g,{key:7})):5===l.step?((0,n.uX)(),(0,n.Wv)(f,{key:8})):6===l.step?((0,n.uX)(),(0,n.Wv)(A,{key:9})):88===l.step?((0,n.uX)(),(0,n.Wv)(w,{key:10})):99===l.step?((0,n.uX)(),(0,n.Wv)(y,{key:11})):111===l.step?((0,n.uX)(),(0,n.Wv)(C,{key:12})):404===l.step?((0,n.uX)(),(0,n.Wv)(L,{key:13})):503===l.step?((0,n.uX)(),(0,n.Wv)(X,{key:14})):-77===l.step?((0,n.uX)(),(0,n.CE)("p",r,[(0,n.eW)("čistím staré dáta, pripravujem novú session... "),o,(0,n.eW)(),i])):((0,n.uX)(),(0,n.CE)("p",p,"dont have template for step "+(0,a.v_)(l.step),1)),(0,n.bF)(x)],64)}var c=s(8700),l=s(2327),u=s(3751);const d={key:0,class:"step_progress","data-cy":"progress_bar"},h=(0,n.Lk)("div",{class:"step_title"},"Základné údaje",-1),m={key:0,class:"step_tabs"},b=["onClick","title"],k=(0,n.Lk)("div",{class:"step_title"},"Porovnanie a výber",-1),v=(0,n.Lk)("div",{class:"step_title"},"Údaje do zmluvy",-1),g={key:0,class:"step_tabs"},f=["onClick","title"],A=(0,n.Lk)("div",{class:"step_title"},"Zhrnutie",-1),w=(0,n.Lk)("div",{class:"step_title"},"Hotovo!",-1);function y(e,t,s,r,o,i){return i.not_shown_in_technical_steps?((0,n.uX)(),(0,n.CE)("div",d,[(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(1),"step_info"])},[h,(0,n.Lk)("div",{class:(0,a.C4)(["step_number",i.step_errors(1)?"step_has_errors":""]),onClick:t[0]||(t[0]=e=>i.return_to_the_step(1))},(0,a.v_)(i.step_errors(1)?"!":"1"),3),1===i.step?((0,n.uX)(),(0,n.CE)("div",m,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tab_count,(e=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",{onClick:t=>i.switch_tab(e),title:e,class:(0,a.C4)([i.step_tab_class(e),i.allow_tab_switch?"allow_tab_switch":""])},null,10,b)),[[u.aG,i.tab_not_empty(e)]]))),256))])):(0,n.Q3)("",!0)],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_line_class(1),"step_line"])},null,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(2),"step_info"])},[k,(0,n.Lk)("div",{class:"step_number",onClick:t[1]||(t[1]=e=>i.return_to_the_step(2))},"2")],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_line_class(2),"step_line"])},null,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(3),"step_info"])},[v,(0,n.Lk)("div",{class:(0,a.C4)(["step_number",i.step_errors(3)?"step_has_errors":""]),onClick:t[2]||(t[2]=e=>i.return_to_the_step(3))},(0,a.v_)(i.step_errors(3)?"!":"3"),3),3===i.step?((0,n.uX)(),(0,n.CE)("div",g,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tab_count,(e=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",{onClick:t=>i.switch_tab(e),title:e,class:(0,a.C4)([i.step_tab_class(e),i.allow_tab_switch?"allow_tab_switch":""])},null,10,f)),[[u.aG,i.tab_not_empty(e)]]))),256))])):(0,n.Q3)("",!0)],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_line_class(3),"step_line"])},null,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(4),"step_info"])},[A,(0,n.Lk)("div",{class:"step_number",onClick:t[3]||(t[3]=e=>i.return_to_the_step(4))},"4")],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_line_class(4),"step_line"])},null,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(5),"step_info"])},[w,(0,n.Lk)("div",{class:"step_number",onClick:t[4]||(t[4]=e=>i.return_to_the_step(5))},"5")],2)])):(0,n.Q3)("",!0)}var C=s(9614),L=s(2873),X=s(3177),x=s(6460),E=s(6343),S={props:{},components:{},emits:[],data(){return{}},created(){},methods:{step_info_class(e){return e<this.step?"completed":e===this.step?"current":""},step_line_class(e){return e<this.step?"completed":e===this.step?"pusher":""},step_tab_class(e){return e<(0,C.A)().get_current_tab()?"completed":e===(0,C.A)().get_current_tab()?"current":""},return_to_the_step(e){this.step_errors(e)&&this.open_step_error_modal(e),e>=this.step||(this.step>=5?(0,L.A)().open_it("Cleaning_session"):((0,x.A)().$reset(),(0,X.A)().reset_form_values(),(0,C.A)().reset_tab_keys(),(0,c.A)().change_step(e)))},tab_not_empty(e){return!E.A.this_tab_is_empty(e)},switch_tab(e){this.allow_tab_switch&&(0,C.A)().set_current_tab(e)},open_step_error_modal(e){(0,L.A)().store_modal_data({title:"Chyby formuláru",content:this.step_errors(e)}),(0,L.A)().open_it("Acceptance_modal")},step_errors(e){if(e!==this.step)return!1;let t=(0,x.A)().get_errors();if("object"!==typeof t||Object.keys(t).length<1)return!1;let s="";for(let n in t){s+="<strong>"+n+" :</strong> ";for(let e in t[n])s+=t[n][e]+"<br>"}return s}},computed:{step(){return(0,c.A)().current_step()},tab_count(){return(0,C.A)().get_tab_keys()},allow_tab_switch(){return(0,X.A)().capable_agent()},not_shown_in_technical_steps(){return this.step<10&&(0,C.A)().get_upper_section()}},watch:{}},W=s(6262);const j=(0,W.A)(S,[["render",y]]);var P=j;const V={key:0,class:"step_progress_alt"},Q={class:"step_progress_alt_steps","data-cy":"progress_bar"},$=(0,n.Lk)("div",{class:"step_number"},"1.",-1),z=(0,n.Lk)("div",{class:"step_title"},[(0,n.eW)("Parametre"),(0,n.Lk)("br"),(0,n.eW)("poistenia")],-1),T={key:0,class:"step_tabs"},F=(0,n.Lk)("div",{class:"step_number"},"2.",-1),q=(0,n.Lk)("div",{class:"step_title"},[(0,n.eW)("Porovnanie"),(0,n.Lk)("br"),(0,n.eW)("ponúk")],-1),G=[F,q],O=(0,n.Lk)("div",{class:"step_number"},"3.",-1),I=(0,n.Lk)("div",{class:"step_title"},[(0,n.eW)("Doplňujúce"),(0,n.Lk)("br"),(0,n.eW)("údaje")],-1),K={key:0,class:"step_tabs"},D=(0,n.Lk)("div",{class:"step_number"},"4.",-1),R=(0,n.Lk)("div",{class:"step_title"},"Rekapitulácia",-1),Z=[D,R],N=(0,n.Lk)("div",{class:"step_number"},"5.",-1),U=(0,n.Lk)("div",{class:"step_title"},"Dokončenie",-1),B=[N,U];function H(e,t,s,r,o,i){return i.not_shown_in_technical_steps?((0,n.uX)(),(0,n.CE)("div",V,[(0,n.Lk)("div",Q,[(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(1),"step_info"])},[$,z,1===i.step?((0,n.uX)(),(0,n.CE)("div",T,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tab_count,(e=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",{class:(0,a.C4)(i.step_tab_class(e))},null,2)),[[u.aG,i.tab_not_empty(e)]]))),256))])):(0,n.Q3)("",!0)],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(2),"step_info"])},G,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(3),"step_info"])},[O,I,3===i.step?((0,n.uX)(),(0,n.CE)("div",K,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tab_count,(e=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",{class:(0,a.C4)(i.step_tab_class(e))},null,2)),[[u.aG,i.tab_not_empty(e)]]))),256))])):(0,n.Q3)("",!0)],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(4),"step_info"])},Z,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(5),"step_info"])},B,2)])])):(0,n.Q3)("",!0)}var J={props:{show_back:Boolean},components:{},emits:[],data(){return{}},created(){},methods:{step_info_class(e){return e<this.step?"completed":e===this.step?"current":""},step_tab_class(e){return e<(0,C.A)().get_current_tab()?"completed":e===(0,C.A)().get_current_tab()?"current":""},tab_not_empty(e){return!E.A.this_tab_is_empty(e)}},computed:{step(){return(0,c.A)().current_step()},tab_count(){return(0,C.A)().get_tab_keys()},not_shown_in_technical_steps(){return this.step<10}},watch:{}};const M=(0,W.A)(J,[["render",H]]);var Y=M;const ee={key:0,class:"upper_nav expanding-label","data-cy":"upper_navigation"},te=["disabled"],se=(0,n.Lk)("span",{class:"btn-exp__label"},"Naspäť",-1),ne=[se],ae=["disabled"],re={class:"btn-exp__label"},oe=["disabled"],ie=(0,n.Lk)("span",{class:"btn-exp__label"},"Pokračovať",-1),pe=[ie],_e=["disabled"],ce=(0,n.Lk)("span",{class:"btn-exp__label"},null,-1),le=[ce],ue={class:"upper_remap text-center text-lg-end"},de={class:"btn-exp__label"};function he(e,t,s,r,o,i){return(0,n.uX)(),(0,n.CE)(n.FK,null,[i.not_shown_in_technical_steps?((0,n.uX)(),(0,n.CE)("div",ee,[i.show_back?((0,n.uX)(),(0,n.CE)("button",{key:0,disabled:i.loading,onClick:t[0]||(t[0]=(...e)=>i.prev&&i.prev(...e)),type:"button",class:"btn btn-exp btn-light btn-left btn-m"},ne,8,te)):(0,n.Q3)("",!0),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.clear&&i.clear(...e)),disabled:i.loading,type:"button",class:(0,a.C4)(["btn btn-exp btn-white btn-delete btn-m",i.show_new?"expanded":""])},[(0,n.Lk)("span",re,(0,a.v_)(i.show_new?"Vytvoriť nové porovnanie":"Vymazať"),1)],10,ae),i.show_next?((0,n.uX)(),(0,n.CE)("button",{key:1,disabled:i.loading,onClick:t[2]||(t[2]=(...e)=>i.next&&i.next(...e)),type:"button",class:"btn btn-exp expanded btn-primary btn-right btn-m"},pe,8,oe)):(0,n.Q3)("",!0),i.show_down?((0,n.uX)(),(0,n.CE)("button",{key:2,disabled:i.loading,onClick:t[3]||(t[3]=(...e)=>i.down&&i.down(...e)),type:"button",class:"btn btn-exp expanded btn-primary btn-down btn-m"},le,8,_e)):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0),(0,n.Lk)("div",ue,[i.show_remap?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[4]||(t[4]=(...e)=>i.remap_debug&&i.remap_debug(...e)),type:"button",class:"btn btn-exp expanded btn-outline-secondary btn-m"},[(0,n.Lk)("span",de,(0,a.v_)(o.remap_loading?"Načítavam havarijné poistenie...":"Prejsť na havarijné poistenie"),1)])):(0,n.Q3)("",!0)])],64)}var me=s(880),be={props:{},components:{},emits:[],data(){return{remap_loading:!1}},created(){},methods:{prev(){(0,C.A)().set_requested_direction("backward")},next(){(0,C.A)().set_requested_direction("forward")},clear(){(0,L.A)().open_it("Cleaning_session")},down(){let e={2:"product_list_scroll_anchor",4:"proposal_scroll_anchor"};E.A.adjust_view(e[this.step])},remap_debug(){let e=2;this.remap_loading=!0,me.A.session_remap(e).then((t=>{this.remap_loading=!1,200===t.status&&E.A.open_remap("new",e,t.result?.new_token)}))}},computed:{step(){return(0,c.A)().current_step()},show_back(){return(1!==this.step||!(0,C.A)().current_tab_is_first())&&(this.step>0&&this.step<5)},show_next(){return this.step>0&&this.step<4&&2!==this.step},show_down(){return 2===this.step||4===this.step},loading(){return(0,L.A)().is_loading()},not_shown_in_technical_steps(){return this.step<10&&(0,C.A)().get_upper_section()},show_new(){return this.step>=5},show_remap(){return 1===(0,c.A)().product_group_id()}},watch:{}};const ke=(0,W.A)(be,[["render",he]]);var ve=ke;const ge=(0,n.Lk)("span",{class:"i_phone"},null,-1),fe=[ge],Ae=["href"],we=(0,n.Lk)("span",{class:"i_phone"},null,-1);function ye(e,t,s,r,o,i){return i.show_support?((0,n.uX)(),(0,n.CE)("div",{key:0,class:(0,a.C4)([o.is_opened?"":"is_closed","call_support justify-content-between"])},[(0,n.Lk)("a",{onClick:t[0]||(t[0]=(...e)=>i.open_support&&i.open_support(...e)),class:"open_support"},fe),(0,n.Lk)("a",{class:"btn-text i_anchor",href:i.support_phone},[we,(0,n.eW)(" Pomôžeme Vám ")],8,Ae),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.close_support&&i.close_support(...e)),class:"close_support btn-white"})],2)):(0,n.Q3)("",!0)}var Ce=s(9819),Le=s(6645),Xe={props:{},components:{},emits:[],data(){return{is_opened:!1,c_name:"support_closed",c_expire:180,timeout:8e3}},created(){let e=Le.A.get_cookie(this.c_name);!0!==e&&setTimeout((()=>{this.open_support()}),this.timeout)},methods:{open_support(){this.is_opened=!0},close_support(){this.is_opened=!1,Le.A.set_cookie(this.c_name,!0,this.c_expire)},is_business_hours(){let e=new Date,t=e.getDay(),s=e.getHours();return t>=1&&t<=5&&s>=9&&s<17}},computed:{support_phone(){return"tel:"+Ce.A.callcentrum_phone()},show_support(){let e=(0,c.A)().get_backend_type(),t=(0,X.A)().direct_user_no_agent(),s=this.is_business_hours(),n=(0,c.A)().current_step();return!!(("np_wp"===e||"fp_symfony"===e)&&n>=1&&n<=3&&t&&s)}},watch:{}};const xe=(0,W.A)(Xe,[["render",ye]]);var Ee=xe;const Se=(0,n.$V)((()=>s.e(458).then(s.bind(s,7458)))),We=(0,n.$V)((()=>Promise.all([s.e(651),s.e(842),s.e(238),s.e(311)]).then(s.bind(s,5412)))),je=(0,n.$V)((()=>Promise.all([s.e(651),s.e(842),s.e(401),s.e(535)]).then(s.bind(s,4939)))),Pe=(0,n.$V)((()=>Promise.all([s.e(862),s.e(485)]).then(s.bind(s,6767)))),Ve=(0,n.$V)((()=>Promise.all([s.e(623),s.e(862),s.e(481)]).then(s.bind(s,2113)))),Qe=(0,n.$V)((()=>Promise.all([s.e(623),s.e(466)]).then(s.bind(s,7307)))),$e=(0,n.$V)((()=>s.e(818).then(s.bind(s,1818)))),ze=(0,n.$V)((()=>Promise.all([s.e(651),s.e(473)]).then(s.bind(s,4854)))),Te=(0,n.$V)((()=>s.e(426).then(s.bind(s,426)))),Fe=(0,n.$V)((()=>s.e(156).then(s.bind(s,4156)))),qe=(0,n.$V)((()=>s.e(991).then(s.bind(s,5574))));var Ge={props:{},components:{Info:l.A,Progress_bar:P,Zeteo_progress:Y,Upper_nav:ve,Call_support:Ee,Step0_offer:Se,Step1_groupform:We,Step2_results:je,Step4_proposal:Pe,Step5_confirm:Ve,Step6_payment:Qe,Step88_boris:$e,Step99_lukas:ze,Step_manager_111:Te,Step_error_404:Fe,Step_maintenance_503:qe},emits:[],data(){return{}},created(){},methods:{},computed:{step(){return(0,c.A)().current_step()},classic_np_progress_bar(){return!(0,c.A)().is_zeteo_skin()}},watch:{}};const Oe=(0,W.A)(Ge,[["render",_]]);var Ie=Oe},2327:function(e,t,s){s.d(t,{A:function(){return C}});var n=s(641),a=s(33),r=s(3751);const o={class:"info_for_session","data-cy":"info"},i=["title"],p={title:"endpoint"},_={title:"receiver name (id)"},c={title:"session token"},l={title:"agent code"},u={title:"filtred products"},d={title:"osmapp version"},h={key:0,title:"step | state | finished | internal"};function m(e,t,s,m,b,k){return(0,n.bo)(((0,n.uX)(),(0,n.CE)("section",o,[(0,n.Lk)("h2",{title:k.print_group},(0,a.v_)(k.heading),9,i),(0,n.Lk)("p",p,(0,a.v_)(k.print_endpoint),1),(0,n.Lk)("p",_,(0,a.v_)(k.print_receiver),1),(0,n.Lk)("p",c,(0,a.v_)(k.print_session_token),1),(0,n.Lk)("p",l,(0,a.v_)(k.print_agent_code),1),(0,n.Lk)("p",u,(0,a.v_)(k.print_filtered_products),1),(0,n.Lk)("p",d,(0,a.v_)(k.print_version),1),k.print_flow?((0,n.uX)(),(0,n.CE)("p",h,(0,a.v_)(k.print_flow),1)):(0,n.Q3)("",!0)],512)),[[r.aG,k.info_shown]])}var b=s(8700),k=s(3177),v=s(5143),g=s(9614),f=s(9819),A={props:{},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{group_id(){return(0,b.A)().product_group_id()},heading(){return"node_red"===(0,b.A)().get_run_mode()?"node_red | "+(0,v.A)().get_workflow_name():111===(0,b.A)().current_step()?"cookie session manager":f.A.group_name(this.group_id)},print_group(){return"group name, for id: "+this.group_id},print_session_token(){return(0,b.A)().get_session_token()||"-"},print_agent_code(){return(0,k.A)().get_agent_code()||"-"},print_filtered_products(){return(0,k.A)().get_filtered_products()||"-"},print_version(){return(0,b.A)().give_app_version()},print_endpoint(){return(0,b.A)().get_endpoint_type()},print_receiver(){let e=(0,k.A)().get_receiver();return f.A.receiver_names(e)+" ("+e+")"},print_flow(){return"node_red"===(0,b.A)().get_run_mode()&&(0,v.A)().get_workflow_step()+" | "+(0,v.A)().get_workflow_step_state()+" | "+((0,v.A)().get_workflow_finished()?"finished":"")+" | "+((0,v.A)().get_workflow_internal()?"internal":"")},info_shown(){return!(0,b.A)().is_prod_endpoint()||(0,k.A)().capable_agent()||(0,g.A)().show_info_section()}},watch:{}},w=s(6262);const y=(0,w.A)(A,[["render",m]]);var C=y}}]);