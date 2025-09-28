import { useContext } from "react";
import ButtonGroup from "./components/buttongroup"
import { counterContext } from "./context/contextProvider";


function App() {
  const Context = useContext(counterContext);

  return (
    <>
      <h1>{Context?.count}</h1>
      <ButtonGroup Increase={Context?.Increase} Decrease={Context?.Decrease}></ButtonGroup>
    </>
  )
}



export default App