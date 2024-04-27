import { render, screen } from "@testing-library/react";
import UserProfileCard from "../Components/UserProfileCard";

describe("UserProfileCard", () => {
  const mockProps = {
    name: "John Doe",
    username: "johndoe",
    avatarUrl: "https://example.com/avatar.jpg",
    bio: "Software Engineer",
    followers: 100,
    following: 50,
    publicRepos: 20,
  };

  it("renders user profile card correctly", () => {
    render(<UserProfileCard {...mockProps} />);

    const avatarImg = screen.getByAltText(`${mockProps.username} avatar`);
    expect(avatarImg).toBeInTheDocument();

    const nameHeading = screen.getByText(mockProps.name);
    expect(nameHeading).toBeInTheDocument();

    const usernameHeading = screen.getByText(`@${mockProps.username}`);
    expect(usernameHeading).toBeInTheDocument();

    const bioText = screen.getByText(mockProps.bio);
    expect(bioText).toBeInTheDocument();

    const followersText = screen.getByText(
      `${mockProps.followers} seguidores · ${mockProps.following} siguiendo`
    );
    expect(followersText).toBeInTheDocument();

    const reposText = screen.getByText(
      `${mockProps.publicRepos} repositorios públicos`
    );
    expect(reposText).toBeInTheDocument();
  });
});
