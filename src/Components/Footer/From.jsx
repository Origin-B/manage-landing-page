import Btn from '../Shared/Btn';
import { useState } from 'react';

export default function From() {
  const [inputState, setInputState] = useState({
    value: '',

    outlineStyle: 'outline-transparent',

    warnDisplay: 'hidden',
  });

  function check() {
    const { value: v } = inputState;

    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(v) === true
      ? setInputState({
          ...inputState,
          outlineStyle: 'outline-transparent',
          warnDisplay: 'hidden',
        })
      : setInputState({
          ...inputState,
          outlineStyle: 'outline-Orange-400',
          warnDisplay: 'block',
        });
  }

  return (
    <form className="flex w-full items-baseline justify-center gap-1.5 lg:[grid-area:1/3]">
      <div className="flex flex-col gap-2">
        <input
          type="email"
          name="user-email"
          value={inputState.value}
          placeholder="Updates in your inbox…"
          className={`placeholder:text-Gray-950/50 text-Orange-400 rounded-full bg-white p-4 outline-2 ${inputState.outlineStyle}`}
          onChange={(e) =>
            setInputState({ ...inputState, value: e.target.value })
          }
        />

        <p className={`text-Orange-400 pl-4 text-xs ${inputState.warnDisplay}`}>
          please insert a valid email
        </p>
      </div>

      <Btn
        content={'Go'}
        className="bg-Orange-400 text-Orange-50 hover:bg-Orange-400/80"
        onClicK={() => check()}
      />
    </form>
  );
}
