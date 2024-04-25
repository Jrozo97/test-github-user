import React, { MouseEvent, useState } from "react";
import { useGithubUser } from "../../hooks/useGithubUser";
import UserProfileCard from "../UserProfileCard";
import LoadingSpinner from "../Common/LoadingSpinner";
import ErrorDisplay from "../Common/ErrorDisplay";
import SearchVisualization from "../Common/SearchVisualization";

const GitHubUser = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { isLoading, error, data } = useGithubUser(userName, isSearching);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setUserName(inputValue);
      setIsSearching(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() === "") {
      setUserName("");
    }
  };

  return (
    <>
      <header className="flex flex-col w-full">
        <h1 className="text-4xl font-medium text-center mb-4">
          GitHub Explorer
        </h1>
        <h3 className="text-2xl font-normal text-center">
          Encuentra los usuarios que necesitas.
        </h3>
        <div className="flex gap-5 self-center mt-11">
          <input
            type="text"
            placeholder="Buscar usuario..."
            className="w-[400px] p-4 border border-gray rounded-md "
            name="inputValue"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue/80 w-44 h-14 rounded-md text-white font-medium disabled:bg-gray"
            disabled={!inputValue}
            onClick={handleSubmit}
          >
            Buscar usuario
          </button>
        </div>
        <section className="flex gap-10 items-center justify-center h-auto max-w-2/3 mt-14">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorDisplay />}
          {(!data && !isLoading && !error)  && <SearchVisualization />}
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
            </>
          )}
        </section>
      </header>
    </>
  );
};

export default GitHubUser;
