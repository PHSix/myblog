<template>
  <banner :title="title" ref="banner" :message="message"></banner>
  <div class="article markdown-body">
    <loading v-if="body.length === 0"></loading>
    <div v-for="(item, idx) in body" :key="idx" v-html="item"></div>
  </div>
</template>

<script>
import Banner from '../../components/Banner.vue';
import reqTool from '../../utils/request';
import marked from 'marked';
import Loading from '../../components/Loading.vue';
export default {
  components: {
    banner: Banner,
    loading: Loading,
  },
  data() {
    return {
      author: '',
      created_at: '',
      title: '',
      body: [],
    };
  },
  mounted() {
    // this.$route.params.id;
    this.getContent(this.$route.params.id);
  },
  methods: {
    async getContent(id) {
      const resp = await Promise.all([
        reqTool.getIssue(id),
        reqTool.getComments(id),
      ]);
      this.body.push(marked(resp[0].data.body));
      this.title = resp[0].data.title;
      this.created_at = resp[0].data.created_at;
      this.author = resp[0].data.user.login;
      this.$refs.banner.typeAnimation();
      resp[1].data.forEach((item) => {
        this.body.push(marked(item.body));
      });
    },
  },
  computed: {
    message() {
      return `作者：${this.author} | 发布时间：${this.ctime}`;
    },
    ctime() {
      if (this.created_at.length > 0) {
        const d = new Date(this.created_at);
        const year = d.getFullYear();
        var month = d.getMonth() + 1;
        if (month < 10) {
          month = `0${month}`;
        }
        const day = d.getDay() + 1;
        return `${year}年${month}月${day}日`;
      } else {
        return '';
      }
    },
  },
};
</script>

<style scoped>
.article {
  max-width: 650px;
  padding: 20px;
  background-color: #fff;
  padding: 40px;
  width: calc(100% - 82px);
  border-radius: 2rem;
  border-bottom-left-radius: 0rem;
  border-bottom-right-radius: 0rem;
  margin-top: -2rem;
  box-shadow: 0 0 10px #eee;
  margin-bottom: -2rem;
}
</style>

<style>
@import './markdown.css';
</style>
