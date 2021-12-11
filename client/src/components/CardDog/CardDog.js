// Librerias externas
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Modulos internos
import { getDescription, addFavorites } from "../../actions/actions";

// Imagenes
import Vista from "../../assets/img/ver.png";
import VistaHover from "../../assets/img/verHover.png";
import Favorito from "../../assets/img/favorito.png";
import FavoritoHover from "../../assets/img/favoritoHover.png";

// Estilos
import s from "./CardDog.module.css"; // Modo normal
import n from "./CardDogNocturna.module.css"; // Modo oscuro

const CardDog = ({ id, nombre, pesoMax, pesoMin, temperamento, imagen, proviene, colorFondo, verVistaPrevia}) => {
    const [mouseEnterIconVer, setMouseEnterIconVer] = useState(false)
    const [mouseHover, setMouseHover] = useState(false);
    const [favorito, setFavorito] = useState(false);
    const { modeNocture } = useSelector(state => state);
    const temperamentoTemp = !temperamento ? ["N/A"] : temperamento.split(",") // Valido si no vienen datos aplico un N/A, de lo contrario spliteo el string que me llega
    const dispatch = useDispatch()


    const handleOnClick = () => {
        dispatch(addFavorites({
            id, nombre, pesoMax, pesoMin, temperamento, imagen, proviene, colorFondo
        }))
    }

    const handleOnMouse = () => {
        setMouseHover(!mouseHover)
    }

    // Icono de ver
    const handleOnMouseIconVerEnter = () => {
        setMouseEnterIconVer(true);
    }

    const handleOnMouseIconVerLeave = () => {
        setMouseEnterIconVer(false);
    }

    // Icono de favorito
    const handleOnMouseIconFavoritoEnter = () => {
        setFavorito(true);
    }

    const handleOnMouseIconFavoritoLeave = () => {
        setFavorito(false);
    }

    return(
        //Card container
        <div key={id} className={modeNocture ? `${n.CardDog}` : `${s.CardDog}`} onMouseEnter={handleOnMouse} onMouseLeave={handleOnMouse} style={colorFondo ? {backgroundColor: colorFondo, color: "white"} : {backgroundColor: "black", color: "white"}}>

            {/* Div con botones en la parte superios de la tarjetea */}
            <div className={s.Botones}>
                <div className={s.Boton__Fav}>
                    {
                        mouseHover && <button onClick={handleOnClick} onMouseEnter={handleOnMouseIconFavoritoEnter} onMouseLeave={handleOnMouseIconFavoritoLeave}>{favorito ? <img src={FavoritoHover}/> : <img src={Favorito}/>}</button>
                    }
                </div>
                <div className={s.Boton__VistaPrevia}>
                    <button onClick={() => verVistaPrevia(id)} onMouseEnter={handleOnMouseIconVerEnter} onMouseLeave={handleOnMouseIconVerLeave}>{mouseEnterIconVer ? <img src={VistaHover}/> : <img src={Vista}/> }</button>
                </div>
            </div>

            {/* Div con la imagen */}
            <div className={s.CardContainerImg} >
                <NavLink to={`/dog-description/${id}`} className={s.NavLinkContainer} >     
                    <img src={imagen} alt="Ingresa una Img..." onClick={() => dispatch(getDescription(id))}/>
                </NavLink>
            </div>
            
            {/* Div con nombre y temperamentos */}
            <div className={s.Container__Nombre__Temperamentos}>
                <div className={s.Nombre}>
                    <span>{nombre}</span>
                </div>
                <div className={s.Temperamentos}>
                    {temperamentoTemp?.map((temp, index) => {
                        if(index < 6){
                            return <div className={s.divTemperamento} key={index}><span>{temp}</span></div>
                        }
                    })}
                </div>
            </div>

            {/* Div con peso del Dog */}
            <div className={s.CardTextPeso}>
                <span className={s.TituloPeso}>Peso:</span>
                <span className={s.Text}>Min: {pesoMin} Kg</span>
                <span className={s.Text}>Max: {pesoMax} Kg</span>
            </div>
            
        </div>
    )
}

export default CardDog;