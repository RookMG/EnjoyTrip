"use strict";(self["webpackChunktp_s09_s09_vue_enjoytrip_front"]=self["webpackChunktp_s09_s09_vue_enjoytrip_front"]||[]).push([[17],{7017:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"align-middle p-3"},[e("b-form",[e("b-card",{attrs:{"border-variant":"primary"},scopedSlots:t._u([{key:"header",fn:function(){return[e("b-row",{staticClass:"align-items-center"},[e("b-col",{attrs:{cols:"3"}},[e("b-form-select",{attrs:{options:t.boardTypeOptions},model:{value:t.article.boardType,callback:function(e){t.$set(t.article,"boardType",e)},expression:"article.boardType"}})],1),e("b-col",{staticClass:"text-right"},[t._v(" 제목 ")]),e("b-col",{attrs:{cols:"8"}},[e("b-form-input",{attrs:{placeholder:"제목을 입력하세요"},on:{focus:function(e){t.isEmptyTitle=!1}},model:{value:t.article.title,callback:function(e){t.$set(t.article,"title",e)},expression:"article.title"}})],1)],1),t.isEmptyTitle?e("b-row",[e("b-col",{attrs:{cols:"4"}}),e("b-col",{attrs:{cols:"8"}},[e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("두 글자 이상의 제목을 입력해주세요")])],1)],1):t._e()]},proxy:!0},{key:"footer",fn:function(){return[t.type&&"write"!=t.type?t._e():e("b-row",{staticStyle:{"white-space":"nowrap"}},[e("b-col",{attrs:{cols:"9"}}),e("b-col",{staticClass:"text-right"},[e("b-button",{attrs:{variant:"danger"},on:{click:t.back}},[t._v("취소")])],1),e("b-col",[e("b-button",{attrs:{variant:"primary"},on:{click:t.write}},[t._v("작성")])],1)],1),"modify"==t.type?e("b-row",{staticStyle:{"white-space":"nowrap"}},[e("b-col",{attrs:{cols:"9"}}),e("b-col",{staticClass:"text-right"},[e("b-button",{attrs:{variant:"danger"},on:{click:t.back}},[t._v("취소")])],1),e("b-col",[e("b-button",{attrs:{variant:"primary"},on:{click:t.modify}},[t._v("작성")])],1)],1):t._e()]},proxy:!0}])},[t.isEmptyContent?e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" 다섯 글자 이상의 내용을 입력해주세요 ")]):t._e(),e("b-form-textarea",{attrs:{rows:"20",placeholder:"내용을 입력하세요","no-resize":""},on:{focus:function(e){t.isEmptyContent=!1}},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}}),t.selected.length?e("b-tabs",{staticStyle:{"text-align":"center"},attrs:{card:""}},[e("b-tab",{attrs:{title:"태그된 장소"}},t._l(t.selected,(function(r){return e("b-card-group",{key:r.contentId},[e("b-card",{staticClass:"no-padding"},[e("b-row",{staticClass:"align-items-center"},[e("b-col",{attrs:{cols:"5"}},[e("b-card-img",{staticStyle:{"max-height":"75px","min-height":"75px","object-fit":"cover"},attrs:{src:t.img(r.firstImage),fluid:""}})],1),e("b-col"),e("b-col",{attrs:{cols:"5"}},[t._v(" "+t._s(r.title)+" ")]),e("b-col",{attrs:{cols:"1"}},[e("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.unselectPlace(r)}}},[t._v(" X ")])],1)],1)],1)],1)})),1),e("b-tab",{attrs:{title:"지도",active:""}},[e("TheMap")],1)],1):t._e()],1)],1)],1)},s=[],i=(r(57658),r(90408)),l=r(87518);const o="boardStore",n="userStore",c="placeStore";var u={name:"BoardWrite",components:{TheMap:l.Z},data(){return{type:null,backroute:null,boardTypeOptions:[{value:"review",text:"여행후기"},{value:"free",text:"자유게시판"},{value:"team",text:"일행구하기"},{value:"plan",text:"여행코스"}],article:{title:null,content:null,userNo:null,boardType:"free",places:null},isEmptyTitle:!1,isEmptyContent:!1}},computed:{...(0,i.rn)(n,["userInfo"]),...(0,i.rn)(c,["selected"])},created(){this.type=this.$route.params.type,this.backroute=this.$route.params.backroute,this.article.userNo=this.userInfo.userNo,"T"===this.userInfo.isAdmin&&this.boardTypeOptions.push({value:"notice",text:"공지사항"}),"plan"==this.$route.params.boardType&&(this.boardTypeOptions=[{value:"review",text:"여행후기"},{value:"plan",text:"여행코스"}],this.article.boardType="plan")},methods:{...(0,i.nv)(o,["setCondition","writeArticle","searchArticle","setBoardType"]),...(0,i.nv)(c,["unselectPlace"]),write(){null==this.article.title||this.article.title.length<2?this.isEmptyTitle=!0:null==this.article.content||this.article.content.length<5?this.isEmptyContent=!0:(this.selected.length&&(this.article.places=[],this.selected.forEach((t=>{this.article.places.push(t.contentId)})),console.log(this.article.places)),this.writeArticle(this.article),this.setCondition({title:null,content:null,userName:null,userNo:null,boardType:this.article.boardType}),this.setBoardType(this.article.boardType),this.searchArticle(),this.$router.push({name:"boardlist"}))},back(){this.backroute?this.$router.push({name:this.backroute}):this.$router.push({name:"boardlist"})},img(t){return t||r(421)}}},p=u,b=r(1001),h=(0,b.Z)(p,a,s,!1,null,null,null),d=h.exports}}]);
//# sourceMappingURL=17.94771940.js.map