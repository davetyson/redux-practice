import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

const SecondComp = () => {

    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const increment = () => {
      dispatch(actions.increment());
    };
    const decrement = () => {
      dispatch(actions.decrement());
    };
    const addBy = () => {
      dispatch(actions.addBy(10));
    };

    console.log(counter);

    return (
        <section>
            <h2>This is the second component</h2>
            <h3>Count your way to learning Redux!</h3>
            <p>Let's see if we can get the counter to work here</p>
            <p className="count">{counter}</p>
            <div className="buttonsBox">
              <button onClick={increment}>+ 1</button>
              <button onClick={decrement}>- 1</button>
              <button onClick={addBy}>+ 10</button>
            </div>
        </section>
    );
};

export default SecondComp;