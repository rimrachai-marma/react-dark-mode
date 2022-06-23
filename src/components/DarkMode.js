import MoonIcon from "../assets/icon/MoonIcon";
import StarsIcon from "../assets/icon/StarsIcon";
import SunIcon from "../assets/icon/SunIcon";
import SunRaysIcon from "../assets/icon/SunRaysIcon";
import styles from "./DarkMode.module.css";

const DarkMode = () => {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

  
  return (
    <>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="switch"
        onChange={toggleTheme}
        defaultChecked={defaultDark}
      />
      <label htmlFor="switch" className={styles.check}>
        <SunIcon className={styles["sun-icon"]} />
        <MoonIcon className={styles["moon-icon"]} />
        <span>
          <StarsIcon className={styles["stars-icon"]} />
          <SunRaysIcon className={styles["sun-rays-icon"]} />
        </span>
      </label>
    </>
  );
};

export default DarkMode;
