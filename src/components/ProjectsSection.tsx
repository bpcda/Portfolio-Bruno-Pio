import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Star, GitFork } from "lucide-react";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

const GITHUB_USERNAME = "bpcda";

const fetchPinnedRepos = async (): Promise<GitHubRepo[]> => {
  // GitHub GraphQL API for pinned repos (works unauthenticated for public profiles)
  const query = `{
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 5, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            primaryLanguage { name }
            stargazerCount
            forkCount
            repositoryTopics(first: 10) {
              nodes { topic { name } }
            }
          }
        }
      }
    }
  }`;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    if (res.ok) {
      const data = await res.json();
      const nodes = data?.data?.user?.pinnedItems?.nodes;
      if (nodes?.length) {
        return nodes.map((n: any) => ({
          name: n.name,
          description: n.description,
          html_url: n.url,
          language: n.primaryLanguage?.name ?? null,
          stargazers_count: n.stargazerCount,
          forks_count: n.forkCount,
          topics: n.repositoryTopics?.nodes?.map((t: any) => t.topic.name) ?? [],
        }));
      }
    }
  } catch {
    // Fall through to REST fallback
  }

  // Fallback: REST API top repos by stars
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=5&type=owner`,
    { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
  );
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
};

const ProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPinnedRepos()
      .then(setRepos)
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="label-caps mb-4">Projects</p>
          <div className="h-px bg-border mb-16" />
        </ScrollReveal>

        {loading ? (
          <div className="space-y-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="border border-border p-10 animate-pulse">
                <div className="h-6 w-48 bg-muted mb-4" />
                <div className="h-4 w-full bg-muted mb-2" />
                <div className="h-4 w-3/4 bg-muted" />
              </div>
            ))}
          </div>
        ) : repos.length === 0 ? (
          <ScrollReveal>
            <p className="text-muted-foreground font-body text-center py-12">
              Could not load projects.{" "}
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-foreground transition-colors"
              >
                View on GitHub →
              </a>
            </p>
          </ScrollReveal>
        ) : (
          <div className="space-y-24">
            {repos.map((repo, i) => (
              <ScrollReveal key={repo.name} delay={i * 120}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start`}>
                  <div className={`${i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-6"}`}>
                    <div className="border border-border p-10 hover:bg-secondary transition-colors duration-300 group">
                      <div className="flex items-start justify-between mb-6">
                        <h3 className="font-body font-medium text-foreground text-xl">
                          {repo.name.replace(/[-_]/g, " ")}
                        </h3>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors flex-shrink-0"
                          aria-label={`View ${repo.name} on GitHub`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>

                      {repo.description && (
                        <p className="text-muted-foreground leading-relaxed mb-8 font-body">
                          {repo.description}
                        </p>
                      )}

                      <div className="flex items-center flex-wrap gap-3">
                        {repo.language && (
                          <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent border border-accent/30 px-3 py-1">
                            {repo.language}
                          </span>
                        )}
                        {repo.topics.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground border border-border px-3 py-1"
                          >
                            {t}
                          </span>
                        ))}
                        {(repo.stargazers_count > 0 || repo.forks_count > 0) && (
                          <div className="flex items-center gap-4 ml-auto text-muted-foreground">
                            {repo.stargazers_count > 0 && (
                              <span className="flex items-center gap-1 font-mono text-xs">
                                <Star className="w-3.5 h-3.5" />
                                {repo.stargazers_count}
                              </span>
                            )}
                            {repo.forks_count > 0 && (
                              <span className="flex items-center gap-1 font-mono text-xs">
                                <GitFork className="w-3.5 h-3.5" />
                                {repo.forks_count}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
