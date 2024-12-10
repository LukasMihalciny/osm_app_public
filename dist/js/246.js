"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[246],{3175:function(t,e,a){var s=a(1114),n=a(8700),r=a(2873),i=a(5833),o=a(2754),c=a(3177);class p{constructor(){(0,s.A)(this,"params",{}),(0,s.A)(this,"headers",{}),(0,s.A)(this,"auth_fails",0),(0,s.A)(this,"auth_max",6)}prepare_params(t){return this.params=t,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,o.A)().get_abort_signal(),headers:{"x-user-scope":(0,n.A)().give_api_scope(),Authorization:(0,n.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let t=(0,n.A)().get_backend_type(),e=(0,n.A)().get_endpoint_type(),a={php_wrapper:"/authorize_frontend/?endpoint="+e+"&receiver="+(0,c.A)().get_receiver(),np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/"};if(a.hasOwnProperty(t)){let e=window.location.origin+a[t];return fetch(e).then((t=>t.json())).then((t=>!!t&&((0,n.A)().save_bearer(t),!0)))}if("lukas_local"===t){let t="http://wrapper.local/authorize_frontend/?endpoint="+e+"&receiver="+(0,c.A)().get_receiver();return fetch(t).then((t=>t.json())).then((t=>((0,n.A)().save_bearer(t),console.log("NEW BEARER:"),console.log(t),!0)))}return"vue"===t?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===t?(0,n.A)().myport_access_token_promise().then((t=>!1!==t&&((0,n.A)().save_bearer(t),!0))):(console.log("backend_type "+t+" has no access to new authorization"),!1)}async handle_response(){let t=await this.call_the_api_request();if(200===t.status)return this.auth_fails=0,t;if(401===t.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let t=await this.unauthorized();return t?await this.prepare_params(this.params).handle_response():null}if(423===t.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,r.A)().open_it("Clearance"),t;if(503===t.status)return(0,n.A)().change_step(503),t;if(408===t.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,r.A)().open_it("Server_timeout"),t;if(500===t.status&&"calculate_step2"===this.params.action_name||422===t.status&&"confirm"===this.params.action_name||412===t.status&&"confirm"===this.params.action_name||422===t.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===t.status&&"session-remap"===this.params.action_name||422===t.status&&"id-scan/add-page"===this.params.action_name||422===t.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===t.status||409===t.status)&&"signature-code-check"===this.params.action_name||(422===t.status||409===t.status)&&"signature-code-send"===this.params.action_name||500===t.status&&"id-scan/get-scan-groups"===this.params.action_name||425===t.status&&"id-scan/get-scan-groups"===this.params.action_name||425===t.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===t.status&&"payment-create"===this.params.action_name||422===t.status&&"offer-notify"===this.params.action_name)return t;{let e=(new Date).toLocaleString(),a=(0,n.A)().get_session_token(),s=(0,n.A)().current_step();return(0,i.A)().set_last_request(this.headers,this.params,e,a,s,t),(0,n.A)().change_step(404),(0,r.A)().close_them_all(),t}}call_the_api_request(){return new Promise(((t,e)=>{let a=setTimeout((function(){return t({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),s={};fetch(this.params.url,this.headers).then((t=>{s=t;let e=t.headers.get("content-type");return-1===e.indexOf("json")?{response:"not in json format"}:t.json()})).then((e=>{s.result=e,t(s)})).catch((t=>{"AbortError"===t.name?(clearTimeout(a),console.log("abort",this.params.action_name)):console.error("Fetch error:",t)}))}))}}e.A=p}}]);