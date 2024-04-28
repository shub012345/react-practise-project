import { useState } from "react"


const Home = () => {

  const [state, setState]  = useState(0);

  const handleClick =(()=>{
    setState(state+1)
  })
  return (
    <div>
   {state}
      <button onClick={handleClick}> Click me</button>
    </div>
  )
}

export default Home