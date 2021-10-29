import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cambiarModo } from "../../actions/actions";
import Logo from "../../assets/img/dog.png";
import BuscarWhite from "../../assets/img/buscarWhite.png";
import BuscarBlack from "../../assets/img/buscar.png";
import SearchBar from "../SearchBar/SearchBar";
import BombillaDia from "../../assets/img/bombilla.png";
import BombillaNoche from "../../assets/img/bombillaOscura.png";
import s from "./Navbar.module.css";
import n from "./NavbarNocturne.module.css";

const Navbar = () => {
    const { modeNocturne } = useSelector(state => state);
    const dispatch = useDispatch();

    return(
        <div className={modeNocturne ? `${n.NavbarContainer}` : `${s.NavbarContainer}`}>
            <div className={modeNocturne ? `${n.Navbar}`: `${s.Navbar}`} >
            <div className={s.Navbar__Logo}>
                <NavLink to="/">
                    <img src={Logo}/>
                </NavLink>
            </div>

            <div className={s.Navbar__Buscador}>
                <img src={modeNocturne ? BuscarWhite : BuscarBlack}/>
                <SearchBar /> 
            </div>

            <div className={modeNocturne ? `${n.Navbar__Lista}`: `${s.Navbar__Lista}`}>
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
                    <NavLink to="/favoritos" activeClassName={s.Active}>
                        <li>
                            <span>FAVORITOS</span>
                        </li>
                    </NavLink>
                    <li>
                        <div className={s.Boton__Cambio__Modo} onClick={() => dispatch(cambiarModo())}>
                            {modeNocturne ? <img src={BombillaNoche}/> : <img src={BombillaDia}/>}
                            {/* <button onClick={() => dispatch(cambiarModo())}>{modeNocturne ? <img src={BombillaNoche}/> : <img src={BombillaDia}/>}</button> */}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}


export default Navbar;