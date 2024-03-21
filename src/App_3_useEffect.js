import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("I run all the time");
  // #1
  // const iRunOnlyOnce = () => {
  //   console.log("I run only one.");
  // };
  // useEffect(iRunOnlyOnce, [])

  // #2 익명함수로
  useEffect(() => {
    console.log("I run only one.");
  }, []);

  useEffect(() => {
    if(keyword !=="" && keyword.length > 5){
      console.log("Search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      />
      <h1> {counter} </h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
