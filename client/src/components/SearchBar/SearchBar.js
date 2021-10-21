import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { getAllDogs, getAllTemperament, getDogsForName } from "../../actions/actions";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(async () => {
        dispatch(getAllDogs())
        dispatch(getAllTemperament())
    }, [])


    const handleOnChange = (e) => {
        setInput(e.target.value);
    }

    const handleOnKeyUp = (e) => {
        if(e.keyCode === 13){
            dispatch(getDogsForName(input))
            setInput("");
            history.push("/home")
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