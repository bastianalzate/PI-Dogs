import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getAllDogs, getDogsForName } from "../../actions/actions";
import axios from "axios";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(getAllDogs())
        
    }, [])


    const handleOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleOnKeyUp = (e) => {
        if(e.keyCode === 13){
            dispatch(getDogsForName(input))
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