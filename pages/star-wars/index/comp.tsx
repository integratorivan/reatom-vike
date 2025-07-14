import { reatomComponent } from "@reatom/npm-react"
import { addItem, atomList } from "./model"

export const TestComponent = reatomComponent(({ ctx }) => {
  const list = ctx.spy(atomList)
  return <div>
    {list.map((item) => <div key={item}>{item}</div>)}
    <button onClick={() => addItem(ctx, 11)}>Add</button>
  </div>
})
