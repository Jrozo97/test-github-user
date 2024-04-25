import { UserProfileCardProps } from "../../types/componentsProps.type";

const UserProfileCard = ({
  name,
  username,
  avatarUrl,
  bio,
  followers,
  following,
  publicRepos,
}: UserProfileCardProps) => {
  return (
    <section className="flex flex-col items-center gap-11 px-10 py-6 w-80 h-auto bg-gray-light shadow-custom-border rounded-md">
      <img
        src={avatarUrl}
        alt={`${username} avatar`}
        className="w-60 h-60 rounded-full"
      />
      <div className="flex flex-col w-full">
        <h2 className="text-sm font-semibold">{name}</h2>
        <h3 className="text-sm font-normal">@{username}</h3>
        <div className="flex flex-col mt-6 gap-3">
          <p className="text-sm font-normal">{bio}</p>
          <div className="flex gap-2 items-center">
            <img
              src="/icons/iconFollowers.svg"
              alt="followers icon"
              className="w-6 h-6"
            />
            <p className="text-sm font-normal">
              {followers} seguidores · {following} siguiendo
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/icons/iconRepository.svg"
              alt="Repository icon"
              className="w-6 h-6"
            />
            <p className="text-sm font-normal">
              {publicRepos} repositorios públicos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfileCard;