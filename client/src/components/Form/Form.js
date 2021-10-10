import React from "react";
import s from "./Form.module.css";

const Form = () => {
    return(
        <div className={s.Form}>   
            <div className={s.Form__Formulario}>
                <form>
                    <div id={s.Titulo}>
                        <h2>Crear Dog</h2>
                    </div>
                    <div id={s.Raza}>
                        <input type="text" placeholder="Nombre..."/>
                    </div>
                    <div id={s.Altura}>
                        <div>
                            <input type="number" placeholder="Altura Maxima..."/>
                        </div>
                        <div>
                            <input type="number" placeholder="Altura Minima..."/>
                        </div>
                    </div>
                    <div id={s.Peso}>
                        <div>
                            <input type="number" placeholder="Peso Maximo..."/>
                        </div>
                        <div>
                            <input type="number" placeholder="Peso Minimo..."/>
                        </div>
                    </div>
                    <div id={s.Edad}>
                        <input type="number" placeholder="Edad..."/>
                    </div>
                    <div id={s.Select}>
                        <select>
                            <option>Ninguno</option>
                            <option>Opcion 1</option>
                            <option>Opcion 2</option>
                            <option>Opcion 3</option>
                        </select>
                    </div>
                    <div id={s.Submit}>
                        <button type="submit">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;