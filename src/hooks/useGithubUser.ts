import { useQuery } from "@tanstack/react-query"
import { getUserProfile } from "../services/githubApiProfile"
import { GithubProfile } from "../interface/models.interface";


export const useGithubUser = (username: string , enabled: boolean) => {

  return useQuery<GithubProfile, Error>({
    queryKey: ['githubUser', username],
    queryFn: () => getUserProfile(username),
    enabled: enabled && !!username,
    refetchOnWindowFocus: false,
    retry: false
  })

}