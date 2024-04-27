import { useContext } from "react";
import GitHubUser from "./Components/GitHubUser";
import { DarkModeContext } from "./context/darkModeContext";
import CustomSwitch from "./Components/Common/CustomSwitch";

function App() {
  const { theme, handleChangeTheme } = useContext(DarkModeContext);


  return (
    <main className="w-screen min-h-screen flex flex-col items-center pt-14 transition-colors duration-300 dark:bg-primary">
      <CustomSwitch
        checked={theme === "dark"}
        onChange={handleChangeTheme}
      />
      <GitHubUser />
    </main>
  );
}

export default App;
