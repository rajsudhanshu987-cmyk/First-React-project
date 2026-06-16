import Stopwatch from "./stopwatch/stopwatch";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <Stopwatch></Stopwatch>
    </div>
  )
}

export default App;
