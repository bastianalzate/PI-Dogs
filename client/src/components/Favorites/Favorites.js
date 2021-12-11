// Modulos externos
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// Componente
import CardFavoritos from "../CardFavoritos/CardFavoritos";

// Estilos
import s from "./Favorites.module.css";
import n from "./FavoritesNocturne.module.css";

const Favorites = () => {
    const { modeNocturne } = useSelector(state => state);
    const favoritesDogs = useSelector(state => state.favoritesDogs)


    return(
        <div className={modeNocturne ? `${n.Favorites}` : `${s.Favorites}`}>
            {/* Logica para ver si muesto las cards, en caso que hayan en el array de favitesDogs, y en caso contrario mostrar un mensaje */}
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
                // Si no hay dogs muestro esto!
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