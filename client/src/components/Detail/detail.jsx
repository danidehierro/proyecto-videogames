import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";
import './detail.css'


export default function Detail(props){
  const dispatch = useDispatch();
  const id = props.match.params.id;
  var detail = useSelector((state) => state.Detail)
  console.log("soy detail estado")
  let detailOk = detail?.filter((e) => e !== null || undefined);
  console.log(detailOk)
  let Games  = detailOk?.filter((e) => e.id.toString() === id.toString());

  
  console.log(id)
  useEffect(() => {
    dispatch(getDetail(id));
  
  }, [dispatch, id]);
 

  console.log("soy el detalle",Games)
  return (
      <div className="detailContainer">
         {Games.length > 0 && Games[0].id == id? (
         <div className="detail">
             <img className="imgdetail" src={Games[0].img} alt= 'not found'/>
            <h1>{Games[0].name}</h1>
            <h2>{Games[0].platforms}</h2>
            <h2>{Games[0].genres.map(el => el.name? el.name: el).join(', ')}</h2>
            <h3>{Games[0].rating}</h3>
             <h5>{Games[0].description}</h5>
         <Link to= '/home'>
            <button className="btndet"> go Back</button>
        </Link>

      </div>): 
      <div>
             
            <img src="https://i.stack.imgur.com/hzk6C.gif" alt="#" width={"400vh"} height={"300vh"} />
            <Link to= '/home'>
            <button className="btndet"> go Back</button>
        </Link>
      
      </div> 
      } 
  </div>
  )
    }