"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[627],{4326:function(t,e,a){var l=a(8700),r=a(6343),o=a(3175),i=a(3177);class d{get_calculate(t,e,a){let i={action_name:"calculate_step2",method:"POST",url:(0,l.A)().endpoint_url()+"online/calculate/?id="+t+"&json=1&period="+a+r.A.add_token_as_parameter(),body:e},d=new o.A;return d.prepare_params(i).handle_response().then((e=>408===e.status?(console.log("#"+t+" has 408, going for results request"),this.repeat_results()):e)).catch((t=>{throw t}))}check_calculate(){let t={action_name:"calculate_step4",method:"POST",url:(0,l.A)().endpoint_url()+"online/calculate/?"+r.A.add_token_as_parameter(),body:null};t.url+="&id="+(0,i.A)().get_selected_product().product_id+"&period="+(0,i.A)().get_selected_product().period;let e=new o.A;return e.prepare_params(t).handle_response().then((async t=>408===t.status?(console.log("calculate has 408 timeout, wait 1 minute and run results api"),await r.A.sleep(60),this.repeat_results()):t)).catch((t=>{throw t}))}repeat_results(){let t={action_name:"results",method:"GET",url:(0,l.A)().endpoint_url()+"online/results/?"+r.A.add_token_as_parameter()},e=new o.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}}e.A=new d},8856:function(t,e,a){var l=a(8700),r=a(6343),o=a(3175),i=a(3177);class d{get_it(t){!1===t&&(t=(0,i.A)().get_selected_product().next_contract);let e={action_name:"gethtml",method:"POST",url:(0,l.A)().endpoint_url()+"online/gethtml/?id="+t+r.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(e).handle_response().catch((t=>{throw t}))}get_json_api(t){let e={action_name:"getjson",method:"POST",url:(0,l.A)().endpoint_url()+"online/getjson/?id="+t+r.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(e).handle_response().catch((t=>{throw t}))}}e.A=new d},9452:function(t,e,a){var l=a(8700),r=a(6343),o=a(3175);class i{session_info(){let t={action_name:"getsessioninfo",method:"GET",url:(0,l.A)().endpoint_url()+"online/getsessioninfo/?"+r.A.add_token_as_parameter()},e=new o.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}get_data(){let t={action_name:"getdata",method:"GET",url:(0,l.A)().endpoint_url()+"online/getdata/?"+r.A.add_token_as_parameter()},e=new o.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}set_data(t){let e={action_name:"setdata",method:"POST",url:(0,l.A)().endpoint_url()+"online/setdata/?"+r.A.serialize_object(t)+r.A.add_token_as_parameter()},a=new o.A;return a.prepare_params(e).handle_response().catch((t=>{throw t}))}}e.A=new i},9109:function(t,e,a){a.r(e),a.d(e,{default:function(){return Ve}});var l=a(641),r=a(3751);const o=t=>((0,l.Qi)("data-v-9121fcf4"),t=t(),(0,l.jt)(),t),i={"data-cy":"calc_results"},d={class:"results_action_area"},s={style:{position:"relative"}},_=o((()=>(0,l.Lk)("span",{class:"product_list_scroll_anchor"},null,-1))),n={key:1,"data-cy":"product_list"};function c(t,e,a,o,c,u){const p=(0,l.g2)("Step_title"),h=(0,l.g2)("Summary"),g=(0,l.g2)("Global_form"),b=(0,l.g2)("Filters"),m=(0,l.g2)("Product_delivery"),f=(0,l.g2)("Bouncer_loading"),v=(0,l.g2)("Product_template");return(0,l.uX)(),(0,l.CE)("section",i,[u.classic_np_nav?((0,l.uX)(),(0,l.Wv)(p,{key:0,loaded:c.loaded,total:c.total},null,8,["loaded","total"])):(0,l.Q3)("",!0),(0,l.Lk)("div",d,[(0,l.bF)(h,{user_data:u.user_data},null,8,["user_data"]),(0,l.bF)(g,{global_disabled:c.global_disabled,global_inputs:c.global_inputs,price_inputs:c.price_inputs,global_errors:c.global_errors,onValidate_global_changed:u.validate_global_changed},null,8,["global_disabled","global_inputs","price_inputs","global_errors","onValidate_global_changed"]),u.display_filters?((0,l.uX)(),(0,l.Wv)(b,{key:0,got_products:c.got_products,filtered_array:u.filtered_array,disabled_from_calculate:c.disabled_from_calculate,global_disabled:c.global_disabled,onCalculate_all_products:u.calculate_all_products,onFilters_run_own_validate:u.filters_run_own_validate},null,8,["got_products","filtered_array","disabled_from_calculate","global_disabled","onCalculate_all_products","onFilters_run_own_validate"])):(0,l.Q3)("",!0),u.classic_np_nav?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.Wv)(m,{key:1}))]),(0,l.bo)((0,l.Lk)("div",s,[(0,l.bF)(f,{size:"small",style:{position:"absolute",top:"-28px",left:"50%",transform:"translateX(-50%)"}})],512),[[r.aG,c.global_disabled]]),_,c.valid_global_show_products?((0,l.uX)(),(0,l.CE)("div",n,[(0,l.bF)(r.F,{name:"product_shuffle"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.only_displayed_products,(t=>((0,l.uX)(),(0,l.Wv)(v,{key:t,product_id:t,product_name:c.got_products[t],response:c.raw_responses[t],being_calculated:c.being_calculated,being_selected:c.being_selected,delegate_product_select:c.delegate_product_select,onRecalculate_product:u.recalculate_product,onSelect_running:u.select_running},null,8,["product_id","product_name","response","being_calculated","being_selected","delegate_product_select","onRecalculate_product","onSelect_running"])))),128))])),_:1})])):(0,l.Q3)("",!0)])}a(4114),a(4979),a(1678);const u={class:"results_deliver"},p=(0,l.Lk)("span",{class:"i_email"},null,-1),h={key:1,class:"i_download"};function g(t,e,a,r,o,i){const d=(0,l.g2)("Bouncer_loading");return(0,l.uX)(),(0,l.CE)("div",u,[i.allow_email_modal?((0,l.uX)(),(0,l.CE)("button",{key:0,onClick:e[0]||(e[0]=(...t)=>i.open_email_modal&&i.open_email_modal(...t)),class:"btn-text i_anchor"},[p,(0,l.eW)(" poslať e-mailom ")])):(0,l.Q3)("",!0),(0,l.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>i.download_pdf&&i.download_pdf(...t)),class:"btn-text i_anchor"},[o.downloading_pdf?((0,l.uX)(),(0,l.Wv)(d,{key:0,size:"small"})):((0,l.uX)(),(0,l.CE)("span",h)),(0,l.eW)(" stiahnuť pdf ")])])}var b=a(8700),m=a(6343),f=a(3175);class v{download_global_pdf(){let t={action_name:"getpdf",method:"POST",url:(0,b.A)().endpoint_url()+"online/getpdf/?&id="+m.A.group_offer()+m.A.add_token_as_parameter()},e=new f.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}}var k=new v,y=a(55),A=a(2873),x=a(3177),w={props:{},components:{Bouncer_loading:y.A},emits:[],data(){return{downloading_pdf:!1}},created(){},methods:{download_pdf(){this.downloading_pdf||(this.downloading_pdf=!0,k.download_global_pdf().then((t=>{this.downloading_pdf=!1,200===t.status&&m.A.downloadBase64("Ponuka.pdf",t.result.pdf)})))},open_email_modal(){(0,A.A)().open_it("Email")}},computed:{allow_email_modal(){let t=(0,x.A)().get_receiver();return 4!==t}},watch:{}},C=a(6262);const L=(0,C.A)(w,[["render",g]]);var X=L,E=a(33);const O=["id"],j={class:"col-lg-10 pr_area_info pb-2 pb-lg-1 position-relative"},F={class:"pr_ribbon"},I=(0,l.Lk)("span",null,"NÁŠ TIP",-1),S=[I],T={class:"pr_top"},W={class:"row g-0"},P={class:"col-lg-2"},z={class:"pr_box_logo text-center mb-2 mb-lg-0"},Q=["src"],R={class:"col-lg-4"},G={class:"pr_box_name text-center text-lg-start"},V=["id"],$={key:0,class:"pr_rating"},B={class:"pr_select"},N={key:0},K={class:"detail-compare text-nowrap"},q={class:"pr_detail"},M=(0,l.Lk)("span",{class:"i_detail"},null,-1),U=(0,l.Lk)("hr",{class:"pr_divider d-block d-lg-none"},null,-1),D={class:"col-lg-6"},H={class:"pr_box_overview"},J=["innerHTML"],Z=(0,l.Lk)("hr",{class:"pr_divider"},null,-1),Y={class:"pr_bottom"},tt={class:"row g-0"},et={class:"col-lg-6"},at={class:"pr_box_included"},lt=(0,l.Lk)("hr",{class:"pr_divider d-block d-lg-none"},null,-1),rt={class:"col-lg-6"},ot={class:"pr_box_options"},it={key:5},dt=(0,l.Lk)("span",{class:"bundle_img"},null,-1),st={class:"col-lg-2"},_t={class:"pr_area_price d-flex flex-column flex-sm-row flex-lg-column text-center h-100"},nt={class:"pr_discount"},ct={key:0,title:"Základná cena pred zľavami",class:"before_discount"},ut={key:1,title:"Celková zľava",class:"discount_tag"},pt={class:"amount"},ht={class:"text-default"},gt={class:"period"},bt={class:"pr_price"},mt={class:"pr_cta"},ft={key:0,class:"btn btn-inactive w-100"},vt={key:1,class:"btn btn-inactive w-100"},kt=["disabled"],yt=["disabled"],At=["disabled"],xt={key:5,class:"btn btn-inactive w-100"},wt=["disabled"],Ct={key:7};function Lt(t,e,a,o,i,d){const s=(0,l.g2)("Select"),_=(0,l.g2)("Tooltip"),n=(0,l.g2)("Checkbox"),c=(0,l.g2)("Multiple"),u=(0,l.g2)("Datepicker"),p=(0,l.g2)("Plaintext"),h=(0,l.g2)("Bouncer_loading");return(0,l.uX)(),(0,l.CE)("div",{id:"product_"+a.product_id,class:(0,E.C4)([d.show_loading_animation?"the_form_is_disabled":"","row product g-0"]),"data-cy":"product"},[(0,l.Lk)("div",j,[(0,l.bo)((0,l.Lk)("div",F,S,512),[[r.aG,"1"===i.p_data.product.promo&&"2"===i.p_data.product.promo]]),(0,l.Lk)("div",T,[(0,l.Lk)("div",W,[(0,l.Lk)("div",P,[(0,l.Lk)("div",z,[(0,l.Lk)("img",{src:i.p_data.logo},null,8,Q)])]),(0,l.Lk)("div",R,[(0,l.Lk)("div",G,[(0,l.Lk)("h4",{id:"#"+a.product_id},(0,E.v_)(a.product_name),9,V),d.not_zeteo_product?(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",$,[((0,l.uX)(),(0,l.CE)(l.FK,null,(0,l.pI)(5,(t=>(0,l.Lk)("span",{class:(0,E.C4)([t>i.p_data.product.stars?"i_star_empty":"i_star"])},null,2))),64))],512)),[[r.aG,i.p_data.product.stars>0]]):(0,l.Q3)("",!0),(0,l.bo)((0,l.Lk)("div",B,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.p_data.spoluucast_krytie,((t,e)=>((0,l.uX)(),(0,l.Wv)(s,{field_id:e,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])))),256)),i.p_data.product.spoluucast_text&&!i.p_data.spoluucast_krytie?((0,l.uX)(),(0,l.CE)("p",N,(0,E.v_)(i.p_data.product.spoluucast_text),1)):(0,l.Q3)("",!0)],512),[[r.aG,i.p_data.spoluucast_krytie||i.p_data.product.spoluucast_text]]),(0,l.Lk)("div",K,[(0,l.Lk)("span",q,[(0,l.bo)((0,l.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>d.open_product_detail&&d.open_product_detail(...t)),class:"btn-text i_anchor"},[M,(0,l.eW)(" info o produkte ")],512),[[r.aG,"2"===i.p_data.product.detail]])])])])]),U,(0,l.Lk)("div",D,[(0,l.Lk)("div",H,[(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.p_data.icons,(t=>((0,l.uX)(),(0,l.CE)("li",{class:(0,E.C4)(t.class)},[(0,l.Lk)("span",{innerHTML:t.title,class:"bold_move_to_side"},null,8,J),(0,l.bF)(_,{tooltip_text:t.tooltip,tooltip_type:"cost"},null,8,["tooltip_text"])],2)))),256))])])])])]),Z,(0,l.Lk)("div",Y,[(0,l.Lk)("div",tt,[(0,l.Lk)("div",et,[(0,l.Lk)("div",at,[(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.p_data.benefits,(t=>((0,l.uX)(),(0,l.CE)("li",{class:(0,E.C4)(t.class)},(0,E.v_)(t.title),3)))),256))])])]),lt,(0,l.Lk)("div",rt,[(0,l.Lk)("div",ot,[(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(i.p_data.card_inputs,((t,e)=>((0,l.uX)(),(0,l.CE)("li",null,[(0,l.Lk)("div",{class:(0,E.C4)(i.validation_highlight.error&&i.validation_highlight.input_name===e?"product_highlight":"")},["checkbox"===t.type?((0,l.uX)(),(0,l.Wv)(n,{key:0,field_id:e,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])):"select"===t.type&&"multiple"!==t.type_settings?.select_type?((0,l.uX)(),(0,l.Wv)(s,{key:1,field_id:e,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])):"select"===t.type&&"multiple"===t.type_settings?.select_type?((0,l.uX)(),(0,l.Wv)(c,{key:2,field_id:e,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])):"date"===t.type?((0,l.uX)(),(0,l.Wv)(u,{key:3,field_id:e,field_data:t,emit_name:"recalculate_product",onRecalculate_product:d.recalculate_product},null,8,["field_id","field_data","onRecalculate_product"])):"plaintext"===t.type?((0,l.uX)(),(0,l.Wv)(p,{key:4,field_id:e,field_data:t,in_product:!0},null,8,["field_id","field_data"])):((0,l.uX)(),(0,l.CE)("p",it,[(0,l.Lk)("strong",null,(0,E.v_)(e),1),(0,l.eW)(" unsupported type")]))],2)])))),256))]),null!==i.p_data.extended_inputs?((0,l.uX)(),(0,l.CE)("button",{key:0,onClick:e[1]||(e[1]=(...t)=>d.open_extended&&d.open_extended(...t)),class:(0,E.C4)(["btn w-100 mt-2",i.p_data.extended_errors?"btn-accent":"btn-primary"])}," Rozšírené nastavenia"+(0,E.v_)(i.p_data.extended_errors?" - ERROR!":""),3)):(0,l.Q3)("",!0)])])]),i.p_data.product.crossell?((0,l.uX)(),(0,l.CE)("div",{key:0,class:(0,E.C4)(["pr_bundle",i.validation_highlight.error?"product_highlight":""])},[dt,(0,l.Lk)("p",null,(0,E.v_)(i.p_data.product.crossell),1)],2)):(0,l.Q3)("",!0)])]),(0,l.Lk)("div",st,[(0,l.Lk)("div",_t,[(0,l.Lk)("div",nt,[i.p_data.price.base>0?((0,l.uX)(),(0,l.CE)("span",ct,(0,E.v_)(i.p_data.price.base)+"€ ",1)):(0,l.Q3)("",!0),i.p_data.price.discount>0?((0,l.uX)(),(0,l.CE)("span",ut,(0,E.v_)(i.p_data.price.discount)+"% ",1)):(0,l.Q3)("",!0)]),(0,l.bo)((0,l.Lk)("div",{onClick:e[2]||(e[2]=(...t)=>d.get_price_ws_details&&d.get_price_ws_details(...t)),class:(0,E.C4)(["pr_price",i.p_data.product.limity?"price_has_details":""])},[(0,l.Lk)("span",pt,(0,E.v_)(i.p_data.price.for_period),1),(0,l.Lk)("span",ht,(0,E.v_)(i.p_data.price.currency),1),(0,l.Lk)("span",gt,(0,E.v_)(i.p_data.price.period_label),1)],2),[[r.aG,!d.show_loading_animation&&i.p_data.price.for_period]]),(0,l.bo)((0,l.Lk)("div",bt,[(0,l.bF)(h)],512),[[r.aG,d.show_loading_animation]]),(0,l.bo)((0,l.Lk)("div",mt,[i.p_data.error.errors?((0,l.uX)(),(0,l.CE)("span",ft,[(0,l.Lk)("span",{class:(0,E.C4)(i.p_data.error.alt_text?"viacinfo":"")},(0,E.v_)(i.p_data.error.alt_text?"VIAC INFO":"Nedá sa poistiť"),3),(0,l.bF)(_,{tooltip_text:i.p_data.error.errors,tooltip_type:"info"},null,8,["tooltip_text"])])):null!==i.p_data.extended_errors?((0,l.uX)(),(0,l.CE)("span",vt,[(0,l.Lk)("span",{class:(0,E.C4)(i.p_data.error.alt_text?"viacinfo":"")}," Rozšír. ERR ",2),(0,l.bF)(_,{tooltip_text:JSON.stringify(this.p_data.extended_errors),tooltip_type:"info"},null,8,["tooltip_text"])])):"5"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("button",{key:2,onClick:e[3]||(e[3]=(...t)=>d.open_specify&&d.open_specify(...t)),disabled:a.being_selected,class:"btn btn-xlg btn-right btn-accent w-100"}," Vybrať ",8,kt)):"4"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("button",{key:3,onClick:e[4]||(e[4]=(...t)=>d.validate_then_select&&d.validate_then_select(...t)),disabled:a.being_selected,class:"btn btn-xlg btn-right btn-accent w-100"},(0,E.v_)(d.not_zeteo_product?"Vybrať":"Uzatvoriť"),9,yt)):"3"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("button",{key:4,onClick:e[5]||(e[5]=(...t)=>d.redirect_to_product&&d.redirect_to_product(...t)),disabled:a.being_selected,class:"btn btn-xlg btn-right btn-accent w-100"},(0,E.v_)(d.not_zeteo_product?"Vybrať":"Uzatvoriť"),9,At)):"2"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("span",xt,[(0,l.Lk)("span",{class:(0,E.C4)(i.p_data.error.alt_text?"viacinfo":"")},(0,E.v_)(i.p_data.error.alt_text?"VIAC INFO":"Nedá sa poistiť"),3),(0,l.bF)(_,{tooltip_text:i.p_data.error.info,tooltip_type:"info"},null,8,["tooltip_text"])])):"1"===i.p_data.button.show?((0,l.uX)(),(0,l.CE)("button",{key:6,onClick:e[6]||(e[6]=(...t)=>d.select_this_product&&d.select_this_product(...t)),disabled:a.being_selected,class:"btn btn-xlg btn-right btn-accent w-100"},(0,E.v_)(d.not_zeteo_product?"Vybrať":"Uzatvoriť"),9,wt)):(0,l.Q3)("",!0),"1"===i.p_data.button.show&&i.p_data.product.warning&&null===i.p_data.extended_errors&&!i.p_data.error.errors?((0,l.uX)(),(0,l.CE)("div",Ct,[(0,l.bF)(_,{tooltip_text:i.p_data.product.warning,tooltip_type:"warning"},null,8,["tooltip_text"])])):(0,l.Q3)("",!0)],512),[[r.aG,!d.show_loading_animation]])])])],10,O)}class Xt{get_product_list(){let t={action_name:"getproducts",method:"GET",url:(0,b.A)().endpoint_url()+"online/getproducts/"+(0,b.A)().product_group_id()+"/?"+m.A.add_token_as_parameter()},e=new f.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}select_product(){let t={action_name:"productselect",method:"GET",url:(0,b.A)().endpoint_url()+"online/productselect/"+(0,x.A)().get_selected_product().product_id+"/?"+m.A.add_token_as_parameter()};t.url+="&"+m.A.serialize_object((0,x.A)().get_selected_product());let e=new f.A;return e.prepare_params(t).handle_response().catch((t=>{throw t}))}}var Et=new Xt,Ot=a(5162),jt=a(3195),Ft=a(9132),It=a(6979),St=a(7305),Tt=a(7229),Wt=a(9452),Pt=(a(8856),a(2095)),zt=a(2050),Qt={props:{product_id:String,product_name:String,response:Object,being_calculated:Array,being_selected:Boolean,delegate_product_select:Number},components:{Checkbox:jt.A,Select:Ft.A,Multiple:It.A,Datepicker:St.A,Plaintext:Tt.A,Bouncer_loading:y.A,Tooltip:Pt.A},emits:["recalculate_product","select_running"],data(){return{loading:!0,validation_highlight:{error:!1,input_name:""},p_data:{logo:"",error:{errors:"",alt_text:!1,info:""},button:{show:"0",next_form:"",next_contract:"",next_redirect:"",validation_codition_old:"",validation_codition_new:"",filter_price_inputs:null},price:{for_period:"",currency:"",period_label:"",base:"",discount:""},product:{promo:"",stars:0,spoluucast_text:"",detail:"",detail_template:"",crossell:"",warning:"",limity:!1},icons:[],benefits:[{title:"",class:""}],spoluucast_krytie:!1,card_inputs:!1,extended_inputs:null,extended_errors:null}}},created(){this.asign_values()},methods:{asign_values(){if("object"!==typeof this.response)return void Object.assign(this.$data,this.$options.data());let t=this.response.result[this.product_id].result,e=Ot.A.find_period(this.response);this.p_data={logo:t?.head?.logo?.comment,period:e,error:{errors:Ot.A.error_tooltip(t),alt_text:Ot.A.check_alt_text(),info:Ot.A.info_tooltip(t)},price:{for_period:Ot.A.price_for_period(t,e),currency:t?.result?.currency?.result||"€",period_label:Ot.A.label_for_period(t,e),base:t?.result?.base?.result,discount:t?.result?.discount?.result},button:{show:t?.next?.next?.result,next_form:t?.next?.next_form?.result,next_contract:t?.next?.next_contract_html?.result,next_redirect:t?.next?.next_redirect?.result,validation_codition_old:t?.next?.next?.comment,validation_codition_new:t?.next?.next_validation?.result,filter_price_inputs:t?.next?.next_global?.result||null},product:{promo:t?.product?.promo?.result,stars:parseInt(t?.product?.stars?.result,10),spoluucast_text:t?.product?.spoluucast?.formula_name,detail:t?.product?.detail?.result,detail_template:t?.product?.detail?.comment,crossell:"1"===t?.product?.crossell?.result?t?.product?.crossell?.comment:"",warning:t?.result?.warning?.result,limity:"1"===t?.product?.limity?.result},icons:Ot.A.sort_icons(t?.icon),benefits:Ot.A.sort_benefits(t?.benefit),spoluucast_krytie:Ot.A.product_form_formatter(t?.results_form?.comment,"spoluucast"),card_inputs:Ot.A.product_form_formatter(t?.results_form?.comment,"product"),extended_inputs:Ot.A.extended_form_formatter(t?.results_form?.comment),extended_errors:Ot.A.flatten_extended_errors(this.response,t?.results_form?.comment)},this.loading=!1},select_this_product(){this.loading=!0,this.$emit("select_running",!0),(0,x.A)().set_selected_product(this.product_id,this.p_data.button.next_form,this.p_data.button.next_contract,this.p_data.period,this.product_name,this.p_data.price.for_period),Et.select_product().then((t=>{if(200!==t.status||"success"!==t.result.response)return this.loading=!1,void this.$emit("select_running",!1);(0,b.A)().change_step(3)}))},redirect_to_product(){this.p_data.button.next_redirect?((0,x.A)().set_selected_product(this.product_id,this.p_data.button.next_form,this.p_data.button.next_contract,this.p_data.period,this.product_name,this.p_data.price.for_period),zt.A.send_event("product_redirect"),window.open(this.p_data.button.next_redirect,"_blank").focus()):console.log(this.product_id+" next_redirect is undefined")},open_product_detail(){(0,x.A)().set_selected_product(this.product_id,null,null,null,null,null),(0,A.A)().store_modal_data({product_name:this.product_name,detail_template:this.p_data.product.detail_template}),(0,A.A)().open_it("Product_detail")},open_extended(){(0,A.A)().store_modal_data({extended_inputs:this.p_data.extended_inputs,extended_errors:this.p_data.extended_errors,product_name:this.product_name,product_id:this.product_id,period:this.p_data.period}),(0,A.A)().open_it("Extended_product_settings")},open_specify(){(0,A.A)().store_modal_data({launched_from:"from_product",product_id:this.product_id,price_inputs:{},price_errors:{},filter_price_inputs:this.p_data.button.filter_price_inputs}),(0,A.A)().open_it("Specify_product_price")},recalculate_product(){let t=Object.keys(this.p_data.card_inputs).concat(Object.keys(this.p_data.spoluucast_krytie)),e=m.A.serialize_specific_inputs(t);this.$emit("recalculate_product",this.product_id,e)},get_price_ws_details(){this.p_data.product.limity&&(this.loading=!0,Wt.A.set_data({product_template_identifier:this.product_id}).then((()=>{this.loading=!1,(0,A.A)().open_it("Product_ws_details")})))},validate_then_select(){let t=structuredClone(this.p_data.button.validation_codition_old);t||(t=structuredClone(this.p_data.button.validation_codition_new)),this.validation_highlight=Ot.A.validate_product(t),this.validation_highlight.error||this.select_this_product(),setTimeout((()=>{this.validation_highlight.error=!0}),0),setTimeout((()=>{this.validation_highlight.error=!1}),500),setTimeout((()=>{this.validation_highlight.error=!0}),1e3),setTimeout((()=>{this.validation_highlight.error=!1}),1500),setTimeout((()=>{this.validation_highlight.error=!0}),2e3),setTimeout((()=>{this.validation_highlight.error=!1}),2500)}},computed:{show_loading_animation(){let t=this.being_calculated.indexOf(this.product_id);return this.being_calculated[t]||this.loading},not_zeteo_product(){return!(0,b.A)().is_zeteo_skin()}},watch:{response(){this.asign_values()},delegate_product_select(){this.delegate_product_select===this.product_id&&this.select_this_product()}}};const Rt=(0,C.A)(Qt,[["render",Lt]]);var Gt=Rt;const Vt={class:"calc_title_area","data-cy":"title"},$t={key:0},Bt={key:1},Nt=["title"];function Kt(t,e,a,r,o,i){const d=(0,l.g2)("Product_delivery");return(0,l.uX)(),(0,l.CE)("div",Vt,[0===a.loaded?((0,l.uX)(),(0,l.CE)("h2",$t," Hľadáme produkty... ")):((0,l.uX)(),(0,l.CE)("h2",Bt,[(0,l.eW)(" Našli sme "),(0,l.Lk)("span",{title:"z "+a.total+" prepočítavaných",class:"text-accent"},(0,E.v_)(i.products_found),9,Nt)])),(0,l.bF)(d)])}var qt={props:{loaded:Number,total:Number},components:{Product_delivery:X},data(){return{}},created(){},methods:{},computed:{products_found(){return 1===this.loaded?this.loaded+" produkt":this.loaded>1&&this.loaded<5?this.loaded+" produkty":this.loaded+" produktov"}}};const Mt=(0,C.A)(qt,[["render",Kt]]);var Ut=Mt;const Dt={class:"d-flex align-items-stretch form_summary","data-cy":"summary"},Ht={class:"w-100 data_summary"},Jt=(0,l.Lk)("strong",null,"Vaše údaje:",-1),Zt={class:"d-flex flex-shrink-1 data_edit"},Yt=(0,l.Lk)("span",{class:"i_edit"},null,-1),te=(0,l.Lk)("span",{class:"d-none d-sm-inline"},"upraviť",-1),ee=[Yt,te];function ae(t,e,a,r,o,i){return(0,l.uX)(),(0,l.CE)("div",Dt,[(0,l.Lk)("div",Ht,[Jt,(0,l.eW)(" "+(0,E.v_)(a.user_data),1)]),(0,l.Lk)("div",Zt,[(0,l.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>i.go_back&&i.go_back(...t)),class:"btn-text i_anchor my-auto"},ee)])])}var le=a(9614),re={props:{user_data:String},components:{},data(){return{}},created(){},methods:{go_back(){(0,b.A)().change_step(1)}},computed:{requested_direction(){return(0,le.A)().get_requested_direction()}},watch:{requested_direction(){null!==this.requested_direction&&"backward"===this.requested_direction&&((0,le.A)().reset_requested_direction(),this.go_back())}}};const oe=(0,C.A)(re,[["render",ae]]);var ie=oe;const de=t=>((0,l.Qi)("data-v-35841e0b"),t=t(),(0,l.jt)(),t),se=de((()=>(0,l.Lk)("p",{class:"filter_toggle"},[(0,l.Lk)("span",{class:"i_adjust"}),(0,l.eW)(" filter ")],-1))),_e=[se],ne={class:"product_selection"},ce={class:"row"},ue={class:"col-sm-6 col-md-4"},pe={class:"form-check"},he=["id","name","onUpdate:modelValue","disabled"],ge=["for"],be={class:"text-center"},me={class:"text-center"},fe=de((()=>(0,l.Lk)("p",{class:"mt-2 mb-0 text-warning"},"Minimálne jeden z produktov musí byť vybraný.",-1))),ve=[fe];function ke(t,e,a,o,i,d){return(0,l.uX)(),(0,l.CE)("div",{class:(0,E.C4)(d.is_disabled?"the_form_is_disabled":""),id:"filters_form","data-cy":"filters"},[(0,l.Lk)("div",{onClick:e[0]||(e[0]=(...t)=>d.toggle&&d.toggle(...t)),class:"filter_head text-center"},_e),(0,l.bo)((0,l.Lk)("div",ne,[(0,l.Lk)("div",ce,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.got_products,((t,e)=>((0,l.uX)(),(0,l.CE)("div",ue,[(0,l.Lk)("div",pe,[(0,l.bo)((0,l.Lk)("input",{id:e,name:e,"onUpdate:modelValue":t=>i.values[e]=t,disabled:d.disable_in_filter(e),"true-value":"1","false-value":"0",type:"checkbox",class:"form-check-input"},null,8,he),[[r.lH,i.values[e]]]),(0,l.Lk)("label",{for:e,class:"form-check-label"},(0,E.v_)(t),9,ge)])])))),256))]),(0,l.Lk)("div",be,[(0,l.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>d.filter_submit&&d.filter_submit(...t)),class:"btn btn-primary btn-m mt-3"}," Vyber produkty ")]),(0,l.bo)((0,l.Lk)("div",me,ve,512),[[r.aG,i.error]])],512),[[r.aG,i.opened]])],2)}var ye=a(9126),Ae={props:{got_products:Object,filtered_array:Array,disabled_from_calculate:Array,global_disabled:Boolean},components:{},emits:["calculate_all_products","filters_run_own_validate"],data(){return{opened:!1,values:{},error:!1}},created(){for(let t in this.got_products)this.got_products.hasOwnProperty(t)&&(0===this.filtered_array.length||this.filtered_array.indexOf(parseInt(t,10))>-1?this.values[t]="1":this.values[t]="0")},methods:{toggle(){this.opened=!this.opened},disable_in_filter(t){return t=parseInt(t,10),this.disabled_from_calculate.indexOf(t)>-1},filter_submit(){let t=[];for(let a in this.values)this.values.hasOwnProperty(a)&&"1"===this.values[a]&&t.push(a);if(0===t.length)return void(this.error=!0);this.error=!1,t.length===Object.keys(this.got_products).length&&(t=[]),this.$emit("filters_run_own_validate");let e="filtered_products="+t.join(",");ye.A.validate_global_form(e).then((e=>{200===e.status&&((0,x.A)().set_filtered_products(t.join(",")),this.$emit("calculate_all_products"))}))}},computed:{is_disabled(){return this.global_disabled}},watch:{}};const xe=(0,C.A)(Ae,[["render",ke],["__scopeId","data-v-35841e0b"]]);var we=xe;const Ce=t=>((0,l.Qi)("data-v-3b2f0eec"),t=t(),(0,l.jt)(),t),Le={class:"col-sm-4"},Xe=["for"],Ee={class:"validation-placeholder validation-message"},Oe=Ce((()=>(0,l.Lk)("span",{class:"mark-circle mark-orange"},"!",-1))),je=Ce((()=>(0,l.Lk)("button",{class:"btn btn-accent w-100"}," Opraviť hodnoty ",-1))),Fe=[je];function Ie(t,e,a,r,o,i){const d=(0,l.g2)("Checkbox"),s=(0,l.g2)("Select"),_=(0,l.g2)("Text"),n=(0,l.g2)("Datepicker"),c=(0,l.g2)("Slider");return(0,l.uX)(),(0,l.CE)("div",{class:(0,E.C4)([i.is_disabled?"the_form_is_disabled":"","row g-0 global_form"]),"data-cy":"global_form"},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.global_inputs,((r,o)=>((0,l.uX)(),(0,l.CE)("div",Le,["checkbox"!==r.type?((0,l.uX)(),(0,l.CE)("label",{key:0,for:o},(0,E.v_)(r.label),9,Xe)):(0,l.Q3)("",!0),"checkbox"===r.type?((0,l.uX)(),(0,l.Wv)(d,{key:1,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[0]||(e[0]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):"select"===r.type?((0,l.uX)(),(0,l.Wv)(s,{key:2,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[1]||(e[1]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):"text"===r.type?((0,l.uX)(),(0,l.Wv)(_,{key:3,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[2]||(e[2]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):"date"===r.type?((0,l.uX)(),(0,l.Wv)(n,{key:4,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[3]||(e[3]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):"slider"===r.type?((0,l.uX)(),(0,l.Wv)(c,{key:5,field_id:o,field_data:r,emit_name:"validate_global_changed",onValidate_global_changed:e[4]||(e[4]=e=>t.$emit("validate_global_changed"))},null,8,["field_id","field_data"])):(0,l.Q3)("",!0),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.global_errors[o],((t,e)=>((0,l.uX)(),(0,l.CE)("div",Ee,[Oe,(0,l.eW)(" "+(0,E.v_)(t),1)])))),256))])))),256)),a.price_inputs&&i.price_has_error?((0,l.uX)(),(0,l.CE)("div",{key:0,onClick:e[5]||(e[5]=(...t)=>i.open_price&&i.open_price(...t)),class:"offset-4 col-sm-4"},Fe)):(0,l.Q3)("",!0)],2)}var Se=a(8079),Te=a(1322),We={props:{global_disabled:Boolean,global_inputs:Object,price_inputs:Object,global_errors:Object},components:{Checkbox:jt.A,Select:Ft.A,Text:Se.A,Datepicker:St.A,Slider:Te.A},emits:["validate_global_changed"],data(){return{}},created(){},methods:{open_price(){(0,A.A)().store_modal_data({launched_from:"from_global",product_id:0,price_inputs:this.price_inputs,price_errors:this.global_errors,filter_price_inputs:null}),(0,A.A)().open_it("Specify_product_price")}},computed:{is_disabled(){return this.global_disabled},price_has_error(){let t=Object.keys(this.global_errors),e=Object.keys(this.price_inputs);for(let a=0;a<t.length;a++)if(e.indexOf(t[a])>-1)return!0;return!1}}};const Pe=(0,C.A)(We,[["render",Ie],["__scopeId","data-v-3b2f0eec"]]);var ze=Pe,Qe=a(4326),Re={props:{},components:{Product_delivery:X,Product_template:Gt,Step_title:Ut,Summary:ie,Filters:we,Bouncer_loading:y.A,Global_form:ze},data(){return{loaded:0,total:0,got_products:{},product_order:[],update_order:[],found_with_error:[],disabled_from_calculate:[],raw_responses:{},being_calculated:[],udaje:"",period:0,ready_filters:!1,global_inputs:{},price_inputs:!1,global_errors:{},global_disabled:!0,valid_global_show_products:!0,being_selected:!1,delegate_product_select:0}},created(){Promise.resolve().then((()=>Wt.A.session_info())).then((t=>{if(t.result?.state>=100)return(0,b.A)().change_step(5),Promise.reject("session already confirmed")})).then((()=>Et.get_product_list())).then((t=>(this.got_products=t.result.products,(0,x.A)().set_filtered_products(t.result.filtered_products),ye.A.get_global_form()))).then((t=>{if(200!==t.status)return Promise.reject("get_global_form api failed");this.global_inputs=Ot.A.product_form_formatter(t.result.form,"global"),this.price_inputs=Ot.A.product_form_formatter(t.result.form,"price"),(0,x.A)().store_call_params(t.result.call_params),this.validate_global_changed()})).catch((t=>{console.log(t)}))},methods:{calculate_all_products(){this.loaded=0;let t=this.reduce_products_by_filtered();if(this.total=Object.keys(t).length,this.found_with_error=[],0===this.product_order.length)for(let e in this.got_products)this.product_order.push(parseInt(e,10));this.being_calculated=structuredClone(this.product_order),Wt.A.get_data().then((e=>{this.period=Ot.A.find_period(e);for(let a in t)this.calculate_product(parseInt(a,10),null)}))},calculate_product(t,e){Qe.A.get_calculate(t,e,this.period).then((a=>{if(this.raw_responses[t]=a,void 0===a.result||void 0!==a.result.error||void 0===a.result[t]||"1"===a.result[t].result?.result?.disable_product?.result)return"1"===a.result?.[t]?.result?.result?.disable_product?.result?this.disabled_from_calculate.push(t):!1===a.result.validform?((0,A.A)().store_modal_data({type:"calculate_step2_form_isnt_valid",errors:a.result?.form_validation_error_elements}),(0,A.A)().open_it("Ordinary_error_modal")):console.log("#"+t+" had error",a),this.found_with_error.push(t),this.total--,void this.count_loaded();this.udaje=Ot.A.search_for_udaje(a),(0,x.A)().store_call_params(a.result.call_params),null===e&&(this.update_order=Ot.A.find_order(a,null,t)),this.loaded++,this.count_loaded();let l=this.being_calculated.indexOf(t);l>-1&&delete this.being_calculated[l]}))},recalculate_product(t,e){this.loaded--,this.count_loaded(),this.being_calculated.push(t),this.calculate_product(t,e)},count_loaded(){this.loaded===this.total?(this.global_disabled=!1,this.ready_filters=!0,this.product_order=this.update_order):this.global_disabled=!0},reduce_products_by_filtered(){if(0===this.filtered_array.length)return this.got_products;let t=[];for(let e in this.got_products)-1!==this.filtered_array.indexOf(parseInt(e,10))&&(t[e]=this.got_products[e]);return t},validate_global_changed(){this.global_disabled=!0,this.global_errors={};let t=m.A.serialize_specific_inputs(Object.keys(this.global_inputs));ye.A.validate_global_form(t).then((t=>{if(!0!==t.result.validform)return this.global_errors=t.result.form_validation_error_elements,this.valid_global_show_products=!1,void(this.global_disabled=!1);this.valid_global_show_products=!0,this.calculate_all_products()}))},filters_run_own_validate(){this.global_disabled=!0},select_running(t){this.being_selected=t,this.global_disabled=t}},computed:{user_data(){return this.udaje},only_displayed_products(){let t,e=[],a=this.product_order.length;for(t=0;t<a;t++){let a=parseInt(this.product_order[t],10);-1!==this.found_with_error.indexOf(a)||0!==this.filtered_array.length&&-1===this.filtered_array.indexOf(a)||e.push(a)}return e},filtered_array(){let t,e=(0,x.A)().get_filtered_products()?.split(","),a=[],l=e.length;for(t=0;t<l;t++)""!==e[t]&&a.push(parseInt(e[t],10));return a},display_filters(){return!!this.ready_filters&&(!(0,x.A)().direct_user_no_agent()||1!==(0,x.A)().get_receiver()&&2!==(0,x.A)().get_receiver())},classic_np_nav(){return!(0,b.A)().is_zeteo_skin()},closing_modal(){return(0,A.A)().get_modal_event_data()}},watch:{closing_modal(){if(null!==this.closing_modal){if("specify_recalculate"===this.closing_modal)this.global_errors={},this.valid_global_show_products=!0,this.calculate_all_products();else if(m.A.starts_with(this.closing_modal,"indicative_price_")){let t=this.closing_modal.replace("indicative_price_","");t=parseInt(t,10),this.delegate_product_select=t}else{let t=this.closing_modal;this.recalculate_product(t,null)}(0,A.A)().del_modal_event_data()}}}};const Ge=(0,C.A)(Re,[["render",c],["__scopeId","data-v-9121fcf4"]]);var Ve=Ge}}]);