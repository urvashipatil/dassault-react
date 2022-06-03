import React, { useEffect, useState } from "react";
import axios from "axios";
import useDebounce from "../components/custom-hooks/use-debounce";

const useAsyncError = () => {
  const [_, setError] = React.useState();
  return React.useCallback(
    (e) => {
      setError(() => {
        throw e;
      });
    },
    [setError]
  );
};

export default function Search(props) {
  const [state, setState] = useState("");
  let debounceValue = useDebounce(state, 1000);
  const throwError = useAsyncError();

  // useEffect(() => {
  //   // throw new Error("Some error");
  //   fetch("http://some-site.wtf/rest11")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((e) => {
  //       console.log("Error");
  //       // throw new Error("Asynchronous error");
  //       throwError("Asynchronous error");
  //     });
  // }, []);

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
  // let dummyVar = null;

  return (
    <div>
      <input type="text" value={state} onChange={onHandleChange} />
      {/* {dummyVar.trim() && <h3>Show dummyVar </h3>} */}
    </div>
  );
}
