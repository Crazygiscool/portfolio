const GITHUB_USER = "crazygiscool";

const ghToken = import.meta.env.GITHUB_TOKEN as string | undefined;
const authHeaders: Record<string, string> = ghToken
  ? { Authorization: `Bearer ${ghToken}`, Accept: "application/vnd.github+json" }
  : { Accept: "application/vnd.github+json" };

export const colorMap: Record<string, string> = {
  Java: "#ea580c",
  Python: "#eab308",
  JavaScript: "#eab308",
  TypeScript: "#3b82f6",
  Dart: "#06b6d4",
  GDScript: "#059669",
  Lua: "#000080",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Rust: "#dea584",
  Go: "#00add8",
  C: "#555555",
  "C++": "#f34b7d",
  Kotlin: "#a97bff",
  Swift: "#ffac45",
};

export interface Repo {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  color: string;
  defaultBranch: string;
}

export interface FileNode {
  name: string;
  type: "folder" | "file";
  children: FileNode[];
}

export async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=stars&per_page=100`,
      { headers: authHeaders },
    );
    if (!res.ok) {
      console.warn(`fetchRepos failed: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = (await res.json()) as any;
    if (!Array.isArray(data)) {
      console.warn("fetchRepos: unexpected response", data?.message || data);
      return [];
    }
    return data
      .filter((r) => !r.fork && r.description)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .map((r: any) => ({
        name: r.name,
        description: r.description,
        language: r.language || "Code",
        stars: r.stargazers_count,
        url: r.html_url,
        color: colorMap[r.language] || "#a855f7",
        defaultBranch: r.default_branch || "main",
      }));
  } catch (err) {
    console.warn("fetchRepos error:", err);
    return [];
  }
}

export async function fetchFileTree(
  name: string,
  defaultBranch: string,
): Promise<FileNode[]> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USER}/${name}/git/trees/${defaultBranch}?recursive=1`,
      { headers: authHeaders },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as any;
    const paths: string[] = (data.tree || [])
      .filter((t: any) => t.type === "blob" || t.type === "tree")
      .map((t: any) => t.path as string)
      .slice(0, 250);
    return buildFileTree(paths);
  } catch {
    return [];
  }
}

function buildFileTree(paths: string[]): FileNode[] {
  const root: FileNode[] = [];

  for (const path of paths) {
    const parts = path.split("/");
    let level = root;
    let accumulated = "";

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      accumulated = accumulated ? `${accumulated}/${part}` : part;
      const isFile = i === parts.length - 1;
      const fullPath = accumulated;

      let node = level.find((n) => n.name === part);
      if (!node) {
        node = {
          name: part,
          type: isFile ? "file" : "folder",
          children: [],
        };
        level.push(node);
      }

      if (node.type === "file" && !isFile) node.type = "folder";
      if (node.type === "folder" && isFile && node.children.length === 0) {
        node.type = "file";
      }

      level = node.children;
      void fullPath;
    }
  }

  sortTree(root);
  return root;
}

function sortTree(nodes: FileNode[]): void {
  nodes.sort((a, b) => {
    if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  nodes.forEach((n) => sortTree(n.children));
}
