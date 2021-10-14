import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/dog.png";
import SearchBar from "../SearchBar/SearchBar";
import s from "./Navbar.module.css";

const Navbar = () => {
    return(
        <div className={s.Navbar}>
            <div className={s.Navbar__Logo}>
                <NavLink to="/home">
                    <img src={Logo}/>
                </NavLink>
            </div>
            <div className={s.Navbar__Lista}>
                <ul>
                    <NavLink to="/home" activeClassName={s.Active}>
                        <li>
                            <span>INICIO</span>
                        </li>
                    </NavLink>
                    <NavLink to="/crear-dog" activeClassName={s.Active}>
                        <li>
                            <span>CREAR DOG</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div className={s.Navbar__Buscador}>
                <SearchBar /> 
            </div>
        </div>
    )
}


export default Navbar;