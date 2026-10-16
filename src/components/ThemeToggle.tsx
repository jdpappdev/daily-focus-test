import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-xl bg-white/50 p-2.5 text-slate-700 shadow-sm transition hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-700/80"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
