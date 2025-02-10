"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[251],{3175:function(e,a,t){var s=t(1114),n=t(8700),i=t(2873),o=t(5833),c=t(2754),r=t(3177);class d{constructor(){(0,s.A)(this,"params",{}),(0,s.A)(this,"headers",{}),(0,s.A)(this,"auth_fails",0),(0,s.A)(this,"auth_max",6)}prepare_params(e){return this.params=e,void 0===this.params.timeout&&(this.params.timeout=29),this.headers={method:this.params.method,mode:"cors",cache:"no-cache",credentials:"omit",signal:(0,c.A)().get_abort_signal(),headers:{"x-user-scope":(0,n.A)().give_api_scope(),Authorization:(0,n.A)().give_bearer(),Accept:"application/json"}},"POST"===this.params.method&&this.params.body&&(this.headers.body=this.params.body),void 0===this.params.content_type?this.headers.headers["Content-Type"]="application/x-www-form-urlencoded":null!==this.params.content_type&&(this.headers.headers["Content-Type"]=this.params.content_type),this}async unauthorized(){let e=(0,n.A)().get_backend_type(),a=(0,n.A)().get_endpoint_type(),t=(0,r.A)().get_receiver(),s={php_wrapper:"/authorize_frontend/?endpoint="+a+"&receiver="+t,np_wp:"/wp-content/themes/najpoistenie/api_php_requests/authorize_frontend.php",fp_symfony:"/osmapp/auth/?receiver="+t,np_symfony:"/osmapp/auth/?receiver="+t};if(s.hasOwnProperty(e)){let a=window.location.origin+s[e];return fetch(a).then((e=>e.json())).then((e=>!!e&&((0,n.A)().save_bearer(e),!0)))}if("lukas_local"===e){let e="http://wrapper.local/authorize_frontend/?endpoint="+a+"&receiver="+t;return fetch(e).then((e=>e.json())).then((e=>((0,n.A)().save_bearer(e),console.log("NEW BEARER:"),console.log(e),!0)))}return"vue"===e?(console.log("VUE does not have 401 auth service, fill access_token into env.js"),!1):"myport"===e?(0,n.A)().myport_access_token_promise().then((e=>!1!==e&&((0,n.A)().save_bearer(e),!0))):(console.log("backend_type "+e+" has no access to new authorization"),!1)}async handle_response(){let e=await this.call_the_api_request();if(200===e.status)return this.auth_fails=0,e;if(401===e.status){if(this.auth_fails++,this.auth_fails>this.auth_max)return console.log("Authorization reched maximum attempts. Try to refresh the app or report to admin."),{};let e=await this.unauthorized();return e?await this.prepare_params(this.params).handle_response():null}if(423===e.status&&-1===["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name))return(0,i.A)().open_it("Clearance"),e;if(503===e.status)return(0,n.A)().change_step(503),e;if(408===e.status)return console.log("408 in request "+this.params.action_name),-1===["calculate_step2","calculate_step4","confirm"].indexOf(this.params.action_name)&&(0,i.A)().open_it("Server_timeout"),e;if(500===e.status&&"calculate_step2"===this.params.action_name||422===e.status&&"confirm"===this.params.action_name||412===e.status&&"confirm"===this.params.action_name||422===e.status&&"getsessioninfo"===this.params.action_name||"ico-info"===this.params.action_name||["car-data-search","car-valuation-options","car-valuation-price"].indexOf(this.params.action_name)>-1||422===e.status&&"session-remap"===this.params.action_name||422===e.status&&"id-scan/add-page"===this.params.action_name||422===e.status&&"id-scan/get-scan-groups"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-check"===this.params.action_name||(422===e.status||409===e.status)&&"signature-code-send"===this.params.action_name||500===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-groups"===this.params.action_name||425===e.status&&"id-scan/get-scan-group-documents"===this.params.action_name||422===e.status&&"payment-create"===this.params.action_name||422===e.status&&"offer-notify"===this.params.action_name)return e;{let a=(new Date).toLocaleString(),t=(0,n.A)().get_session_token(),s=(0,n.A)().current_step();return(0,o.A)().set_last_request(this.headers,this.params,a,t,s,e),(0,n.A)().change_step(404),(0,i.A)().close_them_all(),e}}call_the_api_request(){return new Promise(((e,a)=>{let t=setTimeout((function(){return e({status:408,statusText:"Request Timeout"})}),1e3*this.params.timeout),s={};fetch(this.params.url,this.headers).then((e=>{s=e;let a=e.headers.get("content-type");return-1===a.indexOf("json")?{response:"not in json format"}:e.json()})).then((a=>{s.result=a,e(s)})).catch((e=>{"AbortError"===e.name?(clearTimeout(t),console.log("abort",this.params.action_name)):console.error("Fetch error:",e)}))}))}}a.A=d},7618:function(e,a,t){var s=t(1114),n=t(6343),i=t(9452),o=t(6460);class c{constructor(){(0,s.A)(this,"field_id","")}check_scan_promise(){return new Promise(((e,a)=>{this.scan_input_in_current_tab()?i.A.session_info().then((t=>{if(200!==t.status)return void a("sessioninfo failed");let s=t.result.scan_id_required,i=t.result.scan_id_succeeded;1===s&&0===i?((0,o.A)().set_one_error(this.field_id,"Občianský preukaz je povinný."),n.A.adjust_view(!0),a("scan required, reject validate")):((0,o.A)().clear_one_error(this.field_id),e())})):e()}))}scan_input_in_current_tab(){let e=n.A.active_tab();for(let a in e){let t=n.A.first_value(e[a]),s=n.A.first_key(e[a]);if("scan_modal"===t.type_settings?.upload)return this.field_id=s,!0}return!1}}a.A=new c},9452:function(e,a,t){var s=t(8700),n=t(6343),i=t(3175);class o{session_info(){let e={action_name:"getsessioninfo",method:"GET",url:(0,s.A)().endpoint_url()+"online/getsessioninfo/?"+n.A.add_token_as_parameter()},a=new i.A;return a.prepare_params(e).handle_response().catch((e=>{throw e}))}get_data(){let e={action_name:"getdata",method:"GET",url:(0,s.A)().endpoint_url()+"online/getdata/?"+n.A.add_token_as_parameter()},a=new i.A;return a.prepare_params(e).handle_response().catch((e=>{throw e}))}set_data(e){let a={action_name:"setdata",method:"POST",url:(0,s.A)().endpoint_url()+"online/setdata/?"+n.A.serialize_object(e)+n.A.add_token_as_parameter()},t=new i.A;return t.prepare_params(a).handle_response().catch((e=>{throw e}))}}a.A=new o},55:function(e,a,t){t.d(a,{A:function(){return l}});var s=t(641),n=t(33);const i={class:"spinner"};function o(e,a,t,o,c,r){return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("div",{class:(0,n.C4)(["bounce1",t.size])},null,2),(0,s.Lk)("div",{class:(0,n.C4)(["bounce2",t.size])},null,2),(0,s.Lk)("div",{class:(0,n.C4)(["bounce3",t.size])},null,2)])}var c={props:{size:String},components:{},data(){return{}},created(){},methods:{},computed:{}},r=t(6262);const d=(0,r.A)(c,[["render",o]]);var l=d},3251:function(e,a,t){t.r(a),t.d(a,{default:function(){return te}});var s=t(641);const n={class:"drag-n-drop"},i=["onClick"];function o(e,a,t,o,c,r){const d=(0,s.g2)("Scan_capture"),l=(0,s.g2)("Scan_upload"),_=(0,s.g2)("Scan_check"),u=(0,s.g2)("Scan_feedback"),p=(0,s.g2)("Modal_body");return(0,s.uX)(),(0,s.Wv)(p,{close:!0,title:"Naskenovanie dokladov",class:"modal-credentials_scan"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(2,(e=>(0,s.Lk)("div",n,[(0,s.Lk)("button",{onClick:a=>r.camera_toggle(e),class:"btn btn-primary dd_camera"},a[0]||(a[0]=[(0,s.Lk)("span",{class:"i_camera"},null,-1)]),8,i),c.active_cameras[e]?((0,s.uX)(),(0,s.Wv)(d,{key:0,position:e,onScan_payload:r.scan_payload,onScan_feedback:r.add_to_feedback},null,8,["position","onScan_payload","onScan_feedback"])):((0,s.uX)(),(0,s.Wv)(l,{key:1,position:e,debug:c.debug,onScan_payload:r.scan_payload,onScan_feedback:r.add_to_feedback},null,8,["position","debug","onScan_payload","onScan_feedback"]))]))),64)),(0,s.bF)(_,{debug:c.debug,side_payloads:c.side_payloads,onScan_feedback:r.add_to_feedback},null,8,["debug","side_payloads","onScan_feedback"]),(0,s.bF)(u,{feedback:c.feedback},null,8,["feedback"])])),_:1})}t(4114);var c=t(8384),r=t(3751);const d={class:"contentarea_video"},l={class:"scan_camera"},_={ref:"video",class:"scan_video"},u={ref:"button",class:"scan_button btn btn-primary"},p={ref:"canvas",class:"scan_canvas"},h={class:"scan_output"},m={ref:"photo",class:"scan_photo",alt:"The screen capture will appear in this box."};function f(e,a,t,n,i,o){return(0,s.uX)(),(0,s.CE)("div",d,[(0,s.bo)((0,s.Lk)("div",l,[(0,s.Lk)("video",_," Video stream not available. ",512),(0,s.Lk)("button",u," Odfotiť ",512)],512),[[r.aG,!i.show_result]]),(0,s.Lk)("canvas",p,null,512),(0,s.bo)((0,s.Lk)("div",h,[(0,s.Lk)("img",m,null,512)],512),[[r.aG,i.show_result]])])}var g={props:{position:Number},components:{},emits:["scan_feedback","scan_payload"],data(){return{show_result:!1}},created(){void 0!==navigator.mediaDevices?this.$nextTick((()=>{this.scan_stream()})):this.$emit("scan_feedback","Zariadenie pravdepodobne nemá kameru.")},methods:{scan_stream(){var e=550,a=0,t=!1,s=this.$refs.video,n=this.$refs.canvas,i=this.$refs.photo,o=this.$refs.button;function c(){navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(e){s.srcObject=e,s.play()})).catch((function(e){console.log("An error occurred: "+e)})),s.addEventListener("canplay",(function(i){t||(a=s.videoHeight/(s.videoWidth/e),isNaN(a)&&(a=e/(4/3)),s.setAttribute("width",e),s.setAttribute("height",a),n.setAttribute("width",e),n.setAttribute("height",a),t=!0)}),!1),o.addEventListener("click",(function(e){d(),l(),e.preventDefault()}),!1),r()}function r(){var e=n.getContext("2d");e.fillStyle="#AAA",e.fillRect(0,0,n.width,n.height);var a=n.toDataURL("image/png");i.setAttribute("src",a)}function d(){var t=n.getContext("2d");if(e&&a){n.width=e,n.height=a,t.drawImage(s,0,0,e,a);var o=n.toDataURL("image/png");i.setAttribute("src",o)}else r()}const l=()=>{this.show_result=!0,this.$emit("scan_payload",i.src,this.position)};c()}},computed:{},watch:{}},b=t(6262);const k=(0,b.A)(g,[["render",f]]);var v=k;const y={class:"text-center"},A=["disabled"],w={class:"mt-1"};function L(e,a,t,n,i,o){const c=(0,s.g2)("Bouncer_loading");return(0,s.uX)(),(0,s.CE)("div",y,[(0,s.Lk)("button",{onClick:a[0]||(a[0]=(...e)=>o.send_scan_pages&&o.send_scan_pages(...e)),disabled:o.pages_not_ready,class:"btn btn-primary"}," Overiť a vyplniť údaje ",8,A),(0,s.bo)((0,s.Lk)("div",w,[(0,s.bF)(c,{size:"small"})],512),[[r.aG,i.loading]])])}t(4979),t(1678);var $=t(55),C=t(8700),E=t(6343),S=t(3175);class j{add_page(e,a){let t={image:e.split(",")?.[1]||""},s={action_name:"id-scan/add-page",method:"POST",url:(0,C.A)().endpoint_url()+"api/online/id-scan/add-page/?scanPage="+a+E.A.add_token_as_parameter(),body:JSON.stringify(t),content_type:"application/json"},n=new S.A;return n.prepare_params(s).handle_response().catch((e=>{throw e}))}scan_groups(){let e={action_name:"id-scan/get-scan-groups",method:"GET",url:(0,C.A)().endpoint_url()+"api/online/id-scan/get-scan-groups/?"+E.A.add_token_as_parameter()},a=new S.A;return a.prepare_params(e).handle_response().catch((e=>{throw e}))}scan_group_documents(){let e={action_name:"id-scan/get-scan-group-documents",method:"GET",url:(0,C.A)().endpoint_url()+"api/online/id-scan/get-scan-group-documents/?"+E.A.add_token_as_parameter()},a=new S.A;return a.prepare_params(e).handle_response().catch((e=>{throw e}))}}var z=new j,x=t(7618),T=t(2873),O=t(3177),X={props:{debug:Boolean,side_payloads:Object},components:{Bouncer_loading:$.A},emits:["scan_feedback"],data(){return{loading:!1,check_repeated:0,max_checks:7,check_delay:5e3,manual_repeat:!1}},created(){},methods:{send_scan_pages(){this.pages_not_ready||(this.loading=!0,this.debug&&this.$emit("scan_feedback","sending pages"),this.manual_repeat?this.credentials_check():Promise.resolve().then((()=>z.add_page(this.side_payloads["1"],1))).then((e=>{if(200!==e.status)return this.$emit("scan_feedback","Nahrávanie strany 1 zlyhalo."),Promise.reject(e.result);this.debug&&this.$emit("scan_feedback","page 1 sent")})).then((async()=>(await E.A.sleep(2),z.add_page(this.side_payloads["2"],2)))).then((e=>{if(200!==e.status)return this.$emit("scan_feedback","Nahrávanie strany 2 zlyhalo."),Promise.reject(e.result);this.debug&&this.$emit("scan_feedback","page 2 sent")})).then((async e=>{this.check_repeated=0,await E.A.sleep(4),this.credentials_check()})).catch((e=>{this.loading=!1,console.log(e)})))},credentials_check(){this.debug&&this.$emit("scan_feedback","asking backend for scan check"),z.scan_groups().then((e=>{422===e.status?(this.loading=!1,this.$emit("scan_feedback","422 Unprocessable Entity, message: "),this.$emit("scan_feedback",e.result.message)):500===e.status?(this.loading=!1,this.$emit("scan_feedback","500 Internal Server Error, message: "),this.$emit("scan_feedback",e.result.message)):425!==e.status||this.manual_repeat?425===e.status&&this.manual_repeat?(this.loading=!1,this.$emit("scan_feedback","Nepodarilo sa načítať údaje.")):(this.data=e.result,this.$emit("scan_feedback","Overovanie úspešné."),this.debug&&this.$emit("scan_feedback",JSON.stringify(this.data)),this.fill_data(),x.A.check_scan_promise().catch((e=>{console.log(e)})),this.store_docs_into_session(),this.loading=!1):(0===this.check_repeated&&this.$emit("scan_feedback","Prebieha spracovanie."),this.check_repeated++,setTimeout((()=>{this.check_repeated<this.max_checks?(this.debug&&this.$emit("scan_feedback","repeat check no. "+this.check_repeated),this.credentials_check()):(this.$emit("scan_feedback","Nepodarilo sa načítať údaje. Spracovanie dát z dokladu stále prebieha. Zopakujte akciu kliknutím na tlačidlo."),this.loading=!1,this.manual_repeat=!0)}),this.check_delay))}))},fill_data(){this.debug&&this.$emit("scan_feedback","filling received data into form"),(0,O.A)().set_multiple_form_values(this.data),this.debug||setTimeout((()=>{(0,T.A)().close_them_all()}),3e3)},async store_docs_into_session(){6===(0,C.A)().product_group_id()&&(await E.A.sleep(6),this.debug&&this.$emit("scan_feedback","start scan documents request"),z.scan_group_documents().then((async e=>{if(425===e.status)return await E.A.sleep(8),void z.scan_group_documents();this.debug&&(200===e.status?this.$emit("scan_feedback","scan documents successful"):this.$emit("scan_feedback","scan documents failed"))})))}},computed:{pages_not_ready(){return!this.side_payloads["1"]||!this.side_payloads["2"]||this.loading},watch_if_payloads_changed(){return structuredClone(this.side_payloads)}},watch:{watch_if_payloads_changed(){this.manual_repeat=!1}}};const P=(0,b.A)(X,[["render",L]]);var N=P,D=t(33);const G={class:"scan_feedback"};function R(e,a,t,n,i,o){return(0,s.bo)(((0,s.uX)(),(0,s.CE)("p",G,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.feedback,(e=>((0,s.uX)(),(0,s.CE)("span",null,[(0,s.eW)((0,D.v_)(e),1),a[0]||(a[0]=(0,s.Lk)("br",null,null,-1))])))),256))],512)),[[r.aG,t.feedback.length>0]])}var q={props:{feedback:Array},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{},watch:{}};const U=(0,b.A)(q,[["render",R]]);var F=U;const W=["src"],B={class:"dd_instructions"},I={class:"dd_filename"},J={class:"i_check"},K={key:2},M=["for"],V=["id","name"];function Z(e,a,t,n,i,o){return(0,s.uX)(),(0,s.CE)("div",{onDragenter:a[1]||(a[1]=(0,r.D$)((()=>{}),["prevent"])),onDragover:a[2]||(a[2]=(0,r.D$)((()=>{}),["prevent"])),onDrop:a[3]||(a[3]=(0,r.D$)(((...e)=>o.file_change&&o.file_change(...e)),["prevent"]))},[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(2,(e=>(0,s.Lk)("div",{class:(0,D.C4)(1===e?"dd_desktop":"dd_mobile")},[i.success?((0,s.uX)(),(0,s.CE)("img",{key:0,src:i.file.url,class:"scan_base64"},null,8,W)):((0,s.uX)(),(0,s.CE)("div",{key:1,class:(0,D.C4)(1===e?"i_dd_upload":"i_dd_camera")},null,2)),(0,s.Lk)("p",B,[(0,s.eW)((0,D.v_)(1===t.position?"Predná":"Zadná")+" strana - ",1),(0,s.Lk)("span",I,(0,D.v_)(i.success?i.file.name:1===e?"Presuňte súbor sem (JPEG, PNG)":"Pripravte si doklad na odfotenie"),1),(0,s.bo)((0,s.Lk)("span",J,null,512),[[r.aG,i.success]])]),1===e?((0,s.uX)(),(0,s.CE)("p",K,"alebo")):(0,s.Q3)("",!0),(0,s.Lk)("label",{class:"btn btn-grey",for:"scan_input_"+t.position},[(0,s.eW)((0,D.v_)(1===e?"Vybrať súbor":"Odfotiť a nahrať")+" ",1),(0,s.Lk)("input",{id:"scan_input_"+t.position,name:"scan_input_"+t.position,type:"file",accept:"image/*",capture:"",onChange:a[0]||(a[0]=(...e)=>o.file_change&&o.file_change(...e))},null,40,V)],8,M)],2))),64))],32)}t(4603),t(7566),t(8721);var Q={props:{debug:Boolean,position:Number},components:{},emits:["scan_feedback","scan_payload"],data(){return{file:{whole_file:"",valid:!1,name:"",size:"",type:"",url:"",base:""},success:!1}},created(){},methods:{file_change(e){let a={};if("change"===e.type?a=e.target?.files?.[0]:"drop"===e.type&&(a=e.dataTransfer?.files?.[0]),void 0!==a){if(this.file={whole_file:a,valid:!1,name:E.A.slugify_keep_extension_add_tag(a.name,!1),size:a.size,type:a.type,url:URL.createObjectURL(a),base:""},this.scan_validate(),!1===this.file.valid)return this.success=!1,void this.$emit("scan_payload","",this.position);this.convert_base64()}},scan_validate(){this.file.size>15e6?this.$emit("scan_feedback","Súbor je príliš veľký: "+this.file.size+", povolená veľkosť: 15mb"):"image/png"===this.file.type||"image/jpg"===this.file.type||"image/jpeg"===this.file.type?(this.debug&&this.$emit("scan_feedback","file "+this.file.name+" valid"),this.file.valid=!0):this.$emit("scan_feedback","Nepodporovaný typ súboru: "+this.file.type+", povolené typy: .png .jpg .jpeg")},convert_base64(){let e=new FileReader;e.addEventListener("load",(e=>{this.file.base=e.target.result,this.debug&&this.$emit("scan_feedback","converted file "+this.file.name+" to base64"),this.$emit("scan_payload",this.file.base,this.position),this.success=!0})),e.readAsDataURL(this.file.whole_file)}},computed:{},watch:{}};const H=(0,b.A)(Q,[["render",Z]]);var Y=H,ee={props:{},components:{Modal_body:c.A,Scan_capture:v,Scan_check:N,Scan_feedback:F,Scan_upload:Y},emits:[],data(){return{feedback:[],debug:!1,side_payloads:{1:"",2:""},active_cameras:{1:!1,2:!1}}},created(){},methods:{scan_payload(e,a){this.side_payloads[a]=e},add_to_feedback(e){this.feedback.push(e)},camera_toggle(e){this.active_cameras[e]=!this.active_cameras[e]}},computed:{},watch:{}};const ae=(0,b.A)(ee,[["render",o]]);var te=ae},8384:function(e,a,t){t.d(a,{A:function(){return p}});var s=t(641),n=t(33);const i={class:"modal-content"},o={class:"modal-header"},c={class:"modal-body"};function r(e,a,t,r,d,l){return(0,s.uX)(),(0,s.CE)("div",{onClick:a[1]||(a[1]=(...e)=>l.did_click_outside&&l.did_click_outside(...e)),class:(0,n.C4)(["vue_modal",t.huge?"huge":""]),"data-cy":"modal"},[(0,s.Lk)("div",i,[(0,s.Lk)("div",o,[(0,s.Lk)("h4",null,(0,n.v_)(t.title),1),t.close?((0,s.uX)(),(0,s.CE)("span",{key:0,onClick:a[0]||(a[0]=(...e)=>l.close_me&&l.close_me(...e)),class:"i_close"})):(0,s.Q3)("",!0)]),(0,s.Lk)("div",c,[(0,s.RG)(e.$slots,"default")])])],2)}var d=t(2873),l={props:{close:Boolean,title:String,huge:Boolean},components:{},emits:[],data(){return{}},created(){document.addEventListener("keyup",this.close_me)},beforeUnmount(){document.removeEventListener("keyup",this.close_me)},methods:{close_me(e){this.close&&("click"===e?.type||"keyup"===e?.type&&27===e?.keyCode)&&(0,d.A)().close_them_all()},did_click_outside(e){e.target.classList.contains("vue_modal")&&this.close_me(e)}},computed:{},watch:{}},_=t(6262);const u=(0,_.A)(l,[["render",r]]);var p=u}}]);