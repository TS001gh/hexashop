'use client';

import { useContext, useRef, useState } from 'react';

import styles from './styles.module.css';
import { ThemeContext } from '@/lib/ThemeContext/ThemeContext';

function DarkLightTheme() {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className="relative flex justify-center items-center ml-5">
      <div
        className={`text-xl transition-all ease-in-out duration-500 absolute cursor-pointer drop-shadow-3xl-dark ${
          mode !== 'dark' ? `${styles.sub_theme}` : `${styles.isntActive}`
        }`}
        onClick={toggle}
      >
        🌑
      </div>
      <div
        className={`text-xl transition-all ease-in-out duration-500 absolute cursor-pointer ${
          mode !== 'light' ? `${styles.sub_theme}` : `${styles.isntActive}`
        } drop-shadow-3xl-light`}
        onClick={toggle}
      >
        🌕
      </div>
    </div>
  );
}

export default DarkLightTheme;
