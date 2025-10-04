import {
  HistoryIcon,
  HomeIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import type { AvaliableThemes } from "../../types/AvaliableThemes";
import { useState, useEffect } from "react";

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storedTheme =
      (localStorage.getItem("theme") as AvaliableThemes) || "dark";
    return storedTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const actualThemeIcon = {
    dark: <MoonIcon />,
    light: <SunIcon />,
  };

  function handleToggleTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  return (
    <>
      <nav className={styles.menu} aria-label="Menu principal">
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Início"
          title="Início"
        >
          <HomeIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Histórico"
          title="Histórico"
        >
          <HistoryIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          aria-label="Configurações"
          title="Configurações"
        >
          <SettingsIcon />
        </a>
        <a
          className={styles.menuLink}
          href="#"
          onClick={handleToggleTheme}
          aria-label="Alternar tema"
          title="Alternar tema"
        >
          {actualThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
