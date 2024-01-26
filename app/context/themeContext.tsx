import { createContext, useContext, useState } from "react";

export type ThemeContext = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  toggleDarkMode: () => void;
};

const StateContext = createContext<ThemeContext>(null!);

type Props = {
  children: React.ReactNode;
};

export function ThemeContextProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <StateContext.Provider
      value={{
        darkMode,
        setDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function useThemeContextState() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(
      "useThemeContextState must be used within the ThemeContextProvider"
    );
  }
  return context;
}
