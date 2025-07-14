import { atom } from '@reatom/core';
import { reatomComponent} from '@reatom/npm-react'

const counterAtom = atom(100);

export const Counter = reatomComponent(({ctx}) => {
  const counter = ctx.spy(counterAtom)

  return (
    <button type="button" onClick={() => counterAtom(ctx, (prev) => prev + 1)}>
      Counter {counter} {counter % 2 === 0 ? "even" : "odd"}
    </button>
  );
})
