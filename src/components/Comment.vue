<template>
  <div class="comment">
    <header>
      <div @click="redirect">
        {{ comment.author }}
      </div>
      <img :src="comment.header" style="width: 24px" alt="" @click="redirect" />
      <div></div>
      <div>
        {{ time }}
      </div>
    </header>
    <article v-html="body" :class="{ 'markdown-body': true }"></article>
  </div>
</template>

<script>
import marked from 'marked';
import 'highlight.js/styles/github.css';
import highlight from 'highlight.js';
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  },
});

export default {
  props: {
    comment: {
      default: {},
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  mounted() {
    for (let i = 0; i < document.getElementsByTagName('pre').length; i++) {
      const style = document.getElementsByTagName('pre')[i].style;
      style.backgroundColor = '#00000000';
      style.border = 'solid 1px #00000080';
    }
  },
  computed: {
    body() {
      return marked(this.comment.body);
    },
    time() {
      let t = new Date(this.comment.time);
      return `${t.getFullYear()}年-${t.getMonth()}月-${t.getDay()}日 ${t.getHours()}:${t.getMinutes()}`;
    },
    redirect() {
      window.location.replace(this.comment.github);
    },
  },
};
</script>

<style scoped lang="scss">
.comment {
  margin: 30px 50px;
  border: solid 1px #dddddd;
  border-radius: 5px;
  header {
    padding: 10px 10px;
    display: flex;
    border-bottom: 1px solid #dddddd;
    img {
      border-radius: 50%;
    }
    div:nth-child(1) {
      margin-right: 10px;
      transition: all 0.5s;
      user-select: none;
    }
    div:nth-child(1):hover,
    div:nth-child(1):hover + img {
      color: #f6e58d;
      cursor: pointer;
    }
    div:nth-last-child(2) {
      flex: 1;
    }
  }
  .markdown-body {
    padding: 30px 30px;
  }
  .loaded-markdown {
    pre {
      background-color: #00000000;
    }
  }
}
</style>
