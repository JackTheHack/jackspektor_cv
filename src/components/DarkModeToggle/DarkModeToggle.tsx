import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const userPrefersDark = localStorage.getItem('darkMode') === 'true';
    const isDark = userPrefersDark ?? systemPrefersDark;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-full bg-gray-200 p-2 dark:bg-gray-700"
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
}
