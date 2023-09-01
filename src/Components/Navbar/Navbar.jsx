import React from 'react';
import Logo from '../elements/Logo/Logo';
import NavEelements from '../elements/NavEelements/NavEelements';

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <NavEelements />
    </div>
  );
}

export default Navbar;
