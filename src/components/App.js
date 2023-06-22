
import React, {useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {

  const [sum, setSum] = useState(0)
  const [number, setNumber] = useState(0)

  useEffect(()=>{
    setSum(Number(sum)+Number(number))
  },[number])

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input onChange={e=>setNumber(e.target.value)} type="number" />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
