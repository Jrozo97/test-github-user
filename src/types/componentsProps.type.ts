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
  dataList: Repository[];

}

export type CustomSwitchProps ={
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}