export { onHydrationEnd }
 
import { connectLogger } from '@reatom/logger'
import type { OnHydrationEndAsync } from 'vike/types'
import { ctx } from '../integration/ctx'
 
const onHydrationEnd: OnHydrationEndAsync = async (
  pageContext
): ReturnType<OnHydrationEndAsync> => {
  connectLogger(ctx)
  console.log('onHydrationEnd')
}