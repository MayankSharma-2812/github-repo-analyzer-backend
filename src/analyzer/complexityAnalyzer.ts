export function analyzeComplexity(tree: any[]) {
  let files = 0;
  let folders = 0;
  let maxDepth = 0;
  let hasTests = false;
  let hasCI = false;

  for (const item of tree) {
    const path = item.path.toLowerCase();
    const depth = path.split("/").length;

    if (item.type === "blob") files++;
    if (item.type === "tree") folders++;

    if (depth > maxDepth) maxDepth = depth;

    if (path.includes("test") || path.includes("__tests__")) {
      hasTests = true;
    }

    if (path.includes(".github/workflows")) {
      hasCI = true;
    }
  }

  let complexity = "Beginner";

  if (files > 50 || folders > 10) complexity = "Intermediate";
  if (files > 200 || maxDepth > 6) complexity = "Advanced";
  if (hasCI && hasTests && files > 500) complexity = "Production-grade";

  return {
    metrics: {
      files,
      folders,
      maxDepth,
      hasTests,
      hasCI
    },
    complexity
  };
}
