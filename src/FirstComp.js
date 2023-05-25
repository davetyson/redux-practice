import { useSelector, useDispatch } from "react-redux";
import { logInActions } from "./store";

const FirstComp = () => {

    const loggedIn = useSelector((state) => state.loggedIn);
    const dispatch = useDispatch();

    const changeLogInStatus = () => {
      dispatch(logInActions.changeLogInStatus(loggedIn));
    };

    return (
        <section>
            <h2>Welcome to the Home Page</h2>
            <p>Please click the button below to log in</p>
            <button onClick={changeLogInStatus}>Log In</button>
            <p>{loggedIn === true ? `You are logged in!` : `You are not logged in!`}</p>
            <p>{loggedIn}</p>
        </section>
    );
};

export default FirstComp;