import MainHeader from './MainHeader';
import Features from './Features';
import Reviews from './Reviews';
import MainFooter from './MainFooter';

export default function Main() {
  return (
    <main className="flex flex-col items-center gap-8">
      <MainHeader />
      <Features />
      <Reviews />
      <MainFooter />
    </main>
  );
}
