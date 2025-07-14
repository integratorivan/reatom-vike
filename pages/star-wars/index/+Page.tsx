import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";
import { prefetch } from "vike/client/router";
import { reatomComponent } from "@reatom/npm-react";
import { addItem, atomList } from "./model";

const TestComponent = reatomComponent(({ ctx }) => {
  const list = ctx.spy(atomList)
  return <div>
    {list.map((item) => <div key={item}>{item}</div>)}
    <button onClick={() => addItem(ctx, 11)}>Add</button>
  </div>
})

export default function Page() {
  const movies = useData<Data>();
  return (
    <>
      <h1>Star Wars Movies</h1>
      <TestComponent />
      <ol>
        {movies.map(({ id, title, release_date }) => (
          <li  key={id}>
            <a href={`/star-wars/${id}`}>{title}</a> ({release_date})
          </li>
        ))}
      </ol>
      <p>
        Source: <a href="https://brillout.github.io/star-wars">brillout.github.io/star-wars</a>.
      </p>
    </>
  );
}
