import Counter from "./Counter"
import './index.css'

function App() {

  return (
    <>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </>
  );
}

export default App;