"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[849],{7004:function(e,t,n){var r=n(8700),a=n(6343),s=n(3175);class o{payment_info(){let e={action_name:"getpaymentinfo",method:"GET",url:(0,r.A)().endpoint_url()+"online/getpaymentinfo/?"+a.A.add_token_as_parameter()},t=new s.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}generate_qr(){let e={action_name:"getpaymentqr",method:"GET",url:(0,r.A)().endpoint_url()+"online/getpaymentqr/?"+a.A.add_token_as_parameter()},t=new s.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}get_gateways(){let e={action_name:"getpaymentgateways",method:"GET",url:(0,r.A)().endpoint_url()+"online/getpaymentgateways/?"+a.A.add_token_as_parameter()},t=new s.A;return t.prepare_params(e).handle_response().catch((e=>{throw e}))}payment_create(e){let t={action_name:"payment-create",method:"POST",url:(0,r.A)().endpoint_url()+"online/payment-create/"+e+"/?"+a.A.add_token_as_parameter()},n=new s.A;return n.prepare_params(t).handle_response().catch((e=>{throw e}))}payment_result(e,t){let n={action_name:"payment-result",method:"PUT",url:(0,r.A)().endpoint_url()+"online/payment-result/"+e+"/?result="+t+a.A.add_token_as_parameter()},o=new s.A;return o.prepare_params(n).handle_response().catch((e=>{throw e}))}}t.A=new o},1050:function(e,t,n){n.d(t,{A:function(){return h}});var r=n(641),a=n(3751);const s=(0,r.Lk)("h4",null,"Platba online",-1),o={class:"gateways","data-cy":"gateways"},i=["href","id","title"],l=["src","alt"];function u(e,t,n,u,_,c){return(0,r.uX)(),(0,r.CE)(r.FK,null,[s,(0,r.Lk)("div",o,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(_.gateways,((e,t)=>(0,r.bo)(((0,r.uX)(),(0,r.CE)("a",{href:e.url,id:t,title:e.name,target:"_blank"},[(0,r.Lk)("img",{src:e.logo,alt:e.name,width:"127"},null,8,l)],8,i)),[[a.aG,""!==e.url]]))),256))])],64)}var _=n(7004),c=n(8700),p={props:{},components:{},emits:[],data(){return{gateways:{}}},created(){_.A.get_gateways().then((e=>{for(let t in e.result){if(!e.result.hasOwnProperty(t))continue;if(isNaN(t))continue;let n=e.result[t]?.name,r=e.result[t]?.url_logo;null===r?r="":"http"!==r.substring(0,4)&&(r="https://www.najpoistenie.sk/wp-content/themes/najpoistenie/images/loga-banky/"+r+".png"),this.gateways[t]={logo:r,name:n,url:""},_.A.payment_create(t).then((e=>{200!==e.status&&console.log("requesting gateway URL failed with id: "+t,e),this.gateways[t].url=e.result.url;let n=(0,c.A)().get_payment_data().payment_debug;n&&this.debug_url_for_payment_gateway(t)}))}}))},methods:{debug_url_for_payment_gateway(e){let t=this.gateways[e].url,n=t?.replace("pay-request","pay-request-test");this.gateways[e].url=n}},computed:{},watch:{}},d=n(6262);const m=(0,d.A)(p,[["render",u]]);var h=m},5116:function(e,t,n){n.d(t,{A:function(){return g}});var r=n(641),a=n(33);const s=(0,r.Lk)("h4",null,"Platba prevodom na účet",-1),o=(0,r.Lk)("br",null,null,-1),i=(0,r.Lk)("br",null,null,-1),l=(0,r.Lk)("br",null,null,-1),u=(0,r.Lk)("br",null,null,-1),_=(0,r.Lk)("br",null,null,-1);function c(e,t,n,c,p,d){return(0,r.uX)(),(0,r.CE)(r.FK,null,[s,(0,r.eW)(" IBAN: "),(0,r.Lk)("strong",null,(0,a.v_)(p.payment_info.iban),1),o,(0,r.eW)(" SWIFT: "),(0,r.Lk)("strong",null,(0,a.v_)(p.payment_info.swift),1),i,(0,r.eW)(" Platba: "),(0,r.Lk)("strong",null,(0,a.v_)(p.payment_info.amount),1),l,(0,r.eW)(" Variabilný symbol: "),(0,r.Lk)("strong",null,(0,a.v_)(p.payment_info.vs),1),u,(0,r.eW)(" Konštantný symbol: "),(0,r.Lk)("strong",null,(0,a.v_)(p.payment_info.ks),1),_],64)}var p=n(7004),d={props:{},components:{},emits:[],data(){return{payment_info:{}}},created(){p.A.payment_info().then((e=>{200===e.status&&(this.payment_info=e.result.paymentinfo)}))},methods:{},computed:{},watch:{}},m=n(6262);const h=(0,m.A)(d,[["render",c]]);var g=h},2989:function(e,t,n){n.d(t,{A:function(){return p}});var r=n(641);const a=(0,r.Lk)("h4",null,"Platba cez QR kód",-1),s={id:"qr_container"},o=["src"];function i(e,t,n,i,l,u){return(0,r.uX)(),(0,r.CE)(r.FK,null,[a,(0,r.Lk)("div",s,[(0,r.Lk)("img",{src:u.qr_code,class:"qr_code"},null,8,o)])],64)}var l=n(7004),u={props:{},components:{},emits:[],data(){return{base64:""}},created(){l.A.generate_qr().then((e=>{200===e.status&&(this.base64=e.result.pbs)}))},methods:{},computed:{qr_code(){return this.base64?"data:image/png;base64,"+this.base64:""}},watch:{}},_=n(6262);const c=(0,_.A)(u,[["render",i]]);var p=c},6804:function(e,t,n){n.d(t,{A:function(){return m}});var r=n(641),a=n(33);const s=["data-cy"],o={class:"d-flex point-head"},i={class:"flex-shrink-0 point-number"},l={class:"flex-grow-1"},u={class:"point-body"};function _(e,t,n,_,c,p){return(0,r.uX)(),(0,r.CE)("div",{class:"col-12 point-box","data-cy":"point_"+n.order},[(0,r.Lk)("div",o,[(0,r.Lk)("div",i,[(0,r.Lk)("span",{class:(0,a.C4)("i_next_step"+n.order)},null,2)]),(0,r.Lk)("div",l,[(0,r.Lk)("h3",null,(0,a.v_)(n.title),1)])]),(0,r.Lk)("div",u,[(0,r.RG)(e.$slots,"default")])],8,s)}var c={props:{order:Number,title:String},components:{},emits:[],data(){return{}},created(){},methods:{},computed:{},watch:{}},p=n(6262);const d=(0,p.A)(c,[["render",_]]);var m=d},6137:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(641);const a={"data-cy":"calc_confirm"},s={key:0,class:"mb-5"},o=(0,r.Lk)("strong",{class:"text-accent"},"ešte dnes",-1),i={key:0,class:"text-highlight"},l={class:"row gx-3 gy-3"},u=["innerHTML"],_={key:1,class:"mt-4 mb-5 mx-4"},c={key:2,class:"row"},p={class:"col-md-4 mb-3 mb-md-0"},d={class:"col-sm-6 col-md-4 mb-3 mb-md-0"},m={class:"col-sm-6 col-md-4"},h=["innerHTML"],g={class:"col-12 px-0 mt-5","data-cy":"docs_landing"},v={key:0,class:"row"},y={class:"col-12 mb-5 text-center"};function k(e,t,n,k,w,b){const f=(0,r.g2)("Title"),A=(0,r.g2)("Singnature_form"),L=(0,r.g2)("Point"),x=(0,r.g2)("Gateways"),q=(0,r.g2)("Info"),X=(0,r.g2)("Qr"),C=(0,r.g2)("Documents_prepare"),E=(0,r.g2)("Docs_template"),W=(0,r.g2)("Remap");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("section",a,[w.start_doc_requests&&0===w.signature_required?((0,r.uX)(),(0,r.Wv)(f,{key:0,title:"Gratulujeme",subtitle:w.html.view_confirm_congratulations},{default:(0,r.k6)((()=>[b.add_pay_info?((0,r.uX)(),(0,r.CE)("p",s,[(0,r.eW)(" Splátku uhraďte "),o,(0,r.eW)(". "),b.add_what_next?((0,r.uX)(),(0,r.CE)("strong",i," Bez zaplatenia zmluva nevznikne. ")):(0,r.Q3)("",!0)])):(0,r.Q3)("",!0)])),_:1},8,["subtitle"])):w.start_doc_requests&&1===w.signature_required?((0,r.uX)(),(0,r.Wv)(f,{key:1,title:"Záverečné kroky"})):(0,r.Q3)("",!0),(0,r.Lk)("div",l,[1===w.signature_required&&w.show_step5_sign?((0,r.uX)(),(0,r.Wv)(L,{key:0,order:0,title:"Podpísať dokumenty"},{default:(0,r.k6)((()=>[(0,r.bF)(A,{onHide_sign_section:t[0]||(t[0]=e=>w.show_step5_sign=!1),class:"mt-4 mb-4 mx-4"})])),_:1})):(0,r.Q3)("",!0),(0,r.bF)(L,{order:1,title:b.point_one_title},{default:(0,r.k6)((()=>[b.dds?((0,r.uX)(),(0,r.CE)("p",{key:0,innerHTML:w.html.view_confirm_payment,class:"mt-4 mb-5 mx-4"},null,8,u)):b.investicie_no_payment?((0,r.uX)(),(0,r.CE)("p",_," Platobné inštrukcie nájdete v dokumentoch investičnej spoločnosti ")):((0,r.uX)(),(0,r.CE)("div",c,[(0,r.Lk)("div",p,[w.start_doc_requests?((0,r.uX)(),(0,r.Wv)(x,{key:0})):(0,r.Q3)("",!0)]),(0,r.Lk)("div",d,[w.start_doc_requests?((0,r.uX)(),(0,r.Wv)(q,{key:0})):(0,r.Q3)("",!0)]),(0,r.Lk)("div",m,[w.start_doc_requests?((0,r.uX)(),(0,r.Wv)(X,{key:0})):(0,r.Q3)("",!0)])]))])),_:1},8,["title"]),(0,r.bF)(L,{order:2,title:"Uložiť dokumenty"},{default:(0,r.k6)((()=>[(0,r.bF)(C,{start_doc_requests:w.start_doc_requests,step_html:5},null,8,["start_doc_requests"])])),_:1}),(0,r.bF)(L,{order:3,title:"E-mail a ďalšie inštrukcie"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",{innerHTML:w.html.view_confirm_text},null,8,h)])),_:1}),(0,r.Lk)("div",g,[w.load_docs_landing_section?((0,r.uX)(),(0,r.Wv)(E,{key:0})):(0,r.Q3)("",!0)])])]),(0,r.bF)(W),0===w.signature_required?((0,r.uX)(),(0,r.CE)("div",v,[(0,r.Lk)("div",y,[(0,r.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>b.clear&&b.clear(...e)),type:"button",class:"btn btn-primary btn-lg btn-left"}," Vytvoriť nové porovnanie ")])])):(0,r.Q3)("",!0)],64)}var w=n(8700),b=n(821),f=n(1050),A=n(5116),L=n(2989),x=n(9452),q=n(3177),X=n(8856),C=n(33),E=n(3751);const W={key:0,class:"x-sell text-center text-sm-start","data-cy":"remap"},j=["innerHTML"],P={key:1},Q=(0,r.Lk)("br",null,null,-1);function T(e,t,n,a,s,o){const i=(0,r.g2)("Bouncer_loading");return o.show_remap?((0,r.uX)(),(0,r.CE)("section",W,[s.view_redirect_text?((0,r.uX)(),(0,r.CE)("div",{key:0,innerHTML:s.view_redirect_text},null,8,j)):(0,r.Q3)("",!0),s.title?((0,r.uX)(),(0,r.CE)("div",P,[(0,r.Lk)("h2",null,(0,C.v_)(s.title),1),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.paragraphs,((e,t)=>((0,r.uX)(),(0,r.CE)("p",null,(0,C.v_)(e),1)))),256))])):(0,r.Q3)("",!0),s.loading?((0,r.uX)(),(0,r.Wv)(i,{key:3,class:"mb-3"})):((0,r.uX)(),(0,r.CE)("button",{key:2,onClick:t[0]||(t[0]=(...e)=>o.run_remap&&o.run_remap(...e)),class:"btn btn-primary btn-right btn-lg"},(0,C.v_)(s.button_label),1)),(0,r.bo)((0,r.Lk)("p",null,[(0,r.eW)(" ERROR:"),Q,(0,r.eW)(" "+(0,C.v_)(s.remap_error),1)],512),[[E.aG,s.remap_error]])])):(0,r.Q3)("",!0)}var F=n(55),G=n(6343),I=n(3175);class R{session_remap(e){let t={action_name:"session-remap",method:"GET",url:(0,w.A)().endpoint_url()+"online/session-remap/?destGroup="+e+"&"+G.A.add_token_as_parameter()},n=new I.A;return n.prepare_params(t).handle_response().catch((e=>{throw e}))}}var H=new R,K={props:{},components:{Bouncer_loading:F.A},emits:[],data(){return{view_redirect_text:"",remap_error:"",loading:!1,title:"",remap_active:!1,paragraphs:[],destination_group:2,button_label:"Porovnať havarijné poistenie"}},created(){X.A.get_it("view_redirect_text").then((e=>{let t=e.result?.html;t.includes('":')?X.A.get_json_api("view_redirect_text").then((e=>{this.title=e.result?.json?.title||"",this.remap_active=e.result?.json?.remap_active||!1,this.paragraphs=e.result?.json?.paragraphs||[],this.destination_group=parseInt(e.result?.json?.destination_group,10)||2,this.button_label=e.result?.json?.button_label||"Porovnať havarijné poistenie"})):this.view_redirect_text=t||""}))},methods:{run_remap(){this.remap_error="",this.loading=!0,H.session_remap(this.destination_group).then((e=>{if(this.loading=!1,200!==e.status)return void(this.remap_error=e.result.message);let t=e.result.new_token;void 0!==t&&null!==t&&""!==t?((0,w.A)().change_product_group_id(this.destination_group),G.A.clear_session(),(0,w.A)().set_session_token(t)):this.remap_error=JSON.stringify(e.result)}))}},computed:{show_remap(){return this.title?this.remap_active:1===(0,w.A)().product_group_id()}},watch:{}},S=n(6262);const M=(0,S.A)(K,[["render",T]]);var z=M,N=n(9713),O=n(6804),U=n(8623),B=n(2873),D=n(514),V={props:{},components:{Documents_prepare:b.A,Gateways:f.A,Info:A.A,Qr:L.A,Remap:z,Title:N.A,Point:O.A,Docs_template:U["default"],Singnature_form:D.A},emits:[],data(){return{debug:!1,group:0,receiver:0,html:{view_confirm_payment:"",view_confirm_text:"",view_confirm_congratulations:""},start_doc_requests:!1,load_docs_landing_section:!1,signature_required:0,show_step5_sign:!0}},created(){this.group=(0,w.A)().product_group_id(),Promise.resolve().then((()=>x.A.get_data())).then((e=>{if(this.signature_required=e.result?.signature_required,(0,q.A)().extract_selected_product(e),this.receiver=parseInt(e.result?.call_params?.receiver,10),(0,q.A)().store_call_params(e.result?.call_params),this.debug)return Promise.reject("debug skip docs");this.start_doc_requests=!0})).then((()=>{X.A.get_it("view_confirm_text").then((e=>{this.html.view_confirm_text=e.result?.html})),X.A.get_it("view_confirm_payment").then((e=>{this.html.view_confirm_payment=e.result?.html})),X.A.get_it("view_confirm_docs_landing").then((e=>{e.result?.html&&e.result?.html.indexOf('id="osm_app"')>-1&&(this.load_docs_landing_section=!0)})),X.A.get_json_api("view_confirm_congratulations").then((e=>{this.html.view_confirm_congratulations=e.result?.json?.subtitle}))})).catch((e=>{console.log(e)}))},methods:{clear(){(0,B.A)().open_it("Cleaning_session")}},computed:{add_what_next(){return 4!==this.group},add_pay_info(){return 85!==this.group&&86!==this.group&&3!==this.group&&6!==this.group},dds(){return 85===this.group||86===this.group||73===this.group||3===this.group},investicie_no_payment(){return 6===this.group},point_one_title(){return 85===this.group||86===this.group||3===this.group?"Podpísať vygenerovanú dokumentáciu":6===this.group?"Uhradiť na účet finančnej inštitúcie":"Uhradiť na účet poisťovne"}},watch:{}};const J=(0,S.A)(V,[["render",k]]);var Z=J}}]);