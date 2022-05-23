import React from "react";
import './card.css';


export default function Card({name,img}){

        return (
            <div>
                <h3>{name}</h3>
                <img src={img} alt="img not found" width='200px' height='250px' />

            </div>



        )




}