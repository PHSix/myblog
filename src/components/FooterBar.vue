<template>
  <footer class="footer-bar">
    <button @click="changeVisable" :class="{'aside-button':true, 'rotate': !isHide }">&lt</button>
    <input class="search-context" placeholder="请输入你要查找的内容" type="text" />
    <section class="count_page">
      <div class="total-item">共 {{ totalItems }} 项</div>
      <div class="current-page">
        <button @click="dec_page" :class="{ notselect: !isDec }">前一页</button>
        <input
          type="text"
          name="page-number"
          v-model="current_page"
          pattern="[0-9]"
        />
        <pre> / {{ totalPages }}</pre>
        <button @click="inc_page" :class="{ notselect: !isInc }">下一页</button>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  props: {
    totalItems: {
      default: 10,
    },
    totalPages: {
      default: 3,
    },
    currentPage: {
      default: 1,
    },
  },
  data() {
    return {
      current_page: this.currentPage,
      isHide: true
    };
  },
  computed: {
    isDec() {
      if (this.current_page === 1) {
        return false;
      }
      return true;
    },
    isInc() {
      if (this.current_page === this.totalPages) {
        return false;
      }
      return true;
    },
  },
  methods: {
    inc_page() {
      if (this.isInc) {
        this.current_page++;
        this.$emit('change_page', this.current_page);
      }
    },
    dec_page() {
      if (this.isDec) {
        this.current_page--;
        this.$emit('change_page', this.current_page);
      }
    },
    changeVisable() {
      this.isHide = !this.isHide
      this.$parent.$emit('changeSideVisable');
    },
  },
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  border-top: 1px solid #444444;
  padding: 10px 20px;
  justify-content: center;
  min-width: 630px;
  max-width: 100%;
  input {
    flex: 1;
    line-height: 34px;
    outline: none;
    font-size: 20px;
    border-radius: 4px;
    background-color: #00000000;
    padding: 0px 3px;
    margin-right: 30px;
    border: 1px solid #aaaaaa;
  }
  section {
    line-height: 34px;
    color: #000000;
    user-select: none;
    display: flex;
    input {
      margin: 0;
      background-color: #00000000;
    }
    .current-page {
      display: flex;
      input {
        width: 30px;
        text-align: center;
        background-color: #00000000;
      }
      button {
        cursor: pointer;
        outline: none;
        border-radius: 4px;
        background-color: #ffffff00;
        border: 1px solid #bbbbbb;
        margin: 0 10px;
        padding: 0 10px;
      }
      .notselect {
        cursor: not-allowed;
        color: #00000050;
      }
      .notselect:active {
        background-color: #ffffff00;
      }
    }
  }
}
input:focus {
  border-color: black;
}
.aside-button{
  padding: 0px 20px;
  background-color: #00000000;
  transition: all 1s;
  outline: none;
  border: solid 1px #000000;
  border-radius: 4px;
  cursor: pointer;
}
.rotate{
  transform:rotateZ(180deg);
}
.search-context{
  margin-left: 30px;
}
</style>
