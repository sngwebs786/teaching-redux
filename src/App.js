import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { DecNum, IncNum } from './store/action';


function App() {

  const myNum = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch()

  
  return (
    <div className="App">
      <button onClick={() => dispatch(IncNum(6))}>+</button> {myNum}{" "}
      <button onClick={() => dispatch(DecNum())}>-</button>
    </div>
  );
}

export default App;
