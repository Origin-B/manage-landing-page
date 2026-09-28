import Article from './MainShared/Article';
import { features } from '../Shared/data';
import itemsRender from '../Shared/itemsRender';

export default function Features() {
  const featuresRender = itemsRender({ type: 'article', items: features });
  return (
    <section className="grid w-full justify-items-center gap-5 lg:w-4/5 lg:grid-cols-2 lg:justify-items-stretch">
      <Article
        identity={{
          children: { type: '' },
          heading: 'What’s different about Manage?',
          body: 'Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. ',
        }}
      />

      <div className="flex w-[95%] flex-col gap-6 justify-self-end">
        {featuresRender}
      </div>
    </section>
  );
}
