import React from "react";
import UseAuth from "./Hooks/UseAuth";

export default function Card2() {
  const { data } = UseAuth();
  console.log(data.length);
  return <div>Card2: {data.length}</div>;
}
