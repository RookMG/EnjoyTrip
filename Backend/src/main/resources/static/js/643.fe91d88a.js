"use strict";(self["webpackChunktp_s09_s09_vue_enjoytrip_front"]=self["webpackChunktp_s09_s09_vue_enjoytrip_front"]||[]).push([[643],{15643:function(t,s,e){e.r(s),e.d(s,{default:function(){return b}});var r=function(){var t=this,s=t._self._c;return s("b-container",[s("b-card",{attrs:{"no-body":""}},[s("b-tabs",{attrs:{card:""}},[s("b-tab",{attrs:{title:"회원 정보",active:""}},[s("b-card-text",[s("b-form",{staticClass:"p-2"},[s("b-row",{staticClass:"align-items-center p-2"},[s("b-col",{attrs:{cols:"2"}},[t._v("아이디")]),s("b-col",{attrs:{cols:"10"}},[s("b-form-input",{attrs:{id:"userid",readonly:""},model:{value:t.usertmp.userId,callback:function(s){t.$set(t.usertmp,"userId",s)},expression:"usertmp.userId"}})],1)],1),s("b-row",{staticClass:"align-items-center p-2"},[s("b-col",{attrs:{cols:"2"}},[t._v("이름")]),s("b-col",{attrs:{cols:"10"}},[s("b-form-input",{attrs:{id:"userid",readonly:t.blockModify},model:{value:t.usertmp.userName,callback:function(s){t.$set(t.usertmp,"userName",s)},expression:"usertmp.userName"}})],1)],1),s("b-row",{staticClass:"align-items-center p-2"},[s("b-col",{attrs:{cols:"2"}},[t._v("이메일")]),s("b-col",{attrs:{cols:"10"}},[s("b-form-input",{attrs:{id:"userid",readonly:t.blockModify},model:{value:t.usertmp.email,callback:function(s){t.$set(t.usertmp,"email",s)},expression:"usertmp.email"}})],1)],1),s("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.blockModify,expression:"!blockModify"}],staticClass:"align-items-center p-2"},[s("b-col",{attrs:{cols:"2"}},[t._v("기존 비밀번호")]),s("b-col",{attrs:{cols:"10"}},[s("b-form-input",{attrs:{id:"userid",type:"password"},on:{focus:function(s){t.userMatch=!0}},model:{value:t.pwdCheck,callback:function(s){t.pwdCheck=s},expression:"pwdCheck"}})],1)],1),t.userMatch?t._e():s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" 저장된 비밀번호와 일치하지 않습니다 ")])],1)],1),s("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.blockModify,expression:"!blockModify"}],staticClass:"align-items-center p-2"},[s("b-col",{attrs:{cols:"2"}},[t._v("새 비밀번호")]),s("b-col",{attrs:{cols:"10"}},[s("b-form-input",{attrs:{id:"userid",type:"password"},on:{focus:function(s){t.pwdMatch=!0,t.validNew=!0}},model:{value:t.usertmp.userPwd,callback:function(s){t.$set(t.usertmp,"userPwd",s)},expression:"usertmp.userPwd"}})],1)],1),s("b-row",{directives:[{name:"show",rawName:"v-show",value:!t.blockModify,expression:"!blockModify"}],staticClass:"align-items-center p-2"},[s("b-col",{attrs:{cols:"2"}},[t._v("새 비밀번호 확인")]),s("b-col",{attrs:{cols:"10"}},[s("b-form-input",{attrs:{id:"userid",type:"password"},on:{focus:function(s){t.pwdMatch=!0,t.validNew=!0}},model:{value:t.pwdConfirm,callback:function(s){t.pwdConfirm=s},expression:"pwdConfirm"}})],1)],1),t.pwdMatch?t._e():s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" 두 비밀번호가 일치하지 않습니다 ")])],1)],1),t.validNew?t._e():s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" 비밀번호는 네 글자 이상이어야 합니다 ")])],1)],1)],1),t.blockModify?s("b-row",[s("b-col",{attrs:{cols:"6"}}),s("b-col",[s("b-button",{attrs:{variant:"primary"},on:{click:t.myArticles}},[t._v("작성한 글 보기")])],1),s("b-col",[s("b-button",{attrs:{variant:"warning"},on:{click:t.modify}},[t._v("회원 정보 수정")])],1),s("b-col",[s("b-button",{attrs:{variant:"danger"},on:{click:t.leave}},[t._v("회원 탈퇴")])],1)],1):t._e(),t.blockModify?t._e():s("b-row",[s("b-col",{attrs:{cols:"8"}}),s("b-col",{attrs:{cols:"2"}},[s("b-button",{attrs:{variant:"danger"},on:{click:function(s){t.blockModify=!0}}},[t._v("취소")])],1),s("b-col",{attrs:{cols:"2"}},[s("b-button",{attrs:{variant:"primary"},on:{click:t.confirmModify}},[t._v("회원 정보 수정")])],1)],1)],1)],1)],1)],1)],1)},o=[],a=(e(57658),e(90408));const i="userStore",l="boardStore";var n={name:"UserMyPage",components:{},data(){return{condition:{title:null,content:null,userName:null,userNo:null,boardType:null},usertmp:{userId:null,email:null,userName:null,userPwd:null},pwdConfirm:null,blockModify:!0,userMatch:!0,validNew:!0,pwdMatch:!0,pwdCheck:null}},created(){this.usertmp.userNo=this.userInfo.userNo,this.usertmp.userId=this.userInfo.userId,this.usertmp.email=this.userInfo.email,this.usertmp.userName=this.userInfo.userName},computed:{...(0,a.rn)(i,["userInfo"])},methods:{...(0,a.nv)(i,["userUpdate","userUpdate","userDelete","userLogout"]),...(0,a.nv)(l,["setCondition","searchArticle"]),myArticles(){console.log(this.userInfo),this.condition.userNo=this.userInfo.userNo,this.setCondition(this.condition),this.searchArticle(),this.$router.push({name:"boardlist",params:{noUpdate:!0}})},modify(){this.blockModify=!1},confirmModify(){this.pwdCheck==this.userInfo.userPwd?this.pwdConfirm==this.usertmp.userPwd?null==this.usertmp.userPwd||this.usertmp.userPwd.length<4?this.validNew=!1:(this.userUpdate(this.usertmp)&&alert("회원님의 정보가 성공적으로 수정되었습니다."),this.blockModify=!0):this.pwdMatch=!1:this.userMatch=!1},leave(){confirm("정말로 등록된 모든 정보를 삭제하고 탈퇴하시겠습니까?")&&(this.userDelete(),alert("회원 탈퇴되었습니다."),this.userLogout(this.userInfo.userNo),sessionStorage.removeItem("access-token"),sessionStorage.removeItem("refresh-token"),"/"!=this.$route.path&&this.$router.push({name:"main"}))}}},c=n,u=e(1001),d=(0,u.Z)(c,r,o,!1,null,null,null),b=d.exports}}]);
//# sourceMappingURL=643.fe91d88a.js.map