<template>
  <div class="list-item" @click="gotoArticle">
    <h2 class="item-title">{{ title }}</h2>
    <div :style="{ color: colors.blueGray }">发布时间： {{ createTime }}</div>
    <!-- <div class="preview-content" :style="{ color: colors.gray }">
      {{ computedBody }}
    </div> -->
  </div>
</template>

<script>
import { colors } from "../../mixin";
export default {
  mixins: [colors],
  props: {
    title: {
      required: true,
    },
    releaseTime: {
      required: true,
    },
    // body: {
    //   required: true,
    // },
    // tags: {
    //   required: true,
    // }
    id: {
      required: true,
    },
  },
  methods: {
    gotoArticle() {
      this.$router.push(`/articles/${this.id}`);
    },
  },
  computed: {
    createTime() {
      const d = new Date(this.releaseTime);
      const year = d.getFullYear();
      var month = d.getMonth() + 1;
      if (month < 10) {
        month = `0${month}`;
      }
      const day = d.getDay() + 1;
      return `${year}年${month}月${day}日`;
    },
    // TODO: 优化显示体验, 使其不要显示奇怪的字符
    computedBody() {
      return this.body;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&family=Ma+Shan+Zheng&family=Roboto+Mono:wght@300&family=Space+Mono&display=swap");
.item-title {
  font-family: "Inconsolata", monospace;
  font-family: "Ma Shan Zheng", cursive;
  font-family: "Roboto Mono", monospace;
  font-family: "Space Mono", monospace;
  font-size: 1.2rem;
}
.list-item {
  cursor: pointer;
}
.list-item:hover {
  color: orange;
}
.preview-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
