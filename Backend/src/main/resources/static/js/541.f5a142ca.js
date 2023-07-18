"use strict";(self["webpackChunktp_s09_s09_vue_enjoytrip_front"]=self["webpackChunktp_s09_s09_vue_enjoytrip_front"]||[]).push([[541],{20541:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var s=function(){var e=this,t=e._self._c;return t("b-container",{staticClass:"bv-example-row mt-3"},[t("b-row",[t("b-col"),t("b-col",{attrs:{cols:"8"}},[t("b-card",{staticClass:"text-center mt-3",staticStyle:{"max-width":"40rem"},attrs:{align:"left"},scopedSlots:e._u([{key:"header",fn:function(){return[t("h2",[e._v("회원가입")])]},proxy:!0}])},[t("b-form",{staticClass:"text-left"},[e.isRegistError?t("b-alert",{attrs:{show:"",variant:"danger"},domProps:{textContent:e._s(e.isRegistError)}}):e._e(),t("b-form-group",{attrs:{label:"아이디:","label-for":"userid"}},[t("b-form-input",{attrs:{id:"userid",required:"",placeholder:"아이디 입력...."},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirm.apply(null,arguments)},focus:function(t){e.isRegistError=null,e.isEmptyId=!1}},model:{value:e.user.userId,callback:function(t){e.$set(e.user,"userId",t)},expression:"user.userId"}}),e.isEmptyId?t("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("아이디를 입력하세요.")]):e._e()],1),t("b-form-group",{attrs:{label:"비밀번호:","label-for":"userpwd"}},[t("b-form-input",{attrs:{type:"password",id:"userpwd",required:"",placeholder:"비밀번호 입력...."},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirm.apply(null,arguments)},focus:function(t){e.isNotEqualPwd=!1,e.isEmptyPwd=!1}},model:{value:e.user.userPwd,callback:function(t){e.$set(e.user,"userPwd",t)},expression:"user.userPwd"}}),e.isEmptyPwd?t("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("비밀번호를 입력하세요.")]):e._e()],1),t("b-form-group",{attrs:{label:"비밀번호 확인:","label-for":"userpwdCheck"}},[t("b-form-input",{attrs:{type:"password",id:"userpwdCheck",required:"",placeholder:"비밀번호 확인...."},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirm.apply(null,arguments)},focus:function(t){e.isNotEqualPwd=!1}},model:{value:e.pwdCheck,callback:function(t){e.pwdCheck=t},expression:"pwdCheck"}}),e.isNotEqualPwd?t("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("비밀번호가 일치하지 않습니다.")]):e._e()],1),t("b-form-group",{attrs:{label:"이름:","label-for":"username"}},[t("b-form-input",{attrs:{id:"username",required:"",placeholder:"이름 입력...."},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirm.apply(null,arguments)},focus:function(t){e.isEmptyName=!1}},model:{value:e.user.userName,callback:function(t){e.$set(e.user,"userName",t)},expression:"user.userName"}})],1),e.isEmptyName?t("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("이름을 입력하세요.")]):e._e(),t("b-form-group",{attrs:{label:"이메일:","label-for":"useremail"}},[t("b-form-input",{attrs:{type:"email",id:"useremail",required:"",placeholder:"이메일 입력...."},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirm.apply(null,arguments)},focus:function(t){e.isEmptyEmail=!1}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e.isEmptyEmail?t("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("이메일을 입력하세요.")]):e._e()],1),t("b-row",{staticClass:"align-items-center p-3",staticStyle:{"white-space":"nowrap"}},[t("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[e._v(" 이미 가입하셨습니까?")]),t("b-col",{staticClass:"text-left",attrs:{cols:"2"}},[t("b-button",{staticClass:"m-1",attrs:{type:"button",variant:"warning"},on:{click:e.movePage}},[e._v("로그인")])],1),t("b-col",{attrs:{cols:"2"}}),t("b-col",{staticClass:"text-right",attrs:{cols:"2"}},[t("b-button",{staticClass:"m-1",attrs:{type:"button",variant:"primary"},on:{click:e.confirm}},[e._v("회원가입")])],1)],1)],1)],1)],1),t("b-col")],1)],1)},l=[],a=(r(57658),r(90408));const i="userStore";var n={name:"UserRegister",data(){return{user:{userId:null,userPwd:null,userName:null,email:null},pwdCheck:null,isEmptyId:!1,isEmptyPwd:!1,isNotEqualPwd:!1,isEmptyName:!1,isEmptyEmail:!1,isRegistError:!1}},methods:{...(0,a.nv)(i,["userRegist"]),async confirm(){if(null==this.user.userId)return void(this.isEmptyId=!0);if(null==this.user.userPwd)return void(this.isEmptyPwd=!0);if(this.user.userPwd!=this.pwdCheck)return void(this.isNotEqualPwd=!0);if(null==this.user.userName)return void(this.isEmptyName=!0);if(null==this.user.email)return void(this.isEmptyEmail=!0);console.log("vue에서..."),console.log(this.user);let e=await this.userRegist(this.user);console.log(e),"success"==e?(alert("회원가입이 정상적으로 완료되었습니다!!"),this.movePage()):this.isRegistError=e},movePage(){this.$router.push({name:"login"})}}},u=n,o=r(1001),c=(0,o.Z)(u,s,l,!1,null,null,null),p=c.exports}}]);
//# sourceMappingURL=541.f5a142ca.js.map