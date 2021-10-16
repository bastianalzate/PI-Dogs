import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getDogs } from "../../actions/actions";
import axios from "axios";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(async () => {
        const respuesta = await axios.get("http://localhost:3001/dogs")
        dispatch({type: "CARGA_INICIAL", payload: respuesta.data.data})
    }, [])


    const handleOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleOnKeyUp = async (e) => {
        if(e.keyCode === 13){
            dispatch(getDogs(input))
        }
        
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        
       
    }

   

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input name="nombre" value={input} onChange={handleOnChange} onKeyUp={handleOnKeyUp} placeholder="Buscar por raza..." />
            </form>
        </div>
    )
}

export default SearchBar;