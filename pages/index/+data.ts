import type { PageContextServer } from "vike/types";


const fetchList = async () => {
  const response = await fetch(`https://bot.tapgame.tech/promo/banner`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': '123'
    }
  })
  const data = await response.json()

  return data
}

export const fetchList2 = async () => {
  const response = await fetch(`https://bot.tapgame.tech/promo/banner`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': '123'
    }
  })
  const data = await response.json()
  return data
}

export default async function data(_pageContext: PageContextServer): Promise<void> {
  return fetchList()
}