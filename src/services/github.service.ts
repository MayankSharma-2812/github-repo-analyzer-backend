import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json"
  }
});

if (process.env.GITHUB_TOKEN) {
  githubApi.defaults.headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

export async function getRepo(owner: string, repo: string) {
  const res = await githubApi.get(`/repos/${owner}/${repo}`);
  return res.data;
}

export async function getLanguages(owner: string, repo: string) {
  const res = await githubApi.get(`/repos/${owner}/${repo}/languages`);
  return res.data;
}
export async function getRepoTree(owner: string, repo: string, branch: string) {
  const res = await githubApi.get(
    `/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`
  );
  return res.data.tree;
}
