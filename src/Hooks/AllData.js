import { useState, useEffect } from "react";

export default function AllData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((dt) => setData(dt));
  }, []);
  return {
    data,
  };
}
