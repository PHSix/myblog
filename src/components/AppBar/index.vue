<template>
  <section
    id="app-bar"
    :style="{
      backgroundColor: colors.opactiyBg,
    }"
  >
    <div id="app-items">
      <app-item
        v-for="(to, idx) in tos"
        :key="idx"
        :title="to.title"
        :to="to.to"
      ></app-item>
    </div>
  </section>
</template>

<script>
import AppItem from "./HeaderItem.vue";
import { colors } from "../../mixin";
export default {
  mixins: [colors],
  data() {
    const tos = [
      {
        title: "HOME",
        to: "/",
      },
      {
        title: "ABOUT",
        to: "/about",
      },
      {
        title: "REPO",
        to: "/repo",
      },
    ];
    return {
      tos,
    };
  },
  components: {
    "app-item": AppItem,
  },
};
</script>

<style scoped>
@media screen and (min-width: 800px) {
  #app-bar {
    padding-left: 400px;
    padding-right: 400px;
  }
}
#app-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  backdrop-filter: blur(3px);
}
#app-items {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
