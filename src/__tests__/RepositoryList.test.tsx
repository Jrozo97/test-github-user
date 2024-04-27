import { render, screen } from '@testing-library/react';
import { DarkModeContext } from '../context/darkModeContext';
import RepositoryList from '../Components/RepositoryList';
import { DarkModeContextProps } from '../types/componentsProps.type';

jest.mock('../hooks/useGithubRepo', () => ({
  useGithubRepo: jest.fn(),
}));

const darkModeContextValue:DarkModeContextProps = {
  theme: 'light',
  handleChangeTheme: jest.fn(),
};

const renderRepositoryList = (props:any) => {
  return render(
    <DarkModeContext.Provider value={darkModeContextValue}>
      <RepositoryList {...props} />
    </DarkModeContext.Provider>
  );
};

describe('RepositoryList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading state', () => {
    const useGithubRepoMock = {
      isLoading: true,
      data: null,
    };
    const { useGithubRepo } = require('../hooks/useGithubRepo');
    useGithubRepo.mockReturnValue(useGithubRepoMock);

    renderRepositoryList({ userName: 'test-user', page: 1, shouldFetchRepos: true });

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render repositories', () => {
    const dataRepo = {
      totalPage: 1,
      repositories: [
        {
          name: "repo1",
          description: "Description 1",
          visibility: "public",
          language: "JavaScript",
          html_url: "https://example.com/repo1",
        },
        {
          name: "repo2",
          description: "Description 2",
          visibility: "private",
          language: "TypeScript",
          html_url: "https://example.com/repo2",
        },
      ],
    }
    const useGithubRepoMock = {
      isLoading: false,
      data: dataRepo,
    };
    const { useGithubRepo } = require('../hooks/useGithubRepo');
    useGithubRepo.mockReturnValue(useGithubRepoMock);

    renderRepositoryList({ userName: 'test-user', page: 1, shouldFetchRepos: true });

    dataRepo.repositories.forEach((repo) => {
      expect(screen.getByText(repo.name)).toBeInTheDocument();
      expect(screen.getByText(repo.description)).toBeInTheDocument();
      expect(screen.getByText(repo.visibility.charAt(0).toUpperCase() + repo.visibility.slice(1))).toBeInTheDocument();
      expect(screen.getByText(repo.language)).toBeInTheDocument();
    });
  });
});