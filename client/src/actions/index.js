import axios from 'axios';

export const GET_VIDEOGAMES = "getvideogames";
export const GET_ALLGENRES =  "getallgenres";
export const GET_ALLPLATFORMS = "getallplatforms";
export const GET_DETAILS = "getdetail";
export const POST_VIDEOGAME = "postvideogames";
export const GET_NAME_VIDEOGAME = "getnamevideogame";
export const CLEAN_DETAIL = "cleandetail";
export const FILTER_GENRE = "filtergenre";
export const FILTER_CREATED = "filtercreated";
export const ORDER_NAME = "ordername";
export const ORDER_RATING = "orderrating"
export const CLEAN_VIDEOGAMES = "cleanvideogames"

export function getVideogames(){
    return async function(dispatch){
      try {
        const res = await axios.get('http://localhost:3001/videogames')
        return dispatch({
            type: GET_VIDEOGAMES,
            payload:res.data
        });
      } catch (error) {
          console.log(error)
      } 
     };
};
export function cleanVideogames(dispatch){
    return dispatch({
        type: CLEAN_VIDEOGAMES,
        payload:[],
    }

    )
}

export function getAllGenres(){
    return async function(dispatch){
    try {
        var json = await axios.get("http://localhost:3001/genres");
        return dispatch({
            type: GET_ALLGENRES,
            payload: json.data
        });           
   } catch (error) {
       console.log(error)
   }
    }}
    export function getAllPlatforms(){
        return async (dispatch) => {
          try {
            let json = await axios.get("http://localhost:3001/platforms");
            return dispatch({
              type: GET_ALLPLATFORMS,
              payload: json.data,
            });
          } catch (error) {
            console.log(error);
          }
        };
      };

      export function postVideogame(payload){
        return async () => {
          try {
            var createVideogame = await axios.post(
              "http://localhost:3001/videogames",
              payload
            );
            alert("New videogame is created!");
            return createVideogame;
          } catch (e) {
            alert("Videogame name already exist");
            console.log(e);
          }
        };
      }; 


export function filterGenre(payload){
    console.log("soy la accion",payload)
    return {
        type: FILTER_GENRE,
        payload
    }
}
export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function orderName(payload){
    return{
        type: ORDER_NAME,
        payload
    }
}
export function orderRating(payload){
    return{
        type:ORDER_RATING,
        payload
    }
}

export function getNameVideogame(name){
    return async function (dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            console.log(json.data)
            if(json.data === "error")throw Error
            return dispatch({
                type: GET_NAME_VIDEOGAME,
                payload: json.data
            })
        } catch (error){
            alert("Videogame not found");
            window.location.href = "http://localhost:3000/home";
            console.log(error)
            
        }
    }
}

export function getDetail(id){
    return async function (dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/videogames/${id}`);
            console.log("soy el det de accion",json.data)
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
                
            })
            
            } catch (error) {
            console.log(error)
            
        }
    }
}
export const cleanDetail = (dispatch) => {
    return dispatch({
      type: CLEAN_DETAIL,
      payload: [],
    });
  };