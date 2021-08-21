<template>
  <banner title="拥抱开源，拥抱世界"></banner>
  <div style="" class="home">
    <loading v-if="issuesList.length === 0"></loading>
    <!-- <loading></loading> -->
    <list-item
      v-for="(issue, idx) in issuesList"
      :key="idx"
      :title="issue.title"
      :releaseTime="issue.created_at"
      :body="issue.body"
      :id="issue.number"
    ></list-item>
  </div>
</template>

<script>
import reqTool from "../../utils/request";
import ListItem from "./ListItem.vue";
import Banner from "../../components/Banner.vue";
import Loading from "../../components/Loading.vue";
export default {
  components: {
    "list-item": ListItem,
    banner: Banner,
    loading: Loading,
  },
  data() {
    return {
      issuesList: this.$store.state.issuesList,
    };
  },
  mounted() {
    if (this.issuesList.length === 0) {
      this.requireList().then((res) => {
        res.forEach((item) => {
          this.$store.commit("addIssue", item);
        });
      });
    }
  },
  methods: {
    requireList: async () => {
      const resp = await reqTool.getIssuesList();
      return resp.data;
    },
  },
};
</script>

<style scoped>
.home {
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
}
.home > .list-item {
  padding: 1rem 0;
  border-bottom: 2px solid #aaa;
}

.home > .list-item:nth-child(1) {
  padding-top: 0;
}
.home > .list-item:nth-last-child(1) {
  border-bottom: 0px;
  padding-bottom: 0;
}
</style>
