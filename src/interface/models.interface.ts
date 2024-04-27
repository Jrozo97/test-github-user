export interface Repository {
  name: string;
  description?: string | null;
  visibility: string;
  language: string;
  html_url: string;
}

export interface GithubReposisotoryResponse {
  totalPage: number;
  repositories: Repository[];
}

export interface GithubProfile {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string | null;
  followers: number;
  following: number;
  publicRepos: number;
}

export interface ResponseUseGithubUser {
  isLoading: boolean | undefined;
  error: Error | null;
  data: GithubProfile | undefined;
}

export interface ResponseUseGithubRepo {
  isLoading: boolean | undefined;
  error?: Error | null;
  data: GithubReposisotoryResponse | undefined;
}