import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>This is the Header</h1>
            <NavLink to="/">Home page</NavLink>
            <NavLink to="/secondcomponent">Counter Game</NavLink>
        </header>
    );
};

export default Header;