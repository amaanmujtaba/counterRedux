import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => {};


  function inc(){
    dispatch({type: "inc"});
  }

  function dec(){
    dispatch({type: "dec"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={inc}> Increment </button>
        <button onClick={dec}> Decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
