// https://vike.dev/onRenderClient
export { onRenderClient }

import { connectLogger } from '@reatom/logger'
import type { OnRenderClientAsync } from 'vike/types'
import { ctx } from '../integration/ctx'

const onRenderClient: OnRenderClientAsync = async (pageContext): ReturnType<OnRenderClientAsync> => {

  if (pageContext.isHydration) {
    console.log('isHydration')
  } else {
    connectLogger(ctx)
  }
}