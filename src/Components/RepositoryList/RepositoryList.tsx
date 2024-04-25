import { Repository } from "../../interface/models.interface";
import { RepositoryListProps } from "../../types/componentsProps.type";
import { languageColors } from "../../utils/constant";

const RepositoryList = ({ dataList }: RepositoryListProps) => {
  return (
    <div className="w-[592px] h-max bg-gray-light px-9 py-8 shadow-custom-border rounded-md flex flex-col gap-4 dark:bg-secondary dark:shadow-custom-border-white">
      {dataList.map((repository: Repository) => {
        const color = languageColors[repository.language];
        console.log("color", color);
        return (
          <div
            className="w-full h-20 px-8 py-3 flex justify-between shadow-custom-border rounded-md dark:bg-secondary dark:shadow-custom-border-white   "
            key={repository.name}
          >
            <div className="flex flex-col gap-2 w-3/4">
              <p className="text-sm font-medium text-blue">{repository.name}</p>
              <p className="text-xs font-medium text-gray">
                {repository.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-3/12">
              <span className="inline-flex items-center rounded-3xl w-14 self-end  justify-center px-2 py-1 text-xs font-medium text-gray ring-1 ring-inset ring-[#D0D7DE] dark:ring-[rgba(48,54,61,0.7)] ">
                {repository.visibility.charAt(0).toUpperCase() +
                  repository.visibility.slice(1)}
              </span>
              <div className="flex gap-1 items-center self-end ">
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
          </div>
        );
      })}
    </div>
  );
};

export default RepositoryList;
