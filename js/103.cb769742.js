"use strict";(self["webpackChunkvue2_project"]=self["webpackChunkvue2_project"]||[]).push([[103],{3103:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var r=function(){var e=this,s=e._self._c;return s("div",{staticClass:"register-container"},[s("div",{staticClass:"register"},[s("h3",[e._v(" 注册新用户 "),s("span",{staticClass:"go"},[e._v("我有账号，去 "),s("router-link",{attrs:{to:"/login"}},[e._v("登陆")])],1)]),s("div",{staticClass:"content"},[s("label",[e._v("手机号:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^1\d{10}$/},expression:"{ required: true, regex: /^1\\d{10}$/ }"}],class:{invalid:e.errors.has("phone")},attrs:{placeholder:"请输入你的手机号",name:"phone"},domProps:{value:e.phone},on:{input:function(s){s.target.composing||(e.phone=s.target.value)}}}),s("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("phone")))])]),s("div",{staticClass:"content"},[s("label",[e._v("验证码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^\d{6}$/},expression:"{ required: true, regex: /^\\d{6}$/ }"}],class:{invalid:e.errors.has("code")},attrs:{type:"text",placeholder:"请输入验证码",name:"code"},domProps:{value:e.code},on:{input:function(s){s.target.composing||(e.code=s.target.value)}}}),s("button",{staticStyle:{height:"38px"},on:{click:e.getCode}},[e._v("获取验证码")]),s("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("code")))])]),s("div",{staticClass:"content"},[s("label",[e._v("登录密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[0-9A-Za-z]{8,16}$/},expression:"{ required: true, regex: /^[0-9A-Za-z]{8,16}$/ }"}],class:{invalid:e.errors.has("password")},attrs:{type:"password",placeholder:"请输入你的登录密码",name:"password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),s("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("password")))])]),s("div",{staticClass:"content"},[s("label",[e._v("确认密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"},{name:"validate",rawName:"v-validate",value:{required:!0,is:e.password},expression:"{ required: true, is: password }"}],class:{invalid:e.errors.has("password1")},attrs:{type:"password",placeholder:"确认密码",name:"password1"},domProps:{value:e.password1},on:{input:function(s){s.target.composing||(e.password1=s.target.value)}}}),s("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("password1")))])]),s("div",{staticClass:"controls"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"},{name:"validate",rawName:"v-validate",value:{required:!0,agree:!0},expression:"{ required: true, agree: true }"}],class:{invalid:e.errors.has("agree")},attrs:{name:"agree",type:"checkbox"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(s){var a=e.agree,r=s.target,t=!!r.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);r.checked?o<0&&(e.agree=a.concat([i])):o>-1&&(e.agree=a.slice(0,o).concat(a.slice(o+1)))}else e.agree=t}}}),s("span",[e._v("同意协议并注册《尚品汇用户协议》")]),s("span",{staticClass:"error-msg"},[e._v(e._s(e.errors.first("agree")))])]),s("div",{staticClass:"btn"},[s("button",{on:{click:e.userRegister}},[e._v("完成注册")])])]),e._m(0)])},t=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"copyright"},[s("ul",[s("li",[e._v("关于我们")]),s("li",[e._v("联系我们")]),s("li",[e._v("联系客服")]),s("li",[e._v("商家入驻")]),s("li",[e._v("营销中心")]),s("li",[e._v("手机尚品汇")]),s("li",[e._v("销售联盟")]),s("li",[e._v("尚品汇社区")])]),s("div",{staticClass:"address"},[e._v("地址：北京市昌平区宏福科技园综合楼6层")]),s("div",{staticClass:"beian"},[e._v("京ICP备19006430号")])])}],i={name:"Register",data(){return{phone:"",code:"",password:"",password1:"",agree:!0}},methods:{async getCode(){try{let{phone:e}=this;e&&await this.$store.dispatch("getCode",this.phone),this.code=this.$store.state.user.code}catch(e){alert(e.message)}},async userRegister(){const e=await this.$validator.validateAll();if(e)try{const{phone:e,code:s,password:a}=this;await this.$store.dispatch("getUserRegister",{phone:e,code:s,password:a}),alert("注册成功，即将跳转至登录页"),this.$router.push("/login")}catch(s){alert(s.message)}}}},o=i,n=a(1001),l=(0,n.Z)(o,r,t,!1,null,"c5332718",null),d=l.exports}}]);