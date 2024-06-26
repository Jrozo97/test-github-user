import { Box, CircularProgress, Pagination, Stack } from "@mui/material";
import {
  Repository,
  ResponseUseGithubRepo,
} from "../../interface/models.interface";
import { RepositoryListProps } from "../../types/componentsProps.type";
import { languageColors } from "../../utils/constant";
import { useGithubRepo } from "../../hooks/useGithubRepo";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const RepositoryList = ({
  userName,
  handleNextPage,
  page,
  shouldFetchRepos,
}: RepositoryListProps) => {
  const { theme } = useContext(DarkModeContext);
  const queryResultRepo = useGithubRepo(userName, page, shouldFetchRepos);
  const { isLoading, data }: ResponseUseGithubRepo = queryResultRepo ?? {
    isLoading: false,
    data: null,
  };

  return (
    <div className="w-[592px] h-[528px] max-sm:w-full max-sm:h-max max-sm:px-5 bg-gray-light px-9 py-8 shadow-custom-border rounded-md  dark:bg-secondary dark:shadow-custom-border-white max-sm:mb-6">
      {isLoading && (
        <Box
          sx={{ width: "584px", height: "50vh" }}
          className="flex justify-center items-center"
        >
          <CircularProgress />
        </Box>
      )}

      {(data?.repositories?.length ?? 0) > 0 ? (
        <div className="flex flex-col justify-center items-center h-full">
          <ul className="flex flex-col gap-4 w-full">
            {data?.repositories.map((repository: Repository) => {
              return (
                <li
                  className="w-full cursor-pointer min-h-[80px]  px-8 py-3 flex max-sm:flex-col max-sm:gap-2 justify-between items-center shadow-custom-border rounded-md dark:bg-secondary dark:shadow-custom-border-white"
                  key={repository.name}
                  onClick={() => window.open(repository.html_url, "_blank")}
                >
                  <div className="flex flex-col gap-2 w-3/4 max-sm:w-full">
                    <p className="text-sm font-medium text-blue max-sm:text-center">
                      {repository.name}
                    </p>
                    <p className="text-xs font-medium text-gray max-sm:text-center">
                      {repository.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 w-3/12 max-sm:flex-row max-sm:w-full max-sm:items-center justify-center">
                    <span className="inline-flex items-center rounded-3xl w-14 self-end justify-center px-2 py-1 text-xs font-medium text-gray ring-1 ring-inset ring-[#D0D7DE] dark:ring-[rgba(48,54,61,0.7)]">
                      {repository.visibility?.charAt(0).toUpperCase() +
                        repository.visibility?.slice(1)}
                    </span>
                    <div className="flex gap-1 items-center self-end justify-center">
                      <span
                        className={`rounded-full w-3 h-3 border border-[rgba(208,215,222,0.7)] dark:border-[rgba(48,54,61,0.7)] ${
                          languageColors[repository.language]
                        }`}
                      />
                      <p className="text-xs font-medium text-gray">
                        {repository.language}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <Stack spacing={2} className="items-center mt-4">
            <Pagination

              count={data?.totalPage}
              color={theme === "dark" ? "primary" : "standard"}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: theme === "dark" ? "white" : "black",
                },
              }}
              page={page}
              onChange={handleNextPage}
              siblingCount={0}
            />
          </Stack>
        </div>
      ) : (
        <div className="flex flex-col gap-3 items-center justify-center h-full w-full">
          <img
            src="/icons/iconNoData.svg"
            alt="No data"
            className="w-80 h-max "
          />
          <p className="text-base font-medium text-center dark:text-white">
            Oops, parece que este usuario aún no ha creado ningún repositorio.
          </p>
        </div>
      )}
    </div>
  );
};

export default RepositoryList;
