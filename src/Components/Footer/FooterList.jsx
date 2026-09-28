import { footerListItems, footerIcons } from '../Shared/data';
import itemsRender from '../Shared/itemsRender';

export default function FooterList() {
  const footerListItemsRender = itemsRender({
    type: 'footer',
    items: footerListItems,
  });
  const footerListIconsRender = itemsRender({
    type: 'icon',
    items: footerIcons,
  });

  return (
    <>
      <ul className="text-Gray-50 *:hover:text-Orange-400 grid w-full grid-flow-col grid-cols-2 grid-rows-4 gap-4 *:cursor-pointer *:transition lg:col-start-2 lg:row-span-2">
        {footerListItemsRender}
      </ul>
      <ul className="fill-Gray-50 *:hover:fill-Orange-400 flex h-min justify-evenly gap-4 *:cursor-pointer *:transition">
        {footerListIconsRender}
      </ul>
    </>
  );
}
