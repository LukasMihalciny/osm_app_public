"use strict";(self["webpackChunkosmapp_webpack_3xx"]=self["webpackChunkosmapp_webpack_3xx"]||[]).push([[1],{4326:function(t,e,a){var l=a(8700),r=a(6343),o=a(3175),i=a(3177);class d{get_calculate(t,e,a){let i={action_name:"calculate_step2",method:"POST",url:(0,l.A)().endpoint_url()+"online/calculate/?id="+t+"&json=1&period="+a+r.A.add_token_as_parameter(),body:e},d=new o.A;return d.prepare_params(i).handle_response().then((e=>408===e.status?(console.log("#"+t+" has 408, going for results request"),this.repeat_results()):e)).catch((t=>{throw t}))}check_calculate(){let t={action_name:"calculate_step4",method:"POST",url:(0,l.A)().endpoint_url()+"online/calculate/?"+r.A.add_token_as_parameter(),body:null};t.url+="&id="+(0,i.A)().get_selected_product().product_id+"&period="+(0,i.A)().get_selected_product().period;let e=new o.A;return e.prepare_params(t).handle_response().then((async t=>408===t.status?(console.log("calculate has 408 timeout, wait 1 minute and run results api"),await r.A.sleep(60),this.repeat_results()):t)).catch((t=>{throw t}))}repeat_results(){let t={action_name:"results",method:"GET",url:(0,l.A)().endpoint_url()+"online/results/?"+r.A.add_token_as_parameter()},e=new o.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}}e.A=new d},8856:function(t,e,a){var l=a(8700),r=a(6343),o=a(3175),i=a(3177);class d{get_it(t){!1===t&&(t=(0,i.A)().get_selected_product().next_contract);let e={action_name:"gethtml",method:"POST",url:(0,l.A)().endpoint_url()+"online/gethtml/?id="+t+r.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(e).handle_response().catch((t=>{throw t}))}get_json_api(t){let e={action_name:"getjson",method:"POST",url:(0,l.A)().endpoint_url()+"online/getjson/?id="+t+r.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(e).handle_response().catch((t=>{throw t}))}}e.A=new d},9452:function(t,e,a){var l=a(8700),r=a(6343),o=a(3175);class i{session_info(){let t={action_name:"getsessioninfo",method:"GET",url:(0,l.A)().endpoint_url()+"online/getsessioninfo/?"+r.A.add_token_as_parameter()},e=new o.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}get_data(){let t={action_name:"getdata",method:"GET",url:(0,l.A)().endpoint_url()+"online/getdata/?"+r.A.add_token_as_parameter()},e=new o.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}set_data(t){let e={action_name:"setdata",method:"POST",url:(0,l.A)().endpoint_url()+"online/setdata/?"+r.A.serialize_object(t)+r.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(e).handle_response().catch((t=>{throw t}))}}e.A=new i},5521:function(t,e,a){a.r(e),a.d(e,{default:function(){return ye}});var l=a(641),r=a(3751);const o={"data-cy":"calc_results"},i={class:"results_action_area"},d={style:{position:"relative"}},s={key:1,"data-cy":"product_list"};function _(t,e,a,_,n,c){const u=(0,l.g2)("Step_title"),p=(0,l.g2)("Summary"),h=(0,l.g2)("Global_form"),g=(0,l.g2)("Filters"),m=(0,l.g2)("Product_delivery"),b=(0,l.g2)("Bouncer_loading"),f=(0,l.g2)("Product_template");return(0,l.uX)(),(0,l.CE)("section",o,[c.classic_np_nav?((0,l.uX)(),(0,l.Wv)(u,{key:0,loaded:n.loaded,total:n.total},null,8,["loaded","total"])):(0,l.Q3)("",!0),(0,l.Lk)("div",i,[(0,l.bF)(p,{user_data:c.user_data},null,8,["user_data"]),(0,l.bF)(h,{global_disabled:n.global_disabled,global_inputs:n.global_inputs,price_inputs:n.price_inputs,global_errors:n.global_errors,onValidate_global_changed:c.validate_global_changed},null,8,["global_disabled","global_inputs","price_inputs","global_errors","onValidate_global_changed"]),c.display_filters?((0,l.uX)(),(0,l.Wv)(g,{key:0,got_products:n.got_products,filtered_array:c.filtered_array,disabled_from_calculate:n.disabled_from_calculate,global_disabled:n.global_disabled,onCalculate_all_products:c.calculate_all_products,onFilters_run_own_validate:c.filters_run_own_validate},null,8,["got_products","filtered_array","disabled_from_calculate","global_disabled","onCalculate_all_products","onFilters_run_own_validate"])):(0,l.Q3)("",!0),c.classic_np_nav?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(m,{key:1}))]),(0,l.bo)((0,l.Lk)("div",d,[(0,l.bF)(b,{size:"small",style:{position:"absolute",top:"-28px",left:"50%",transform:"translateX(-50%)"}})],512),[[r.aG,n.global_disabled]]),e[0]||(e[0]=(0,l.Lk)("span",{class:"product_list_scroll_anchor"},null,-1)),n.valid_global_show_products?((0,l.uX)(),(0,l.CE)("div",s,[(0,l.bF)(r.F,{name:"product_shuffle"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(c.only_displayed_products,(t=>((0,l.uX)(),(0,l.Wv)(f,{key:t,product_id:t,product_name:n.got_products[t],response:n.raw_responses[t],being_calculated:n.being_calculated,being_selected:n.being_selected,delegate_product_select:n.delegate_product_select,onRecalculate_product:c.recalculate_product,onSelect_running:c.select_running},null,8,["product_id","product_name","response","being_calculated","being_selected","delegate_product_select","onRecalculate_product","onSelect_running"])))),128))])),_:1})])):(0,l.Q3)("",!0)])}a(4114),a(4979),a(1678);const n={class:"results_deliver"},c={key:1,class:"i_download"};function u(t,e,a,r,o,i){const d=(0,l.g2)("Bouncer_loading");return(0,l.uX)(),(0,l.CE)("div",n,[i.allow_email_modal?((0,l.uX)(),(0,l.CE)("button",{key:0,onClick:e[0]||(e[0]=(...t)=>i.open_email_modal&&i.open_email_modal(...t)),class:"btn-text i_anchor"},e[2]||(e[2]=[(0,l.Lk)("span",{class:"i_email"},null,-1),(0,l.eW)(" poslať e-mailom ")]))):(0,l.Q3)("",!0),(0,l.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>i.download_pdf&&i.download_pdf(...t)),class:"btn-text i_anchor"},[o.downloading_pdf?((0,l.uX)(),(0,l.Wv)(d,{key:0,size:"small"})):((0,l.uX)(),(0,l.CE)("span",c)),e[3]||(e[3]=(0,l.eW)(" stiahnuť pdf "))])])}var p=a(8700),h=a(6343),g=a(3175);class m{download_global_pdf(){let t={action_name:"getpdf",method:"POST",url:(0,p.A)().endpoint_url()+"online/getpdf/?&id="+h.A.group_offer()+h.A.add_token_as_parameter()},e=new g.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}}var b=new m,f=a(55),v=a(2873),k=a(3177),y={props:{},components:{Bouncer_loading:f.A},emits:[],data(){return{downloading_pdf:!1}},created(){},methods:{download_pdf(){this.downloading_pdf||(this.downloading_pdf=!0,b.download_global_pdf().then((t=>{this.downloading_pdf=!1,200===t.status&&h.A.downloadBase64("Ponuka.pdf",t.result.pdf)})))},open_email_modal(){(0,v.A)().open_it("Email")}},computed:{allow_email_modal(){let t=(0,k.A)().get_receiver();return 4!==t}},watch:{}},A=a(6262);const x=(0,A.A)(y,[["render",u]]);var w=x,C=a(33);const L=["id"],X={class:"col-lg-10 pr_area_info pb-2 pb-lg-1 position-relative"},E={class:"pr_ribbon"},O={class:"pr_top"},j={class:"row g-0"},F={class:"col-lg-2"},I={class:"pr_box_logo text-center mb-2 mb-lg-0"},W=["src"],S={class:"col-lg-4"},T={class:"pr_box_name text-center text-lg-start"},P=["id"],z={key:0,class:"pr_rating"},R={class:"pr_select"},G={key:0},V={class:"detail-compare text-nowrap"},Q={class:"pr_detail"},$={class:"col-lg-6"},B={class:"pr_box_overview"},K=["innerHTML"],N={class:"pr_bottom"},q={class:"row g-0"},M={class:"col-lg-6"},U={class:"pr_box_included"},D={class:"col-lg-6"},H={class:"pr_box_options"},J={key:5},Z={class:"text-center my-3"},Y=["id"],tt={class:"col-lg-2"},et={class:"pr_area_price d-flex flex-column flex-sm-row flex-lg-column text-center h-100"},at={class:"pr_discount"},lt={key:0,title:"Základná cena pred zľavami",class:"before_discount"},rt={key:1,title:"Celková zľava",class:"discount_tag"},ot={class:"amount"},it={class:"text-default"},dt={class:"period"},st={class:"pr_price"},_t={class:"pr_cta"},nt={key:0,class:"btn btn-inactive w-100"},ct={key:1,class:"btn btn-inactive w-100"},ut=["disabled"],pt=["disabled"],ht=["disabled"],gt={key:5,class:"btn btn-inactive w-100"},mt=["disabled"],bt={key:7};function ft(t,e,a,o,i,d){const s=(0,l.g2)("Select"),_=(0,l.g2)("Tooltip"),n=(0,l.g2)("Checkbox"),c=(0,l.g2)("Multiple"),u=(0,l.g2)("Datepicker"),p=(0,l.g2)("Plaintext"),h=(0,l.g2)("Bouncer_loading");return(0,l.uX)(),(0,l.CE)("div",{id:"product_"+a.product_id,class:(0,C.C4)([d.show_loading_animation?"the_form_is_disabled":"","row product g-0"]),"data-cy":"product"},[(0,l.Lk)("div",X,[(0,l.bo)((0,l.Lk)("div",E,e[7]||(e[7]=[(0,l.Lk)("span",null,"NÁŠ TIP",-1)]),512),[[r.aG,"1"===i.p_data.product.promo&&"2"===i.p_data.product.promo]]),(0,l.Lk)("div",O,[(0,l.Lk)("div",j,[(0,l.Lk)("div",F,[(0,l.Lk)("div",I,[(0,l.Lk)("img",{src:i.p_data.logo},null,8,W)])]),(0,l.Lk)("div",S,[(0,l.Lk)("div",T,[(0,l.Lk)("h4",{id:"#"+a.product_id},(0,C.v_)(a.product_name),9,P),d.not_zeteo_product?(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",z,[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(5,(t=>(0,l.Lk)("span",{class:(0,C.C4)([t>i.p_data.product.stars?"i_star_empty":"i_star"])},null,2))),64))],512)),[[r.aG,i.p_data.product.stars>0]]):(0,l.Q3)("",!0),(0,l.bo)((0,l.Lk)("div",R,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.p_data.spoluucast_krytie,((t,e)=>((0,l.uX)(),(0,l.Wv)(s,{field_id:e,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])))),256)),i.p_data.product.spoluucast_text&&!i.p_data.spoluucast_krytie?((0,l.uX)(),(0,l.CE)("p",G,(0,C.v_)(i.p_data.product.spoluucast_text),1)):(0,l.Q3)("",!0)],512),[[r.aG,i.p_data.spoluucast_krytie||i.p_data.product.spoluucast_text]]),(0,l.Lk)("div",V,[(0,l.Lk)("span",Q,[(0,l.bo)((0,l.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>d.open_product_detail&&d.open_product_detail(...t)),class:"btn-text i_anchor"},e[8]||(e[8]=[(0,l.Lk)("span",{class:"i_detail"},null,-1),(0,l.eW)(" info o produkte ")]),512),[[r.aG,"2"===i.p_data.product.detail]])])])])]),e[9]||(e[9]=(0,l.Lk)("hr",{class:"pr_divider d-block d-lg-none"},null,-1)),(0,l.Lk)("div",$,[(0,l.Lk)("div",B,[(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.p_data.icons,(t=>((0,l.uX)(),(0,l.CE)("li",{class:(0,C.C4)(t.class)},[(0,l.Lk)("span",{innerHTML:t.title,class:"bold_move_to_side"},null,8,K),(0,l.bF)(_,{tooltip_text:t.tooltip,tooltip_type:"cost"},null,8,["tooltip_text"])],2)))),256))])])])])]),e[14]||(e[14]=(0,l.Lk)("hr",{class:"pr_divider"},null,-1)),(0,l.Lk)("div",N,[(0,l.Lk)("div",q,[(0,l.Lk)("div",M,[(0,l.Lk)("div",U,[(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.p_data.benefits,(t=>((0,l.uX)(),(0,l.CE)("li",{class:(0,C.C4)(t.class)},(0,C.v_)(t.title),3)))),256))])])]),e[12]||(e[12]=(0,l.Lk)("hr",{class:"pr_divider d-block d-lg-none"},null,-1)),(0,l.Lk)("div",D,[(0,l.Lk)("div",H,[(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.p_data.card_inputs,((t,a)=>((0,l.uX)(),(0,l.CE)("li",null,[(0,l.Lk)("div",{class:(0,C.C4)(i.validation_highlight.error&&i.validation_highlight.input_name===a?"product_highlight":"")},["checkbox"===t.type?((0,l.uX)(),(0,l.Wv)(n,{key:0,field_id:a,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])):"select"===t.type&&"multiple"!==t.type_settings?.select_type?((0,l.uX)(),(0,l.Wv)(s,{key:1,field_id:a,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])):"select"===t.type&&"multiple"===t.type_settings?.select_type?((0,l.uX)(),(0,l.Wv)(c,{key:2,field_id:a,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])):"date"===t.type?((0,l.uX)(),(0,l.Wv)(u,{key:3,field_id:a,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])):"plaintext"===t.type?((0,l.uX)(),(0,l.Wv)(p,{key:4,field_id:a,field_data:t,in_product:!0},null,8,["field_id","field_data"])):((0,l.uX)(),(0,l.CE)("p",J,[(0,l.Lk)("strong",null,(0,C.v_)(a),1),e[10]||(e[10]=(0,l.eW)(" unsupported type"))]))],2)])))),256))]),(0,l.Lk)("div",Z,[i.p_data.extended_opener?((0,l.uX)(!0),(0,l.CE)(l.FK,{key:0},(0,l.pI)(i.p_data.extended_opener,((t,a)=>((0,l.uX)(),(0,l.CE)("button",{id:a,onClick:e[1]||(e[1]=(...t)=>d.open_extended&&d.open_extended(...t)),class:"btn-text i_anchor"},[e[11]||(e[11]=(0,l.Lk)("span",{class:"i_settings"},null,-1)),(0,l.eW)(" "+(0,C.v_)(t.label)+(0,C.v_)(i.p_data.extended_errors?" - ERROR!":""),1)],8,Y)))),256)):(0,l.Q3)("",!0)])])])]),i.p_data.product.crossell?((0,l.uX)(),(0,l.CE)("div",{key:0,class:(0,C.C4)(["pr_bundle",i.validation_highlight.error?"product_highlight":""])},[e[13]||(e[13]=(0,l.Lk)("span",{class:"bundle_img"},null,-1)),(0,l.Lk)("p",null,(0,C.v_)(i.p_data.product.crossell),1)],2)):(0,l.Q3)("",!0)])]),(0,l.Lk)("div",tt,[(0,l.Lk)("div",et,[(0,l.Lk)("div",at,[i.p_data.price.base>0?((0,l.uX)(),(0,l.CE)("span",lt,(0,C.v_)(i.p_data.price.base)+"€ ",1)):(0,l.Q3)("",!0),i.p_data.price.discount>0?((0,l.uX)(),(0,l.CE)("span",rt,(0,C.v_)(i.p_data.price.discount)+"% ",1)):(0,l.Q3)("",!0)]),(0,l.bo)((0,l.Lk)("div",{onClick:e[2]||(e[2]=(...t)=>d.get_price_ws_details&&d.get_price_ws_details(...t)),class:(0,C.C4)(["pr_price",d.dont_allow_limity?"":"price_has_details"])},[(0,l.Lk)("span",ot,(0,C.v_)(i.p_data.price.for_period),1),(0,l.Lk)("span",it,(0,C.v_)(i.p_data.price.currency),1),(0,l.Lk)("span",dt,(0,C.v_)(i.p_data.price.period_label),1)],2),[[r.aG,!d.show_loading_animation&&i.p_data.price.for_period]]),(0,l.bo)((0,l.Lk)("div",st,[(0,l.bF)(h)],512),[[r.aG,d.show_loading_animation]]),(0,l.bo)((0,l.Lk)("div",_t,[i.p_data.error.errors?((0,l.uX)(),(0,l.CE)("span",nt,[(0,l.Lk)("span",{class:(0,C.C4)(i.p_data.error.alt_text?"viacinfo":"")},(0,C.v_)(i.p_data.error.alt_text?"VIAC INFO":"Nedá sa poistiť"),3),(0,l.bF)(_,{tooltip_text:i.p_data.error.errors,tooltip_type:"info"},null,8,["tooltip_text"])])):null!==i.p_data.extended_errors?((0,l.uX)(),(0,l.CE)("span",ct,[(0,l.Lk)("span",{class:(0,C.C4)(i.p_data.error.alt_text?"viacinfo":"")}," Rozšír. ERR ",2),(0,l.bF)(_,{tooltip_text:JSON.stringify(this.p_data.extended_errors),tooltip_type:"info"},null,8,["tooltip_text"])])):"5"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("button",{key:2,onClick:e[3]||(e[3]=(...t)=>d.open_specify&&d.open_specify(...t)),disabled:a.being_selected,class:"btn btn-xlg btn-right btn-accent w-100"}," Vybrať ",8,ut)):"4"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("button",{key:3,onClick:e[4]||(e[4]=(...t)=>d.validate_then_select&&d.validate_then_select(...t)),disabled:a.being_selected,class:"btn btn-xlg btn-right btn-accent w-100"},(0,C.v_)(d.not_zeteo_product?"Vybrať":"Uzatvoriť"),9,pt)):"3"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("button",{key:4,onClick:e[5]||(e[5]=(...t)=>d.redirect_to_product&&d.redirect_to_product(...t)),disabled:a.being_selected,class:"btn btn-xlg btn-right btn-accent w-100"},(0,C.v_)(d.not_zeteo_product?"Vybrať":"Uzatvoriť"),9,ht)):"2"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("span",gt,[(0,l.Lk)("span",{class:(0,C.C4)(i.p_data.error.alt_text?"viacinfo":"")},(0,C.v_)(i.p_data.error.alt_text?"VIAC INFO":"Nedá sa poistiť"),3),(0,l.bF)(_,{tooltip_text:i.p_data.error.info,tooltip_type:"info"},null,8,["tooltip_text"])])):"1"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("button",{key:6,onClick:e[6]||(e[6]=(...t)=>d.select_this_product&&d.select_this_product(...t)),disabled:a.being_selected,class:"btn btn-xlg btn-right btn-accent w-100"},(0,C.v_)(d.not_zeteo_product?"Vybrať":"Uzatvoriť"),9,mt)):(0,l.Q3)("",!0),"1"===i.p_data.button.show&&i.p_data.product.warning&&null===i.p_data.extended_errors&&!i.p_data.error.errors?((0,l.uX)(),(0,l.CE)("div",bt,[(0,l.bF)(_,{tooltip_text:i.p_data.product.warning,tooltip_type:"warning"},null,8,["tooltip_text"])])):(0,l.Q3)("",!0)],512),[[r.aG,!d.show_loading_animation]])])])],10,L)}class vt{get_product_list(){let t={action_name:"getproducts",method:"GET",url:(0,p.A)().endpoint_url()+"online/getproducts/"+(0,p.A)().product_group_id()+"/?"+h.A.add_token_as_parameter()},e=new g.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}select_product(){let t={action_name:"productselect",method:"GET",url:(0,p.A)().endpoint_url()+"online/productselect/"+(0,k.A)().get_selected_product().product_id+"/?"+h.A.add_token_as_parameter()};t.url+="&"+h.A.serialize_object((0,k.A)().get_selected_product());let e=new g.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}}var kt=new vt,yt=a(5162),At=a(1602),xt=a(6104),wt=a(4211),Ct=a(6451),Lt=a(4871),Xt=a(9452),Et=(a(8856),a(2095)),Ot=a(2050),jt=a(3886),Ft={props:{product_id:String,product_name:String,response:Object,being_calculated:Array,being_selected:Boolean,delegate_product_select:Number},components:{Checkbox:At.A,Select:xt.A,Multiple:wt.A,Datepicker:Ct.A,Plaintext:Lt.A,Bouncer_loading:f.A,Tooltip:Et.A},emits:["recalculate_product","select_running"],data(){return{loading:!0,validation_highlight:{error:!1,input_name:""},p_data:{logo:"",error:{errors:"",alt_text:!1,info:""},button:{show:"0",next_form:"",next_contract:"",next_redirect:"",validation_codition_old:"",validation_codition_new:"",filter_price_inputs:null},price:{for_period:"",currency:"",period_label:"",base:"",discount:""},product:{promo:"",stars:0,spoluucast_text:"",detail:"",detail_template:"",crossell:"",warning:"",limity:"0"},icons:[],benefits:[{title:"",class:""}],spoluucast_krytie:!1,card_inputs:!1,calc_documents:{},extended_inputs:null,extended_errors:null,extended_opener:!1}}},created(){this.asign_values()},methods:{asign_values(){if("object"!==typeof this.response)return void Object.assign(this.$data,this.$options.data());let t=this.response.result[this.product_id].result,e=yt.A.find_period(this.response);this.p_data={logo:t?.head?.logo?.comment,period:e,error:{errors:yt.A.error_tooltip(t),alt_text:yt.A.check_alt_text(),info:yt.A.info_tooltip(t)},price:{for_period:yt.A.price_for_period(t,e),currency:t?.result?.currency?.result||"€",period_label:yt.A.label_for_period(t,e),base:t?.result?.base?.result,discount:t?.result?.discount?.result},button:{show:t?.next?.next?.result,next_form:t?.next?.next_form?.result,next_contract:t?.next?.next_contract_html?.result,next_redirect:t?.next?.next_redirect?.result,validation_codition_old:t?.next?.next?.comment,validation_codition_new:t?.next?.next_validation?.result,filter_price_inputs:t?.next?.next_global?.result||null},product:{promo:t?.product?.promo?.result,stars:parseInt(t?.product?.stars?.result,10),spoluucast_text:t?.product?.spoluucast?.formula_name,detail:t?.product?.detail?.result,detail_template:t?.product?.detail?.comment,crossell:"1"===t?.product?.crossell?.result?t?.product?.crossell?.comment:"",warning:t?.result?.warning?.result,limity:t?.product?.limity?.result||"0"},icons:yt.A.sort_icons(t?.icon),benefits:yt.A.sort_benefits(t?.benefit),spoluucast_krytie:yt.A.product_form_formatter(t?.results_form?.comment,"spoluucast"),card_inputs:yt.A.product_form_formatter(t?.results_form?.comment,"product"),calc_documents:yt.A.format_calculate_docs(this.response.result[this.product_id].documents),extended_inputs:yt.A.extended_form_formatter(t?.results_form?.comment),extended_errors:yt.A.flatten_extended_errors(this.response,t?.results_form?.comment),extended_opener:yt.A.product_form_formatter(t?.results_form?.comment,"extended")},this.loading=!1},select_this_product(){(0,p.A)().is_read_only()?(0,p.A)().change_step(3):(this.loading=!0,this.$emit("select_running",!0),(0,k.A)().set_selected_product(this.product_id,this.p_data.button.next_form,this.p_data.button.next_contract,this.p_data.period,this.product_name,this.p_data.price.for_period),kt.select_product().then((t=>{if(200!==t.status||"success"!==t.result.response)return this.loading=!1,void this.$emit("select_running",!1);(0,p.A)().change_step(3)})))},redirect_to_product(){this.p_data.button.next_redirect?((0,k.A)().set_selected_product(this.product_id,this.p_data.button.next_form,this.p_data.button.next_contract,this.p_data.period,this.product_name,this.p_data.price.for_period),Ot.A.send_event("product_redirect"),window.open(this.p_data.button.next_redirect,"_blank").focus()):console.log(this.product_id+" next_redirect is undefined")},open_product_detail(){(0,k.A)().set_selected_product(this.product_id,null,null,null,null,null),(0,v.A)().store_modal_data({product_name:this.product_name,detail_template:this.p_data.product.detail_template}),(0,v.A)().open_it("Product_detail")},open_extended(){(0,v.A)().store_modal_data({extended_inputs:this.p_data.extended_inputs,extended_errors:this.p_data.extended_errors,product_name:this.product_name,product_id:this.product_id,period:this.p_data.period}),(0,v.A)().open_it("Extended_product_settings")},open_specify(){(0,v.A)().store_modal_data({launched_from:"from_product",product_id:this.product_id,price_inputs:{},price_errors:{},filter_price_inputs:this.p_data.button.filter_price_inputs}),(0,v.A)().open_it("Specify_product_price")},recalculate_product(){let t=Object.keys(this.p_data.card_inputs).concat(Object.keys(this.p_data.spoluucast_krytie)),e=h.A.serialize_specific_inputs(t);this.$emit("recalculate_product",this.product_id,e)},get_price_ws_details(){if(!this.dont_allow_limity)if(this.loading=!0,"1"===this.p_data.product.limity)Xt.A.set_data({product_template_identifier:this.product_id}).then((()=>{(0,v.A)().open_it("Product_ws_details"),this.loading=!1}));else if("2"===this.p_data.product.limity)for(let t in this.p_data.calc_documents)jt.A.get_session_document(this.p_data.calc_documents[t].id).then((e=>{200===e.status?(h.A.downloadBase64(this.p_data.calc_documents[t].name,e.result.content),this.loading=!1):this.loading=!1}))},validate_then_select(){let t=structuredClone(this.p_data.button.validation_codition_old);t||(t=structuredClone(this.p_data.button.validation_codition_new)),this.validation_highlight=yt.A.validate_product(t),this.validation_highlight.error||this.select_this_product(),setTimeout((()=>{this.validation_highlight.error=!0}),0),setTimeout((()=>{this.validation_highlight.error=!1}),500),setTimeout((()=>{this.validation_highlight.error=!0}),1e3),setTimeout((()=>{this.validation_highlight.error=!1}),1500),setTimeout((()=>{this.validation_highlight.error=!0}),2e3),setTimeout((()=>{this.validation_highlight.error=!1}),2500)}},computed:{show_loading_animation(){let t=this.being_calculated.indexOf(this.product_id);return this.being_calculated[t]||this.loading},dont_allow_limity(){return this.p_data.error.errors||!["1","2"].includes(this.p_data.product.limity)},not_zeteo_product(){return!(0,p.A)().is_zeteo_skin()}},watch:{response(){this.asign_values()},delegate_product_select(){this.delegate_product_select===this.product_id&&this.select_this_product()}}};const It=(0,A.A)(Ft,[["render",ft]]);var Wt=It;const St={class:"calc_title_area","data-cy":"title"},Tt={key:0},Pt={key:1},zt=["title"];function Rt(t,e,a,r,o,i){const d=(0,l.g2)("Product_delivery");return(0,l.uX)(),(0,l.CE)("div",St,[0===a.loaded?((0,l.uX)(),(0,l.CE)("h2",Tt," Hľadáme produkty... ")):((0,l.uX)(),(0,l.CE)("h2",Pt,[e[0]||(e[0]=(0,l.eW)(" Našli sme ")),(0,l.Lk)("span",{title:"z "+a.total+" prepočítavaných",class:"text-accent"},(0,C.v_)(i.products_found),9,zt)])),(0,l.bF)(d)])}var Gt={props:{loaded:Number,total:Number},components:{Product_delivery:w},data(){return{}},created(){},methods:{},computed:{products_found(){return 1===this.loaded?this.loaded+" produkt":this.loaded>1&&this.loaded<5?this.loaded+" produkty":this.loaded+" produktov"}}};const Vt=(0,A.A)(Gt,[["render",Rt]]);var Qt=Vt;const $t={class:"d-flex align-items-stretch form_summary","data-cy":"summary"},Bt={class:"w-100 data_summary"},Kt={class:"d-flex flex-shrink-1 data_edit"};function Nt(t,e,a,r,o,i){return(0,l.uX)(),(0,l.CE)("div",$t,[(0,l.Lk)("div",Bt,[e[1]||(e[1]=(0,l.Lk)("strong",null,"Vaše údaje:",-1)),(0,l.eW)(" "+(0,C.v_)(a.user_data),1)]),(0,l.Lk)("div",Kt,[(0,l.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>i.go_back&&i.go_back(...t)),class:"btn-text i_anchor my-auto"},e[2]||(e[2]=[(0,l.Lk)("span",{class:"i_edit"},null,-1),(0,l.Lk)("span",{class:"d-none d-sm-inline"},"upraviť",-1)]))])])}var qt=a(9614),Mt={props:{user_data:String},components:{},data(){return{}},created(){},methods:{go_back(){(0,p.A)().change_step(1)}},computed:{requested_direction(){return(0,qt.A)().get_requested_direction()}},watch:{requested_direction(){null!==this.requested_direction&&"backward"===this.requested_direction&&((0,qt.A)().reset_requested_direction(),this.go_back())}}};const Ut=(0,A.A)(Mt,[["render",Nt]]);var Dt=Ut;const Ht={class:"product_selection"},Jt={class:"row"},Zt={class:"col-sm-6 col-md-4"},Yt={class:"form-check"},te=["id","name","onUpdate:modelValue","disabled"],ee=["for"],ae={class:"text-center"},le={class:"text-center"};function re(t,e,a,o,i,d){return(0,l.uX)(),(0,l.CE)("div",{class:(0,C.C4)(d.is_disabled?"the_form_is_disabled":""),id:"filters_form","data-cy":"filters"},[(0,l.Lk)("div",{onClick:e[0]||(e[0]=(...t)=>d.toggle&&d.toggle(...t)),class:"filter_head text-center"},e[2]||(e[2]=[(0,l.Lk)("p",{class:"filter_toggle"},[(0,l.Lk)("span",{class:"i_adjust"}),(0,l.eW)(" filter ")],-1)])),(0,l.bo)((0,l.Lk)("div",Ht,[(0,l.Lk)("div",Jt,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.got_products,((t,e)=>((0,l.uX)(),(0,l.CE)("div",Zt,[(0,l.Lk)("div",Yt,[(0,l.bo)((0,l.Lk)("input",{id:e,name:e,"onUpdate:modelValue":t=>i.values[e]=t,disabled:d.disable_in_filter(e),"true-value":"1","false-value":"0",type:"checkbox",class:"form-check-input"},null,8,te),[[r.lH,i.values[e]]]),(0,l.Lk)("label",{for:e,class:"form-check-label"},(0,C.v_)(t),9,ee)])])))),256))]),(0,l.Lk)("div",ae,[(0,l.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>d.filter_submit&&d.filter_submit(...t)),class:"btn btn-primary btn-m mt-3"}," Vyber produkty ")]),(0,l.bo)((0,l.Lk)("div",le,e[3]||(e[3]=[(0,l.Lk)("p",{class:"mt-2 mb-0 text-warning"},"Minimálne jeden z produktov musí byť vybraný.",-1)]),512),[[r.aG,i.error]])],512),[[r.aG,i.opened]])],2)}var oe=a(9126),ie={props:{got_products:Object,filtered_array:Array,disabled_from_calculate:Array,global_disabled:Boolean},components:{},emits:["calculate_all_products","filters_run_own_validate"],data(){return{opened:!1,values:{},error:!1}},created(){for(let t in this.got_products)this.got_products.hasOwnProperty(t)&&(0===this.filtered_array.length||this.filtered_array.indexOf(parseInt(t,10))>-1?this.values[t]="1":this.values[t]="0")},methods:{toggle(){this.opened=!this.opened},disable_in_filter(t){return t=parseInt(t,10),this.disabled_from_calculate.indexOf(t)>-1},filter_submit(){let t=[];for(let a in this.values)this.values.hasOwnProperty(a)&&"1"===this.values[a]&&t.push(a);if(0===t.length)return void(this.error=!0);this.error=!1,t.length===Object.keys(this.got_products).length&&(t=[]),this.$emit("filters_run_own_validate");let e="filtered_products="+t.join(",");oe.A.validate_global_form(e).then((e=>{200===e.status&&((0,k.A)().set_filtered_products(t.join(",")),this.$emit("calculate_all_products"))}))}},computed:{is_disabled(){return this.global_disabled}},watch:{}};const de=(0,A.A)(ie,[["render",re],["__scopeId","data-v-35841e0b"]]);var se=de;const _e={class:"col-sm-4"},ne=["for"],ce={class:"validation-placeholder validation-message"};function ue(t,e,a,r,o,i){const d=(0,l.g2)("Checkbox"),s=(0,l.g2)("Select"),_=(0,l.g2)("Text"),n=(0,l.g2)("Datepicker"),c=(0,l.g2)("Slider");return(0,l.uX)(),(0,l.CE)("div",{class:(0,C.C4)([i.is_disabled?"the_form_is_disabled":"","row g-0 global_form"]),"data-cy":"global_form"},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.global_inputs,((r,o)=>((0,l.uX)(),(0,l.CE)("div",_e,["checkbox"!==r.type?((0,l.uX)(),(0,l.CE)("label",{key:0,for:o},(0,C.v_)(r.label),9,ne)):(0,l.Q3)("",!0),"checkbox"===r.type?((0,l.uX)(),(0,l.Wv)(d,{key:1,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[0]||(e[0]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):"select"===r.type?((0,l.uX)(),(0,l.Wv)(s,{key:2,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[1]||(e[1]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):"text"===r.type?((0,l.uX)(),(0,l.Wv)(_,{key:3,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[2]||(e[2]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):"date"===r.type?((0,l.uX)(),(0,l.Wv)(n,{key:4,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[3]||(e[3]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):"slider"===r.type?((0,l.uX)(),(0,l.Wv)(c,{key:5,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[4]||(e[4]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):(0,l.Q3)("",!0),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.global_errors[o],((t,a)=>((0,l.uX)(),(0,l.CE)("div",ce,[e[6]||(e[6]=(0,l.Lk)("span",{class:"mark-circle mark-orange"},"!",-1)),(0,l.eW)(" "+(0,C.v_)(t),1)])))),256))])))),256)),a.price_inputs&&i.price_has_error?((0,l.uX)(),(0,l.CE)("div",{key:0,onClick:e[5]||(e[5]=(...t)=>i.open_price&&i.open_price(...t)),class:"offset-4 col-sm-4"},e[7]||(e[7]=[(0,l.Lk)("button",{class:"btn btn-accent w-100"}," Opraviť hodnoty ",-1)]))):(0,l.Q3)("",!0)],2)}var pe=a(6710),he=a(3327),ge={props:{global_disabled:Boolean,global_inputs:Object,price_inputs:Object,global_errors:Object},components:{Checkbox:At.A,Select:xt.A,Text:pe.A,Datepicker:Ct.A,Slider:he.A},emits:["validate_global_changed"],data(){return{}},created(){},methods:{open_price(){(0,v.A)().store_modal_data({launched_from:"from_global",product_id:0,price_inputs:this.price_inputs,price_errors:this.global_errors,filter_price_inputs:null}),(0,v.A)().open_it("Specify_product_price")}},computed:{is_disabled(){return this.global_disabled},price_has_error(){let t=Object.keys(this.global_errors),e=Object.keys(this.price_inputs);for(let a=0;a<t.length;a++)if(e.indexOf(t[a])>-1)return!0;return!1}}};const me=(0,A.A)(ge,[["render",ue],["__scopeId","data-v-6c2da5f2"]]);var be=me,fe=a(4326),ve={props:{},components:{Product_delivery:w,Product_template:Wt,Step_title:Qt,Summary:Dt,Filters:se,Bouncer_loading:f.A,Global_form:be},data(){return{loaded:0,total:0,got_products:{},product_order:[],update_order:[],found_with_error:[],disabled_from_calculate:[],raw_responses:{},being_calculated:[],udaje:"",period:0,ready_filters:!1,global_inputs:{},price_inputs:!1,global_errors:{},global_disabled:!0,valid_global_show_products:!0,being_selected:!1,delegate_product_select:0}},created(){Promise.resolve().then((()=>Xt.A.session_info())).then((t=>{if(t.result?.state>=100)return(0,p.A)().change_step(5),Promise.reject("session already confirmed");1===t.result.read_only&&(0,p.A)().set_read_only()})).then((()=>kt.get_product_list())).then((t=>(this.got_products=t.result.products,(0,k.A)().set_filtered_products(t.result.filtered_products),oe.A.get_global_form()))).then((t=>{if(200!==t.status)return Promise.reject("get_global_form api failed");this.global_inputs=yt.A.product_form_formatter(t.result.form,"global"),this.price_inputs=yt.A.product_form_formatter(t.result.form,"price"),(0,k.A)().store_call_params(t.result.call_params),this.validate_global_changed()})).catch((t=>{console.log(t)}))},methods:{calculate_all_products(){this.loaded=0;let t=this.reduce_products_by_filtered();if(this.total=Object.keys(t).length,this.found_with_error=[],0===this.product_order.length)for(let e in this.got_products)this.product_order.push(parseInt(e,10));this.being_calculated=structuredClone(this.product_order),Xt.A.get_data().then((e=>{this.period=yt.A.find_period(e);for(let a in t)this.calculate_product(parseInt(a,10),null)}))},calculate_product(t,e){fe.A.get_calculate(t,e,this.period).then((a=>{if(this.raw_responses[t]=a,void 0===a.result||void 0!==a.result.error||void 0===a.result[t]||"1"===a.result[t].result?.result?.disable_product?.result)return"1"===a.result?.[t]?.result?.result?.disable_product?.result?this.disabled_from_calculate.push(t):!1===a.result.validform?((0,v.A)().store_modal_data({type:"calculate_step2_form_isnt_valid",errors:a.result?.form_validation_error_elements,is_client_role:!1}),(0,v.A)().open_it("Ordinary_error_modal")):console.log("#"+t+" had error",a),this.found_with_error.push(t),this.total--,void this.count_loaded();this.udaje=yt.A.search_for_udaje(a),(0,k.A)().store_call_params(a.result.call_params),null===e&&(this.update_order=yt.A.find_order(a,null,t)),this.loaded++,this.count_loaded();let l=this.being_calculated.indexOf(t);l>-1&&delete this.being_calculated[l]}))},recalculate_product(t,e){this.loaded--,this.count_loaded(),this.being_calculated.push(t),this.calculate_product(t,e)},count_loaded(){this.loaded===this.total?(this.global_disabled=!1,this.ready_filters=!0,this.product_order=this.update_order):this.global_disabled=!0},reduce_products_by_filtered(){if(0===this.filtered_array.length)return this.got_products;let t=[];for(let e in this.got_products)-1!==this.filtered_array.indexOf(parseInt(e,10))&&(t[e]=this.got_products[e]);return t},validate_global_changed(){this.global_disabled=!0,this.global_errors={};let t=h.A.serialize_specific_inputs(Object.keys(this.global_inputs));oe.A.validate_global_form(t).then((t=>{if(!0!==t.result.validform)return this.global_errors=t.result.form_validation_error_elements,this.valid_global_show_products=!1,void(this.global_disabled=!1);this.valid_global_show_products=!0,this.calculate_all_products()}))},filters_run_own_validate(){this.global_disabled=!0},select_running(t){this.being_selected=t,this.global_disabled=t}},computed:{user_data(){return this.udaje},only_displayed_products(){let t,e=[],a=this.product_order.length;for(t=0;t<a;t++){let a=parseInt(this.product_order[t],10);-1!==this.found_with_error.indexOf(a)||0!==this.filtered_array.length&&-1===this.filtered_array.indexOf(a)||e.push(a)}return e},filtered_array(){let t,e=(0,k.A)().get_filtered_products()?.split(","),a=[],l=e.length;for(t=0;t<l;t++)""!==e[t]&&a.push(parseInt(e[t],10));return a},display_filters(){return!!this.ready_filters&&(!(0,k.A)().direct_user_no_agent()||1!==(0,k.A)().get_receiver()&&2!==(0,k.A)().get_receiver())},classic_np_nav(){return!(0,p.A)().is_zeteo_skin()},closing_modal(){return(0,v.A)().get_modal_event_data()}},watch:{closing_modal(){if(null!==this.closing_modal){if("specify_recalculate"===this.closing_modal)this.global_errors={},this.valid_global_show_products=!0,this.calculate_all_products();else if(h.A.starts_with(this.closing_modal,"indicative_price_")){let t=this.closing_modal.replace("indicative_price_","");t=parseInt(t,10),this.delegate_product_select=t}else{let t=this.closing_modal;this.recalculate_product(t,null)}(0,v.A)().del_modal_event_data()}}}};const ke=(0,A.A)(ve,[["render",_],["__scopeId","data-v-826bb366"]]);var ye=ke}}]);