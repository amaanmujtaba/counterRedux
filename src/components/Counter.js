import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";

import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);


  const toggleCounterHandler = () => {
    
    dispatch( counterActions.toggle());
  };


  function inc(){
    if(show){
    dispatch(counterActions.inc());
    }
  }

  function increaseBy(){
    if(show){
    dispatch(counterActions.increase(10));
    }
  }

  function dec(){
    if(show){
    dispatch(counterActions.dec());
    }
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={inc}> Increment </button>
        <button onClick ={increaseBy}> Increase by 5</button>
        <button onClick={dec}> Decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
