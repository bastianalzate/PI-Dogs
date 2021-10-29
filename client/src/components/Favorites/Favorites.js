import React from "react";
import { useSelector } from "react-redux";
import CardFavoritos from "../CardFavoritos/CardFavoritos";
import NoDogs from "../../assets/img/walpaper15.jpg";
import s from "./Favorites.module.css";
import n from "./FavoritesNocturne.module.css";
import { NavLink } from "react-router-dom";

const Favorites = () => {
    const { modeNocturne } = useSelector(state => state);
    const favoritesDogs = useSelector(state => state.favoritesDogs)

    console.log(favoritesDogs)

    return(
        <div className={modeNocturne ? `${n.Favorites}` : `${s.Favorites}`}>
            {
                favoritesDogs.length > 0 ?  favoritesDogs.map(favorite => <CardFavoritos {...favorite}/>)
                : modeNocturne ? 
                <div className={n.AvisoModoNocturne}>
                    <h2>Agrega un dog a favoritos desde el Home!</h2>
                    <div>
                        <NavLink to="/home">
                            <button>Home</button>
                        </NavLink>
                    </div>
                </div>
                : <div className={s.AvisoModoDia}>
                    <h2>Agrega un dog a favoritos desde el Home!</h2>
                    <div>
                        <NavLink to="/home">
                            <button>Home</button>
                        </NavLink>
                    </div>
                </div>
            }
        </div>
    )
}


export default Favorites;