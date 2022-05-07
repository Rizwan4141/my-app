import React, { useEffect, useState } from "react";
import axios from "axios";

const LifecysleFunct = () => {
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);

  const getdata = async () => {
    const apidata = await axios.get("https://fakestoreapi.com/products");
    console.log("====>", apidata);
  };

  const handle = () => {
    setcount1(count1 + 1);
    getdata();
  };

  useEffect(() => {
    setcount(count + 1);
    return(setcount1(0))
    // getdata();
  }, [count1]);

  return (
    <div>
      <button onClick={handle}>update</button>
      <h1>"This is component did mount="{count}</h1>
      <h1>"This is component did update="{count1}</h1>
    </div>
  );
};

export default LifecysleFunct;
