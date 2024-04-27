import { Repository } from "../interface/models.interface";

export type UserProfileCardProps = {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string | null;
  followers: number;
  following: number;
  publicRepos: number;
};


export type LanguageColors = {
  [key: string]: string;
}

export type RepositoryListProps = {
  userName: string;
  handleNextPage: ( event: React.ChangeEvent<unknown>, page: number ) => void;
  page: number;
  shouldFetchRepos: boolean;

}

export type CustomSwitchProps ={
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export type DarkModeContextProps = {
  theme: 'dark' | 'light';
  handleChangeTheme: () => void;
}