import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogame } from "../../actions";

export default function Search(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameVideogame(name));
    }
    return (
        <div>
            <input
            type='text'
            placeholder="Search videoGame..."
            onChange={(e) => handleInputChange(e)}/>

            <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>


        </div>


    )
}