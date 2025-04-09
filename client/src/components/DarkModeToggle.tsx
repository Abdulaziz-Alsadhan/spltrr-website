import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  isHomePage?: boolean;
  isScrolled?: boolean;
}

export default function DarkModeToggle({ isHomePage, isScrolled }: DarkModeToggleProps = {}) {
  const [isDark, setIsDark] = useState(false);
  
  // Initialize on mount
  useEffect(() => {
    // Check if user has already set a preference
    const storedTheme = localStorage.getItem('spltrr-theme');
    
    if (storedTheme) {
      // Use the stored preference
      setIsDark(storedTheme === 'dark');
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      // Default to light mode like Qubit.sa
      document.documentElement.classList.remove('dark');
      localStorage.setItem('spltrr-theme', 'light');
    }
  }, []);
  
  // Function to toggle theme
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Update localStorage
    localStorage.setItem('spltrr-theme', newIsDark ? 'dark' : 'light');
    
    // Toggle the class on the html element
    document.documentElement.classList.toggle('dark', newIsDark);
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative z-10"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className={`h-5 w-5 ${(isHomePage && !isScrolled) ? 'text-white' : 'text-slate-700'}`} />
      )}
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </Button>
  );
}