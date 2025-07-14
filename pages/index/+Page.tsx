import { useData } from "vike-react/useData";
import { Counter } from "./Counter.js";
import { Data } from "./+data";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log('mount')
    return ()=> {
      console.log('unmount')
    }
  }, [])

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
        
      </div>
    </>
  );
}
