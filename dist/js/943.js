"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[943],{3175:function(e,t,a){var s=a(1114),n=a(8700),o=a(2873),r=a(5833),i=a(2754),c=a(3177);class d{constructor(){(0,s.A)(this,"params",{}),(0,s.A)(this,"headers",{}),(0,s.A)(this,"auth_fails",0),(0,s.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,i.A)().get_abort_signal(),headers:{"x-user-scope":(0,n.A)().give_api_scope(),Authorization:(0,n.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,n.A)().get_backend_type(),t=(0,n.A)().get_endpoint_type(),a={php_wrapper:"/authorize_frontend/?endpoint="+t+"&receiver="+(0,c.A)().get_receiver(),np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/"};if(a.hasOwnProperty(e)){let t=window.location.origin+a[e];return fetch(t).then((e=>e.json())).then((e=>!!e&&((0,n.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+t+"&receiver="+(0,c.A)().get_receiver();return fetch(e).then((e=>e.json())).then((e=>((0,n.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,n.A)().myport_access_token_promise().then((e=>!1!==e&&((0,n.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,o.A)().open_it("Clearance"),e;if(503===e.status)return(0,n.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,o.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let t=(new Date).toLocaleString(),a=(0,n.A)().get_session_token(),s=(0,n.A)().current_step();return(0,r.A)().set_last_request(this.headers,this.params,t,a,s,e),(0,n.A)().change_step(404),(0,o.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,t)=>{let a=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),s={};fetch(this.params.url,this.headers).then((e=>{s=e;let t=e.headers.get("content-type");return-1===t.indexOf("json")?{response:"not in json format"}:e.json()})).then((t=>{s.result=t,e(s)})).catch((e=>{"AbortError"===e.name?(clearTimeout(a),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}t.A=d},8856:function(e,t,a){var s=a(8700),n=a(6343),o=a(3175),r=a(3177);class i{get_it(e){!1===e&&(e=(0,r.A)().get_selected_product().next_contract);let t={action_name:"gethtml",method:"POST",url:(0,s.A)().endpoint_url()+"online/gethtml/?id="+e+n.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}get_json_api(e){let t={action_name:"getjson",method:"POST",url:(0,s.A)().endpoint_url()+"online/getjson/?id="+e+n.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new i},3886:function(e,t,a){var s=a(8700),n=a(6343),o=a(3175);class r{session_documents(e){let t={action_name:"getsessiondocuments",method:"GET",url:(0,s.A)().endpoint_url()+"online/getsessiondocuments/?"+n.A.add_token_as_parameter()};e&&(t.url+="&user_uploaded=true");let a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}get_session_document(e){let t={action_name:"getsessiondocument",method:"GET",url:(0,s.A)().endpoint_url()+"online/getsessiondocument/"+e+"/?"+n.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}get_session_document_preview(e,t){let a={action_name:"getsessiondocument",method:"GET",url:(0,s.A)().endpoint_url()+"online/getsessiondocument/"+e+"/?"+n.A.add_token_as_parameter()};a.url+="&filters=thumbnail&thumbnail_mode=outbound&thumbnail_width="+t+"&thumbnail_height="+t;let r=new o.A;return r.prepare_params(a).handle_response().catch((e=>{throw e}))}upload_session_document(e){let t={action_name:"createsessiondocument",method:"POST",body:e,content_type:null,url:(0,s.A)().endpoint_url()+"online/createsessiondocument/?"+n.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}delete_session_document(e){let t={action_name:"delete-uploaded-session-documents",method:"DELETE",url:(0,s.A)().endpoint_url()+"online/delete-uploaded-session-documents/?id="+e+n.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new r},4162:function(e,t,a){var s=a(8700),n=a(6343),o=a(3175),r=a(3177);class i{static_documents(){let e={action_name:"getdocuments",method:"GET",url:(0,s.A)().endpoint_url()+"online/getdocuments/"+(0,r.A)().get_selected_product().product_id+"/?"+n.A.add_token_as_parameter()},t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}get_static_document(e){let t={action_name:"getdocument",method:"GET",url:(0,s.A)().endpoint_url()+"online/getdocument/"+(0,r.A)().get_selected_product().product_id+"/"+e+"/?"+n.A.add_token_as_parameter()+"&nocontent=true"},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new i},3556:function(e,t,a){a.d(t,{A:function(){return w}});var s=a(641),n=a(33),o=a(3751);const r=e=>((0,s.Qi)("data-v-b171228e"),e=e(),(0,s.jt)(),e),i={class:"w-100 btn-text text-start"},c=r((()=>(0,s.Lk)("div",{class:"flex-shrink my-auto"},[(0,s.Lk)("span",{class:"i_download_item"})],-1)));function d(e,t,a,r,d,l){const u=(0,s.g2)("Bouncer_loading");return l.display_document?((0,s.uX)(),(0,s.CE)("button",{key:0,"data-cy":"document_download",onClick:t[0]||(t[0]=(...e)=>l.download_pdf&&l.download_pdf(...e)),class:(0,n.C4)(["d-flex btn-text i_anchor",l.still_waiting?"document_waiting":""])},[(0,s.Lk)("div",i,[(0,s.eW)((0,n.v_)(l.name)+" ",1),(0,s.bo)((0,s.bF)(u,{size:"small"},null,512),[[o.aG,l.still_waiting]])]),c],2)):(0,s.Q3)("",!0)}var l=a(4162),u=a(3886),_=a(55),p=a(6343),m=a(8700),h={props:{doc:Object},components:{Bouncer_loading:_.A},data(){return{is_downloading:!1}},created(){},methods:{download_pdf(){this.still_waiting||(this.is_downloading=!0,this.is_static?l.A.get_static_document(this.doc.id).then((e=>{if(200===e.status){if(void 0!==e.result.download_token&&null!==e.result.download_token){let t=(0,m.A)().document_url()+"?access_token="+e.result.download_token;window.open(t)}else p.A.downloadBase64(this.name,e.result.content);this.is_downloading=!1}else this.is_downloading=!1})):u.A.get_session_document(this.doc.id).then((e=>{200===e.status?(p.A.downloadBase64(this.name,e.result.content),this.is_downloading=!1):this.is_downloading=!1})))}},computed:{is_static(){return void 0!==this.doc.filename},name(){return this.is_static?this.doc.filename:this.doc.name},display_document(){return"ws-preview.tmp"!==this.name&&"error"!==this.doc.documentState},still_waiting(){return!!this.is_downloading||!this.is_static&&("waiting"===this.doc.documentState||"available"!==this.doc.documentState)}}},v=a(6262);const g=(0,v.A)(h,[["render",d],["__scopeId","data-v-b171228e"]]);var w=g},55:function(e,t,a){a.d(t,{A:function(){return l}});var s=a(641),n=a(33);const o={class:"spinner"};function r(e,t,a,r,i,c){return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("div",{class:(0,n.C4)(["bounce1",a.size])},null,2),(0,s.Lk)("div",{class:(0,n.C4)(["bounce2",a.size])},null,2),(0,s.Lk)("div",{class:(0,n.C4)(["bounce3",a.size])},null,2)])}var i={props:{size:String},components:{},data(){return{}},created(){},methods:{},computed:{}},c=a(6262);const d=(0,c.A)(i,[["render",r]]);var l=d},8943:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=a(641);const n=["innerHTML"],o={class:"docs_download"};function r(e,t,a,r,i,c){const d=(0,s.g2)("Document_download"),l=(0,s.g2)("Modal_body");return(0,s.uX)(),(0,s.Wv)(l,{close:!0,title:i.title,huge:!0},{default:(0,s.k6)((()=>[(0,s.Lk)("div",{innerHTML:i.html,class:"product_detail_html"},null,8,n),(0,s.Lk)("div",o,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.static_docs,((e,t)=>((0,s.uX)(),(0,s.Wv)(d,{doc:e},null,8,["doc"])))),256))])])),_:1},8,["title"])}var i=a(8384),c=a(2873),d=a(8856),l=a(4162),u=a(3556),_={props:{},components:{Modal_body:i.A,Document_download:u.A},emits:[],data(){return{title:"",html:"",static_docs:{}}},created(){let e=(0,c.A)().retrieve_modal_data();this.title=e.product_name,d.A.get_it(e.detail_template).then((e=>{200===e.status&&(this.html=e.result.html,this.add_tab_listeners())})),l.A.static_documents().then((e=>{200===e.status&&(this.static_docs=e.result.documents)}))},methods:{add_tab_listeners(){setTimeout((()=>{let e=document.querySelectorAll("#osm_app .vue_modal .tab-pane");for(let s in e)e.hasOwnProperty(s)&&(e[s].classList.remove("fade","in"),e[s].parentNode.classList.contains("tab-pane")&&e[s].parentNode.parentNode.appendChild(e[s]));let t=document.querySelectorAll("#osm_app .vue_modal ul.nav-tabs a");for(let s in t)t.hasOwnProperty(s)&&t[s].addEventListener("click",(a=>{a.preventDefault();let s=a.target.hash.replace("#","");for(let n in e)e.hasOwnProperty(n)&&(e[n].classList.remove("active"),t[n].parentNode.classList.remove("active"),e[n].id===s&&(e[n].classList.add("active"),t[n].parentNode.classList.add("active")))}));let a=document.querySelectorAll("#osm_app .vue_modal .product_detail_tab_switcher");for(let s in a){if(!a.hasOwnProperty(s))continue;let n=a[s].dataset.show,o=a[s].dataset.scroll;a[s].addEventListener("click",(a=>{a.preventDefault();for(let o in e)e.hasOwnProperty(o)&&(e[o].classList.remove("active"),t[o].parentNode.classList.remove("active"),parseInt(o,10)===parseInt(n,10)-1&&(e[o].classList.add("active"),t[o].parentNode.classList.add("active")));let s=document.querySelector("#osm_app .vue_modal ."+o);null!==s&&s.scrollIntoView()}))}}),100)}},computed:{},watch:{}},p=a(6262);const m=(0,p.A)(_,[["render",r],["__scopeId","data-v-fbb973fc"]]);var h=m},8384:function(e,t,a){a.d(t,{A:function(){return p}});var s=a(641),n=a(33);const o={class:"modal-content"},r={class:"modal-header"},i={class:"modal-body"};function c(e,t,a,c,d,l){return(0,s.uX)(),(0,s.CE)("div",{onClick:t[1]||(t[1]=(...e)=>l.did_click_outside&&l.did_click_outside(...e)),class:(0,n.C4)(["vue_modal",a.huge?"huge":""]),"data-cy":"modal"},[(0,s.Lk)("div",o,[(0,s.Lk)("div",r,[(0,s.Lk)("h4",null,(0,n.v_)(a.title),1),a.close?((0,s.uX)(),(0,s.CE)("span",{key:0,onClick:t[0]||(t[0]=(...e)=>l.close_me&&l.close_me(...e)),class:"i_close"})):(0,s.Q3)("",!0)]),(0,s.Lk)("div",i,[(0,s.RG)(e.$slots,"default")])])],2)}var d=a(2873),l={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,d.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},u=a(6262);const _=(0,u.A)(l,[["render",c]]);var p=_}}]);