import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { getAllDogs, getAllTemperament, getDogsForName } from "../../actions/actions";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getAllDogs())
        dispatch(getAllTemperament())
    }, [])


    const handleOnChange = (e) => {
        setInput(e.target.value)
        dispatch(getDogsForName(input))
        history.push("/home")
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }


    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input name="nombre" value={input} onChange={handleOnChange}  placeholder="Buscar por raza..." />
            </form>
        </div>
    )
}

export default SearchBar;