import axios from 'axios';
const user = 'phsix';
const repo = 'blog';

export default {
  per_page: 12,
  repo_url: `https://api.github.com/repos/${user}/${repo}/issues`,
  api_prefix: 'https://api.github.com/',
  getIssuesList(page_id) {
    return axios.get(
      `${this.repo_url}?per_page=${this.per_page}&page=${page_id}&state=open`
    );
  },
  getIssue(id) {
    return axios.get(`${this.repo_url}/${id}`);
  },
  getCommets(id) {
    return axios.get(`${this.repo_url}/${id}/comments`);
  },
  getTotalIssues() {
    return axios.get(`${this.repo_url}`);
  },
  getAuthorInfo() {
    return axios.get(`${this.api_prefix}users/${user}`);
  },
};
