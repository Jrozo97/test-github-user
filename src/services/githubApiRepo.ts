import axios, { AxiosError } from "axios";
import { Repository } from "../interface/models.interface";

export const getRecentRepos = async (username: string, page: number): Promise<Repository[]> => {
  const GITHUB_API_BASE_URL = "https://api.github.com";

  try {
    const recentRepos = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}/repos?sort=updated&per_page=4&page=${page}`
    );
    return recentRepos.data.map((repo: Repository) => ({
      name: repo.name,
      description: repo.description,
      visibility: repo.visibility,
      language: repo.language,
    }));
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`Error al obtener los repositorios recientes: ${error.message}`);
      throw new Error(`Error al obtener los repositorios recientes: ${error.message}`);
    } else {
      console.error(`Error inesperado: ${error}`);
      throw new Error(`Error inesperado: ${error}`);
    }
  }
};