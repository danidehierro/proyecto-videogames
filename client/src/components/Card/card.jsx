import React from "react";
import './card.css';


export default function Card({name,img,genres,rating}){

        return (
            <div className="Card">
                <h4 className="cardTitle">{name}</h4>
                <img src={img} alt="img not found" className="image" />
                <h5 className="generos2">{genres.map(el => el.name? el.name : el).join(', ')}</h5>
                <h5 className="generos"> {rating}</h5>
            </div>



        ) 




}