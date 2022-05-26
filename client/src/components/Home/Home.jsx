import React from "react";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterCreated, filterGenre, getVideogames, orderName, getAllGenres, orderRating} from "../../actions/index";
import Card from "../Card/card";
import './Home.css';
import '../Card/card.css'
import Paginacion from '../paginacion/paginacion';
import Search from "../Search/search";



export default function Home (){
    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)
    const genRes = useSelector((state) => state.genres)
   
    const [orden,setOrden]= useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [gamePerPage] = useState(15)
    const indexOfLastGame = currentPage * gamePerPage // 6
    const indexOfFirstGame = indexOfLastGame - gamePerPage // 0
    const currentGame = allVideogames.slice(indexOfFirstGame, indexOfLastGame )
    console.log(currentGame)
    const paginacion =(pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect (() =>{
        dispatch(getVideogames())
    },[dispatch])

    useEffect(() => {
        dispatch(getAllGenres());
      }, [dispatch]);

  
    function handleSort (e){
        e.preventDefault();
        dispatch(orderName(e.target.value))
        setCurrentPage(1);
        setOrden(`orden ${e.target.value}`);
    }
    function handleSort2 (e){
        e.preventDefault();
        dispatch(orderRating(e.target.value))
        setCurrentPage(1);
        setOrden(`ordenado ${e.target.value}`);
    }
  
    function handleFilterGenres(e){
        dispatch(filterGenre(e.target.value))
        setCurrentPage(1);
    }
    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

return (
    <div className="navcontainer">

  <Link to= '/create'>
      <button className="my_button">Create</button>
  </Link>
  <h1 className="titlehome"> APP VIDEOGAMES </h1>
    
    <div>
        <div className="search">
        <select onChange={e => handleSort(e)}>
           <option value= 'asc'> A to Z  </option>
           <option value= 'des'> Z to A </option>
           </select>
           
           <select onChange={e => handleSort2(e)}>
           <option value= 'asc'> For Low rating </option>
           <option value= 'des'> BY High rating </option>
           </select>
           <select onChange={e => handleFilterCreated(e)}>
            <option value= 'All'> All Videogames </option>
            <option value= 'api'> Existing </option>
            <option value= 'created'> Created  </option>
           </select>
             
             <select onChange={e => handleFilterGenres(e) }>
             <option value='All'>All</option>
             {genRes?.map(el => {
                 return(
                     <option key={el.id} value={el.name}>{el.name}</option>
                 )
             })}
             
            
             </select>
            
            

          

           <Search/>
           </div>
           {console.log(currentGame)}
        </div>
        <Paginacion 
        gamePerPage= {gamePerPage}
        allVideogames={allVideogames.length}
        paginacion={paginacion}/>
           
           <div className="container">
          {
          

          currentGame.length > 0  ?  currentGame.map((el , index) => {
                    return(
                        
                        <div className="cardContainer" key={index}>
                           <Link className="linkGames" to={`/detail/${el.id}`}>
                            <Card 
                            id={el.id}
                            name={el.name}
                            img={el.img}
                            genres={el.genres}
                       
                        rating={el.rating}/>
                         
                    </Link>
                       </div>    
                    
                    );

                }): <div><h1> LOADING.... </h1> </div>
                   

            
            }
                </div>

        </div>
        
    
    )}