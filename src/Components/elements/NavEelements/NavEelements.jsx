import Link from 'next/link';
import React from 'react';
import DarkLightTheme from '../DarkLightTheme/DarkLightTheme';

function NavEelements() {
  return (
    <ul className="flex lg:flex-row flex-col justify-between items-center gap-5">
      <DarkLightTheme />
      <li className=" px-7 py-3 bg-teal-300 text-center uppercase lg:bg-transparent lg:w-full lg:p-0 w-[100%] sm:w-[400px] hover:cursor-pointer hover:text-slate-500 transition-all flex-1">
        <Link href={'/'}>Home</Link>
      </li>
      <li className=" px-7 py-3 bg-teal-300 text-center uppercase lg:bg-transparent lg:w-full lg:p-0 w-[100%] sm:w-[400px] hover:cursor-pointer hover:text-slate-500 transition-all flex-1">
        <Link href={'/products'}>Products</Link>
      </li>
      <li className=" px-7 py-3 bg-teal-300 text-center uppercase lg:bg-transparent lg:w-full lg:p-0 w-[100%] sm:w-[400px] hover:cursor-pointer hover:text-slate-500 transition-all flex-1">
        <Link href={'/about'}>About</Link>
      </li>
      <li className=" px-7 py-3 bg-teal-300 text-center uppercase lg:bg-transparent lg:w-full lg:p-0 w-[100%] sm:w-[400px] hover:cursor-pointer hover:text-slate-500 transition-all flex-1">
        <Link href={'/contact'}>Contact</Link>
      </li>
    </ul>
  );
}

export default NavEelements;
