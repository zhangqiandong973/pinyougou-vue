"use strict";(self["webpackChunkvue2_project"]=self["webpackChunkvue2_project"]||[]).push([[914],{8914:function(t,s,a){a.r(s),a.d(s,{default:function(){return o}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cart-complete-wrap"},[s("div",{staticClass:"cart-complete"},[t._m(0),s("div",{staticClass:"goods"},[s("div",{staticClass:"left-good"},[s("div",{staticClass:"left-pic"},[s("img",{attrs:{src:t.skuInfo.skuDefaultImg}})]),s("div",{staticClass:"right-info"},[s("p",{staticClass:"title"},[t._v(" "+t._s(t.skuInfo.skuName)+" ")]),s("p",{staticClass:"attr"},[t._v(" 颜色："+t._s(t.skuInfo.skuDesc)+" 数量："+t._s(t.$route.query.skunum)+" ")])])]),s("div",{staticClass:"right-gocart"},[s("router-link",{staticClass:"sui-btn btn-xlarge",attrs:{to:`/detail/${t.skuInfo.id}`}},[t._v("查看商品详情")]),s("router-link",{attrs:{to:"/shopcart"}},[t._v("去购物车结算 > ")])],1)])])])},i=[function(){var t=this,s=t._self._c;return s("h3",[s("i",{staticClass:"sui-icon icon-pc-right"}),t._v("商品已成功加入购物车！")])}],r={name:"AddCartSuccess",computed:{skuInfo(){return JSON.parse(sessionStorage.getItem("SKUINFO"))}}},c=r,u=a(1001),n=(0,u.Z)(c,e,i,!1,null,"16c7b8e1",null),o=n.exports}}]);