import axios, { AxiosError } from "axios";
import { GithubProfile } from "../interface/models.interface";

export const getUserProfile = async (
  username: string
): Promise<GithubProfile> => {
  const GITHUB_API_BASE_URL = "https://api.github.com";

  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}`
    );
    return {
      name: response.data.name,
      username: response.data.login,
      avatarUrl: response.data.avatar_url,
      bio: response.data.bio,
      followers: response.data.followers,
      following: response.data.following,
      publicRepos: response.data.public_repos,
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
