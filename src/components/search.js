import React, { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../components/custom-hooks/use-debounce";

export default function Search() {
  const [state, setState] = useState("");
  let debounceValue = useDebounce(state, 1000);

  useEffect(() => {
    //api call
    async function fetchSugestions() {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      console.log("axios response");
    }
    fetchSugestions();
  }, [debounceValue]);

  const onHandleChange = async (e) => {
    setState(e.target.value);
    // //api
    // let response = await axios.get(
    //   "https://jsonplaceholder.typicode.com/posts?_limit=10"
    // );
    // console.log("axios response");
  };
  return (
    <div>
      <input type="text" value={state} onChange={onHandleChange} />
    </div>
  );
}
