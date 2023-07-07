import { useDispatch, useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { increment, decrement, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button
          onClick={() => {dispatch(increment());}} >
          Increment
        </button>
        <button
          onClick={() => {dispatch(decrement());}} >
          Decrement
        </button>
        <button
          onClick={() => {dispatch(incrementBy(2));}} >
          Increment by 2
        </button>
      </div>
    </>
  );
}

export default App;
