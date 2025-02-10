"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[495],{3175:function(e,t,s){var n=s(1114),a=s(8700),r=s(2873),o=s(5833),i=s(2754),p=s(3177);class _{constructor(){(0,n.A)(this,"params",{}),(0,n.A)(this,"headers",{}),(0,n.A)(this,"auth_fails",0),(0,n.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,i.A)().get_abort_signal(),headers:{"x-user-scope":(0,a.A)().give_api_scope(),Authorization:(0,a.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,a.A)().get_backend_type(),t=(0,a.A)().get_endpoint_type(),s=(0,p.A)().get_receiver(),n={php_wrapper:"/authorize_frontend/?endpoint="+t+"&receiver="+s,np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/?receiver="+s,np_symfony:"/osmapp/auth/?receiver="+s};if(n.hasOwnProperty(e)){let t=window.location.origin+n[e];return fetch(t).then((e=>e.json())).then((e=>!!e&&((0,a.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+t+"&receiver="+s;return fetch(e).then((e=>e.json())).then((e=>((0,a.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,a.A)().myport_access_token_promise().then((e=>!1!==e&&((0,a.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,r.A)().open_it("Clearance"),e;if(503===e.status)return(0,a.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,r.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let t=(new Date).toLocaleString(),s=(0,a.A)().get_session_token(),n=(0,a.A)().current_step();return(0,o.A)().set_last_request(this.headers,this.params,t,s,n,e),(0,a.A)().change_step(404),(0,r.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,t)=>{let s=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),n={};fetch(this.params.url,this.headers).then((e=>{n=e;let t=e.headers.get("content-type");return-1===t.indexOf("json")?{response:"not in json format"}:e.json()})).then((t=>{n.result=t,e(n)})).catch((e=>{"AbortError"===e.name?(clearTimeout(s),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}t.A=_},880:function(e,t,s){var n=s(8700),a=s(6343),r=s(3175);class o{session_remap(e){let t={action_name:"session-remap",method:"GET",url:(0,n.A)().endpoint_url()+"online/session-remap/?destGroup="+e+"&"+a.A.add_token_as_parameter()},s=new r.A;return s.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new o},6495:function(e,t,s){s.r(t),s.d(t,{default:function(){return de}});var n=s(641),a=s(33);const r={key:15},o={key:16};function i(e,t,s,i,p,_){const l=(0,n.g2)("Info"),c=(0,n.g2)("Progress_bar"),u=(0,n.g2)("Upper_nav"),d=(0,n.g2)("Zeteo_progress"),h=(0,n.g2)("Step0_offer"),m=(0,n.g2)("Step1_groupform"),b=(0,n.g2)("Step2_results"),k=(0,n.g2)("Step4_proposal"),v=(0,n.g2)("Step5_confirm"),g=(0,n.g2)("Step6_payment"),f=(0,n.g2)("Step88_boris"),w=(0,n.g2)("Step99_lukas"),A=(0,n.g2)("Step_manager_111"),y=(0,n.g2)("Step_error_404"),C=(0,n.g2)("Step_maintenance_503"),L=(0,n.g2)("Call_support");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(l),_.classic_np_progress_bar?((0,n.uX)(),(0,n.Wv)(c,{key:0})):(0,n.Q3)("",!0),_.classic_np_progress_bar?((0,n.uX)(),(0,n.Wv)(u,{key:1})):((0,n.uX)(),(0,n.Wv)(d,{key:2})),0===_.step?((0,n.uX)(),(0,n.Wv)(h,{key:3})):1===_.step?((0,n.uX)(),(0,n.Wv)(m,{key:4})):2===_.step?((0,n.uX)(),(0,n.Wv)(b,{key:5})):3===_.step?((0,n.uX)(),(0,n.Wv)(m,{key:6})):4===_.step?((0,n.uX)(),(0,n.Wv)(k,{key:7})):5===_.step?((0,n.uX)(),(0,n.Wv)(v,{key:8})):6===_.step?((0,n.uX)(),(0,n.Wv)(g,{key:9})):88===_.step?((0,n.uX)(),(0,n.Wv)(f,{key:10})):99===_.step?((0,n.uX)(),(0,n.Wv)(w,{key:11})):111===_.step?((0,n.uX)(),(0,n.Wv)(A,{key:12})):404===_.step?((0,n.uX)(),(0,n.Wv)(y,{key:13})):503===_.step?((0,n.uX)(),(0,n.Wv)(C,{key:14})):-77===_.step?((0,n.uX)(),(0,n.CE)("p",r,t[0]||(t[0]=[(0,n.eW)("čistím staré dáta, pripravujem novú session... "),(0,n.Lk)("br",null,null,-1),(0,n.eW)(),(0,n.Lk)("small",null,[(0,n.Lk)("i",null,"(nemalo by trvať viac než pár sekúnd)")],-1)]))):((0,n.uX)(),(0,n.CE)("p",o,"dont have template for step "+(0,a.v_)(_.step),1)),(0,n.bF)(L)],64)}var p=s(8700),_=s(2327),l=s(3751);const c={key:0,class:"step_progress","data-cy":"progress_bar"},u={key:0,class:"step_tabs"},d=["onClick","title"],h={key:0,class:"step_tabs"},m=["onClick","title"];function b(e,t,s,r,o,i){return i.not_shown_in_technical_steps?((0,n.uX)(),(0,n.CE)("div",c,[(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(1),"step_info"])},[t[5]||(t[5]=(0,n.Lk)("div",{class:"step_title"},"Základné údaje",-1)),(0,n.Lk)("div",{class:(0,a.C4)(["step_number",i.step_errors(1)?"step_has_errors":""]),onClick:t[0]||(t[0]=e=>i.return_to_the_step(1))},(0,a.v_)(i.step_errors(1)?"!":"1"),3),1===i.step?((0,n.uX)(),(0,n.CE)("div",u,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tab_count,(e=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",{onClick:t=>i.switch_tab(e),title:e,class:(0,a.C4)([i.step_tab_class(e),i.allow_tab_switch?"allow_tab_switch":""])},null,10,d)),[[l.aG,i.tab_not_empty(e)]]))),256))])):(0,n.Q3)("",!0)],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_line_class(1),"step_line"])},null,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(2),"step_info"])},[t[6]||(t[6]=(0,n.Lk)("div",{class:"step_title"},"Porovnanie a výber",-1)),(0,n.Lk)("div",{class:"step_number",onClick:t[1]||(t[1]=e=>i.return_to_the_step(2))},"2")],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_line_class(2),"step_line"])},null,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(3),"step_info"])},[t[7]||(t[7]=(0,n.Lk)("div",{class:"step_title"},"Údaje do zmluvy",-1)),(0,n.Lk)("div",{class:(0,a.C4)(["step_number",i.step_errors(3)?"step_has_errors":""]),onClick:t[2]||(t[2]=e=>i.return_to_the_step(3))},(0,a.v_)(i.step_errors(3)?"!":"3"),3),3===i.step?((0,n.uX)(),(0,n.CE)("div",h,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tab_count,(e=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",{onClick:t=>i.switch_tab(e),title:e,class:(0,a.C4)([i.step_tab_class(e),i.allow_tab_switch?"allow_tab_switch":""])},null,10,m)),[[l.aG,i.tab_not_empty(e)]]))),256))])):(0,n.Q3)("",!0)],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_line_class(3),"step_line"])},null,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(4),"step_info"])},[t[8]||(t[8]=(0,n.Lk)("div",{class:"step_title"},"Zhrnutie",-1)),(0,n.Lk)("div",{class:"step_number",onClick:t[3]||(t[3]=e=>i.return_to_the_step(4))},"4")],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_line_class(4),"step_line"])},null,2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(5),"step_info"])},[t[9]||(t[9]=(0,n.Lk)("div",{class:"step_title"},"Hotovo!",-1)),(0,n.Lk)("div",{class:"step_number",onClick:t[4]||(t[4]=e=>i.return_to_the_step(5))},"5")],2)])):(0,n.Q3)("",!0)}var k=s(9614),v=s(2873),g=s(3177),f=s(6460),w=s(6343),A={props:{},components:{},emits:[],data(){return{}},created(){},methods:{step_info_class(e){return e<this.step?"completed":e===this.step?"current":""},step_line_class(e){return e<this.step?"completed":e===this.step?"pusher":""},step_tab_class(e){return e<(0,k.A)().get_current_tab()?"completed":e===(0,k.A)().get_current_tab()?"current":""},return_to_the_step(e){this.step_errors(e)&&this.open_step_error_modal(e),e>=this.step||(this.step>=5?(0,v.A)().open_it("Cleaning_session"):((0,f.A)().$reset(),(0,g.A)().reset_form_values(),(0,k.A)().reset_tab_keys(),(0,p.A)().change_step(e)))},tab_not_empty(e){return!w.A.this_tab_is_empty(e)},switch_tab(e){this.allow_tab_switch&&(0,k.A)().set_current_tab(e)},open_step_error_modal(e){(0,v.A)().store_modal_data({title:"Chyby formuláru",content:this.step_errors(e)}),(0,v.A)().open_it("Acceptance_modal")},step_errors(e){if(e!==this.step)return!1;let t=(0,f.A)().get_errors();if("object"!==typeof t||Object.keys(t).length<1)return!1;let s="";for(let n in t){s+="<strong>"+n+" :</strong> ";for(let e in t[n])s+=t[n][e]+"<br>"}return s}},computed:{step(){return(0,p.A)().current_step()},tab_count(){return(0,k.A)().get_tab_keys()},allow_tab_switch(){return(0,g.A)().capable_agent()},not_shown_in_technical_steps(){return this.step<10}},watch:{}},y=s(6262);const C=(0,y.A)(A,[["render",b]]);var L=C;const X={key:0,class:"step_progress_alt"},x={class:"step_progress_alt_steps","data-cy":"progress_bar"},E={key:0,class:"step_tabs"},S={key:0,class:"step_tabs"};function W(e,t,s,r,o,i){return i.not_shown_in_technical_steps?((0,n.uX)(),(0,n.CE)("div",X,[(0,n.Lk)("div",x,[(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(1),"step_info"])},[t[0]||(t[0]=(0,n.Lk)("div",{class:"step_number"},"1.",-1)),t[1]||(t[1]=(0,n.Lk)("div",{class:"step_title"},[(0,n.eW)("Parametre"),(0,n.Lk)("br"),(0,n.eW)("poistenia")],-1)),1===i.step?((0,n.uX)(),(0,n.CE)("div",E,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tab_count,(e=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",{class:(0,a.C4)(i.step_tab_class(e))},null,2)),[[l.aG,i.tab_not_empty(e)]]))),256))])):(0,n.Q3)("",!0)],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(2),"step_info"])},t[2]||(t[2]=[(0,n.Lk)("div",{class:"step_number"},"2.",-1),(0,n.Lk)("div",{class:"step_title"},[(0,n.eW)("Porovnanie"),(0,n.Lk)("br"),(0,n.eW)("ponúk")],-1)]),2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(3),"step_info"])},[t[3]||(t[3]=(0,n.Lk)("div",{class:"step_number"},"3.",-1)),t[4]||(t[4]=(0,n.Lk)("div",{class:"step_title"},[(0,n.eW)("Doplňujúce"),(0,n.Lk)("br"),(0,n.eW)("údaje")],-1)),3===i.step?((0,n.uX)(),(0,n.CE)("div",S,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.tab_count,(e=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",{class:(0,a.C4)(i.step_tab_class(e))},null,2)),[[l.aG,i.tab_not_empty(e)]]))),256))])):(0,n.Q3)("",!0)],2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(4),"step_info"])},t[5]||(t[5]=[(0,n.Lk)("div",{class:"step_number"},"4.",-1),(0,n.Lk)("div",{class:"step_title"},"Rekapitulácia",-1)]),2),(0,n.Lk)("div",{class:(0,a.C4)([i.step_info_class(5),"step_info"])},t[6]||(t[6]=[(0,n.Lk)("div",{class:"step_number"},"5.",-1),(0,n.Lk)("div",{class:"step_title"},"Dokončenie",-1)]),2)])])):(0,n.Q3)("",!0)}var j={props:{show_back:Boolean},components:{},emits:[],data(){return{}},created(){},methods:{step_info_class(e){return e<this.step?"completed":e===this.step?"current":""},step_tab_class(e){return e<(0,k.A)().get_current_tab()?"completed":e===(0,k.A)().get_current_tab()?"current":""},tab_not_empty(e){return!w.A.this_tab_is_empty(e)}},computed:{step(){return(0,p.A)().current_step()},tab_count(){return(0,k.A)().get_tab_keys()},not_shown_in_technical_steps(){return this.step<10}},watch:{}};const P=(0,y.A)(j,[["render",W]]);var Q=P;const V={key:0,class:"upper_nav expanding-label","data-cy":"upper_navigation"},$=["disabled"],z=["disabled"],T={class:"btn-exp__label"},F=["disabled"],q=["disabled"],G={key:1,class:"upper_remap text-center text-lg-end"},O={class:"btn-exp__label"};function I(e,t,s,r,o,i){return(0,n.uX)(),(0,n.CE)(n.FK,null,[i.not_shown_in_technical_steps?((0,n.uX)(),(0,n.CE)("div",V,[i.show_back?((0,n.uX)(),(0,n.CE)("button",{key:0,disabled:i.loading,onClick:t[0]||(t[0]=(...e)=>i.prev&&i.prev(...e)),type:"button",class:"btn btn-exp btn-light btn-left btn-m"},t[5]||(t[5]=[(0,n.Lk)("span",{class:"btn-exp__label"},"Naspäť",-1)]),8,$)):(0,n.Q3)("",!0),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.clear&&i.clear(...e)),disabled:i.loading,type:"button",class:(0,a.C4)(["btn btn-exp btn-white btn-delete btn-m",i.show_new?"expanded":""])},[(0,n.Lk)("span",T,(0,a.v_)(i.show_new?"Vytvoriť nové porovnanie":"Vymazať"),1)],10,z),i.show_next?((0,n.uX)(),(0,n.CE)("button",{key:1,disabled:i.loading,onClick:t[2]||(t[2]=(...e)=>i.next&&i.next(...e)),type:"button",class:"btn btn-exp expanded btn-primary btn-right btn-m"},t[6]||(t[6]=[(0,n.Lk)("span",{class:"btn-exp__label"},"Pokračovať",-1)]),8,F)):(0,n.Q3)("",!0),i.show_down?((0,n.uX)(),(0,n.CE)("button",{key:2,disabled:i.loading,onClick:t[3]||(t[3]=(...e)=>i.down&&i.down(...e)),type:"button",class:"btn btn-exp expanded btn-primary btn-down btn-m"},t[7]||(t[7]=[(0,n.Lk)("span",{class:"btn-exp__label"},null,-1)]),8,q)):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0),o.enable_upper_remap_testing?((0,n.uX)(),(0,n.CE)("div",G,[i.show_remap?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[4]||(t[4]=(...e)=>i.remap_debug&&i.remap_debug(...e)),type:"button",class:"btn btn-exp expanded btn-outline-secondary btn-m"},[(0,n.Lk)("span",O,(0,a.v_)(o.remap_loading?"Načítavam havarijné poistenie...":"Prejsť na havarijné poistenie"),1)])):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0)],64)}var K=s(880),D={props:{},components:{},emits:[],data(){return{remap_loading:!1,enable_upper_remap_testing:!1}},created(){},methods:{prev(){(0,k.A)().set_requested_direction("backward")},next(){(0,k.A)().set_requested_direction("forward")},clear(){(0,v.A)().open_it("Cleaning_session")},down(){let e={2:"product_list_scroll_anchor",4:"proposal_scroll_anchor"};w.A.adjust_view(e[this.step])},remap_debug(){let e=2;this.remap_loading=!0,K.A.session_remap(e).then((t=>{this.remap_loading=!1,200===t.status&&w.A.open_remap("new",e,t.result?.new_token)}))}},computed:{step(){return(0,p.A)().current_step()},show_back(){return(1!==this.step||!(0,k.A)().current_tab_is_first())&&(this.step>0&&this.step<5)},show_next(){return this.step>0&&this.step<4&&2!==this.step},show_down(){return 2===this.step||4===this.step},loading(){return(0,v.A)().is_loading()},not_shown_in_technical_steps(){return this.step<10},show_new(){return this.step>=5},show_remap(){return 1===(0,p.A)().product_group_id()}},watch:{}};const R=(0,y.A)(D,[["render",I]]);var Z=R;const N=["href"];function U(e,t,s,r,o,i){return i.show_support?((0,n.uX)(),(0,n.CE)("div",{key:0,class:(0,a.C4)([o.is_opened?"":"is_closed","call_support justify-content-between"])},[(0,n.Lk)("a",{onClick:t[0]||(t[0]=(...e)=>i.open_support&&i.open_support(...e)),class:"open_support"},t[2]||(t[2]=[(0,n.Lk)("span",{class:"i_phone"},null,-1)])),(0,n.Lk)("a",{class:"btn-text i_anchor",href:i.support_phone},t[3]||(t[3]=[(0,n.Lk)("span",{class:"i_phone"},null,-1),(0,n.eW)(" Pomôžeme Vám ")]),8,N),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>i.close_support&&i.close_support(...e)),class:"close_support btn-white"})],2)):(0,n.Q3)("",!0)}var B=s(9819),H=s(6645),J={props:{},components:{},emits:[],data(){return{is_opened:!1,c_name:"support_closed",c_expire:180,timeout:8e3}},created(){let e=H.A.get_cookie(this.c_name);!0!==e&&setTimeout((()=>{this.open_support()}),this.timeout)},methods:{open_support(){this.is_opened=!0},close_support(){this.is_opened=!1,H.A.set_cookie(this.c_name,!0,this.c_expire)},is_business_hours(){let e=new Date,t=e.getDay(),s=e.getHours();return t>=1&&t<=5&&s>=9&&s<17}},computed:{support_phone(){return"tel:"+B.A.callcentrum_phone()},show_support(){let e=(0,p.A)().get_backend_type(),t=(0,g.A)().direct_user_no_agent(),s=this.is_business_hours(),n=(0,p.A)().current_step();return!!(("np_wp"===e||"fp_symfony"===e||"np_symfony"===e)&&n>=1&&n<=3&&t&&s)}},watch:{}};const M=(0,y.A)(J,[["render",U]]);var Y=M;const ee=(0,n.$V)((()=>s.e(458).then(s.bind(s,7458)))),te=(0,n.$V)((()=>Promise.all([s.e(451),s.e(517),s.e(629),s.e(646)]).then(s.bind(s,3572)))),se=(0,n.$V)((()=>Promise.all([s.e(451),s.e(517),s.e(401),s.e(189)]).then(s.bind(s,3381)))),ne=(0,n.$V)((()=>Promise.all([s.e(218),s.e(421)]).then(s.bind(s,8020)))),ae=(0,n.$V)((()=>Promise.all([s.e(623),s.e(218),s.e(136)]).then(s.bind(s,2113)))),re=(0,n.$V)((()=>Promise.all([s.e(623),s.e(466)]).then(s.bind(s,7307)))),oe=(0,n.$V)((()=>s.e(582).then(s.bind(s,2582)))),ie=(0,n.$V)((()=>Promise.all([s.e(451),s.e(854)]).then(s.bind(s,4854)))),pe=(0,n.$V)((()=>s.e(426).then(s.bind(s,426)))),_e=(0,n.$V)((()=>s.e(156).then(s.bind(s,4156)))),le=(0,n.$V)((()=>s.e(127).then(s.bind(s,3127))));var ce={props:{},components:{Info:_.A,Progress_bar:L,Zeteo_progress:Q,Upper_nav:Z,Call_support:Y,Step0_offer:ee,Step1_groupform:te,Step2_results:se,Step4_proposal:ne,Step5_confirm:ae,Step6_payment:re,Step88_boris:oe,Step99_lukas:ie,Step_manager_111:pe,Step_error_404:_e,Step_maintenance_503:le},emits:[],data(){return{}},created(){},methods:{},computed:{step(){return(0,p.A)().current_step()},classic_np_progress_bar(){return!(0,p.A)().is_zeteo_skin()}},watch:{}};const ue=(0,y.A)(ce,[["render",i]]);var de=ue},2327:function(e,t,s){s.d(t,{A:function(){return C}});var n=s(641),a=s(33),r=s(3751);const o={class:"info_for_session","data-cy":"info"},i=["title"],p={title:"endpoint"},_={title:"receiver name (id)"},l={title:"session token"},c={title:"agent code"},u={title:"filtred products"},d={title:"osmapp version"},h={key:0,title:"step | state | finished | internal"};function m(e,t,s,m,b,k){return(0,n.bo)(((0,n.uX)(),(0,n.CE)("section",o,[(0,n.Lk)("h2",{title:k.print_group},(0,a.v_)(k.heading),9,i),(0,n.Lk)("p",p,(0,a.v_)(k.print_endpoint),1),(0,n.Lk)("p",_,(0,a.v_)(k.print_receiver),1),(0,n.Lk)("p",l,(0,a.v_)(k.print_session_token),1),(0,n.Lk)("p",c,(0,a.v_)(k.print_agent_code),1),(0,n.Lk)("p",u,(0,a.v_)(k.print_filtered_products),1),(0,n.Lk)("p",d,(0,a.v_)(k.print_version),1),k.print_flow?((0,n.uX)(),(0,n.CE)("p",h,(0,a.v_)(k.print_flow),1)):(0,n.Q3)("",!0)],512)),[[r.aG,k.info_shown]])}var b=s(8700),k=s(3177),v=s(5143),g=s(9614),f=s(9819),w={props:{},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{group_id(){return(0,b.A)().product_group_id()},heading(){return"node_red"===(0,b.A)().get_run_mode()?"node_red | "+(0,v.A)().get_workflow_name():111===(0,b.A)().current_step()?"cookie session manager":f.A.group_name(this.group_id)},print_group(){return"group name, for id: "+this.group_id},print_session_token(){return(0,b.A)().get_session_token()||"-"},print_agent_code(){return(0,k.A)().get_agent_code()||"-"},print_filtered_products(){return(0,k.A)().get_filtered_products()||"-"},print_version(){return(0,b.A)().give_app_version()},print_endpoint(){return(0,b.A)().get_endpoint_type()},print_receiver(){let e=(0,k.A)().get_receiver();return f.A.receiver_names(e)+" ("+e+")"},print_flow(){return"node_red"===(0,b.A)().get_run_mode()&&(0,v.A)().get_workflow_step()+" | "+(0,v.A)().get_workflow_step_state()+" | "+((0,v.A)().get_workflow_finished()?"finished":"")+" | "+((0,v.A)().get_workflow_internal()?"internal":"")},info_shown(){return!(0,b.A)().is_prod_endpoint()||(0,k.A)().capable_agent()||(0,g.A)().show_info_section()}},watch:{}},A=s(6262);const y=(0,A.A)(w,[["render",m]]);var C=y}}]);