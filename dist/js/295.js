"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[295],{7004:function(t,e,s){var n=s(8700),a=s(6343),o=s(3175);class r{payment_info(){let t={action_name:"getpaymentinfo",method:"GET",url:(0,n.A)().endpoint_url()+"online/getpaymentinfo/?"+a.A.add_token_as_parameter()},e=new o.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}generate_qr(){let t={action_name:"getpaymentqr",method:"GET",url:(0,n.A)().endpoint_url()+"online/getpaymentqr/?"+a.A.add_token_as_parameter()},e=new o.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}get_gateways(){let t={action_name:"getpaymentgateways",method:"GET",url:(0,n.A)().endpoint_url()+"online/getpaymentgateways/?"+a.A.add_token_as_parameter()},e=new o.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}payment_create(t){let e={action_name:"payment-create",method:"POST",url:(0,n.A)().endpoint_url()+"online/payment-create/"+t+"/?"+a.A.add_token_as_parameter()},s=new o.A;return s.prepare_params(e).handle_response().catch((t=>{throw t}))}payment_result(t,e){let s={action_name:"payment-result",method:"PUT",url:(0,n.A)().endpoint_url()+"online/payment-result/"+t+"/?result="+e+a.A.add_token_as_parameter()},r=new o.A;return r.prepare_params(s).handle_response().catch((t=>{throw t}))}}e.A=new r},821:function(t,e,s){s.d(e,{A:function(){return X}});var n=s(641);const a={key:0,class:"docs_download","data-cy":"documents"},o=(0,n.Lk)("h3",null," Predzmluvná dokumentácia ",-1),r=(0,n.Lk)("p",null," Dokumenty s ktorými je klient povinný sa oboznámiť ",-1),l={class:"docs_static"},i=(0,n.Lk)("p",null," Produktové dokumenty ",-1),u={class:"docs_session"},c=(0,n.Lk)("p",null," Dynamické dokumenty ",-1),d={key:1,class:"row docs_download","data-cy":"documents"},_={class:"col-12 col-md-6"},m={class:"s-box-body"},p=(0,n.Lk)("p",null," Dynamické dokumenty ",-1),h={class:"col-12 col-md-6"},y={class:"s-box-body"},k=(0,n.Lk)("p",null," Produktové dokumenty ",-1);function v(t,e,s,v,b,g){const f=(0,n.g2)("Document_download");return 4===s.step_html?((0,n.uX)(),(0,n.CE)("div",a,[o,r,(0,n.Lk)("div",l,[i,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(b.static_docs,((t,e)=>((0,n.uX)(),(0,n.Wv)(f,{doc:t},null,8,["doc"])))),256))]),(0,n.Lk)("div",u,[c,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(b.session_docs,((t,e)=>((0,n.uX)(),(0,n.Wv)(f,{doc:t},null,8,["doc"])))),256))])])):s.step_html>4?((0,n.uX)(),(0,n.CE)("div",d,[(0,n.Lk)("div",_,[(0,n.Lk)("div",m,[p,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(b.session_docs,((t,e)=>((0,n.uX)(),(0,n.Wv)(f,{doc:t},null,8,["doc"])))),256))])]),(0,n.Lk)("div",h,[(0,n.Lk)("div",y,[k,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(b.static_docs,((t,e)=>((0,n.uX)(),(0,n.Wv)(f,{doc:t},null,8,["doc"])))),256))])])])):(0,n.Q3)("",!0)}var b=s(4162),g=s(3886),f=s(3556),w=s(2873),A={props:{start_doc_requests:Boolean,step_html:Number},components:{Document_download:f.A},emits:["all_docs_finished"],data(){return{static_docs:{},session_docs:{},turbo:{repeat_count:0,repeat_delay_fast:2e3,repeat_delay_slow:1e4,repeat_diminish:10,repeat_max:26}}},created(){!0===this.start_doc_requests&&(this.group_docs(),this.session_docs_turbo())},methods:{group_docs(){b.A.static_documents().then((t=>{this.static_docs=t.result.documents}))},session_docs_turbo(){g.A.session_documents(!1).then((t=>{void 0!==t.result?.data?.documents&&(this.session_docs=t.result.data.documents);for(let s in this.session_docs)if(this.session_docs.hasOwnProperty(s)&&"ws-preview.tmp"===this.session_docs[s].name&&"error"===this.session_docs[s].documentState)return(0,w.A)().store_modal_data({type:"session_documents_webservice_doc_error",errors:this.session_docs[s].errors}),void(0,w.A)().open_it("Ordinary_error_modal");if(!0===t.result?.data?.processingFinished)return void this.$emit("all_docs_finished");if(this.turbo.repeat_count>this.turbo.repeat_max)return void console.log("getsessiondocuments reached maximum repeat_count");this.turbo.repeat_count++;let e=this.turbo.repeat_count<this.turbo.repeat_diminish?this.turbo.repeat_delay_fast:this.turbo.repeat_delay_slow;setTimeout((()=>{this.session_docs_turbo()}),e)}))}},computed:{},watch:{start_doc_requests(){!0===this.start_doc_requests&&(this.group_docs(),this.session_docs_turbo())}}},L=s(6262);const E=(0,L.A)(A,[["render",v]]);var X=E},1050:function(t,e,s){s.d(e,{A:function(){return h}});var n=s(641),a=s(3751);const o=(0,n.Lk)("h4",null,"Platba online",-1),r={class:"gateways","data-cy":"gateways"},l=["href","id","title"],i=["src","alt"];function u(t,e,s,u,c,d){return(0,n.uX)(),(0,n.CE)(n.FK,null,[o,(0,n.Lk)("div",r,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.gateways,((t,e)=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("a",{href:t.url,id:e,title:t.name,target:"_blank"},[(0,n.Lk)("img",{src:t.logo,alt:t.name,width:"127"},null,8,i)],8,l)),[[a.aG,""!==t.url]]))),256))])],64)}var c=s(7004),d=s(8700),_={props:{},components:{},emits:[],data(){return{gateways:{}}},created(){c.A.get_gateways().then((t=>{for(let e in t.result){if(!t.result.hasOwnProperty(e))continue;if(isNaN(e))continue;let s=t.result[e]?.name,n=t.result[e]?.url_logo;null===n?n="":"http"!==n.substring(0,4)&&(n="https://www.najpoistenie.sk/wp-content/themes/najpoistenie/images/loga-banky/"+n+".png"),this.gateways[e]={logo:n,name:s,url:""},c.A.payment_create(e).then((t=>{200!==t.status&&console.log("requesting gateway URL failed with id: "+e,t),this.gateways[e].url=t.result.url;let s=(0,d.A)().get_payment_data().payment_debug;s&&this.debug_url_for_payment_gateway(e)}))}}))},methods:{debug_url_for_payment_gateway(t){let e=this.gateways[t].url,s=e?.replace("pay-request","pay-request-test");this.gateways[t].url=s}},computed:{},watch:{}},m=s(6262);const p=(0,m.A)(_,[["render",u]]);var h=p},5116:function(t,e,s){s.d(e,{A:function(){return y}});var n=s(641),a=s(33);const o=(0,n.Lk)("h4",null,"Platba prevodom na účet",-1),r=(0,n.Lk)("br",null,null,-1),l=(0,n.Lk)("br",null,null,-1),i=(0,n.Lk)("br",null,null,-1),u=(0,n.Lk)("br",null,null,-1),c=(0,n.Lk)("br",null,null,-1);function d(t,e,s,d,_,m){return(0,n.uX)(),(0,n.CE)(n.FK,null,[o,(0,n.eW)(" IBAN: "),(0,n.Lk)("strong",null,(0,a.v_)(_.payment_info.iban),1),r,(0,n.eW)(" SWIFT: "),(0,n.Lk)("strong",null,(0,a.v_)(_.payment_info.swift),1),l,(0,n.eW)(" Platba: "),(0,n.Lk)("strong",null,(0,a.v_)(_.payment_info.amount),1),i,(0,n.eW)(" Variabilný symbol: "),(0,n.Lk)("strong",null,(0,a.v_)(_.payment_info.vs),1),u,(0,n.eW)(" Konštantný symbol: "),(0,n.Lk)("strong",null,(0,a.v_)(_.payment_info.ks),1),c],64)}var _=s(7004),m={props:{},components:{},emits:[],data(){return{payment_info:{}}},created(){_.A.payment_info().then((t=>{200===t.status&&(this.payment_info=t.result.paymentinfo)}))},methods:{},computed:{},watch:{}},p=s(6262);const h=(0,p.A)(m,[["render",d]]);var y=h},2989:function(t,e,s){s.d(e,{A:function(){return _}});var n=s(641);const a=(0,n.Lk)("h4",null,"Platba cez QR kód",-1),o={id:"qr_container"},r=["src"];function l(t,e,s,l,i,u){return(0,n.uX)(),(0,n.CE)(n.FK,null,[a,(0,n.Lk)("div",o,[(0,n.Lk)("img",{src:u.qr_code,class:"qr_code"},null,8,r)])],64)}var i=s(7004),u={props:{},components:{},emits:[],data(){return{base64:""}},created(){i.A.generate_qr().then((t=>{200===t.status&&(this.base64=t.result.pbs)}))},methods:{},computed:{qr_code(){return this.base64?"data:image/png;base64,"+this.base64:""}},watch:{}},c=s(6262);const d=(0,c.A)(u,[["render",l]]);var _=d},6804:function(t,e,s){s.d(e,{A:function(){return p}});var n=s(641),a=s(33);const o=["data-cy"],r={class:"d-flex point-head"},l={class:"flex-shrink-0 point-number"},i={class:"flex-grow-1"},u={class:"point-body"};function c(t,e,s,c,d,_){return(0,n.uX)(),(0,n.CE)("div",{class:"col-12 point-box","data-cy":"point_"+s.order},[(0,n.Lk)("div",r,[(0,n.Lk)("div",l,[(0,n.Lk)("span",{class:(0,a.C4)("i_next_step"+s.order)},null,2)]),(0,n.Lk)("div",i,[(0,n.Lk)("h3",null,(0,a.v_)(s.title),1)])]),(0,n.Lk)("div",u,[(0,n.RG)(t.$slots,"default")])],8,o)}var d={props:{order:Number,title:String},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{},watch:{}},_=s(6262);const m=(0,_.A)(d,[["render",c]]);var p=m},9713:function(t,e,s){s.d(e,{A:function(){return _}});var n=s(641),a=s(33);const o={class:"calc_title_area"},r={class:"text-primary"},l={key:0,class:"mb-3"};function i(t,e,s,i,u,c){return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.Lk)("h2",r,(0,a.v_)(s.title),1),s.subtitle?((0,n.uX)(),(0,n.CE)("p",l,(0,a.v_)(s.subtitle),1)):(0,n.Q3)("",!0),(0,n.RG)(t.$slots,"default")])}var u={props:{title:String,subtitle:String},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{},watch:{}},c=s(6262);const d=(0,c.A)(u,[["render",i]]);var _=d},7307:function(t,e,s){s.r(e),s.d(e,{default:function(){return R}});var n=s(641);const a={"data-cy":"calc_payment"},o={key:0,class:"row gx-3 gy-3"},r={class:"row"},l={class:"col-md-4 mb-3 mb-md-0"},i={class:"col-sm-6 col-md-4 mb-3 mb-md-0"},u={class:"col-sm-6 col-md-4"},c=["innerHTML"],d={class:"col-12 px-0 mt-5","data-cy":"docs_landing"},_={class:"row"},m={class:"col-12 mb-5 text-center"};function p(t,e,s,p,h,y){const k=(0,n.g2)("Title"),v=(0,n.g2)("Gateways"),b=(0,n.g2)("Info"),g=(0,n.g2)("Qr"),f=(0,n.g2)("Point"),w=(0,n.g2)("Documents_prepare"),A=(0,n.g2)("Docs_template");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("section",a,[(0,n.bF)(k,{title:y.title,subtitle:y.subtitle},null,8,["title","subtitle"]),null!==h.success&&"ERROR"!==h.success?((0,n.uX)(),(0,n.CE)("div",o,[!0!==h.success?((0,n.uX)(),(0,n.Wv)(f,{key:0,order:1,title:"Uhradiť poistenie"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",r,[(0,n.Lk)("div",l,[h.start_doc_requests?((0,n.uX)(),(0,n.Wv)(v,{key:0})):(0,n.Q3)("",!0)]),(0,n.Lk)("div",i,[h.start_doc_requests?((0,n.uX)(),(0,n.Wv)(b,{key:0})):(0,n.Q3)("",!0)]),(0,n.Lk)("div",u,[h.start_doc_requests?((0,n.uX)(),(0,n.Wv)(g,{key:0})):(0,n.Q3)("",!0)])])])),_:1})):(0,n.Q3)("",!0),(0,n.bF)(f,{order:h.success?1:2,title:"Uložiť dokumenty"},{default:(0,n.k6)((()=>[(0,n.bF)(w,{start_doc_requests:h.start_doc_requests,step_html:6},null,8,["start_doc_requests"])])),_:1},8,["order"]),(0,n.bF)(f,{order:h.success?2:3,title:"E-mail a ďalšie inštrukcie"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{innerHTML:h.view_confirm_text},null,8,c)])),_:1},8,["order"]),(0,n.Lk)("div",d,[h.load_docs_landing_section?((0,n.uX)(),(0,n.Wv)(A,{key:0})):(0,n.Q3)("",!0)])])):(0,n.Q3)("",!0)]),(0,n.Lk)("div",_,[(0,n.Lk)("div",m,[(0,n.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>y.clear&&y.clear(...t)),type:"button",class:"btn btn-primary btn-lg btn-left"}," Vytvoriť nové porovnanie ")])])],64)}s(4979),s(1678);var h=s(8700),y=s(821),k=s(1050),v=s(5116),b=s(2989),g=s(9452),f=s(3177),w=s(8856),A=s(9713),L=s(6804),E=s(7004),X=s(8623),q=s(2873),x={props:{},components:{Documents_prepare:y.A,Gateways:k.A,Info:v.A,Qr:b.A,Title:A.A,Point:L.A,Payment_requests:E.A,Docs_template:X["default"]},emits:[],data(){return{success:null,start_doc_requests:!1,view_confirm_text:"",load_docs_landing_section:!1}},created(){Promise.resolve().then((()=>g.A.get_data())).then((t=>{(0,f.A)().extract_selected_product(t),(0,f.A)().store_call_params(t.result?.call_params),this.start_doc_requests=!0})).then((()=>{w.A.get_it("view_confirm_text").then((t=>{this.view_confirm_text=t.result?.html})),w.A.get_it("view_confirm_docs_landing").then((t=>{t.result?.html&&t.result?.html.indexOf('id="osm_app"')>-1&&(this.load_docs_landing_section=!0)}))}));let t=(0,h.A)().get_payment_data();if(!t.payment_id||!t.payment_result)return console.log("ERROR: payment is empty",structuredClone(t)),void(this.success="ERROR");E.A.payment_result(t.payment_id,t.payment_result).then((t=>{console.log(t.result),this.success=20===t.result.payment_state}))},methods:{clear(){(0,q.A)().open_it("Cleaning_session")}},computed:{title(){return null===this.success?"Spracovávam platobnú informáciu...":"ERROR"===this.success?"Platobnú informáciu sa nepodarilo získať. Prosím kontaktuje administrátora.":this.success?"Platba úspešná!":"Platba neúspešná!"},subtitle(){return null===this.success||"ERROR"===this.success?"":this.success?"Gratulujeme! Vaša zmluva je platná.":"Platba nebola úspešná alebo informácia a zrealizovaní platby je nedostupná. Prosím skontrolujte si výsledok cez internetbanking."}},watch:{}},C=s(6262);const P=(0,C.A)(x,[["render",p]]);var R=P}}]);