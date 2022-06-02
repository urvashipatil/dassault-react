import { useEffect, useState } from "react";

export default function useTitle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count}`;
  }, [count]);

  return [setCount];
}
