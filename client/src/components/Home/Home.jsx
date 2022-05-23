import React from "react";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterCreated, filterGenre, getVideogames, orderName } from "../../actions/index";
import Card from "../Card/card";
import './Home.css'




export default function Home (){
    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)
    
   
    const [orden,setOrden]= useState('')
    const [currentPage, setCurrentPage] = useState(1)
    //const [pokemonsPerPage] = useState(6)
    //const indexOfLastPokemon = currentPage * pokemonsPerPage // 6
    //const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage // 0
    
    
    const pagin =(pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (() =>{
        dispatch(getVideogames())
    },[dispatch])

  
    function handleSort (e){
        e.preventDefault();
        dispatch(orderName(e.target.value))
        setCurrentPage(1);
        setOrden(`orden ${e.target.value}`);
    }
    function handleSort2 (e){
        e.preventDefault();
        dispatch(filterGenre(e.target.value))
        setCurrentPage(1);
        setOrden(`ordenado ${e.target.value}`);
    }
  
    /* function handleFilterTypes(e){
        console.log(filterPokemonsByTypes(e.target.value))
        dispatch(filterPokemonsByTypes(e.target.value))
        setCurrentPage(1);
    } */
    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

return (
    <div className="navcontainer">

  <Link to= '/pokemons'>
      <button className="my_button">Crear Videogame</button>
  </Link>
  <h1 className="titlehome"> APP VIDEOGAMES </h1>
    
    <div>
        <div className="search">
        <select onChange={e => handleSort(e)}>
           <option value= 'asc'> A to Z  </option>
           <option value= 'des'> Z to A </option>
           </select>
           <select onChange={e => handleSort2(e)}>
           <option value= 'low'> For Low Attack </option>
           <option value= 'high'> BY High Attack </option>
           </select>
           <select onChange={e => handleFilterCreated(e)}>
            <option value= 'All'> All Videogames </option>
            <option value= 'api'> Existing </option>
            <option value= 'created'> Created  </option>
           </select>

           </div>

        </div>
          {
                allVideogames?.map((el , index) => {
                    return(
                        <div className="cardContainer" key={index}>
                            <Card name={el.name}
                            img={el.img}/>
                    
                    </div>        
                    
                    )

                })
                   

            
            }


        </div>
        
    
    )}