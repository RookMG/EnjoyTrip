<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글보기</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" @click="moveList">목록</b-button>
      </b-col>
      <b-col class="text-right">
        <b-button
          variant="outline-info"
          size="sm"
          @click="moveModifyArticle"
          class="mr-2"
          >글수정</b-button
        >
        <b-button variant="outline-danger" size="sm" @click="deleteArticle"
          >글삭제</b-button
        >
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>${article.postId}.
          ${article.title} [조회수: ${article.hits}]</h3><div><h6>${
            article.userName
          }</div><div>${article.createTime.split('-')[0]}년 ${
            article.createTime.split('-')[1]
          }월 
          ${article.createTime.split('-')[2].split('T')[0]}일 시간 : ${
            article.createTime.split('-')[2].split('T')[1].split('.0')[0]
          }</h6></div>`"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left">
            <div v-html="message"></div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getArticle } from "@/api/board";

export default {
  name: "BoardDetail",
  data() {
    return {
      article: {},
    };
  },
  computed: {
    // ...mapState(memberStore, ["userInfo"]),
    message() {
      if (this.article.content)
        return this.article.content.split("\n").join("<br>");
      return "";
    },
  },
  created() {
    let postId = this.$route.params.postId;
    getArticle(
      postId,
      ({ data }) => {
        this.article = data.result;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    moveModifyArticle() {
      this.$router.replace({
        name: "boardmodify",
        params: { postId: this.article.postId },
      });
      //   this.$router.push({ path: `/board/modify/${this.article.postId}` });
    },
    deleteArticle() {
      if (confirm("정말로 삭제?")) {
        this.$router.replace({
          name: "boarddelete",
          params: { postId: this.article.postId },
        });
      }
    },
    moveList() {
      if (this.$router.currentRoute.name == "boardview") {
        this.$router.push({ name: "boardlist" });
      } else if (this.$router.currentRoute.name == "myboardview") {
        this.$router.push({ name: "myboardlist" });
      }
      
    },
  },
  // filters: {
  //   dateFormat(createTime) {
  //     return moment(new Date(createTime)).format("YY.MM.DD hh:mm:ss");
  //   },
  // },
};
</script>

<style></style>
