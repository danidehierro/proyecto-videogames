import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail, cleanVideogames } from "../../actions";
import { useEffect } from "react";
import './detail.css'


export default function Detail(props){
  const dispatch = useDispatch();
  var detail = useSelector((state) => state.videogameDetail)
  const Games = detail.filter((e) => e !== null);
  const id = props.match.params.id;
  console.log(id)
  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
     dispatch(cleanDetail(dispatch), cleanVideogames(dispatch));
    };
  }, [dispatch, id]);
 

  console.log("soy el detalle",Games)
  return (
      <div className="detailContainer">
         {Games.length > 0 ?
         <div className="detail">
             <img className="imgdetail" src={Games[0].img} alt= 'not found'/>
            <h1>{Games[0].name}</h1>
            <h2>{Games[0].genres.map(el => el).join(', ')}</h2>
            <h3>{Games[0].rating}</h3>
             <h5>{Games[0].description}</h5>
         </div>: <p className="loading">... Loading</p>
        }
        <Link to= '/home'>
            <button className="button"> go Back</button>
        </Link>


      </div>

  )
}