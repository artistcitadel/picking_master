(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de531"],{"84ba":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main-layout",[a("div",{staticClass:"section"},[a("div",{staticClass:"section-wrap"},[a("div",{staticClass:"search-area"},[a("ul",{staticClass:"accordion"},[a("div",{staticClass:"main-search-area"},[a("div",{staticClass:"input-area"},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-set",staticStyle:{width:"37%"}},[a("div",{staticClass:"input-lable"},[t._v("배송일자")]),a("input",{attrs:{type:"text",id:"deliDate","data-role":"calendarpicker","data-dialog-mode":"true"}}),a("div",{staticClass:"calendar-btn-area"},[a("button",{staticClass:"btn btn-md btn-grey-outline ic-arrow-left",attrs:{type:"button"},on:{click:t.dateminus}},[a("span",[t._v("이전")])]),a("button",{staticClass:"btn btn-md btn-grey-outline ic-arrow-right",attrs:{type:"button"},on:{click:t.dateplus}},[a("span",[t._v("다음")])])])]),a("div",{staticClass:"input-set",staticStyle:{width:"18%"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.pickData.deliDiv,expression:"pickData.deliDiv"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.pickData,"deliDiv",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}}),t._l(this.getOMS_STATUS,(function(e){return a("option",{key:e.ETC_CODE,domProps:{value:e.ETC_CODE}},[t._v(" "+t._s(e.ETC_NAME)+" ")])}))],2)]),a("div",{staticClass:"input-set",staticStyle:{width:"20%"}},[a("div",{staticClass:"input-lable"},[t._v("회차")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.pickData.deliOrder,expression:"pickData.deliOrder"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.pickData,"deliOrder",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}}),t._l(this.getOMS_DELI_ORDER,(function(e){return a("option",{key:e.ETC_CODE,domProps:{value:e.ETC_CODE}},[t._v(" "+t._s(e.ETC_NAME)+" ")])}))],2)]),a("div",{staticClass:"input-set",staticStyle:{width:"25%"}},[a("div",{staticClass:"input-lable"},[t._v("피킹구역")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.pickData.pickArea,expression:"pickData.pickArea"}],attrs:{id:"pickArea"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.pickData,"pickArea",e.target.multiple?a:a[0])}}},t._l(this.getOMS_PICK_AREA,(function(e){return a("option",{key:e.ETC_CODE,domProps:{value:e.ETC_CODE}},[t._v(" "+t._s(e.ETC_NAME)+" ")])})),0)])])]),a("div",{staticClass:"btn-search-area"},[a("button",{staticClass:"btn btn-search btn-bk",attrs:{type:"button"},on:{click:t.getOrderList}},[a("span",[t._v("검색")])])])]),a("div",{staticClass:"link"},[a("span",{staticClass:"down-ic"})]),a("div",{staticClass:"more"},[a("div",{staticClass:"input-area"},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-set",staticStyle:{width:"18%"}},[a("div",{staticClass:"input-lable"},[t._v("구분")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.pickData.groupCode,expression:"pickData.groupCode"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.pickData,"groupCode",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}}),a("option",{attrs:{value:"713"}},[t._v("농산")]),a("option",{attrs:{value:"714"}},[t._v("수산")]),a("option",{attrs:{value:"715"}},[t._v("축산")]),a("option",{attrs:{value:"610"}},[t._v("베이커리")])])]),a("div",{staticClass:"input-set",staticStyle:{width:"18%"}},[a("div",{staticClass:"input-lable"},[t._v("출력위치")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.pickData.sPringOutLayer,expression:"pickData.sPringOutLayer"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.pickData,"sPringOutLayer",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}}),a("option",{attrs:{value:"PRINT_IP_P2"}},[t._v("피킹룸")]),a("option",{attrs:{value:"PRINT_IP_P3"}},[t._v("택배")]),a("option",{attrs:{value:"PRINT_IP_P4"}},[t._v("신선")])])])])])])])]),a("div",{staticClass:"main-table"},[a("div",{staticClass:"table-title-area"},[a("div",{staticClass:"table-total"},[t._v("총"),t.orderlist.length>0?a("span",{staticClass:"text-primary"},[t._v(t._s(t.orderlist[0].CNT))]):t._e(),t._v("건")]),a("div",{staticClass:"table-btn-area"},[a("button",{staticClass:"btn btn-ml btn-primary btn-ic ic-print-wh modal-open print-modal",attrs:{type:"button"},on:{click:t.printJangman}},[t._v("장만출력")])])]),a("div",{staticClass:"table-lg"},[a("table",[a("colgroup",[a("col",{attrs:{width:"50px"}}),a("col",{attrs:{width:"50px"}}),a("col",{attrs:{width:"10%"}}),a("col",{attrs:{width:"10%"}}),a("col",{attrs:{width:"10%"}}),a("col"),a("col"),a("col",{attrs:{width:"10%"}})]),a("thead",[a("tr",[a("th",[a("div",{staticClass:"only-check"},[a("div",{staticClass:"checkbox"},[a("input",{attrs:{id:"checkall",type:"checkbox"},on:{click:t.doallcheck}}),a("label",{staticClass:"checkbox-label",attrs:{for:"checkall"}})])])]),a("th"),a("th",[t._v("주문번호")]),a("th",[t._v("주문자ID")]),a("th",[t._v("주문자명")]),a("th",[t._v("상품명")]),a("th",[t._v("비고")]),a("th",[t._v("작업자")])])]),t.orderlist.length>0?a("tbody",t._l(t.orderlist,(function(e,i){return a("tr",{key:i},["0"!==t.orderlist[i].ROWSPAN?a("td",{attrs:{rowspan:t.orderlist[i].ROWSPAN}},[a("div",{staticClass:"only-check"},[a("div",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.orderlist[i].checked,expression:"orderlist[index].checked"}],attrs:{id:t.orderlist[i].ORDER_CODE,value:"orderlist[index].ORDER_CODE",name:"chk",type:"checkbox"},domProps:{checked:Array.isArray(t.orderlist[i].checked)?t._i(t.orderlist[i].checked,"orderlist[index].ORDER_CODE")>-1:t.orderlist[i].checked},on:{click:function(e){return t.selectpick(i)},change:function(e){var a=t.orderlist[i].checked,s=e.target,r=!!s.checked;if(Array.isArray(a)){var n="orderlist[index].ORDER_CODE",l=t._i(a,n);s.checked?l<0&&t.$set(t.orderlist[i],"checked",a.concat([n])):l>-1&&t.$set(t.orderlist[i],"checked",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.orderlist[i],"checked",r)}}}),a("label",{staticClass:"checkbox-label",attrs:{for:t.orderlist[i].ORDER_CODE}})])])]):t._e(),a("td",[a("div",{staticClass:"ic-print-badge active"})]),"0"!==t.orderlist[i].ROWSPAN?a("td",{attrs:{rowspan:t.orderlist[i].ROWSPAN}},[a("span",{staticClass:"link modal-open list-modal"},[t._v(t._s(t.orderlist[i].ORDER_CODE))])]):t._e(),"0"!==t.orderlist[i].ROWSPAN?a("td",{attrs:{rowspan:t.orderlist[i].ROWSPAN}},[t._v(" "+t._s(t.orderlist[i].ORDER_ID))]):t._e(),"0"!==t.orderlist[i].ROWSPAN?a("td",{attrs:{rowspan:t.orderlist[i].ROWSPAN}},[t._v(" "+t._s(t.orderlist[i].ORDER_NAME))]):t._e(),a("td",[t._v(t._s(t.orderlist[i].PRODUCT_NAME))]),a("td",[t._v(t._s(t.orderlist[i].PRO_OPTION_VALUE))]),a("td",[t._v(t._s(t.orderlist[i].worker))])])})),0):t._e()]),a("div",{ref:"pagenation",staticClass:"pagenation"},[a("ul",{ref:"pageView",attrs:{id:"pageView"}})])])])]),a("div",{staticClass:"pos-fixed pos-center"},[a("Loader",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],1)])])},s=[],r=a("5530"),n=a("1da1"),l=a("ade3"),o=(a("b0c0"),a("a9e3"),a("a15b"),a("7db0"),a("96cf"),a("a026")),c=a("2ef0"),d=a.n(c),p=a("1157"),u=a.n(p),v=a("4b6a"),g=a.n(v),h=a("3d20"),_=a.n(h),m=a("2ead"),O=a.n(m),k=a("8e31"),C=a("2040"),D=a("84bd"),b=a("2f62");o["default"].use(O.a);var f={name:"jangmanList",components:{MainLayout:k["a"],Loader:C["a"]},data:function(){var t;return{page:1,pickData:(t={groupCode:"",sPringOutLayer:"",deliDate:"",deliDiv:"",deliOrder:"",pickArea:"",status:"",deliNo:"",orderName:"",pickerName:""},Object(l["a"])(t,"deliNo",""),Object(l["a"])(t,"pageGroup",1),Object(l["a"])(t,"limit",6),Object(l["a"])(t,"cnt",0),t),jangmanList:[],pageGroup:1,limit:6,cnt:0}},methods:{getOrderList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u()("#checkall").prop("checked",!1),console.log("this.page",t.page),t.pickData.deliDate=u()("#deliDate").val().length>8?u()("#deliDate").val().replaceAll("-",""):"",t.pickData.pageGroup=t.page>1?6*(t.page-1)+1:t.page,console.log("this.pageGroup",t.pickData.pageGroup),t.pickData.limit=t.pickData.pageGroup+5,a=Object.assign({},t.pickData),console.log("senddata is ",a),e.next=10,t.$store.dispatch("JangmanStore/getJangman",a);case 10:for(console.log(t.getOrderspec),i=0;i<t.getOrderspec.length;i++)t.getOrderspec[i]=Object.assign(t.getOrderspec[i],{checked:!1});t.jangmanList=t.getOrderspec,t.getOrderspec.length>0?(console.log("this.getOrderspec[0].CNT",t.getOrderspec[0].CNT),Object(D["a"])(t,t.page,t.getOrderspec[0].CNT,6)):Object(D["a"])(t,t.page,0,6);case 14:case"end":return e.stop()}}),e)})))()},onClickApp:function(t){if("chk"!==t.target.name&&!d.a.isUndefined(t.target.name)&&!(this.getOrderspec.length<1||0===t.target.id.length||isNaN(t.target.id))){var e=Math.ceil(this.getOrderspec[0].CNT/6),a=this.page,i=Number(t.target.id);if(console.log("currentpage is ",a),console.log("target page",t.target.id),console.log("max page is",e),(e!==a||9999!==i&&999!==i)&&(1!==a||8888!==i&&888!==i)){var s=i;888===i&&(s=a-1),999===i&&(s=a+1),8888===i&&(s=1),9999===i&&(s=e),a!==s&&(console.log("caculation page is ",s),this.page=s,this.getOrderList())}}},dateminus:function(){var t=u()("#deliDate").val();t.length<1||u()("#deliDate").val(this.$moment(t).subtract(1,"days").format("YYYY-MM-DD"))},dateplus:function(){var t=u()("#deliDate").val();t.length<1||u()("#deliDate").val(this.$moment(t).add(1,"days").format("YYYY-MM-DD"))},selectpick:function(t){console.log("checkbox",t),this.orderlist[t].checked=!this.orderlist[t].checked,console.log(this.orderlist[t].checked)},doallcheck:function(){for(var t=0;t<this.orderlist.length;t++)this.orderlist[t].checked=!this.orderlist[t].checked;u()("#checkall").prop("checked")?u()("input[name=chk]").prop("checked",!0):u()("input[name=chk]").prop("checked",!1)},printJangman:function(){for(var t=!1,e=[],a="",i=0;i<this.orderlist.length;i++)!0===this.orderlist[i].checked&&(t=!0,e.push(this.orderlist[i].ORDER_CODE));if(t){a=e.join(",");var s={orderCodes:a,sPringOutLayer:this.pickData.sPringOutLayer,groupCode:this.pickData.groupCode};console.log(s),this.$store.dispatch("JangmanStore/printJangman",s).then((function(){}))}else _.a.fire({title:"항목을 선택하세요!",text:"",type:"warning"})}},mounted:function(){g.a.init();var t=function(t,e){this.el=t||{},this.multiple=e||!1;var a=this.el.find(".link");a.on("click",{el:this.el,multiple:this.multiple},this.dropdown)};t.prototype.dropdown=function(t){var e=t.data.el,a=u()(this),i=a.next();i.slideToggle(),a.parent().toggleClass("open"),t.data.multiple||e.find(".more").not(i).slideUp().parent().removeClass("open")};new t(u()(".accordion"),!0);window.document.addEventListener("click",this.onClickApp)},computed:Object(r["a"])(Object(r["a"])({},Object(b["b"])("JangmanStore",["isLoading","getOrderspec"])),{},{orderlist:function(){for(var t=1,e=0,a=0;a<this.jangmanList.length;a++){if(console.log("current key",this.jangmanList[a].ORDER_CODE),a<this.jangmanList.length-1&&this.jangmanList[a].ORDER_CODE===this.jangmanList[a+1].ORDER_CODE){console.log("loop",a,this.jangmanList[a].ORDER_CODE),e=a;for(var i=this.jangmanList[e].ORDER_CODE,s=a+1;s<this.jangmanList.length;s++)i===this.jangmanList[s].ORDER_CODE&&(this.jangmanList[s].ROWSPAN="0",++t,++a,console.log("same order number",i,t));console.log("rowspan",this.jangmanList[e].ORDER_CODE,t),this.jangmanList[e].ROWSPAN=t}t=1}return console.log("orderlist",this.jangmanList),this.jangmanList}},Object(b["b"])("Authentication",["getOMS_DELI_ORDER","getOMS_STATUS","getOMS_PICK_AREA"])),beforeCreate:function(){for(var t=["OMS_DELI_ORDER","OMS_STATUS","OMS_PICK_AREA"],e=0;e<t.length;e++)this.$store.dispatch("Authentication/getCode",t[e])}},E=f,R=a("2877"),w=Object(R["a"])(E,i,s,!1,null,"05b9b861",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0de531.85c29c5b.js.map