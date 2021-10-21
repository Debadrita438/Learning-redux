import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const toggleCounter = useSelector(state => state.showCounter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const increaseHandler = () => {
        dispatch({
            type: 'INCREASE',
            payload: 10
        })
    }

    const decrementHandler = () => {
        dispatch({ type: 'DECREMENT' })
    }
    const toggleCounterHandler = () => {
        dispatch({ type: 'TOGGLE' })
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {toggleCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase By 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
