import {GET_VIDEOGAMES,
    GET_ALLGENRES,
    GET_ALLPLATFORMS,
    GET_DETAILS,
    POST_VIDEOGAME,
    CLEAN_VIDEOGAMES,
    GET_NAME_VIDEOGAME,
    CLEAN_DETAIL,
    FILTER_GENRE,
    FILTER_CREATED,
    ORDER_NAME,
    ORDER_RATING} from '../actions/index';



const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    platforms: [],
    Detail: [],
    allDea:[]
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_VIDEOGAMES:
        return {
          ...state,
          videogames: action.payload,
          allVideogames: action.payload,
          
        };
  
      case CLEAN_VIDEOGAMES:
        return {
          ...state,
          videogames: action.payload,
        };
  
      case GET_ALLGENRES:
        return {
          ...state,
          genres: action.payload,
        };
      case GET_ALLPLATFORMS:
        return {
          ...state,
          platforms: action.payload,
        };
      case FILTER_CREATED:
        let copy = state.allVideogames;
        let createdFiltered;
        if (action.payload === "created") {
          createdFiltered = copy.filter((e) => e.createdInDb);
          createdFiltered.length === 0
            ? alert("videogame not created")
            : console.log("ok");
        } else if (action.payload === "api") {
          createdFiltered = copy.filter((e) => !e.createdInDb);
        } else {
          createdFiltered = copy;
        }
        return {
          ...state,
          videogames: createdFiltered //length === 0 ? copy : createdFiltered,
        };
      case FILTER_GENRE:
         state.videogames = state.allVideogames;
         let genresFiltered = action.payload === 'All' ?  state.allVideogames :  state.allVideogames.filter(el => el.genres.map(e => e).includes(action.payload)) 
         while(genresFiltered.length !== 0){
        return{
          ...state,
          videogames: genresFiltered
          
      }}
      alert("I don't know found the genre of videoGame")
      case ORDER_NAME:
        let copy3 = state.videogames;
        let sortedName =
          action.payload === "asc"
            ? copy3.sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
              })
            : copy3.sort((a, b) => {
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
              });
        return {
          ...state,
          videogames: sortedName,
        };
      case ORDER_RATING:
        let copy4 = state.videogames;
        let sortedRating =
          action.payload === "asc"
            ? copy4.sort((a, b) => a.rating - b.rating)
            : copy4.sort((a, b) => b.rating - a.rating);
        return {
          ...state,
          videogames: sortedRating,
        };
      case GET_NAME_VIDEOGAME:
        return {
          ...state,
          videogames: action.payload,
        };
      case GET_DETAILS:
        console.log("soy el reducer detail", action.payload)
        return {
          ...state,
          Detail: action.payload,
        };
      case CLEAN_DETAIL:
        return {
          ...state,
          allVideogames: action.payload,
        };
      case POST_VIDEOGAME:
        return {
          ...state,
        };
  
      default:
        return { ...state };
    }
  }




            export default rootReducer;