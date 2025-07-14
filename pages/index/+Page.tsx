import { useData } from "vike-react/useData";
import { Counter } from "./Counter.js";
import { Data } from "./+data";

export default function Page() {
  const data = useData<Data>();

  return (
    <>
      <h1>My Vike app</h1>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <div>
        {data?.map((item: any) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
}
