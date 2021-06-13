<template>
  <div class="label" :style="{backgroundColor: color}">
    {{label.name}}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      default: {name: 'aa'},
    },
  },
  data(){
    return {
      color: "#" + this.label.color
    }
  },
  mounted(){
  }
};
</script>

<style scoped lang="scss">
.label {
  border-radius: 3px;
  line-height: 30px;
  padding: 0 10px;
  margin: 0 6px;
  color: white;
}
</style>
