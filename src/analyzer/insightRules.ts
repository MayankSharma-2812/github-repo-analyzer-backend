export function generateInsights(
  techStack: string[],
  metrics: {
    files: number;
    folders: number;
    maxDepth: number;
    hasTests: boolean;
    hasCI: boolean;
  },
  complexity: string
) {
  const insights: string[] = [];

  if (!metrics.hasTests) {
    insights.push("Add automated tests to improve reliability");
  } else {
    insights.push("Automated tests are present — good engineering practice");
  }

  if (!metrics.hasCI) {
    insights.push("Set up CI/CD using GitHub Actions");
  } else {
    insights.push("CI/CD is configured correctly");
  }

  if (metrics.maxDepth > 8) {
    insights.push("Folder structure is deeply nested; consider simplifying");
  }

  if (metrics.files > 1000) {
    insights.push("Large codebase — ensure modules are well documented");
  }

  if (techStack.includes("Docker")) {
    insights.push("Docker is used — good for deployment consistency");
  }

  if (!techStack.includes("TypeScript") && techStack.includes("JavaScript")) {
    insights.push("Consider migrating to TypeScript for better maintainability");
  }

  if (complexity === "Production-grade") {
    insights.push("This repository shows production-level engineering quality");
  }

  return insights;
}
