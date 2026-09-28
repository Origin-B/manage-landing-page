import Btn from '../Shared/Btn';

export default function MainFooter() {
  return (
    <section className="bg-Orange-400 flex w-full flex-col items-center justify-between gap-8 py-8 text-center lg:flex-row lg:text-left xl:justify-evenly">
      <p className="text-Orange-50 bg-[url('./src/assets/bg-simplify-section-mobile.svg')] bg-contain bg-left bg-no-repeat p-8 text-4xl font-bold lg:w-1/2 lg:bg-[url('./src/assets/bg-simplify-section-desktop.svg')] xl:my-6 xl:text-5xl">
        Simplify how your team works today.
      </p>
      <Btn content={'Get Started'} className="bg-Gray-50 text-Orange-400" />
    </section>
  );
}
