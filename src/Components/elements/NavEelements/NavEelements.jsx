import Link from 'next/link';
import React from 'react';
import DarkLightTheme from '../DarkLightTheme/DarkLightTheme';

function NavEelements() {
  return (
    <ul className="flex justify-between items-center gap-5">
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/products'}>Products</Link>
      </li>
      <li>
        <Link href={'/about'}>About</Link>
      </li>
      <li>
        <Link href={'/contact'}>Contact</Link>
      </li>
      <DarkLightTheme />
    </ul>
  );
}

export default NavEelements;
