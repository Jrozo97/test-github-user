import React, { ChangeEvent, FormEvent, useState } from "react";
import { useGithubUser } from "../../hooks/useGithubUser";
import UserProfileCard from "../UserProfileCard";
import LoadingSpinner from "../Common/LoadingSpinner";
import ErrorDisplay from "../Common/ErrorDisplay";
import SearchVisualization from "../Common/SearchVisualization";
import RepositoryList from "../RepositoryList";
import { ResponseUseGithubUser } from "../../interface/models.interface";

const GitHubUser = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { isLoading, error, data }: ResponseUseGithubUser = useGithubUser(
    userName,
    isSearching
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setUserName(inputValue);
      setIsSearching(true);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() === "") {
      setUserName("");
    }
  };

  return (
    <>
      <header className="flex flex-col w-full gap-3 max-sm:px-7">
        <h1 className="text-4xl font-medium text-center dark:text-white">
          GitHub Explorer
        </h1>
        <h3 className="text-2xl font-normal text-center dark:text-white ">
          Encuentra los usuarios que necesitas.
        </h3>
      </header>
      <form
        className="flex flex-row max-sm:flex-col max-sm:w-full max-sm:px-7 gap-5 self-center mt-11 "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Buscar usuario..."
          className="w-full sm:w-[400px] p-4 border border-gray rounded-md dark:text-gray-light dark:bg-primary"
          name="inputValue"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue/80 w-full sm:w-44 h-14 rounded-md text-white font-medium disabled:bg-gray"
          disabled={!inputValue || isLoading}
        >
          Buscar usuario
        </button>
      </form>
      <section className="flex gap-10 items-center justify-center h-auto w-auto mt-14 max-sm:flex-col max-sm:px-7 max-lg:px-10 max-lg:w-full  ">
        {isLoading && <LoadingSpinner />}
        {error && <ErrorDisplay />}
        {!data && !isLoading && !error && <SearchVisualization />}
        {data && (
          <>
            <UserProfileCard
              name={data?.name}
              username={data?.username}
              avatarUrl={data?.avatarUrl}
              bio={data?.bio}
              followers={data?.followers}
              following={data?.following}
              publicRepos={data?.publicRepos}
            />
            <RepositoryList dataList={data.recentRepos} />
          </>
        )}
      </section>
    </>
  );
};

export default GitHubUser;
