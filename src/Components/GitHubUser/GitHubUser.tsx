import React, { useState } from "react";
import { useGithubUser } from "../../hooks/useGithubUser";

const GitHubUser = () => {
  const [userName, setUserName] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { isLoading, error, data } = useGithubUser(userName, isSearching);

  console.log("isLoading", isLoading);
  console.log("error", error);
  console.log("data", data);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName.trim() !== '') {
      setIsSearching(true);
    }
    console.log(userName);
  }

  return (
    <>
      <header className="flex flex-col w-full">
        <h1 className="text-4xl font-medium text-center mb-4">GitHub Explorer</h1>
        <h3 className="text-2xl font-normal text-center">
          Encuentra los usuarios que necesitas.
        </h3>
        <form className="flex gap-5 self-center mt-11" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Buscar usuario..."
            className="w-[400px] p-4 border border-gray rounded-md "
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue/80 w-44 h-14 rounded-md text-white font-medium disabled:bg-gray"
            disabled={!userName}
          >
            Buscar usuario
          </button>
        </form>
      </header>
    </>
  );
};

export default GitHubUser;
