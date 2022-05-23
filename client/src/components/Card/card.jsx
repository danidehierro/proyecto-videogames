import React from "react";
import './card.css';


export default function Card({name,img,genres}){

        return (
            <div className="Card">
                <h4 className="cardTitle">{name}</h4>
                <img src={img} alt="img not found" className="image" />
                <h5 className="generos">{genres.map(el => el).join(', ')}</h5>
            </div>



        )




}