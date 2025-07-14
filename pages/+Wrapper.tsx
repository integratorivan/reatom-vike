import { reatomContext } from "@reatom/npm-react";
import { ctx } from "../integration/ctx";
import { connectLogger } from "@reatom/framework";
import { useEffect } from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  connectLogger(ctx)
  return <reatomContext.Provider value={ctx}>{children}</reatomContext.Provider>;
}