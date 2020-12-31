import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";

function App() {
  return (
    <>
      <Heading name="Shweta" />
      <Para />
      <List /> <Heading name="Manuuu" age={25} />
    </>
  );
}

export default App;
