import { navbarLisItems } from '../Shared/data';
import itemsRender from '../Shared/itemsRender';

export default function NavbarList({ state }) {
  const { display, isActive } = state;

  const navbarLisItemsRender = itemsRender({
    type: 'nav',
    items: navbarLisItems,
  });

  return (
    <nav
      className={`${display} absolute inset-0 top-full z-10 m-4 h-fit bg-white md:static md:inset-auto md:z-auto md:block md:bg-transparent`}
      is-active={`${isActive}`}
    >
      <ul className="text-Blue-950 *:hover:text-Gray-950/50 flex w-full flex-col gap-4 p-4 text-center font-medium *:cursor-pointer *:transition md:flex-row">
        {navbarLisItemsRender}
      </ul>
    </nav>
  );
}
