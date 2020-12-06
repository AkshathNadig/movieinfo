import { SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOV,LOADING } from "../actions/types";
import axios from 'axios'
import APIKey from '../components/APIKey'

export const searchMovie = text => dispatch =>{
    dispatch({
        type:SEARCH_MOVIE,
        payload:text
    })
}


export const fetchMovie = text => dispatch =>{
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey.APIKey}&s=${text}`)
       // console.log(`http://www.omdbapi.com/?apikey={APIKey}&s=${text}`)
          .then(response => 
                dispatch({
                    type:FETCH_MOVIES,
                    payload:response.data   
          }))
          .catch (error =>console.log(error))
}

export const fetchMov = id => dispatch =>{
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey.APIKey}&i=${id}`)
       // console.log(`http://www.omdbapi.com/?apikey={APIKey}&s=${text}`)
          .then(response => 
                dispatch({
                    type:FETCH_MOV,
                    payload:response.data 
          }))
          .catch (error =>console.log(error))
}

export const setLoading =() =>{
    return{
        type:LOADING
    }
}