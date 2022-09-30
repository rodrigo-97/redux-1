import { Average } from "./Components/Average"
import { Interval } from "./Components/Interval"
import { Sort } from "./Components/Sort"
import { Sum } from "./Components/Sum"

function App() {
  return (
    <div className="App">
      <div className="row">
        <Interval />
      </div>

      <div className="row">
        <Average />
        <Sum />
        <Sort />
      </div>
    </div>
  )
}

export default App
