import { useState, useEffect } from "react";

export default function AllData() {
  const [data, setData] = useState([]);
  const [local, setLocal] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((dt) => setData(dt));

  }, []);

  useEffect(()=>{
localStorage.setItem("postData", JSON.stringify(data))
  },[data])

  useEffect(()=>{
    setLocal(JSON.parse(localStorage.getItem("postData")))
      },[data])
console.log(local, "local");

  return {
    data, local
  };
}
