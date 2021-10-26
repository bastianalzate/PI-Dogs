import React from "react";
import { useSelector } from "react-redux";
import CardFavoritos from "../CardFavoritos/CardFavoritos";
import s from "./Favorites.module.css"

const Favorites = () => {
    const favoritesDogs = useSelector(state => state.favoritesDogs)

    return(
        <div className={s.Favorites}>
            {
                favoritesDogs?.map(favorite => <CardFavoritos {...favorite}/>)
            }
        </div>
    )
}


export default Favorites;