import Btn from '../Shared/Btn';
import Article from './MainShared/Article';

export default function MainHeader() {
  return (
    <section className="grid justify-items-center gap-5 p-4 text-center lg:w-4/5 lg:grid-cols-2 lg:justify-items-start lg:text-left">
      <img
        src=".\src\assets\illustration-intro.svg"
        alt="illustration intro image"
        className="lg:col-start-2 lg:row-start-1"
      />

      <Article
        identity={{
          heading: 'Bring everyone together to build better products.',
          body: 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
          children: {
            type: 'button',
            child: (
              <Btn
                className="bg-Orange-400 hover:bg-Orange-400/80 text-Gray-50 shadow-Orange-400/40 self-center lg:self-start"
                content={'Get Started'}
              />
            ),
          },
        }}
      />
    </section>
  );
}
