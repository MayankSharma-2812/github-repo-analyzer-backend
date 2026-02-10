import express from "express";
import { parseRepoUrl } from "../utils/parseRepoUrl";
import { getRepo, getLanguages, getRepoTree } from "../services/github.service";
import { analyzeTechStack } from "../analyzer/techAnalyzer";
import { analyzeComplexity } from "../analyzer/complexityAnalyzer";
import { generateInsights } from "../analyzer/insightRules";


const router = express.Router();

router.post("/analyze", async (req, res) => {
  const { repoUrl } = req.body;

  if (!repoUrl) {
    return res.status(400).json({ message: "repoUrl is required" });
  }

  try {
    const { owner, repo } = parseRepoUrl(repoUrl);

    const repoData = await getRepo(owner, repo);
    const languages = await getLanguages(owner, repo);
    const tree = await getRepoTree(owner, repo, repoData.default_branch);
    const complexityData = analyzeComplexity(tree);
    const techStack = analyzeTechStack(tree);
    const insights = generateInsights(
      techStack,
      complexityData.metrics,
      complexityData.complexity
    );

    res.json({
      repo: {
        name: repoData.name,
        description: repoData.description,
        stars: repoData.stargazers_count,
        forks: repoData.forks_count,
        primaryLanguage: repoData.language
      },
      languages,
      techStack,
      insights,
      ...complexityData
    });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
