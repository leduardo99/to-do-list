import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";

import { DefaultTheme, ThemeProvider } from "styled-components";
import { combineTheme, dark, light } from "@/styles/theme";

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme(): void;
}

const ThemeContext = createContext({} as ThemeContextData);

export const ThemesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark));
  const THEME_KEY = "@theme";

  useEffect(() => {
    const themeLocal = localStorage.getItem(THEME_KEY);

    setTheme(themeLocal === "light" ? combineTheme(light) : combineTheme(dark));
  }, []);

  const toggleTheme = () => {
    if (theme.title === "dark") {
      localStorage.setItem(THEME_KEY, light.title);
      setTheme(combineTheme(light));
    } else {
      localStorage.setItem(THEME_KEY, dark.title);
      setTheme(combineTheme(dark));
    }
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextData {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return { theme, toggleTheme };
}
