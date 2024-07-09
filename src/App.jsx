import { useState } from "react";
import Parent from "./Parent";
import Card2 from "./Card2";
import AllDataContext from "./Context/AllDataContext";
import From from "./From";

function App() {
  return (
    <AllDataContext>
      <From />
      <Card2 />
      <Parent />
    </AllDataContext>
  );
}

export default App;
