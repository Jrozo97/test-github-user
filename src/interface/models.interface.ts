export interface Repository {
  name: string;
  description?: string | null;
  visibility: string;
  language: string;
}

export interface GithubProfile {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string | null;
  followers: number;
  following: number;
  publicRepos: number;
  recentRepos: Repository[];
}

export interface ResponseUseGithubUser {
  isLoading: boolean | undefined;
  error: Error | null;
  data: GithubProfile | undefined;
}
