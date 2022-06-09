import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogame } from "../../actions";
import "./search.css"

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
            className="search2"
            type='text'
            placeholder="Search videoGame..."
            onChange={(e) => handleInputChange(e)}/>

            <button className="btnserch" type='submit' onClick={(e) => handleSubmit(e)}>Search</button>


        </div>


    )
}