"use strict";(self["webpackChunkosmapp_webpack_2xx"]=self["webpackChunkosmapp_webpack_2xx"]||[]).push([[651],{3651:function(e,t,s){s.d(t,{A:function(){return x}});var a=s(641),i=s(33),n=s(3751);const o=["id","name","value","disabled"],h={class:"date_controlls"},r={key:0},l={class:"cell week_days"},d=["onClick"],_={key:1},c=["onClick"],u={key:2},p=["onClick"];function y(e,t,s,y,m,f){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("input",{id:s.field_id,name:s.field_id,value:f.value,disabled:f.is_disabled,onFocus:t[0]||(t[0]=(...e)=>f.open_calendar&&f.open_calendar(...e)),onBlur:t[1]||(t[1]=(...e)=>f.close_calendar&&f.close_calendar(...e)),ref:"input_reference",class:"form-control input-datepicker",type:"text"},null,40,o),(0,a.bo)((0,a.Lk)("div",{class:(0,i.C4)(["datepicker",m.aligned_to_top?"aligned_to_top":""])},[(0,a.Lk)("div",{class:"calendar",onMouseenter:t[5]||(t[5]=e=>m.mouse_inside_calendar=!0),onMouseleave:t[6]||(t[6]=e=>m.mouse_inside_calendar=!1),onClick:t[7]||(t[7]=(...t)=>e.keep_focus&&e.keep_focus(...t))},[(0,a.Lk)("div",h,[(0,a.Lk)("span",{class:"prev",onClick:t[2]||(t[2]=(...e)=>f.prev&&f.prev(...e))}," ‹ "),(0,a.Lk)("span",{class:"go_up",onClick:t[3]||(t[3]=(...e)=>f.go_up&&f.go_up(...e))},(0,i.v_)(f.up_the_text),1),(0,a.Lk)("span",{class:"next",onClick:t[4]||(t[4]=(...e)=>f.next&&f.next(...e))}," › ")]),0===m.calendar_type?((0,a.uX)(),(0,a.CE)("div",r,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.construct_week,(e=>((0,a.uX)(),(0,a.CE)("span",l,(0,i.v_)(e),1)))),256)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.construct_days,(t=>((0,a.uX)(),(0,a.CE)("span",{onClick:e=>f.day_picked(t),class:(0,i.C4)(["cell day",[f.this_day(t)?"today":"",0===t?"blank":"",f.picked_day(t)?"picked":"",e.is_before_disabled_day(t)?"date_disabled":"",t<0||t>100?"other_month":""]])},(0,i.v_)(0===t?"":t>100?t-100:t<0?Math.abs(t):t),11,d)))),256))])):(0,a.Q3)("",!0),1===m.calendar_type?((0,a.uX)(),(0,a.CE)("div",_,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.construct_months,((t,s)=>((0,a.uX)(),(0,a.CE)("span",{onClick:e=>f.month_picked(t),class:(0,i.C4)(["cell month",[t===f.this_month?"today":"",e.is_before_disabled_month(t)?"date_disabled":""]])},(0,i.v_)(s),11,c)))),256))])):(0,a.Q3)("",!0),2===m.calendar_type?((0,a.uX)(),(0,a.CE)("div",u,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(f.construct_years,(t=>((0,a.uX)(),(0,a.CE)("span",{onClick:e=>f.year_picked(t),class:(0,i.C4)(["cell year",[t===f.this_year?"today":"",e.is_before_disabled_year(t)?"date_disabled":""]])},(0,i.v_)(t),11,p)))),256))])):(0,a.Q3)("",!0)],32)],2),[[n.aG,m.is_opened||m.debug_keep_open]])],64)}var m=s(3177),f=s(8700);s(4114);class w{default_shown(e){this.has_invalid_format(e)&&(e="");let t={};return""===e?t=new Date:e.includes(".")?(e=e.split("."),t=new Date(e[2],e[1]-1,e[0])):(e=[e.slice(0,2),e.slice(2,4),e.slice(4,8)],t=new Date(e[2],e[1]-1,e[0])),{day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear(),decade:10*Math.floor(t.getFullYear()/10)-10}}has_invalid_format(e){let t=/^\d{1,2}\.\d{1,2}\.\d{4}$/,s=/^\d{8}$/;return""!==e&&!t.test(e)&&!s.test(e)}construct_days(e,t){let s=new Date(e,t,0).getDate(),a=[];var i;for(i=1;i<s+1;i++)a.push(i);let n=new Date(e,t-1,1).getDay(),o=null;o=0===n?n+6:n-1;let h=new Date(e,t-1,0).getDate();for(i=0;i<o;i++)a.unshift(-h+i);let r=new Date(e,t,0).getDay(),l=null;l=0===r?0:7-r;let d=Math.ceil(a.length/7);for(d<6&&(l+=7),i=0;i<l;i++)a.push(100+i+1);return a}construct_week(){return["Pon","Ut","Str","Štv","Pia","Sob","Ned"]}construct_months(){return{"Január":1,"Február":2,Marec:3,"Apríl":4,"Máj":5,"Jún":6,"Júl":7,August:8,September:9,"Október":10,November:11,December:12}}show_month_name(e){let t=this.construct_months();for(let s in t)if(t.hasOwnProperty(s)&&t[s]===e)return s;return"no month found"}construct_years(e){let t,s=[];for(t=e;t<e+30;t++)s.push(t);return s}}var b=new w;let k={props:{},components:{},emits:[],data(){return{ranges:[{from:"cestovne_datum_odchodu",till:"cestovne_datum_prichodu"},{from:"cudzinci_zaciatokpoistenia",till:"cudzinci_koniecpoistenia"},{from:"zaciatokpoistenia",till:null},{from:"havarijne_zaciatokpoistenia",till:null},{from:"zp_poistenie_datumzaciatku",till:null},{from:"gap_zaciatokpoistenia",till:null},{from:"majetok_zaciatokpoistenia",till:null},{from:"podnikatelia_zaciatokpoistenia",till:null}],disable_before:{day:0,month:0,year:0}}},created(){let e,t=this.ranges.length;for(e=0;e<t;e++)this.field_id===this.ranges[e].from&&(this.disable_before=b.default_shown("")),this.field_id===this.ranges[e].till&&(this.disable_before=b.default_shown(this.parent_value))},methods:{is_before_disabled_day(e){return 0!==e&&0!==this.disable_before.year&&(this.shown.year<this.disable_before.year||this.shown.year===this.disable_before.year&&this.shown.month<this.disable_before.month||this.shown.year===this.disable_before.year&&this.shown.month===this.disable_before.month&&e<this.disable_before.day)},is_before_disabled_month(e){return 0!==this.disable_before.year&&(this.shown.year<this.disable_before.year||this.shown.year===this.disable_before.year&&e<this.disable_before.month)},is_before_disabled_year(e){return 0!==this.disable_before.year&&e<this.disable_before.year},range_child_cant_start_before_parents_value(){return null===this.parent_value?this.value:this.picked.year<this.disable_before.year||this.picked.year===this.disable_before.year&&this.picked.month<this.disable_before.month?this.parent_value:this.value}},computed:{parent_value(){let e,t=this.ranges.length;for(e=0;e<t;e++)return this.field_id===this.ranges[e].till?(0,m.A)().get_form_value(this.ranges[e].from):null}},watch:{parent_value(){null!==this.parent_value&&(this.disable_before=b.default_shown(this.parent_value))}}};var v=k,g={props:{field_id:String,field_data:Object,emit_name:String},components:{},emits:["validate_global_changed","recalculate_product"],mixins:[v],data(){return{is_opened:!1,calendar_type:void 0,mouse_inside_calendar:!1,aligned_to_top:!1,oldies:!1,shown:{day:0,month:0,year:0,decade:0},picked:{day:0,month:0,year:0,decade:0},debug_keep_open:!1}},created(){"years_first"===this.field_data?.type_settings?.calendar_type||"no_value_show_oldies"===this.field_data?.type_settings?.calendar_type?this.calendar_type=2:this.calendar_type=0,"no_value_show_oldies"===this.field_data?.type_settings?.calendar_type&&""===this.value&&(this.oldies=!0),this.picked=b.default_shown(this.value)},mounted(){},methods:{prev(){2===this.calendar_type?this.shown.decade-=30:1===this.calendar_type?this.shown.year--:0===this.calendar_type&&(1===this.shown.month?(this.shown.month=12,this.shown.year--):this.shown.month--)},next(){2===this.calendar_type?this.shown.decade+=30:1===this.calendar_type?this.shown.year++:0===this.calendar_type&&(12===this.shown.month?(this.shown.month=1,this.shown.year++):this.shown.month++)},go_up(){2!==this.calendar_type&&this.calendar_type++},day_picked(e){0!==e&&(this.is_before_disabled_day(e)||(e<0&&(this.prev(),e=Math.abs(e)),e>100&&(this.next(),e-=100),this.shown.day=e,this.picked=this.shown,this.update_input(),this.is_opened=!1))},month_picked(e){this.is_before_disabled_month(e)||(this.shown.month=e,this.calendar_type--)},year_picked(e){this.is_before_disabled_year(e)||(this.shown.year=e,this.calendar_type--)},update_input(){let e=this.picked.day.toString().padStart(2,"0"),t=this.picked.month.toString().padStart(2,"0"),s=this.picked.year.toString();this.value=e+"."+t+"."+s},open_calendar(){let e=this.range_child_cant_start_before_parents_value();this.shown=b.default_shown(e),this.oldies&&(this.oldies=!1,this.shown.decade-=10,this.prev()),this.is_opened=!0,this.check_the_space_bellow()},close_calendar(e){null===e.relatedTarget&&this.mouse_inside_calendar||(this.picked=b.default_shown(this.$refs.input_reference.value),this.update_input(),this.calendar_type=0,this.is_opened=!1)},check_the_space_bellow(){let e=window.innerHeight,t=this.$refs.input_reference.getBoundingClientRect().bottom,s=340;this.aligned_to_top=e-t<s},this_day(e){let t,s,a=new Date;return e<0?(1===this.shown.month?(t=12,s=this.shown.year-1):(t=this.shown.month-1,s=this.shown.year),e=Math.abs(e)):e>100?(12===this.shown.month?(t=1,s=this.shown.year+1):(t=this.shown.month+1,s=this.shown.year),e-=100):(t=this.shown.month,s=this.shown.year),a.getMonth()+1===t&&a.getFullYear()===s&&a.getDate()===e},picked_day(e){if(""===this.value)return!1;let t,s;return e<0?(1===this.shown.month?(t=12,s=this.shown.year-1):(t=this.shown.month-1,s=this.shown.year),e=Math.abs(e)):e>100?(12===this.shown.month?(t=1,s=this.shown.year+1):(t=this.shown.month+1,s=this.shown.year),e-=100):(t=this.shown.month,s=this.shown.year),this.picked.month===t&&this.picked.year===s&&this.picked.day===e}},computed:{construct_days(){return b.construct_days(this.shown.year,this.shown.month)},construct_week(){return b.construct_week()},construct_months(){return b.construct_months()},construct_years(){return b.construct_years(this.shown.decade)},this_month(){let e=new Date;return e.getFullYear()===this.shown.year?e.getMonth()+1:null},this_year(){return(new Date).getFullYear()},up_the_text(){return 0===this.calendar_type?b.show_month_name(this.shown.month)+" "+this.shown.year:1===this.calendar_type?this.shown.year:2===this.calendar_type?this.shown.decade+" - "+(this.shown.decade+29):"should not occur"},is_disabled(){return(0,f.A)().is_read_only()||this.field_data.type_settings?.disabled},value:{get(){return void 0!==this.emit_name?(0,m.A)().get_user_input(this.field_id):(0,m.A)().get_form_value(this.field_id)},set(e){(0,m.A)().set_form_value(this.field_id,e,this.field_data),void 0!==this.emit_name&&this.$emit(this.emit_name)}}},watch:{}},C=s(6262);const D=(0,C.A)(g,[["render",y]]);var x=D}}]);