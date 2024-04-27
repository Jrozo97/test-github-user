import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useGithubUser } from "../hooks/useGithubUser";
import GitHubUser from "../Components/GitHubUser";
import { useGithubRepo } from "../hooks/useGithubRepo";

jest.mock("../hooks/useGithubUser");

jest.mock("../hooks/useGithubRepo")

describe("GitHubUser", () => {
  const mochDataProfile = {
    name: "John Doe",
    username: "johndoe",
    avatarUrl: "https://example.com/avatar.jpg",
    bio: "Software Engineer",
    followers: 100,
    following: 50,
    publicRepos: 20,
    recentRepos: [
      {
        name: "repo1",
        description: "Description 1",
        visibility: "public",
        language: "JavaScript",
      },
      {
        name: "repo2",
        description: "Description 2",
        visibility: "private",
        language: "TypeScript",
      },
    ],
  };

  const mochDataRepo = [
    {
      name: "repo1",
      description: "Description 1",
      visibility: "public",
      language: "JavaScript",
    },
    {
      name: "repo2",
      description: "Description 2",
      visibility: "private",
      language: "TypeScript",
    },
  ];

  beforeEach(() => {
    (useGithubUser as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mochDataProfile,
    });
  });

  beforeEach(() => {
    (useGithubRepo as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mochDataRepo,
    });
  });

  test("renders the component correctly", () => {
    render(<GitHubUser/>);
    expect(screen.getByText("GitHub Explorer")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Buscar usuario...")
    ).toBeInTheDocument();
    expect(screen.getByText("Buscar usuario")).toBeInTheDocument();
  });

  test("displays user information when a user is searched", async () => {
    render(<GitHubUser />);
    const input = screen.getByPlaceholderText("Buscar usuario...");
    const button = screen.getByText("Buscar usuario");

    userEvent.type(input, "johndoe");
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/.*@?johndoe/i)).toBeInTheDocument();
    });

    expect(screen.getByAltText("johndoe avatar")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();


    expect(screen.getByText(/100/i)).toBeInTheDocument();


    expect(screen.getByText(/50/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
    expect(screen.getByText("repo1")).toBeInTheDocument();
    expect(screen.getByText("repo2")).toBeInTheDocument();
  });

  test("displays loading spinner when searching", async () => {
    (useGithubUser as jest.Mock).mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });
    render(<GitHubUser />);
    const input = screen.getByPlaceholderText("Buscar usuario...");
    const button = screen.getByText("Buscar usuario");

    userEvent.type(input, "johndoe");
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });

  test("displays error message when an error occurs", async () => {
    (useGithubUser as jest.Mock).mockReturnValue({
      isLoading: false,
      error: true,
      data: null,
    });
    render(<GitHubUser />);
    const input = screen.getByPlaceholderText("Buscar usuario...");
    const button = screen.getByText("Buscar usuario");

    userEvent.type(input, "johndoe");
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });

  test("clears the input when the search is canceled", async () => {
    render(<GitHubUser />);
    const input = screen.getByPlaceholderText("Buscar usuario...");
    const button = screen.getByText("Buscar usuario");

    userEvent.type(input, "johndoe");
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    userEvent.clear(input);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Buscar usuario...")).toHaveValue("");
    });
  });

});
