// appbar的menu里面的每一项
<template>
  <router-link
    :to="to"
    :style="{
      textDecoration: 'none',
      color: colors.fg,
    }"
  >
    <div class="app-item" :style="{ backgroundColor: colors.orange }">
      {{ title }}
    </div>
  </router-link>
</template>

<script>
import { colors } from "../../mixin/index";
export default {
  mixins: [colors],
  props: {
    title: {
      required: true,
    },
    to: {
      required: true,
    },
  },
};
</script>

<style scoped>
.app-item {
  margin: 10px 10px;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px #00000a;
}
</style>
