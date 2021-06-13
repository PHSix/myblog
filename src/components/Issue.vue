<template>
  <div class="issue" @click="redirIssue">
    <div>{{ title }}</div>
    <div>
      <issue-label
        v-for="label in labels"
        :key="label.id"
        :label="label"
      ></issue-label>
    </div>
    <div></div>
    <div>{{ create_time }}</div>
  </div>
</template>

<script>
import IssueLabel from './IssueLabel.vue';
export default {
  mounted() {},
  props: {
    title: {
      default: 'getting...',
    },
    time: {
      default: 'getting...',
    },
    labels: {
      default: [],
    },
    issueId: {
      default: 1,
    },
  },
  computed: {
    create_time() {
      const create_d = new Date(this.time);
      return `${create_d.getFullYear()}-${create_d.getMonth()}-${create_d.getDay()}`;
    },
    redirIssue() {
      this.$router.push(`/issue/${this.issueId}`)
    },
  },
  components: {
    IssueLabel,
  },
};
</script>

<style scoped lang="scss">
.issue {
  line-height: 80px;
  user-select: none;
  border-top: 1px solid #444444;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 1s;
}
.issue > div:nth-child(1) {
  margin-left: 30px;
}
.issue > div:nth-child(2) {
  display: flex;
  height: 30px;
  padding: 25px 0;
}
.issue > div:nth-last-child(2) {
  flex: 1;
}
.issue > div:nth-last-child(1) {
  margin-right: 30px;
}
.issue:hover > div:nth-child(1) {
  color: #f6e58d;
  text-shadow: 0 0 3px #f6e58d;
}
.issue:hover > div:nth-last-child(1) {
  color: #f6e58d;
  text-shadow: 0 0 3px #f6e58d;
}
</style>

<style>
.issue:hover .label {
  color: white;
  text-shadow: 0 0 0 white;
}
</style>
