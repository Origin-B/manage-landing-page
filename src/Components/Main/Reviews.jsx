import { useRef, useState, useEffect } from 'react';
import Btn from '../Shared/Btn';
import { reviews } from '../Shared/data';
import itemsRender from '../Shared/itemsRender';

export default function Reviews() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const reviewsRender = itemsRender({ type: 'article', items: reviews });

  function scrollToIndex(index) {
    const track = trackRef.current;
    const card = track.children[index];
    if (card) {
      track.scrollTo({
        left: card.offsetLeft - track.offsetLeft,
        behavior: 'smooth',
      });
    }
    setCurrent(index);
  }

  function next() {
    scrollToIndex(Math.min(current + 1, reviews.length - 1));
  }

  function prev() {
    scrollToIndex(Math.max(current - 1, 0));
  }

  useEffect(() => {
    const track = trackRef.current;
    function handleScroll() {
      const cardWidth = track.children[0].offsetWidth;
      const index = Math.round(track.scrollLeft / cardWidth);
      setCurrent(index);
    }
    track.addEventListener('scroll', handleScroll);
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="flex w-4/5 flex-col items-center justify-center gap-8 lg:w-full">
      <div className="flex w-full items-center gap-4">
        <button
          onClick={prev}
          className="hidden shrink-0 cursor-pointer lg:block"
          aria-label="previous review"
        >
          ‹
        </button>

        <div
          ref={trackRef}
          className="scrollbar-thumb-Orange-400 flex w-full snap-x snap-mandatory gap-4 overflow-hidden scroll-smooth md:overflow-x-auto"
        >
          {reviewsRender}
        </div>

        <button
          onClick={next}
          className="hidden shrink-0 cursor-pointer lg:block"
          aria-label="next review"
        >
          ›
        </button>
      </div>

      <ul className="*:border-Orange-400 *:hover:bg-Orange-400/50 flex gap-3 *:h-3 *:w-3 *:cursor-pointer *:rounded-full *:border *:transition md:hidden">
        {reviews.map((r, i) => (
          <li
            key={r.id}
            onClick={() => scrollToIndex(i)}
            className={`border-Orange-400 border ${i === current ? 'bg-Orange-400' : ''}`}
          ></li>
        ))}
      </ul>

      <Btn
        className="bg-Orange-400 text-Gray-50 shadow-Orange-400/40 hover:bg-Orange-400/90"
        content={'Get Started'}
      />
    </section>
  );
}
