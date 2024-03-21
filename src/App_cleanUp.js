import { useState, useEffect } from "react";

// #1
// function Hello() {
//   useEffect(() => {
//     console.log("created :) ");
//     return () => console.log("destroyed :(");
//   }, []);

//   return <h1>Hello</h1>;
// }

// #2
// function Hello() {
//   function byFn() {
//     console.log("destroyed :(");
//   }

//   function hiFn() {
//     console.log("create :)");
//     return byFn;
//   }
//   useEffect(hiFn, []);

//   return <h1>Hello</h1>;
//   }

// #3 Hello함수 사라질때 작동할 수 있도록 하기 위해 서는 return 으로 원하는 것을 작성
function Hello() {
  // # 더 많이 사용
  useEffect(() => {
    console.log("hi :) ");
    return () => console.log("bye :(");
  }, []);

  // 비추
  
// useEffect(function () {
//     console.log("hi :) ");

//     return function () {
//       console.log("bye :(");
//     };
//   }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
