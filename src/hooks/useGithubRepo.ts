import { useQuery } from "@tanstack/react-query";
import { Repository } from "../interface/models.interface";
import { getRecentRepos } from "../services/githubApiRepo";

export const useGithubRepo = (username: string, page: number, enabled: boolean) => {
  return useQuery<Repository[], Error>({
    queryKey: ['githubRepo', username, page],
    queryFn: () => getRecentRepos(username, page),
    enabled: enabled && !!username,
    refetchOnWindowFocus: false,
    retry: false,
  });
};