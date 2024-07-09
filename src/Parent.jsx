import React from "react";
import UseAuth from "./Hooks/UseAuth";
import Card from "./Card";
import Card2 from "./Card2";
import Child from "./Child";

export default function Parent() {
  const { data, local } = UseAuth();
  console.log(data);
  return (
    <>
      <h1>Hello</h1>
      <Child />
      <Card2 />
      {local.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  );
}
