import { useSelector, useDispatch } from "react-redux";
// import Articles from "./containers/Articles";

const App = () => {
  // Access data from the store reducer using useSelector
  const data = useSelector((state) => state.counter);

  // Change data in the reducer using useDispatch
  const dispatchCounter = useDispatch();

  return (
    <div>
      <div>
        <h3>Counter:</h3>
        <h2>{data}</h2>
        <button onClick={() => dispatchCounter({ type: "INCERMENT" })}>
          increase
        </button>
        <button onClick={() => dispatchCounter({ type: "DECERMENT" })}>
          Decrease
        </button>
        <button onClick={() => dispatchCounter({ type: "RESET" })}>
          RESET
        </button>
      </div>
      <div>{/* <Articles /> */}</div>
    </div>
  );
};

export default App;
