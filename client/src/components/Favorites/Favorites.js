import React from "react";
import { useSelector } from "react-redux";
import CardDog from "../CardDog/CardDog";
import s from "./Favorites.module.css"

const Favorites = () => {
    const favoritesDogs = useSelector(state => state.favoritesDogs)

    return(
        <div className={s.Favorites}>
            {
                favoritesDogs?.map(favorite => <CardDog {...favorite}/>)
            }
        </div>
    )
}


export default Favorites;