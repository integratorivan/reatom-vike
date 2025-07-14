import { action, atom } from "@reatom/core";

export const atomList = atom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'testAtomList')

export const addItem = action((ctx, item: number) => {
  atomList(ctx, (prev) => [...prev, item])
}, 'testAddItem')