import axios, { AxiosError } from "axios";
import { GithubProfile } from "../interface/models.interface";

export const getGithubUser = async (username: string): Promise<GithubProfile> => {
  const GITHUB_API_BASE_URL = "https://api.github.com";

  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
    const recentRepos = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}/repos?sort=updated&per_page=5`
    );

    return {
      name: response.data.name,
      username: response.data.login,
      avatarUrl: response.data.avatar_url,
      bio: response.data.bio,
      followers: response.data.followers,
      following: response.data.following,
      publicRepos: response.data.public_repos,
      recentRepos: recentRepos.data.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        visibility: repo.visibility,
        language: repo.language,
      })),
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`Error al obtener los datos de GitHub: ${error.message}`);
      throw new Error(`Error al obtener los datos de GitHub: ${error.message}`);
    } else {
      console.error(`Error inesperado: ${error}`);
      throw new Error(`Error inesperado: ${error}`);
    }
  }
};