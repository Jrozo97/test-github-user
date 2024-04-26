import { useQuery } from "@tanstack/react-query"
import { getGithubUser } from "../services/githubApi"
import { GithubProfile } from "../interface/models.interface";


export const useGithubUser = (username: string, enabled: boolean) => {

  return useQuery<GithubProfile, Error>({
    queryKey: ['githubUser', username],
    queryFn: () => getGithubUser(username),
    enabled: enabled && !!username,
    refetchOnWindowFocus: false,
    retry: false
  })

}