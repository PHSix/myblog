<template>
  <aside :style="{ marginLeft: isShow }">
    <section>
      <img alt="" :src="author.header" />
      <div>{{ author.name }}</div>
    </section>
    <ul>
      <li :class="{ focus: isHome }" @click="changeRoute('/home')">Home</li>
      <li :class="{ focus: isAbout }" @click="changeRoute('/about')">About</li>
    </ul>
  </aside>
  <router-view @changeSideVisable="changeVisable"></router-view>
</template>

<script>
import githubApi from './utils/githubApi.js';
export default {
  data() {
    return {
      isShow: '0px',
      author: {},
    };
  },
  provide: { githubApi },
  mounted() {
    githubApi.getAuthorInfo().then((resp) => {
      this.author.header = resp.data.avatar_url;
      this.author.name = resp.data.login;
      // this.$refs.header.setAtt = resp.avatar_url
    });
  },
  methods: {
    changeRoute(path) {
      this.$router.push(path);
    },
    changeVisable() {
      if (this.isShow == '0px') {
        this.isShow = '-250px';
      } else {
        this.isShow = '0px';
      }
    },
  },
  computed: {
    isHome() {
      let reg = new RegExp('^/home');
      if (reg.test(this.$route.fullPath.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    },
    isAbout() {
      let reg = new RegExp('^/about');
      if (reg.test(this.$route.fullPath.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: #000000;
}
* {
  margin: 0;
  padding: 0;
}
body {
  #app {
    display: flex;
    height: 100vh;
    background-color: #ccccccaa;
    aside {
      width: 250px;
      transition: margin-left 1s;
    }
    background-attachment: fixed;
    background-size: cover;
    backdrop-filter: blur(30px);
  }
  background-image: url(./assets/background.jpg);
}
</style>

<style scoped lang="scss">
aside > section {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

aside > section > div {
  font-size: 30px;
}
aside > section > img {
  margin-top: 60px;
  margin-bottom: 30px;
  border-radius: 50%;
  max-width: 70%;
}
aside {
  border-right: 1px solid #444444;
  ul {
    margin-top: 100px;
    .focus {
      background-color: #3498db20;
      border-left: 6px #3498db80 solid;
      padding-left: 0px;
    }
    li {
      font-size: 25px;
      color: #000000;
      text-align: center;
      padding: 6px 0;
      margin: 20px 0;
      user-select: none;
      cursor: pointer;
      transition: all 1s;
      padding-left: 6px;
    }
    li:hover {
      border-left: 6px #3498db80 solid;
      padding-left: 12px;
    }
  }
}
</style>
