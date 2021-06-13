<template>
  <div class="home">
    <issuse-list :issues="issues"></issuse-list>
    <footer-bar
      @change_page="change_page"
      :totalItems="total_items"
      :totalPages="total_pages"
    ></footer-bar>
  </div>
</template>

<script>
import FooterBar from '../components/FooterBar.vue';
import IssuesList from '../components/IssuesList.vue';
export default {
  data() {
    return {
      current_page: 1,
      issues: [],
      total_pages: 0,
      total_items: 0,
    };
  },
  inject: ['githubApi'],
  mounted() {
    if (this.total_items === 0) {
      this.githubApi.getTotalIssues().then((resp) => {
        this.total_items = resp.data.length;
        this.total_pages = Math.floor(
          this.total_items / this.githubApi.per_page
        );
        if (this.total_items % this.githubApi.per_page) {
          this.total_pages += 1;
        }
      });
    }
    this.githubApi.getIssuesList(this.current_page).then((resp) => {
      this.issues = resp.data;
    });
  },
  components: {
    'footer-bar': FooterBar,
    'issuse-list': IssuesList,
  },
  methods: {
    change_page(data) {
      this.current_page = data;
      this.getIssuesList()
    },
    getIssuesList() {
      this.githubApi.getIssuesList(this.current_page).then((resp) => {
        this.issues = resp.data;
      });
    },
  },
};
</script>

<style scoped>
.home {
  flex: 1;
}
</style>
