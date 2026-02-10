import { techRules } from "./techRules";

export function analyzeTechStack(tree: any[]) {
  const detected = new Set<string>();

  for (const item of tree) {
    const path = item.path.toLowerCase();

    for (const rule of techRules) {
      if (path.includes(rule.match)) {
        detected.add(rule.tech);
      }
    }
  }

  return Array.from(detected);
}
