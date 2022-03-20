import { createContext, useContext } from "react";

const theme = {
  color: {
    primary: "#31afa7",
    background: "#162127",
  },
};

const ThemeContext = createContext(theme);

export function ThemeWrapper({ children }: any) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
