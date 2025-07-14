import { reatomComponent } from "@reatom/npm-react";
import { reatomResource, withDataAtom, withStatusesAtom } from '@reatom/framework'

const res = reatomResource((ctx) => {
  return ctx.schedule(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    return data
  })
}).pipe(withStatusesAtom(), withDataAtom([]))

export const TodoList = reatomComponent(({ ctx }) => {
  const todos = ctx.spy(res.dataAtom)
  console.log(todos)
  return (
    <>
      <div>
        <h1>Privet</h1>
        {todos?.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </>
  );
})
