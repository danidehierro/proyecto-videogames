import React from 'react';
import './paginacion.css'

export default function Paginacion({gamePerPage, allVideogames,paginacion}){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allVideogames/gamePerPage); i++){
        pageNumbers.push(i);
    }


    return (
        <nav>
                <ul className='pagin'>
                        {pageNumbers && pageNumbers.map(number =>(
                            <li className='number' key={number}>
                            <button className='number' onClick={() => paginacion(number)}> {number}
                            </button>
                            </li>
                        ))}



                </ul>






        </nav>
        
    )

}