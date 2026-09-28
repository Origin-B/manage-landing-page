import Article from '../Main/MainShared/Article';

export default function itemsRender({ type, items }) {
  const itemsRender = items.map((item) => {
    const { id } = item;

    return type === 'article' ? (
      <Article key={id} identity={item} />
    ) : type === 'nav' || type === 'footer' ? (
      <li key={id}>{item.title}</li>
    ) : type === 'icon' ? (
      <li key={id} className="flex items-center justify-center">
        {item.children}
      </li>
    ) : (
      ''
    );
  });

  return itemsRender;
}
