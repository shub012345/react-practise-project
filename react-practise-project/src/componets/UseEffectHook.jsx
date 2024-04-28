import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [state, setState] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setState(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {state.map((data) => (
        <>
          <h5 key={data.id} >{data.title}</h5
          >
          <div key={data.id}>{data.body}</div>
        </>
      ))}
      <div>UseEffectHook</div>
    </>
  );
};

export default UseEffectHook;
