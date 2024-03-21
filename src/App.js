import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((current) => current + 1);
  console.log("I run all the time");
  // #1
  // const iRunOnlyOnce = () => {
  //   console.log("I run only one.");
  // };
  // useEffect(iRunOnlyOnce, [])

  // #2 익명함수로
  useEffect(()=>{
    console.log("I run only one.");
  },[]);
  return (
    <div>
        <input type="text" placeholder="Search here"></input>
        <h1> {counter} </h1>
        <button onClick={onClick}>click me</button>
     
    </div>
       
  );
}

export default App;
