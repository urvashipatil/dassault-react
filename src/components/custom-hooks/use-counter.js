import { useState } from "react";

export default function useCounter({ initialCount = 0, step = 1 }) {
  const [counter, setCounter] = useState(initialCount);
  function increment() {
    setCounter(counter + step);
  }

  function decrement() {
    setCounter(counter - step);
  }

  return [counter, increment, decrement];
}

// const Counter = () => {
//   const [counter, increment,decrement] = useCounter({initialCount=5, step=5});

//   return (
//     <div className="counter">
//       <h1>{counter}</h1>
//       <div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => {
//             setInput(e.target.value);
//           }}
//         />
//         <button onClick={increment}>+</button>
//         <button onClick={decrement}>-</button>
//         <p>Widnow Width is {windowWidth}</p>
//       </div>
//     </div>
//   );
// };

// export default Counter;
