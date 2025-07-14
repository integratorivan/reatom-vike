// https://vike.dev/data
import { todos } from "../../database/todoItems";
import type { PageContextServer } from "vike/types";
import { useConfig } from 'vike-react/useConfig' // or vike-{vue,solid}


export type Data = {
  todo: { text: string }[];
};

export default async function data(_pageContext: PageContextServer): Promise<any> {
  const config = useConfig()
 
  config({
    title: `123`,
    Head: <meta name="description" content={`List of all 123 Star Wars movies.`} />,
  });

  return { todo: [] };
}
