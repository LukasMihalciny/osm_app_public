"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[594],{3594:function(e,a,t){t.r(a),t.d(a,{default:function(){return Y}});var s=t(641);const n={class:"drag-n-drop"},i=["onClick"];function c(e,a,t,c,o,d){const r=(0,s.g2)("Scan_capture"),l=(0,s.g2)("Scan_upload"),_=(0,s.g2)("Scan_check"),p=(0,s.g2)("Scan_feedback"),h=(0,s.g2)("Modal_body");return(0,s.uX)(),(0,s.Wv)(h,{close:!0,title:"Naskenovanie dokladov",class:"modal-credentials_scan"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(2,(e=>(0,s.Lk)("div",n,[(0,s.Lk)("button",{onClick:a=>d.camera_toggle(e),class:"btn btn-primary dd_camera"},a[0]||(a[0]=[(0,s.Lk)("span",{class:"i_camera"},null,-1)]),8,i),o.active_cameras[e]?((0,s.uX)(),(0,s.Wv)(r,{key:0,position:e,onScan_payload:d.scan_payload,onScan_feedback:d.add_to_feedback},null,8,["position","onScan_payload","onScan_feedback"])):((0,s.uX)(),(0,s.Wv)(l,{key:1,position:e,debug:o.debug,onScan_payload:d.scan_payload,onScan_feedback:d.add_to_feedback},null,8,["position","debug","onScan_payload","onScan_feedback"]))]))),64)),(0,s.bF)(_,{debug:o.debug,side_payloads:o.side_payloads,onScan_feedback:d.add_to_feedback},null,8,["debug","side_payloads","onScan_feedback"]),(0,s.bF)(p,{feedback:o.feedback},null,8,["feedback"])])),_:1})}t(4114);var o=t(4883),d=t(3751);const r={class:"contentarea_video"},l={class:"scan_camera"},_={ref:"video",class:"scan_video"},p={ref:"button",class:"scan_button btn btn-primary"},h={ref:"canvas",class:"scan_canvas"},u={class:"scan_output"},m={ref:"photo",class:"scan_photo",alt:"The screen capture will appear in this box."};function b(e,a,t,n,i,c){return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.bo)((0,s.Lk)("div",l,[(0,s.Lk)("video",_," Video stream not available. ",512),(0,s.Lk)("button",p," Odfotiť ",512)],512),[[d.aG,!i.show_result]]),(0,s.Lk)("canvas",h,null,512),(0,s.bo)((0,s.Lk)("div",u,[(0,s.Lk)("img",m,null,512)],512),[[d.aG,i.show_result]])])}var f={props:{position:Number},components:{},emits:["scan_feedback","scan_payload"],data(){return{show_result:!1}},created(){void 0!==navigator.mediaDevices?this.$nextTick((()=>{this.scan_stream()})):this.$emit("scan_feedback","Zariadenie pravdepodobne nemá kameru.")},methods:{scan_stream(){var e=550,a=0,t=!1,s=this.$refs.video,n=this.$refs.canvas,i=this.$refs.photo,c=this.$refs.button;function o(){navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(e){s.srcObject=e,s.play()})).catch((function(e){console.log("An error occurred: "+e)})),s.addEventListener("canplay",(function(i){t||(a=s.videoHeight/(s.videoWidth/e),isNaN(a)&&(a=e/(4/3)),s.setAttribute("width",e),s.setAttribute("height",a),n.setAttribute("width",e),n.setAttribute("height",a),t=!0)}),!1),c.addEventListener("click",(function(e){r(),l(),e.preventDefault()}),!1),d()}function d(){var e=n.getContext("2d");e.fillStyle="#AAA",e.fillRect(0,0,n.width,n.height);var a=n.toDataURL("image/png");i.setAttribute("src",a)}function r(){var t=n.getContext("2d");if(e&&a){n.width=e,n.height=a,t.drawImage(s,0,0,e,a);var c=n.toDataURL("image/png");i.setAttribute("src",c)}else d()}const l=()=>{this.show_result=!0,this.$emit("scan_payload",i.src,this.position)};o()}},computed:{},watch:{}},g=t(6262);const k=(0,g.A)(f,[["render",b]]);var v=k;const y={class:"text-center"},A=["disabled"],w={class:"mt-1"};function $(e,a,t,n,i,c){const o=(0,s.g2)("Bouncer_loading");return(0,s.uX)(),(0,s.CE)("div",y,[(0,s.Lk)("button",{onClick:a[0]||(a[0]=(...e)=>c.send_scan_pages&&c.send_scan_pages(...e)),disabled:c.pages_not_ready,class:"btn btn-primary"}," Overiť a vyplniť údaje ",8,A),(0,s.bo)((0,s.Lk)("div",w,[(0,s.bF)(o,{size:"small"})],512),[[d.aG,i.loading]]),t.debug&&i.manual_close_button?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:a[1]||(a[1]=(...e)=>c.close_the_scan&&c.close_the_scan(...e)),class:"btn btn-secondary ms-1"}," Zatvor debug a spusti validate ")):(0,s.Q3)("",!0)])}t(4979),t(1678);var L=t(55),S=t(8700),C=t(6343),E=t(3175);class N{add_page(e,a,t){let s={image:e.split(",")?.[1]||""},n={action_name:"id-scan/add-page",method:"POST",url:(0,S.A)().endpoint_url()+"api/online/id-scan/add-page/?scanPage="+a+"&scanGroupName="+t+C.A.add_token_as_parameter(),body:JSON.stringify(s),content_type:"application/json"},i=new E.A;return i.prepare_params(n).handle_response().catch((e=>{throw e}))}scan_groups(e){let a={action_name:"id-scan/get-scan-groups",method:"GET",url:(0,S.A)().endpoint_url()+"api/online/id-scan/get-scan-groups/?scanGroupName="+e+C.A.add_token_as_parameter()},t=new E.A;return t.prepare_params(a).handle_response().catch((e=>{throw e}))}scan_refresh(){let e={action_name:"id-scan/get-scan-groups",method:"GET",url:(0,S.A)().endpoint_url()+"api/online/id-scan/get-scan-groups/?"+C.A.add_token_as_parameter()},a=new E.A;return a.prepare_params(e).handle_response().catch((e=>{throw e}))}scan_group_documents(e){let a={action_name:"id-scan/get-scan-group-documents",method:"GET",url:(0,S.A)().endpoint_url()+"api/online/id-scan/get-scan-group-documents/?scanGroupName="+e+C.A.add_token_as_parameter()},t=new E.A;return t.prepare_params(a).handle_response().catch((e=>{throw e}))}}var j=new N,x=t(2873),G=t(3177),D=t(6460),X=t(9614),O={props:{debug:Boolean,side_payloads:Object},components:{Bouncer_loading:L.A},emits:["scan_feedback"],data(){return{loading:!1,check_repeated:0,max_checks:7,check_delay:5e3,manual_repeat:!1,manual_close_button:!1}},created(){this.debug&&(this.$emit("scan_feedback","DEBUG ON."),this.$emit("scan_feedback","scanGroupName: "+this.scan_input_token))},methods:{send_scan_pages(){this.pages_not_ready||(this.loading=!0,this.debug&&this.$emit("scan_feedback","sending pages"),this.manual_repeat?this.credentials_check():Promise.resolve().then((()=>j.add_page(this.side_payloads["1"],1,this.scan_input_token))).then((e=>{if(200!==e.status)return this.$emit("scan_feedback","Nahrávanie strany 1 zlyhalo."),Promise.reject(e.result);this.debug&&this.$emit("scan_feedback","page 1 sent")})).then((async()=>(await C.A.sleep(2),j.add_page(this.side_payloads["2"],2,this.scan_input_token)))).then((e=>{if(200!==e.status)return this.$emit("scan_feedback","Nahrávanie strany 2 zlyhalo."),Promise.reject(e.result);this.debug&&this.$emit("scan_feedback","page 2 sent")})).then((async e=>{this.check_repeated=0,await C.A.sleep(4),this.credentials_check()})).catch((e=>{this.loading=!1,console.log(e)})))},credentials_check(){this.debug&&this.$emit("scan_feedback","asking backend for scan check"),j.scan_groups(this.scan_input_token).then((e=>{422===e.status?(this.loading=!1,this.$emit("scan_feedback","422 Unprocessable Entity, message: "),this.$emit("scan_feedback",e.result.message)):500===e.status?(this.loading=!1,this.$emit("scan_feedback","500 Internal Server Error, message: "),this.$emit("scan_feedback",e.result.message)):425!==e.status||this.manual_repeat?425===e.status&&this.manual_repeat?(this.loading=!1,this.$emit("scan_feedback","Nepodarilo sa načítať údaje.")):(this.data=e.result,this.$emit("scan_feedback","Overovanie úspešné."),this.debug&&this.$emit("scan_feedback",JSON.stringify(this.data)),this.fill_data(),this.loading=!1):(0===this.check_repeated&&this.$emit("scan_feedback","Prebieha spracovanie."),this.check_repeated++,setTimeout((()=>{this.check_repeated<this.max_checks?(this.debug&&this.$emit("scan_feedback","repeat check no. "+this.check_repeated),this.credentials_check()):(this.$emit("scan_feedback","Nepodarilo sa načítať údaje. Spracovanie dát z dokladu stále prebieha. Zopakujte akciu kliknutím na tlačidlo."),this.loading=!1,this.manual_repeat=!0)}),this.check_delay))}))},fill_data(){this.debug&&this.$emit("scan_feedback","filling received data into form"),(0,G.A)().set_form_value(this.scan_input_token,"1"),(0,D.A)().clear_one_error(this.scan_input_token);let e=this.scan_settings?.prefix||"",a=this.scan_settings?.suffix||"";(0,G.A)().set_multiple_form_values(this.data,e,a),this.store_docs_into_session(),this.debug?this.manual_close_button=!0:setTimeout((()=>{this.close_the_scan()}),3e3)},close_the_scan(){(0,x.A)().close_them_all(),(0,X.A)().set_requested_direction("forward")},async store_docs_into_session(){await C.A.sleep(6),this.debug&&this.$emit("scan_feedback","start scan documents request"),j.scan_group_documents(this.scan_input_token).then((async e=>{if(425===e.status)return await C.A.sleep(8),void j.scan_group_documents(this.scan_input_token);this.debug&&(200===e.status?this.$emit("scan_feedback","scan documents successful"):this.$emit("scan_feedback","scan documents failed"))}))}},computed:{pages_not_ready(){return!this.side_payloads["1"]||!this.side_payloads["2"]||this.loading},scan_input_token(){return(0,x.A)().retrieve_modal_data().field_id},scan_settings(){return(0,x.A)().retrieve_modal_data().data_fill},watch_if_payloads_changed(){return structuredClone(this.side_payloads)}},watch:{watch_if_payloads_changed(){this.manual_repeat=!1}}};const P=(0,g.A)(O,[["render",$]]);var z=P,T=t(7406),U=t(33);const R=["src"],F={class:"dd_instructions"},W={class:"dd_filename"},B={class:"i_check"},I={key:2},Z=["for"],J=["id","name"];function M(e,a,t,n,i,c){return(0,s.uX)(),(0,s.CE)("div",{onDragenter:a[1]||(a[1]=(0,d.D$)((()=>{}),["prevent"])),onDragover:a[2]||(a[2]=(0,d.D$)((()=>{}),["prevent"])),onDrop:a[3]||(a[3]=(0,d.D$)(((...e)=>c.file_change&&c.file_change(...e)),["prevent"]))},[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(2,(e=>(0,s.Lk)("div",{class:(0,U.C4)(1===e?"dd_desktop":"dd_mobile")},[i.success?((0,s.uX)(),(0,s.CE)("img",{key:0,src:i.file.url,class:"scan_base64"},null,8,R)):((0,s.uX)(),(0,s.CE)("div",{key:1,class:(0,U.C4)(1===e?"i_dd_upload":"i_dd_camera")},null,2)),(0,s.Lk)("p",F,[(0,s.eW)((0,U.v_)(1===t.position?"Predná":"Zadná")+" strana - ",1),(0,s.Lk)("span",W,(0,U.v_)(i.success?i.file.name:1===e?"Presuňte súbor sem (JPEG, PNG)":"Pripravte si doklad na odfotenie"),1),(0,s.bo)((0,s.Lk)("span",B,null,512),[[d.aG,i.success]])]),1===e?((0,s.uX)(),(0,s.CE)("p",I,"alebo")):(0,s.Q3)("",!0),(0,s.Lk)("label",{class:"btn btn-grey",for:"scan_input_"+t.position},[(0,s.eW)((0,U.v_)(1===e?"Vybrať súbor":"Odfotiť a nahrať")+" ",1),(0,s.Lk)("input",{id:"scan_input_"+t.position,name:"scan_input_"+t.position,type:"file",accept:"image/*",capture:"",onChange:a[0]||(a[0]=(...e)=>c.file_change&&c.file_change(...e))},null,40,J)],8,Z)],2))),64))],32)}t(4603),t(7566),t(8721);var q={props:{debug:Boolean,position:Number},components:{},emits:["scan_feedback","scan_payload"],data(){return{file:{whole_file:"",valid:!1,name:"",size:"",type:"",url:"",base:""},success:!1}},created(){},methods:{file_change(e){let a={};if("change"===e.type?a=e.target?.files?.[0]:"drop"===e.type&&(a=e.dataTransfer?.files?.[0]),void 0!==a){if(this.file={whole_file:a,valid:!1,name:C.A.slugify_keep_extension_add_tag(a.name,!1),size:a.size,type:a.type,url:URL.createObjectURL(a),base:""},this.scan_validate(),!1===this.file.valid)return this.success=!1,void this.$emit("scan_payload","",this.position);this.convert_base64()}},scan_validate(){this.file.size>15e6?this.$emit("scan_feedback","Súbor je príliš veľký: "+this.file.size+", povolená veľkosť: 15mb"):"image/png"===this.file.type||"image/jpg"===this.file.type||"image/jpeg"===this.file.type?(this.debug&&this.$emit("scan_feedback","file "+this.file.name+" valid"),this.file.valid=!0):this.$emit("scan_feedback","Nepodporovaný typ súboru: "+this.file.type+", povolené typy: .png .jpg .jpeg")},convert_base64(){let e=new FileReader;e.addEventListener("load",(e=>{this.file.base=e.target.result,this.debug&&this.$emit("scan_feedback","converted file "+this.file.name+" to base64"),this.$emit("scan_payload",this.file.base,this.position),this.success=!0})),e.readAsDataURL(this.file.whole_file)}},computed:{},watch:{}};const K=(0,g.A)(q,[["render",M]]);var Q=K,V={props:{},components:{Modal_body:o.A,Scan_capture:v,Scan_check:z,Scan_feedback:T.A,Scan_upload:Q},emits:[],data(){return{feedback:[],debug:!1,side_payloads:{1:"",2:""},active_cameras:{1:!1,2:!1}}},created(){},methods:{scan_payload(e,a){this.side_payloads[a]=e},add_to_feedback(e){this.feedback.push(e)},camera_toggle(e){this.active_cameras[e]=!this.active_cameras[e]}},computed:{},watch:{}};const H=(0,g.A)(V,[["render",c]]);var Y=H}}]);