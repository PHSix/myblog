<template>
  <div class="issues-list">
    <header>
      <div class="title">标题</div>
      <div></div>
      <div class="time">创建时间</div>
    </header>
    <issue
      v-for="issue in issues"
      :key="issue.url"
      :title="issue.title"
      :time="issue.created_at"
      :labels="issue.labels"
      :issueId="issue.number"
    ></issue>
  </div>
</template>

<script>
import Issue from './Issue.vue';
export default {
  components: {
    Issue,
  },
  props: {
    issues: {
      default: [],
    },
  },
  mounted() {
  },
};
</script>

<style scoped lang="scss">
.issues-list {
  height: calc(100% - 57px);
  overflow: auto;
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
}
</style>
