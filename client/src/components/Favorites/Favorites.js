import React from "react";
import { useSelector } from "react-redux";
import CardFavoritos from "../CardFavoritos/CardFavoritos";
import s from "./Favorites.module.css";
import n from "./FavoritesNocturne.module.css";

const Favorites = () => {
    const { modeNocturne } = useSelector(state => state);
    const favoritesDogs = useSelector(state => state.favoritesDogs)

    return(
        <div className={modeNocturne ? `${n.Favorites}` : `${s.Favorites}`}>
            {
                favoritesDogs?.map(favorite => <CardFavoritos {...favorite}/>)
            }
        </div>
    )
}


export default Favorites;