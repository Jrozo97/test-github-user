import axios, { AxiosError } from "axios";
import { GithubReposisotoryResponse, Repository } from "../interface/models.interface";

export const getRecentRepos = async (username: string, page: number): Promise<GithubReposisotoryResponse> => {
  const GITHUB_API_BASE_URL = "https://api.github.com";

  try {
    const recentRepos = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}/repos?sort=updated&per_page=4&page=${page}`
    );

    const linkHeader = recentRepos.headers.link;
    const totalPages = calculateTotalPages(linkHeader);
    const data = recentRepos.data.map((repo: Repository) => ({
      name: repo.name,
      description: repo.description,
      visibility: repo.visibility,
      language: repo.language,
      html_url: repo.html_url,
    }));

    return {
      totalPage: totalPages,
      repositories: data,
    };

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

const calculateTotalPages = (linkHeader: string | null): number => {
  if (!linkHeader) {
    return 1;
  }

  const links = linkHeader.split(",");
  const lastLink = links.find((link) => link.includes('rel="last"'));

  if (!lastLink) {
    return 1;
  }

  const lastPageUrl = lastLink.split(";")[0].trim().slice(1, -1);
  const lastPageParam = new URLSearchParams(lastPageUrl.split("?")[1]);
  const lastPage = parseInt(lastPageParam.get("page") || "1", 10);

  return lastPage;
};