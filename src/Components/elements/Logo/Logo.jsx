import { Montserrat } from 'next/font/google';
import styles from './Logo.module.css';

const mont = Montserrat({ subsets: ['latin'], weight: ['900'] });

function Logo() {
  return (
    <div className={`${mont.className} ${styles.text_color}`}>HEXASHOP</div>
  );
}

export default Logo;
