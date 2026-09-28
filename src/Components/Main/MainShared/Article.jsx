export default function Article({ identity }) {
  const {
    heading: h,
    body: p,
    children: { type: t, child: c },
  } = identity;
  if (t === 'button') {
    return (
      <article className="flex flex-col gap-4 p-4 lg:justify-evenly xl:w-[80%]">
        <h1 className="text-Blue-950 text-4xl font-bold xl:text-5xl">{h}</h1>

        <p className="lg:text-lg">{p}</p>

        {c}
      </article>
    );
  } else if (t === 'span') {
    return (
      <article className="flex flex-col gap-4 self-end">
        <h3 className="text-Blue-950 text-md bg-Orange-50 flex items-center gap-4 font-bold lg:bg-transparent">
          {c}
          {h}
        </h3>

        <p className="pr-2">{p}</p>
      </article>
    );
  } else if (t === 'img') {
    return (
      <article className="xl:bg-Gray-50 relative box-border flex flex-[0_0_100%] snap-start flex-col items-center justify-end gap-3 rounded-md text-center md:mb-4 md:flex-[0_0_50%] xl:mt-10 xl:min-h-50 xl:flex-[0_0_calc((100%-12px)/3)] xl:p-4">
        {c}

        <h4 className="text-Blue-950 text-lg font-bold">{h}</h4>

        <p className="text-sm lg:text-base">{p}</p>
      </article>
    );
  } else {
    return (
      <article className="flex w-4/5 flex-col gap-4 p-5.5 text-center md:w-full md:text-left xl:w-[70%]">
        <h2 className="text-Blue-950 text-3xl font-bold">{h}</h2>

        <p className="text-sm md:text-base">{p}</p>
      </article>
    );
  }
}
