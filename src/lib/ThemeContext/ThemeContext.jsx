'use client';
import { createContext, useState } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');
  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    console.log(mode);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div
        style={{ backgroundColor: 'var(--bgcolor)', color: 'var(--textcolor)' }}
        className={`${mode} theme_trans`}
      >
        <div className="flex min-h-screen theme">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};
