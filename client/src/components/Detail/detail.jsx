import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, cleanDetail, cleanVideogames } from "../../actions";
import { useEffect } from "react";
import './detail.css'


export default function Detail(props){
  const dispatch = useDispatch();
  const id = props.match.params.id;
  var detail = useSelector((state) => state.Detail)
  let detailOk = detail.filter((e) => e !== null);
  let Games  = detailOk.filter((e) => e.id.toString() === id.toString());

  
  console.log(id)
  useEffect(() => {
    dispatch(getDetail(id));
  
  }, [dispatch, id]);
 /*  useEffect(() => {
    return ()  => {
      dispatch (cleanDetail(dispatch),cleanDetail(dispatch))}
  }, []);
  */

  console.log("soy el detalle",Games)
  return (
      <div className="detailContainer">
         {Games.length > 0 && Games[0].id == id? (
         <div className="detail">
             <img className="imgdetail" src={Games[0].img} alt= 'not found'/>
            <h1>{Games[0].name}</h1>
            <h2>{Games[0].genres.map(el => el.name? el.name: el).join(', ')}</h2>
            <h3>{Games[0].rating}</h3>
             <h5>{Games[0].description}</h5>
         <Link to= '/home'>
            <button className="button"> go Back</button>
        </Link>

      </div>): 
      <div>
            <p className="loading"></p> 
           <img src="https://cdna.artstation.com/p/assets/images/images/004/246/414/original/danielle-iannarelli-loadinganimation.gif?1481688075" alt="#"/>
            <Link to= '/home'>
            <button className="button"> go Back</button>
        </Link>
      
      </div> 
      } 
  </div>
  )
    }