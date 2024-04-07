import {Link, NavLink} from "react-router-dom";

function Menu() {
    const active = ({isActive}) => isActive ? 'menu__item menu__item-active' : 'menu__item';

    return (
        <nav className="menu">
            <NavLink className={active} to="/">Главная</NavLink>
            <NavLink className={active} to="/drift">Дрифт-такси</NavLink>
            <NavLink className={active} to="/timeattack">Time Attack</NavLink>
            <NavLink className={active} to="/forza">Forza Karting</NavLink>
        </nav>
    );
}

export default Menu;