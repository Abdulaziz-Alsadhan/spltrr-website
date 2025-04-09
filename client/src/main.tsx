import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/skeleton.css";
import "./styles/dark-mode-specifics.css";
import { LanguageProvider } from "./hooks/useLanguage";

// Check for stored theme preference at the application level
const storedTheme = localStorage.getItem('spltrr-theme');

if (storedTheme === 'dark') {
  document.documentElement.classList.add('dark');
  document.documentElement.style.colorScheme = 'dark';
} else {
  // Default to light mode (like Qubit.sa)
  document.documentElement.classList.remove('dark');
  document.documentElement.style.colorScheme = 'light';
  localStorage.setItem('spltrr-theme', 'light');
}

createRoot(document.getElementById("root")!).render(
  <App />
);
