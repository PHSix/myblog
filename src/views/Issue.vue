<template>
  <div class="issue-detail">
    <header>
      <div class="title">{{ title }}</div>
      <div></div>
      <div class="time">{{ time }}</div>
    </header>
    <div id="comments">
      <comment
        v-for="item in comments"
        :key="item.header"
        :comment="item"
      ></comment>
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue';
import githubApi from '../utils/githubApi.js';
export default {
  components: {
    Comment,
  },
  data() {
    return {
      title: '',
      labels: [],
      comments: [],
      time: '',
    };
  },
  mounted() {
    githubApi.getIssue(this.$route.params.id).then((resp) => {
      this.title = resp.data.title;
      this.comments.push({
        header: resp.data.user.avatar_url,
        author: resp.data.user.login,
        github: resp.data.user.html_url,
        body: resp.data.body,
        time: resp.data.created_at,
      });
      this.time = resp.data.created_at;
      this.labels = resp.data.labels;
    });
    githubApi.getCommets(this.$route.params.id).then((resp) => {
      resp.data.forEach((item) => {
        this.comments.push({
          header: item.user.avatar_url,
          author: item.user.login,
          github: item.user.html_url,
          body: item.body,
          time: item.created_at,
        });
      });
    });
  },
};
</script>

<style scoped lang="scss">
.issue-detail {
  display: flex;
  flex-direction: column;
  flex: 1;
}
header {
  display: flex;
  line-height: 57px;
  color: #444444;
  background: #ecf0f199;
  div:nth-child(1) {
    margin-left: 30px;
  }
  div:nth-child(2) {
    flex: 1;
  }
  div:nth-child(3) {
    margin-right: 30px;
  }
}
#comments {
  overflow: auto;
}
</style>
