'use client';

import { useContext, useRef, useState } from 'react';

import styles from './styles.module.css';
import { ThemeContext } from '@/lib/ThemeContext/ThemeContext';

function DarkLightTheme() {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div
      className={`flex justify-center items-center ${styles.themesCon} mr-6`}
    >
      <div
        className={`text-xl ml-3 transition-all ease-in-out duration-500 cursor-pointer drop-shadow-3xl-dark ${
          mode !== 'dark' ? `${styles.sub_theme}` : `${styles.isntActive}`
        } ${styles.themesEle}`}
        onClick={toggle}
      >
        🌑
      </div>
      <div
        className={`text-xl ml-3 transition-all ease-in-out duration-500 cursor-pointer ${
          mode !== 'light' ? `${styles.sub_theme}` : `${styles.isntActive}`
        } drop-shadow-3xl-light ${styles.themesEle}`}
        onClick={toggle}
      >
        🌕
      </div>
    </div>
  );
}

export default DarkLightTheme;
