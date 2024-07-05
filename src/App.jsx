import { useState } from "react";
import Parent from "./Parent";
import Card2 from "./Card2";
import AllDataContext from "./Context/AllDataContext";

function App() {
  return (
    <AllDataContext>
      <Card2 />
      <Parent />
    </AllDataContext>
  );
}

export default App;
