import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark", // Default to dark mode
  storageKey = "spltrr-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Initialize state from localStorage or default to dark
  const [theme, setTheme] = useState<Theme>(() => {
    // First check localStorage
    const savedTheme = localStorage.getItem(storageKey);
    // Return saved theme if it exists, otherwise use default
    return (savedTheme === "light" || savedTheme === "dark") 
      ? savedTheme 
      : defaultTheme;
  });

  // Apply theme to HTML element whenever it changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // First remove both classes
    root.classList.remove("light", "dark");
    
    // Then add the current theme
    root.classList.add(theme);
    
    // Store in localStorage
    localStorage.setItem(storageKey, theme);
    
    // Force an immediate repaint by triggering layout
    const bodyDisplay = document.body.style.display;
    document.body.style.display = 'none';
    void document.body.offsetHeight; // Trigger reflow
    document.body.style.display = bodyDisplay;
    
    // Log the current theme for debugging
    console.log("Applied theme:", theme);
    console.log("HTML element classes:", root.classList.value);
  }, [theme, storageKey]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  // Create context value
  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
    },
    toggleTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  
  return context;
};