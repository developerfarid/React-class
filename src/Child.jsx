import React from "react";
import UseAuth from "./Hooks/UseAuth";

export default function Child() {
  const { data } = UseAuth();
  console.log(data.length);
  return <div>Child: {data.length}</div>;
}
