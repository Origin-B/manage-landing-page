import { useState } from 'react';
import NavbarList from './NavbarList';
import Btn from '../Shared/Btn';

export default function Header() {
  const [navState, setNavState] = useState({
    display: 'hidden',
    isActive: true,
  });

  function activatedNavbar() {
    navState.isActive === true
      ? setNavState({ display: 'hidden', isActive: false })
      : setNavState({ display: 'flex', isActive: true });
  }

  return (
    <header className="relative flex w-full items-center justify-between p-6">
      <img
        src="./src/assets/logo.svg"
        alt="Manage Landing Page Logo"
        className="w-25 md:w-30"
      />

      <button
        type="button"
        className={`group cursor-pointer ${navState.display === 'flex' ? 'act' : ''} md:hidden`}
        onClick={() => activatedNavbar()}
      >
        <img
          src="./src/assets/icon-hamburger.svg"
          alt="click to open navbar"
          className="block group-[.act]:hidden"
        />
        <img
          src="./src/assets/icon-close.svg"
          alt="click to close navbar"
          className="hidden group-[.act]:block"
        />
      </button>

      <div
        className={`${navState.display} fixed inset-0 mt-16 bg-black/25 md:hidden`}
      />

      <NavbarList state={navState} />

      <Btn
        className="bg-Orange-400 hover:bg-Orange-400/80 text-Gray-50 shadow-Orange-400/50 hidden lg:block"
        content={'Get Started'}
      />
    </header>
  );
}
