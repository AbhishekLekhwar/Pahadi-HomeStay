import { useState } from "react";
import ToDo from "./ToDo2";
import Nav from "./Nav";

function App() {
  return (
    <div className="bg-rose-300">
      <Nav />
      <ToDo />
    </div>
  );
}

export default App;
