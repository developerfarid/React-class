import React from "react";
import UseAuth from "./Hooks/UseAuth";
import Card from "./Card";
import Card2 from "./Card2";
import Child from "./Child";

export default function Parent() {
  const { data } = UseAuth();
  console.log(data.length);
  return (
    <>
      <h1>Hello</h1>
      <Child />
      <Card2 />
      {data.map((item) => (
        <Card item={item} />
      ))}
    </>
  );
}
