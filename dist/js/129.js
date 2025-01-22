"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[129],{3175:function(e,t,a){var n=a(1114),s=a(8700),o=a(2873),r=a(5833),i=a(2754),c=a(3177);class d{constructor(){(0,n.A)(this,"params",{}),(0,n.A)(this,"headers",{}),(0,n.A)(this,"auth_fails",0),(0,n.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,i.A)().get_abort_signal(),headers:{"x-user-scope":(0,s.A)().give_api_scope(),Authorization:(0,s.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,s.A)().get_backend_type(),t=(0,s.A)().get_endpoint_type(),a=(0,c.A)().get_receiver(),n={php_wrapper:"/authorize_frontend/?endpoint="+t+"&receiver="+a,np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/?receiver="+a,np_symfony:"/osmapp/auth/?receiver="+a};if(n.hasOwnProperty(e)){let t=window.location.origin+n[e];return fetch(t).then((e=>e.json())).then((e=>!!e&&((0,s.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+t+"&receiver="+a;return fetch(e).then((e=>e.json())).then((e=>((0,s.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,s.A)().myport_access_token_promise().then((e=>!1!==e&&((0,s.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,o.A)().open_it("Clearance"),e;if(503===e.status)return(0,s.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,o.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let t=(new Date).toLocaleString(),a=(0,s.A)().get_session_token(),n=(0,s.A)().current_step();return(0,r.A)().set_last_request(this.headers,this.params,t,a,n,e),(0,s.A)().change_step(404),(0,o.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,t)=>{let a=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),n={};fetch(this.params.url,this.headers).then((e=>{n=e;let t=e.headers.get("content-type");return-1===t.indexOf("json")?{response:"not in json format"}:e.json()})).then((t=>{n.result=t,e(n)})).catch((e=>{"AbortError"===e.name?(clearTimeout(a),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}t.A=d},8856:function(e,t,a){var n=a(8700),s=a(6343),o=a(3175),r=a(3177);class i{get_it(e){!1===e&&(e=(0,r.A)().get_selected_product().next_contract);let t={action_name:"gethtml",method:"POST",url:(0,n.A)().endpoint_url()+"online/gethtml/?id="+e+s.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}get_json_api(e){let t={action_name:"getjson",method:"POST",url:(0,n.A)().endpoint_url()+"online/getjson/?id="+e+s.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new i},3886:function(e,t,a){var n=a(8700),s=a(6343),o=a(3175);class r{session_documents(e){let t={action_name:"getsessiondocuments",method:"GET",url:(0,n.A)().endpoint_url()+"online/getsessiondocuments/?"+s.A.add_token_as_parameter()};e&&(t.url+="&user_uploaded=true");let a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}get_session_document(e){let t={action_name:"getsessiondocument",method:"GET",url:(0,n.A)().endpoint_url()+"online/getsessiondocument/"+e+"/?"+s.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}get_session_document_preview(e,t){let a={action_name:"getsessiondocument",method:"GET",url:(0,n.A)().endpoint_url()+"online/getsessiondocument/"+e+"/?"+s.A.add_token_as_parameter()};a.url+="&filters=thumbnail&thumbnail_mode=outbound&thumbnail_width="+t+"&thumbnail_height="+t;let r=new o.A;return r.prepare_params(a).handle_response().catch((e=>{throw e}))}upload_session_document(e){let t={action_name:"createsessiondocument",method:"POST",body:e,content_type:null,url:(0,n.A)().endpoint_url()+"online/createsessiondocument/?"+s.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}delete_session_document(e){let t={action_name:"delete-uploaded-session-documents",method:"DELETE",url:(0,n.A)().endpoint_url()+"online/delete-uploaded-session-documents/?id="+e+s.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new r},4162:function(e,t,a){var n=a(8700),s=a(6343),o=a(3175),r=a(3177);class i{static_documents(){let e={action_name:"getdocuments",method:"GET",url:(0,n.A)().endpoint_url()+"online/getdocuments/"+(0,r.A)().get_selected_product().product_id+"/?"+s.A.add_token_as_parameter()},t=new o.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}get_static_document(e){let t={action_name:"getdocument",method:"GET",url:(0,n.A)().endpoint_url()+"online/getdocument/"+(0,r.A)().get_selected_product().product_id+"/"+e+"/?"+s.A.add_token_as_parameter()+"&nocontent=true"},a=new o.A;return a.prepare_params(t).handle_response().catch((e=>{throw e}))}}t.A=new i},3556:function(e,t,a){a.d(t,{A:function(){return g}});var n=a(641),s=a(33),o=a(3751);const r={class:"w-100 btn-text text-start"};function i(e,t,a,i,c,d){const u=(0,n.g2)("Bouncer_loading");return d.display_document?((0,n.uX)(),(0,n.CE)("button",{key:0,"data-cy":"document_download",onClick:t[0]||(t[0]=(...e)=>d.download_pdf&&d.download_pdf(...e)),class:(0,s.C4)(["d-flex btn-text i_anchor",d.still_waiting?"document_waiting":""])},[(0,n.Lk)("div",r,[(0,n.eW)((0,s.v_)(d.name)+" ",1),(0,n.bo)((0,n.bF)(u,{size:"small"},null,512),[[o.aG,d.still_waiting]])]),t[1]||(t[1]=(0,n.Lk)("div",{class:"flex-shrink my-auto"},[(0,n.Lk)("span",{class:"i_download_item"})],-1))],2)):(0,n.Q3)("",!0)}var c=a(4162),d=a(3886),u=a(55),_=a(6343),l=a(8700),p={props:{doc:Object},components:{Bouncer_loading:u.A},data(){return{is_downloading:!1}},created(){},methods:{download_pdf(){this.still_waiting||(this.is_downloading=!0,this.is_static?c.A.get_static_document(this.doc.id).then((e=>{if(200===e.status){if(void 0!==e.result.download_token&&null!==e.result.download_token){let t=(0,l.A)().document_url()+"?access_token="+e.result.download_token;window.open(t)}else _.A.downloadBase64(this.name,e.result.content);this.is_downloading=!1}else this.is_downloading=!1})):d.A.get_session_document(this.doc.id).then((e=>{200===e.status?(_.A.downloadBase64(this.name,e.result.content),this.is_downloading=!1):this.is_downloading=!1})))}},computed:{is_static(){return void 0!==this.doc.filename},name(){return this.is_static?this.doc.filename:this.doc.name},display_document(){return"ws-preview.tmp"!==this.name&&"error"!==this.doc.documentState},still_waiting(){return!!this.is_downloading||!this.is_static&&("waiting"===this.doc.documentState||"available"!==this.doc.documentState)}}},h=a(6262);const m=(0,h.A)(p,[["render",i],["__scopeId","data-v-b171228e"]]);var g=m},55:function(e,t,a){a.d(t,{A:function(){return u}});var n=a(641),s=a(33);const o={class:"spinner"};function r(e,t,a,r,i,c){return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.Lk)("div",{class:(0,s.C4)(["bounce1",a.size])},null,2),(0,n.Lk)("div",{class:(0,s.C4)(["bounce2",a.size])},null,2),(0,n.Lk)("div",{class:(0,s.C4)(["bounce3",a.size])},null,2)])}var i={props:{size:String},components:{},data(){return{}},created(){},methods:{},computed:{}},c=a(6262);const d=(0,c.A)(i,[["render",r]]);var u=d}}]);